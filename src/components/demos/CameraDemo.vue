<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)
const mode = ref('perspective')

let renderer, scene, perspCam, orthoCam, raf

function setMode(m) { mode.value = m }
function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  const el = box.value
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x1a1a2e)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  el.appendChild(renderer.domElement)

  scene.add(new THREE.AmbientLight(0xffffff, 0.7))
  const dir = new THREE.DirectionalLight(0xffffff, 0.9)
  dir.position.set(3, 5, 4)
  scene.add(dir)

  // 一排方块，制造纵深感
  const colors = [0xff6b6b, 0x4a9eff, 0xffd93d, 0x2ecc71, 0xa29bfe]
  for (let i = 0; i < 5; i++) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.9, 0.9),
      new THREE.MeshStandardMaterial({ color: colors[i] })
    )
    mesh.position.set((i - 2) * 1.4, 0, -i * 1.6)
    scene.add(mesh)
  }
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.MeshStandardMaterial({ color: 0x333355 }))
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -0.5
  scene.add(ground)

  perspCam = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
  orthoCam = new THREE.OrthographicCamera(-4, 4, 4, -4, 0.1, 100)
  const camPos = { x: 0, y: 1.5, z: 7 }

  function frame() {
    const cam = mode.value === 'perspective' ? perspCam : orthoCam
    cam.position.set(camPos.x, camPos.y, camPos.z)
    cam.lookAt(0, 0, -3)
    renderer.render(scene, cam)
    raf = requestAnimationFrame(frame)
  }
  frame()

  function resize(w, h) {
    if (!w || !h) return
    perspCam.aspect = w / h
    perspCam.updateProjectionMatrix()
    const aspect = w / h
    const half = 4
    orthoCam.left = -half * aspect
    orthoCam.right = half * aspect
    orthoCam.top = half
    orthoCam.bottom = -half
    orthoCam.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  const ro = new ResizeObserver(() => resize(el.clientWidth, el.clientHeight))
  ro.observe(el)
  resize(el.clientWidth, el.clientHeight)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  renderer?.dispose()
  scene?.traverse(o => { if (o.geometry) o.geometry.dispose() })
})
</script>
<template>
  <div>
    <div ref="box" class="viewport"></div>
    <div class="controls">
      <button :class="{ on: mode==='perspective' }" @click="setMode('perspective')">透视相机</button>
      <button :class="{ on: mode==='ortho' }" @click="setMode('ortho')">正交相机</button>
      <button class="ghost" @click="play">完成</button>
    </div>
    <p class="hint">
      {{ mode === 'perspective' ? '🔵 透视相机：近大远小，像人眼看世界（游戏主视角）' : '🟡 正交相机：没有近大远小，像工程图纸（UI/2D 常用）' }}
    </p>
  </div>
</template>
<style scoped>
.viewport { width: 100%; height: 280px; border-radius: 8px; overflow: hidden; }
.controls { display: flex; gap: 10px; margin-top: 12px; }
button { padding: 6px 14px; border-radius: 6px; border: 1px solid #4a9eff; background: #fff; color: #4a9eff; cursor: pointer; }
button.on { background: #4a9eff; color: #fff; }
button.ghost { border-color: #ccc; color: #666; }
.hint { color: #666; font-size: 13px; margin-top: 10px; }
</style>
