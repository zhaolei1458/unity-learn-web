<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

const current = ref('directional')
const lightInfo = {
  directional: { label: '平行光', desc: '☀️ 平行光：光从同一个方向照来，全场景亮度均匀，近远一样亮，像太阳。物体不同面的明暗只看朝向。' },
  point: { label: '点光源', desc: '💡 点光源：从一个点向四周发散，离灯越近越亮、越远越暗（有衰减），像灯泡或蜡烛。' },
  spot: { label: '聚光灯', desc: '🔦 聚光灯：锥形光柱，只照亮锥内区域，边缘有柔和过渡，像手电筒或舞台追光。' },
}

let scene, camera, renderer, raf
let lights = {}
let markers = {}
let cone
let spinMeshes = []

function applyLight(type) {
  current.value = type
  for (const key of Object.keys(lights)) {
    const on = key === type
    lights[key].visible = on
    markers[key].visible = on
  }
  cone.visible = type === 'spot'
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  const el = box.value
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x1a1a2e)

  camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
  camera.position.set(4, 3.2, 6)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  el.appendChild(renderer.domElement)

  // 很弱的环境光兜底，避免纯黑；主光由下面三盏灯切换
  scene.add(new THREE.AmbientLight(0xffffff, 0.4))

  const grid = new THREE.GridHelper(8, 8, 0x666666, 0x444444)
  scene.add(grid)

  // 彩色物体（不发光的 MeshStandardMaterial，全靠灯光照亮）
  const balls = [
    { color: 0xff6b6b, pos: [-1.1, 0.5, 0.6] },
    { color: 0x4a9eff, pos: [1.1, 0.5, 0.6] },
    { color: 0xffd93d, pos: [-1.1, 0.5, -0.9] },
    { color: 0x2ecc71, pos: [1.1, 0.5, -0.9] },
  ]
  for (const b of balls) {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 24, 18),
      new THREE.MeshStandardMaterial({ color: b.color })
    )
    mesh.position.set(...b.pos)
    scene.add(mesh)
  }
  const boxes = [
    { color: 0xa29bfe, pos: [0, 0.5, -1.8] },
    { color: 0xff9f43, pos: [0, 0.5, 1.8] },
  ]
  for (const b of boxes) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: b.color })
    )
    mesh.position.set(...b.pos)
    spinMeshes.push(mesh)
    scene.add(mesh)
  }

  // 三盏灯：各用不同颜色与位置，方便区分
  const directional = new THREE.DirectionalLight(0xffd166, 1.6)
  directional.position.set(3, 5, 4)
  scene.add(directional)

  const point = new THREE.PointLight(0x4a9eff, 8, 0, 1.6)
  point.position.set(0, 2.6, 0)
  scene.add(point)

  const spot = new THREE.SpotLight(0xff6b6b, 10, 12, 0.45, 0.35, 1.6)
  spot.position.set(0, 3.5, 2.5)
  scene.add(spot)
  scene.add(spot.target) // 指向 (0,0,0)

  lights = { directional, point, spot }

  // 灯光位置的指示小球（自发光，不受光照影响）
  const markerGeo = new THREE.SphereGeometry(0.16, 16, 12)
  const makeMarker = (color, pos) => {
    const m = new THREE.Mesh(markerGeo, new THREE.MeshBasicMaterial({ color }))
    m.position.set(...pos)
    scene.add(m)
    return m
  }
  markers = {
    directional: makeMarker(0xffd166, [3, 5, 4]),
    point: makeMarker(0x4a9eff, [0, 2.6, 0]),
    spot: makeMarker(0xff6b6b, [0, 3.5, 2.5]),
  }

  // 聚光灯的光锥示意（半透明锥体，从灯指向地面目标）
  const target = new THREE.Vector3(0, 0, 0)
  const coneDir = target.clone().sub(spot.position).normalize()
  const coneH = spot.position.distanceTo(target)
  const coneR = Math.tan(0.45) * coneH
  cone = new THREE.Mesh(
    new THREE.ConeGeometry(coneR, coneH, 24, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0xff6b6b, transparent: true, opacity: 0.08, side: THREE.DoubleSide, depthWrite: false,
    })
  )
  cone.position.copy(spot.position).multiplyScalar(0.5)
  cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), coneDir)
  cone.visible = false
  scene.add(cone)

  applyLight('directional')

  function frame() {
    spinMeshes.forEach(m => { m.rotation.y += 0.01 })
    renderer.render(scene, camera)
    raf = requestAnimationFrame(frame)
  }
  frame()

  function resize(w, h) {
    if (!w || !h) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  const ro = new ResizeObserver(() => resize(el.clientWidth, el.clientHeight))
  ro.observe(el)
  resize(el.clientWidth, el.clientHeight)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  renderer?.dispose()
  scene?.traverse(o => {
    if (o.geometry) o.geometry.dispose()
    if (o.material) o.material.dispose()
  })
})
</script>
<template>
  <div>
    <div ref="box" class="viewport"></div>
    <div class="controls">
      <button
        v-for="(info, key) in lightInfo"
        :key="key"
        :class="{ on: current === key }"
        @click="applyLight(key)"
      >{{ info.label }}</button>
      <button class="done" @click="play">完成</button>
    </div>
    <p class="hint">{{ lightInfo[current].desc }}</p>
  </div>
</template>
<style scoped>
.viewport { width: 100%; height: 280px; border-radius: 8px; overflow: hidden; }
.controls { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
button { padding: 6px 14px; border-radius: 6px; border: 1px solid #4a9eff; background: #fff; color: #4a9eff; cursor: pointer; }
button.on { background: #4a9eff; color: #fff; }
button.done { background: #2ecc71; border-color: #2ecc71; color: #fff; }
.hint { color: #666; font-size: 13px; margin-top: 10px; }
</style>
