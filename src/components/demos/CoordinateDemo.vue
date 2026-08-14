<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { createScene } from '../../three/scene'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

const parentX = ref(0)      // 父方块 位置 X
const parentRotY = ref(0)   // 父方块 旋转 Y
const localText = ref('')
const worldText = ref('')

let ctx, group, redBox, raf
const _v = new THREE.Vector3()

function fmt(n) { return (Math.round(n * 100) / 100).toFixed(2) }

function reset() {
  parentX.value = 0
  parentRotY.value = 0
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  ctx = createScene(box.value)
  const { scene, renderer, resize } = ctx

  // 父方块：一个 Group，原点即大蓝方块的中心（类似 Unity 里父物体的 Transform）
  group = new THREE.Group()
  const blue = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0x4a9eff })
  )
  group.add(blue)

  // 子方块：小红方块，本地坐标 (0, 1, 0)，站在蓝方块顶上
  redBox = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshStandardMaterial({ color: 0xff6b6b })
  )
  redBox.position.set(0, 1, 0)
  group.add(redBox)

  scene.add(group)

  function frame() {
    group.position.x = parentX.value
    group.rotation.y = parentRotY.value * Math.PI / 180

    // 本地坐标：相对父方块，恒为 (0, 1, 0)
    const l = redBox.position
    localText.value = `x ${fmt(l.x)}  y ${fmt(l.y)}  z ${fmt(l.z)}`
    // 世界坐标：换算到 scene 里，会随父方块一起变
    redBox.getWorldPosition(_v)
    worldText.value = `x ${fmt(_v.x)}  y ${fmt(_v.y)}  z ${fmt(_v.z)}`

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
      <label>父方块 位置X
        <input v-model.number="parentX" type="range" min="-2" max="2" step="0.1" />
        <span class="val">{{ parentX.toFixed(1) }}</span>
      </label>
      <label>父方块 旋转Y
        <input v-model.number="parentRotY" type="range" min="-180" max="180" step="5" />
        <span class="val">{{ parentRotY }}°</span>
      </label>
      <button class="ghost" @click="reset">重置</button>
      <button class="done" @click="play">完成</button>
    </div>
    <div class="info">
      <p class="local">🔴 红方块 · 本地坐标：{{ localText }}</p>
      <p class="world">🌍 红方块 · 世界坐标：{{ worldText }}</p>
    </div>
    <p class="hint">拖滑块改父方块的位置/旋转：子方块跟着动，但它的<strong>本地坐标不变</strong>、<strong>世界坐标变了</strong>。</p>
  </div>
</template>
<style scoped>
.viewport { width: 100%; height: 280px; border-radius: 8px; overflow: hidden; }
.controls { display: flex; gap: 14px; margin-top: 12px; flex-wrap: wrap; align-items: center; }
.controls label { font-size: 13px; color: #333; display: flex; align-items: center; gap: 6px; }
.controls input[type="range"] { width: 120px; }
.controls .val { min-width: 42px; font-variant-numeric: tabular-nums; color: #111; font-weight: 600; }
button { padding: 6px 14px; border-radius: 6px; border: 1px solid #4a9eff; background: #4a9eff; color: #fff; cursor: pointer; }
button.ghost { background: #fff; color: #4a9eff; }
button.done { background: #2ecc71; border-color: #2ecc71; }
.info { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px; font-size: 13px; }
.info p { margin: 0; padding: 6px 10px; border-radius: 6px; background: #f2f5fa; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
.info .local { color: #c0392b; }
.info .world { color: #1a5276; }
.hint { color: #666; font-size: 13px; margin-top: 10px; }
</style>
