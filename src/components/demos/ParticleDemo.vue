<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { createScene } from '../../three/scene'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

const count = ref(60)
const mode = ref('就绪')
const status = ref('就绪：点「发射」向上喷出一团粒子，点「爆炸」让粒子向四周炸开，粒子落地即消失')

let ctx, raf
let particles, posArr, colArr, velArr, lifeArr
const MAX = 200
const PALETTE = [0xff6b6b, 0xffd93d, 0x4a9eff, 0x2ecc71, 0xa29bfe, 0xff9ff3]

function buildParticles() {
  const geo = new THREE.BufferGeometry()
  posArr = new Float32Array(MAX * 3)
  colArr = new Float32Array(MAX * 3)
  for (let i = 0; i < MAX; i++) {
    posArr[i * 3 + 1] = -10 // 死粒子藏到地面以下
    colArr[i * 3] = 1
    colArr[i * 3 + 1] = 1
    colArr[i * 3 + 2] = 1
  }
  geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(colArr, 3))
  const mat = new THREE.PointsMaterial({ size: 0.22, vertexColors: true, transparent: true, opacity: 0.95 })
  particles = new THREE.Points(geo, mat)
  velArr = Array.from({ length: MAX }, () => new THREE.Vector3())
  lifeArr = new Float32Array(MAX)
  ctx.scene.add(particles)
}

// explosion=true 时全方位炸开，否则向上锥形喷射
function spawn(explosion) {
  const n = Math.min(count.value, MAX)
  for (let i = 0; i < MAX; i++) {
    lifeArr[i] = 0
    posArr[i * 3 + 1] = -10
  }
  for (let i = 0; i < n; i++) {
    const c = new THREE.Color(PALETTE[i % PALETTE.length])
    posArr[i * 3] = 0
    posArr[i * 3 + 1] = 0
    posArr[i * 3 + 2] = 0
    colArr[i * 3] = c.r
    colArr[i * 3 + 1] = c.g
    colArr[i * 3 + 2] = c.b
    if (explosion) {
      const dir = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1)
      if (dir.lengthSq() < 1e-6) dir.y = 1
      dir.normalize().multiplyScalar(3 + Math.random() * 4)
      velArr[i].copy(dir)
      lifeArr[i] = 1.2 + Math.random() * 0.8
    } else {
      const a = Math.random() * Math.PI * 2
      velArr[i].set(
        Math.cos(a) * (1 + Math.random() * 1.5),
        2.5 + Math.random() * 3.5,
        Math.sin(a) * (1 + Math.random() * 1.5)
      )
      lifeArr[i] = 1.8 + Math.random() * 1.2
    }
  }
  particles.geometry.attributes.position.needsUpdate = true
  particles.geometry.attributes.color.needsUpdate = true
  mode.value = explosion ? '爆炸' : '喷射'
  status.value = explosion
    ? `💥 爆炸！${n} 个粒子向四周炸开，碰到地面就消失`
    : `🚀 喷射！${n} 个粒子向上喷出，受重力下坠、落地消失`
}

function resetDemo() {
  for (let i = 0; i < MAX; i++) {
    lifeArr[i] = 0
    posArr[i * 3 + 1] = -10
  }
  particles.geometry.attributes.position.needsUpdate = true
  mode.value = '就绪'
  status.value = '已重置：点「发射」或「爆炸」再来一次'
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  ctx = createScene(box.value)
  const { scene, camera, renderer, resize } = ctx

  // 地面（顶面在 y=0）
  const ground = new THREE.Mesh(
    new THREE.BoxGeometry(8, 0.2, 6),
    new THREE.MeshStandardMaterial({ color: 0x2a3a5e })
  )
  ground.position.y = -0.1
  scene.add(ground)

  // 几块装饰小方块，让场景不那么空（避开喷口原点）
  const spots = [
    [-2.5, -1.2], [-1.3, -1.2], [0, -1.2],
    [1.3, -1.2], [-1.9, 1.3], [1.9, 1.3],
  ]
  spots.forEach(([x, z], i) => {
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.MeshStandardMaterial({ color: PALETTE[i] })
    )
    m.position.set(x, 0.25, z)
    scene.add(m)
  })

  buildParticles()

  let prevAlive = -1
  function frame() {
    const dt = 0.016
    let alive = 0
    for (let i = 0; i < MAX; i++) {
      if (lifeArr[i] <= 0) continue
      lifeArr[i] -= dt
      if (lifeArr[i] <= 0) {
        posArr[i * 3 + 1] = -10
        continue
      }
      velArr[i].y -= 9.8 * dt * 0.55 // 简化重力
      posArr[i * 3] += velArr[i].x * dt
      posArr[i * 3 + 1] += velArr[i].y * dt
      posArr[i * 3 + 2] += velArr[i].z * dt
      if (posArr[i * 3 + 1] <= 0) {
        posArr[i * 3 + 1] = -10 // 落地消失
        lifeArr[i] = 0
        continue
      }
      alive++
    }
    if (prevAlive > 0 && alive === 0 && mode.value !== '就绪') {
      status.value = '💨 粒子全部消散了，点按钮再来一次'
      mode.value = '就绪'
    }
    prevAlive = alive
    particles.geometry.attributes.position.needsUpdate = true
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
      <button @click="spawn(false)">🚀 发射</button>
      <button @click="spawn(true)">💥 爆炸</button>
      <button class="ghost" @click="resetDemo">重置</button>
      <button class="done" @click="play">完成</button>
    </div>
    <div class="sliders">
      <label>粒子数量：<input type="range" min="30" max="200" step="10" v-model.number="count"> {{ count }} 颗</label>
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
.sliders { margin-top: 12px; }
.sliders label { color: #555; font-size: 13px; display: flex; align-items: center; gap: 6px; }
.hint { color: #666; font-size: 13px; margin-top: 10px; }
</style>
