<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { createScene } from '../../three/scene'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

const pos = ref({ x: 0, y: 0.5, z: 0 })
const rot = ref({ x: 0, y: 0, z: 0 })
const scale = ref(1)

let ctx, cube, raf

function reset() {
  pos.value = { x: 0, y: 0.5, z: 0 }
  rot.value = { x: 0, y: 0, z: 0 }
  scale.value = 1
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  ctx = createScene(box.value)
  const { scene, renderer, resize } = ctx

  const geo = new THREE.BoxGeometry(1, 1, 1)
  const mat = new THREE.MeshStandardMaterial({ color: 0x4a9eff })
  cube = new THREE.Mesh(geo, mat)
  cube.castShadow = true
  scene.add(cube)

  function frame() {
    cube.position.set(pos.value.x, pos.value.y, pos.value.z)
    cube.rotation.set(
      rot.value.x * Math.PI / 180,
      rot.value.y * Math.PI / 180,
      rot.value.z * Math.PI / 180
    )
    cube.scale.set(scale.value, scale.value, scale.value)
    renderer.render(scene, ctx.camera)
    raf = requestAnimationFrame(frame)
  }
  frame()

  const ro = new ResizeObserver(() => resize(box.value.clientWidth, box.value.clientHeight))
  ro.observe(box.value)
  resize(box.value.clientWidth, box.value.clientHeight)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  ctx?.renderer.dispose()
  ctx?.scene.traverse(o => { if (o.geometry) o.geometry.dispose() })
})
</script>
<template>
  <div>
    <div ref="box" class="viewport"></div>
    <div class="controls">
      <label>位置 X <input v-model.number="pos.x" type="number" step="0.1" /></label>
      <label>位置 Y <input v-model.number="pos.y" type="number" step="0.1" /></label>
      <label>位置 Z <input v-model.number="pos.z" type="number" step="0.1" /></label>
      <label>旋转 Y <input v-model.number="rot.y" type="number" step="10" /></label>
      <label>缩放 <input v-model.number="scale" type="number" step="0.1" min="0.1" /></label>
      <button @click="play">完成</button>
      <button class="ghost" @click="reset">重置</button>
    </div>
  </div>
</template>
<style scoped>
.viewport { width: 100%; height: 280px; border-radius: 8px; overflow: hidden; }
.controls { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; align-items: center; }
.controls label { font-size: 13px; color: #333; }
.controls input { width: 64px; padding: 4px 6px; border: 1px solid #ccc; border-radius: 5px; }
button { padding: 6px 14px; border-radius: 6px; border: 1px solid #4a9eff; background: #4a9eff; color: #fff; cursor: pointer; }
button.ghost { background: #fff; color: #4a9eff; }
</style>
