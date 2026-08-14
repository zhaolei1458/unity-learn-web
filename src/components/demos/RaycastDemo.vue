<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { createScene } from '../../three/scene'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

const status = ref('就绪：点击方块 → 高亮并画出射线命中它；点空处 → 未命中')

let ctx, raf
let cubes = []
let rayLine, rayGeo, hitMarker, hitCube

const cubeSpots = [
  { x: -2.5, z: -1, color: 0xff6b6b },
  { x: -1.2, z: 0.8, color: 0xffd93d },
  { x: 0.7, z: -1.6, color: 0x4a9eff },
  { x: 2.3, z: 0.9, color: 0x2ecc71 },
  { x: -1.9, z: 1.9, color: 0xa29bfe },
  { x: 1.0, z: 1.8, color: 0xff9ff3 },
  { x: 2.6, z: -0.9, color: 0xff8c42 },
]

function clearHighlight() {
  if (hitCube) {
    hitCube.material.emissive.setHex(0x000000)
    hitCube.scale.setScalar(1)
    hitCube = null
  }
}

function clearAll() {
  clearHighlight()
  rayLine.visible = false
  hitMarker.visible = false
  status.value = '已清空：点一个方块，看射线怎么命中它'
}

function drawRay(start, end) {
  const arr = rayGeo.attributes.position.array
  arr[0] = start.x
  arr[1] = start.y
  arr[2] = start.z
  arr[3] = end.x
  arr[4] = end.y
  arr[5] = end.z
  rayGeo.attributes.position.needsUpdate = true
  rayLine.visible = true
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  ctx = createScene(box.value)
  const { scene, camera, renderer, resize } = ctx

  // 一排彩色方块
  cubeSpots.forEach((s, i) => {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 1.2, 1.2),
      new THREE.MeshStandardMaterial({ color: s.color })
    )
    mesh.position.set(s.x, 0.6, s.z)
    mesh.userData.label = `方块 ${i + 1}`
    scene.add(mesh)
    cubes.push(mesh)
  })

  // 可见射线
  rayGeo = new THREE.BufferGeometry()
  rayGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3))
  rayLine = new THREE.Line(rayGeo, new THREE.LineBasicMaterial({ color: 0xff3b30 }))
  rayLine.visible = false
  scene.add(rayLine)

  // 命中点的小红球标记
  hitMarker = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 12, 8),
    new THREE.MeshStandardMaterial({ color: 0xff3b30 })
  )
  hitMarker.visible = false
  scene.add(hitMarker)

  // 点击 → 从相机向鼠标方向打射线
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  function onPointerDown(e) {
    const rect = box.value.getBoundingClientRect()
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(mouse, camera)
    const hits = raycaster.intersectObjects(cubes, false)
    const camPos = camera.position.clone()
    if (hits.length) {
      const h = hits[0]
      const p = h.point
      if (hitCube !== h.object) {
        clearHighlight()
        h.object.material.emissive.setHex(0x3a5f8a)
        h.object.scale.setScalar(1.12)
        hitCube = h.object
      }
      drawRay(camPos, p)
      hitMarker.position.copy(p)
      hitMarker.visible = true
      status.value = `🎯 命中：${h.object.userData.label}（命中点 (${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)})）`
    } else {
      clearHighlight()
      hitMarker.visible = false
      const dir = raycaster.ray.direction.clone().normalize()
      drawRay(camPos, camPos.clone().add(dir.multiplyScalar(15)))
      status.value = '❌ 未命中：射线从方块之间穿过去，什么都没碰到'
    }
  }
  renderer.domElement.addEventListener('pointerdown', onPointerDown)

  function frame() {
    if (hitCube) hitCube.rotation.y += 0.01
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
      <button class="ghost" @click="clearAll">清空</button>
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
