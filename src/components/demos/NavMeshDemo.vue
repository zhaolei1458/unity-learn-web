<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { createScene } from '../../three/scene'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

const status = ref('就绪：点地面任意位置，小红球会绕开蓝色柱子找路过去')

let ctx, raf
let ball, startMarker, targetMarker, pathLine, pathGeo, groundMesh
let walkable = []
let waypoints = []
let moving = false
let startCell = null

const GRID_N = 16          // 把 8×8 地面切成 16×16 的格子
const CELL = 8 / GRID_N    // 每格 0.5 单位
const BALL_SPEED = 3.5

// 蓝色障碍柱（x,z 中心点 + 占地宽深）
const obstacleDefs = [
  { x: 0.5, z: 0.5, w: 1.4, d: 1.4 },
  { x: -1.5, z: 1.5, w: 1.6, d: 0.6 },
  { x: 1.8, z: -1.2, w: 0.6, d: 1.6 },
  { x: -0.8, z: -1.8, w: 1.6, d: 1.6 },
  { x: 2.4, z: 2.2, w: 1.2, d: 1.2 },
]

function worldToCell(x, z) {
  const cx = Math.floor((x + 4) / CELL)
  const cz = Math.floor((z + 4) / CELL)
  return {
    x: Math.min(Math.max(cx, 0), GRID_N - 1),
    z: Math.min(Math.max(cz, 0), GRID_N - 1),
  }
}
function cellToWorld(cx, cz) {
  return { x: (cx + 0.5) * CELL - 4, z: (cz + 0.5) * CELL - 4 }
}
function heuristic(ax, az, bx, bz) {
  return Math.abs(ax - bx) + Math.abs(az - bz)
}

// 用障碍柱占据的格子，标成不可走
function buildGrid() {
  walkable = []
  for (let x = 0; x < GRID_N; x++) {
    walkable[x] = []
    for (let z = 0; z < GRID_N; z++) walkable[x][z] = true
  }
  for (const b of obstacleDefs) {
    for (let x = 0; x < GRID_N; x++) {
      for (let z = 0; z < GRID_N; z++) {
        const c = cellToWorld(x, z)
        if (Math.abs(c.x - b.x) < b.w / 2 && Math.abs(c.z - b.z) < b.d / 2) walkable[x][z] = false
      }
    }
  }
}

// A*：四方向寻路，曼哈顿距离做启发式
function findPath(sx, sz, tx, tz) {
  const key = (x, z) => x + ',' + z
  const open = []
  const came = new Map()
  const g = new Map()
  const f = new Map()
  const startKey = key(sx, sz)
  const goalKey = key(tx, tz)
  open.push([sx, sz])
  g.set(startKey, 0)
  f.set(startKey, heuristic(sx, sz, tx, tz))
  while (open.length) {
    let bi = 0
    for (let i = 1; i < open.length; i++) {
      if (f.get(key(open[i][0], open[i][1])) < f.get(key(open[bi][0], open[bi][1]))) bi = i
    }
    const cur = open.splice(bi, 1)[0]
    const cx = cur[0]
    const cz = cur[1]
    const ck = key(cx, cz)
    if (ck === goalKey) {
      const path = []
      let k = ck
      while (k) {
        const parts = k.split(',')
        path.push([+parts[0], +parts[1]])
        k = came.get(k)
      }
      path.reverse()
      return path
    }
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = cx + dx
      const nz = cz + dz
      if (nx < 0 || nx >= GRID_N || nz < 0 || nz >= GRID_N) continue
      if (!walkable[nx][nz]) continue
      const nk = key(nx, nz)
      const ng = g.get(ck) + 1
      if (!g.has(nk) || ng < g.get(nk)) {
        g.set(nk, ng)
        f.set(nk, ng + heuristic(nx, nz, tx, tz))
        came.set(nk, ck)
        if (!open.some(o => o[0] === nx && o[1] === nz)) open.push([nx, nz])
      }
    }
  }
  return null // 找不到路
}

function drawPath(path) {
  const pts = []
  for (const [x, z] of path) {
    const c = cellToWorld(x, z)
    pts.push(c.x, 0.18, c.z)
  }
  pathGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3))
  pathLine.visible = path.length > 1
}

function setTarget(wx, wz) {
  const cell = worldToCell(wx, wz)
  if (!walkable[cell.x][cell.z]) {
    status.value = '🚫 目标点在蓝色柱子上（障碍格），换个位置点'
    return
  }
  const path = findPath(startCell.x, startCell.z, cell.x, cell.z)
  const c = cellToWorld(cell.x, cell.z)
  targetMarker.position.set(c.x, 0.3, c.z)
  if (!path) {
    pathLine.visible = false
    moving = false
    status.value = '🚫 目标被障碍围死了，A* 找不到路，换个位置'
    return
  }
  drawPath(path)
  waypoints = path.map(([x, z]) => {
    const w = cellToWorld(x, z)
    return new THREE.Vector3(w.x, 0.28, w.z)
  })
  moving = true
  status.value = `🧭 寻路中：A* 找到 ${path.length} 个路径点，小球绕障碍前进`
}

