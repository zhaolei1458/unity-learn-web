<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { createScene } from '../../three/scene'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

const presets = [
  { key: 'same', name: '近同向 · 点积 > 0', a: [3, 0, 1], b: [3, 0, 2], hint: '两向量方向接近，点积为正——「基本朝一个方向」。' },
  { key: 'perp', name: '垂直 · 点积 = 0', a: [3, 0, 0], b: [0, 0, 3], hint: '两向量垂直，点积正好为 0——这是判断「垂直」最常用的条件。' },
  { key: 'obtuse', name: '钝角 · 点积 < 0', a: [3, 0, 0], b: [-1, 0, 3], hint: '方向偏反，点积为负——点积的「正负」能判断两个方向是靠近还是背离。' },
  { key: 'opposite', name: '完全反向 · 点积最小', a: [3, 0, 0], b: [-3, 0, 0], hint: '完全相反，点积是负的最大值——AI 常靠它判断「目标在我背后」。' },
]

const active = ref(0)
const info = ref(null)

let ctx, raf
let originDot = null
const arrows = {}

function makeArrow(v, color) {
  const dir = v.clone().normalize()
  const arrow = new THREE.ArrowHelper(dir, new THREE.Vector3(0, 0.01, 0), v.length(), color, 0.4, 0.22)
  ctx.scene.add(arrow)
  return arrow
}

function update() {
  const p = presets[active.value]
  const a = new THREE.Vector3(...p.a)
  const b = new THREE.Vector3(...p.b)
  const dot = a.dot(b)
  const lenA = a.length()
  const lenB = b.length()
  const cos = lenA && lenB ? Math.max(-1, Math.min(1, dot / (lenA * lenB))) : 0
  const angle = Math.round(Math.acos(cos) * 180 / Math.PI)

  if (arrows.a) ctx.scene.remove(arrows.a)
  if (arrows.b) ctx.scene.remove(arrows.b)
  arrows.a = makeArrow(a, 0xff6b6b)
  arrows.b = makeArrow(b, 0x4a9eff)

  info.value = {
    label: p.name,
    hint: p.hint,
    a: p.a.join(', '),
    b: p.b.join(', '),
    lenA: lenA.toFixed(2),
    lenB: lenB.toFixed(2),
    dot: dot.toFixed(2),
    angle,
  }
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  ctx = createScene(box.value)
  const { scene, camera, renderer, resize } = ctx

  // 原点小球
  originDot = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 16, 12),
    new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x444444 })
  )
  originDot.position.set(0, 0.12, 0)
  scene.add(originDot)

  update()

  function frame() {
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
    <p class="rule">🔴 红色箭头是向量 a · 🔵 蓝色箭头是向量 b —— 从原点出发，拖动切换看点积和夹角怎么变。</p>

    <div class="presets">
      <button
        v-for="(p, i) in presets"
        :key="p.key"
        :class="{ on: active === i }"
        @click="active = i; update()"
      >{{ p.name }}</button>
    </div>

    <div v-if="info" class="info">
      <table>
        <tr><td>向量 a = ({{ info.a }})</td><td>长度 |a| = {{ info.lenA }}</td></tr>
        <tr><td>向量 b = ({{ info.b }})</td><td>长度 |b| = {{ info.lenB }}</td></tr>
        <tr><td>点积 a·b = {{ info.dot }}</td><td>夹角 θ = {{ info.angle }}°</td></tr>
      </table>
      <p class="hint">💡 {{ info.hint }}</p>
    </div>

    <div class="controls">
      <button class="done" @click="play">✅ 完成</button>
    </div>
  </div>
</template>

<style scoped>
.viewport { width: 100%; height: 280px; border-radius: 8px; overflow: hidden; }
.rule { color: #666; font-size: 13px; text-align: center; margin: 12px 0 0; }
.presets { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 12px; }
button { padding: 6px 14px; border-radius: 6px; border: 1px solid #4a9eff; background: #fff; color: #4a9eff; cursor: pointer; font-size: 13px; }
button.on { background: #4a9eff; color: #fff; }
button.done { background: #2ecc71; border-color: #2ecc71; color: #fff; }
.info { margin-top: 12px; padding: 12px 14px; background: #f6f8fb; border-radius: 10px; }
.info table { width: 100%; font-size: 14px; color: #333; }
.info td { padding: 3px 0; }
.hint { margin: 8px 0 0; color: #4a9eff; font-size: 13px; }
.controls { display: flex; justify-content: center; margin-top: 12px; }
</style>
