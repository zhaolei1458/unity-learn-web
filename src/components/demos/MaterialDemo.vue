<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

// 颜色预设（跟其他演示同一套色板）
const presetColors = [
  { key: 'red', label: '红', hex: 0xff6b6b },
  { key: 'green', label: '绿', hex: 0x2ecc71 },
  { key: 'blue', label: '蓝', hex: 0x4a9eff },
  { key: 'yellow', label: '黄', hex: 0xffd93d },
  { key: 'purple', label: '紫', hex: 0xa29bfe },
]
const colorKey = ref('blue')
const metallic = ref(0)
const roughness = ref(0.5)

let scene, camera, renderer, sphere, raf

function setColor(key) {
  colorKey.value = key
  if (!sphere) return
  const p = presetColors.find(x => x.key === key)
  sphere.material.color.setHex(p.hex)
}

watch([metallic, roughness], () => {
  if (!sphere) return
  sphere.material.metalness = metallic.value
  sphere.material.roughness = roughness.value
})

function hintText() {
  const colorLabel = presetColors.find(p => p.key === colorKey.value)?.label || ''
  const m = metallic.value
  const r = roughness.value
  let metalDesc = '非金属质感（塑料/陶瓷），没有金属反光'
  if (m >= 0.2 && m < 0.8) metalDesc = '半金属质感，带一点金属反光'
  else if (m >= 0.8) metalDesc = '强金属质感，像抛光的金属'
  let roughDesc = '很粗糙，磨砂表面，高光微弱'
  if (r < 0.3) roughDesc = '非常光滑，高光集中、亮得像镜子'
  else if (r < 0.7) roughDesc = '中等光滑，高光柔和自然'
  return `🎨 当前颜色：${colorLabel}。${metalDesc}；${roughDesc}。`
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
  camera.position.set(4, 3, 6)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  el.appendChild(renderer.domElement)

  // 环境贴图：金属需要「周围的世界」才有反光，没有它会发黑
  try {
    const pmrem = new THREE.PMREMGenerator(renderer)
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    pmrem.dispose()
  } catch (e) {
    // 拿不到环境贴图也能跑，只是金属会偏暗
  }

  scene.add(new THREE.AmbientLight(0xffffff, 0.6))
  const dir = new THREE.DirectionalLight(0xffffff, 1.2)
  dir.position.set(3, 5, 4)
  scene.add(dir)

  const grid = new THREE.GridHelper(8, 8, 0x666666, 0x444444)
  scene.add(grid)

  sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 48, 32),
    new THREE.MeshStandardMaterial({ color: 0x4a9eff, metalness: 0, roughness: 0.5 })
  )
  sphere.position.y = 1.1
  scene.add(sphere)

  function frame() {
    if (sphere) sphere.rotation.y += 0.005 // 慢慢转，让金属反光/高光看得见
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
        v-for="p in presetColors"
        :key="p.key"
        :class="{ on: colorKey === p.key }"
        @click="setColor(p.key)"
      >{{ p.label }}</button>
    </div>
    <div class="sliders">
      <label>金属感：<input type="range" min="0" max="1" step="0.01" v-model.number="metallic"></label>
      <label>光滑度：<input type="range" min="0.1" max="1" step="0.01" v-model.number="roughness"></label>
    </div>
    <div class="controls">
      <button class="done" @click="play">完成</button>
    </div>
    <p class="hint">{{ hintText() }}</p>
  </div>
</template>
<style scoped>
.viewport { width: 100%; height: 280px; border-radius: 8px; overflow: hidden; }
.controls { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
button { padding: 6px 14px; border-radius: 6px; border: 1px solid #4a9eff; background: #fff; color: #4a9eff; cursor: pointer; }
button.on { background: #4a9eff; color: #fff; }
button.done { background: #2ecc71; border-color: #2ecc71; color: #fff; }
.sliders { display: flex; gap: 18px; margin-top: 12px; flex-wrap: wrap; }
.sliders label { color: #555; font-size: 13px; display: flex; align-items: center; gap: 6px; }
.hint { color: #666; font-size: 13px; margin-top: 10px; }
</style>