function resetDemo() {
  moving = false
  waypoints = []
  const sc = cellToWorld(startCell.x, startCell.z)
  ball.position.set(sc.x, 0.28, sc.z)
  targetMarker.position.set(sc.x, 0.3, sc.z)
  pathLine.visible = false
  status.value = '已重置：点地面任意位置重新寻路'
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  ctx = createScene(box.value)
  const { scene, camera, renderer, resize } = ctx

  // 半透明可点击地面
  groundMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 8),
    new THREE.MeshStandardMaterial({ color: 0x9fb6d0, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
  )
  groundMesh.rotation.x = -Math.PI / 2
  groundMesh.position.y = 0.02
  scene.add(groundMesh)

  // 障碍柱子
  for (const b of obstacleDefs) {
    const pillar = new THREE.Mesh(
      new THREE.BoxGeometry(b.w, 1.2, b.d),
      new THREE.MeshStandardMaterial({ color: 0x4a9eff })
    )
    pillar.position.set(b.x, 0.6, b.z)
    scene.add(pillar)
  }

  // 小红球 + 起点绿标 + 目标黄标
  ball = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 20, 16),
    new THREE.MeshStandardMaterial({ color: 0xff6b6b })
  )
  scene.add(ball)
  startMarker = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.22, 0.06, 16),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71 })
  )
  scene.add(startMarker)
  targetMarker = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.22, 0.06, 16),
    new THREE.MeshStandardMaterial({ color: 0xffd93d })
  )
  scene.add(targetMarker)

  // 路径折线
  pathGeo = new THREE.BufferGeometry()
  pathGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3))
  pathLine = new THREE.Line(pathGeo, new THREE.LineBasicMaterial({ color: 0x2ecc71 }))
  pathLine.visible = false
  scene.add(pathLine)

  buildGrid()
  startCell = worldToCell(-3.5, -3.5)
  const sc = cellToWorld(startCell.x, startCell.z)
  ball.position.set(sc.x, 0.28, sc.z)
  startMarker.position.set(sc.x, 0.02, sc.z)
  targetMarker.position.set(sc.x, 0.3, sc.z)

  // 点击地面 → 寻路
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  function onPointerDown(e) {
    const rect = box.value.getBoundingClientRect()
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(mouse, camera)
    const hits = raycaster.intersectObject(groundMesh, false)
    if (!hits.length) return
    setTarget(hits[0].point.x, hits[0].point.z)
  }
  renderer.domElement.addEventListener('pointerdown', onPointerDown)

  let lastT = performance.now()
  function frame() {
    const now = performance.now()
    const dt = Math.min((now - lastT) / 1000, 0.05)
    lastT = now
    if (moving && waypoints.length) {
      const wp = waypoints[0]
      const dx = wp.x - ball.position.x
      const dz = wp.z - ball.position.z
      const dist = Math.hypot(dx, dz)
      if (dist < 0.06) {
        ball.position.x = wp.x
        ball.position.z = wp.z
        waypoints.shift()
        if (!waypoints.length) {
          moving = false
          status.value = '✅ 已到达：小球从起点绕过障碍，走到了目标点'
        }
      } else {
        ball.position.x += (dx / dist) * BALL_SPEED * dt
        ball.position.z += (dz / dist) * BALL_SPEED * dt
      }
    }
    renderer.render(scene, camera)
    raf = requestAnimationFrame(frame)
  }
  frame()

  const ro = new ResizeObserver(() => resize(box.value.clientWidth, box.value.clientHeight))
  ro.observe(box.value)
  resize(box.value.clientWidth, box.value.clientHeight)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  ctx?.scene.traverse(o => {
    if (o.geometry) o.geometry.dispose()
    if (o.material) o.material.dispose()
  })
  ctx?.renderer.dispose()
})
</script>
<template>
  <div>
    <div ref="box" class="viewport"></div>
    <div class="controls">
      <button @click="setTarget(-3.5, 2.5)">🎯 对角目标</button>
      <button class="ghost" @click="resetDemo">重置</button>
      <button class="done" @click="play">完成</button>
    </div>
    <p class="hint">{{ status }}</p>
  </div>
</template>
<style scoped>
.viewport { width: 100%; height: 280px; border-radius: 8px; overflow: hidden; }
.controls { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
button { padding: 6px 14px; border-radius: 6px; border: 1px solid #4a9eff; background: #4a9eff; color: #fff; cursor: pointer; }
button.ghost { background: #fff; color: #4a9eff; }
button.done { background: #2ecc71; border-color: #2ecc71; }
.hint { color: #666; font-size: 13px; margin-top: 10px; }
</style>
