<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import * as THREE from 'three'
import { createScene } from '../../three/scene'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

const seed = ref(Math.floor(Math.random() * 100000))
const intensity = ref(1.6)
const status = ref('就绪：点「重新生成」换块新地形，拖「起伏强度」看山势变化')

let ctx, raf
let terrain, colorAttr

// —— 简易 2D Perlin 噪声：排列表 + 渐变向量 + 淡入淡出插值 ——
class Perlin {
  constructor(seed = 1) {
    const p = new Uint8Array(256)
    for (let i = 0; i < 256; i++) p[i] = i
    let s = seed || 1
    const rand = () => {
      s = (s * 1103515245 + 12345) & 0x7fffffff
      return s / 0x7fffffff
    }
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1))
      const t = p[i]; p[i] = p[j]; p[j] = t
    }
    this.perm = new Uint8Array(512)
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255]
  }
  fade(t) { return t * t * t * (t * (t * 6 - 15) + 10) }
  lerp(a, b, t) { return a + (b - a) * t }
  grad(hash, x, y) {
    switch (hash & 7) {
      case 0: return x + y
      case 1: return -x + y
      case 2: return x - y
      case 3: return -x - y
      case 4: return x
      case 5: return -x
      case 6: return y
      default: return -y
    }
  }
  noise(x, y) {
    const X = Math.floor(x) & 255
    const Y = Math.floor(y) & 255
    const fx = x - Math.floor(x)
    const fy = y - Math.floor(y)
    const u = this.fade(fx)
    const v = this.fade(fy)
    const p = this.perm
    const aa = p[p[X] + Y]
    const ab = p[p[X] + Y + 1]
    const ba = p[p[X + 1] + Y]
    const bb = p[p[X + 1] + Y + 1]
    return this.lerp(
      this.lerp(this.grad(aa, fx, fy), this.grad(ba, fx - 1, fy), u),
      this.lerp(this.grad(ab, fx, fy - 1), this.grad(bb, fx - 1, fy - 1), u),
      v
    )
  }
  // 分形叠加：几层噪声叠起来，山势更自然
  fbm(x, y, octaves = 5) {
    let amp = 1
    let freq = 1
    let sum = 0
    let norm = 0
    for (let i = 0; i < octaves; i++) {
      sum += amp * this.noise(x * freq, y * freq)
      norm += amp
      amp *= 0.5
      freq *= 2
    }
    return sum / norm
  }
}

// 高度着色：深水蓝 → 草绿 → 岩棕 → 灰岩 → 雪白
const STOPS = [
  { t: 0.0, c: new THREE.Color(0x1a6bd8) },
  { t: 0.28, c: new THREE.Color(0x55c05a) },
  { t: 0.55, c: new THREE.Color(0xa07040) },
  { t: 0.8, c: new THREE.Color(0xb9b9b9) },
  { t: 1.0, c: new THREE.Color(0xf5f5f5) },
]
function colorFor(t01) {
  let i = 0
  while (i < STOPS.length - 2 && t01 > STOPS[i + 1].t) i++
  const a = STOPS[i]
  const b = STOPS[i + 1]
  const lt = (t01 - a.t) / (b.t - a.t)
  return a.c.clone().lerp(b.c, lt)
}

function generate() {
  if (!terrain) return
  const noise = new Perlin(seed.value)
  const pos = terrain.geometry.attributes.position
  if (!colorAttr) {
    colorAttr = new THREE.BufferAttribute(new Float32Array(pos.count * 3), 3)
    terrain.geometry.setAttribute('color', colorAttr)
  }
  const arr = colorAttr.array
  const str = intensity.value
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i)
    const z = pos.getZ(i)
    const h = noise.fbm(x * 0.55 + 37.2, z * 0.55 + 37.2, 5) * str
    pos.setY(i, h)
    const t01 = THREE.MathUtils.clamp((h + str) / (2 * str), 0, 1)
    const c = colorFor(t01)
    arr[i * 3] = c.r
    arr[i * 3 + 1] = c.g
    arr[i * 3 + 2] = c.b
  }
  pos.needsUpdate = true
  colorAttr.needsUpdate = true
  terrain.geometry.computeVertexNormals()
  status.value = `🏔️ 已生成新地形：种子 ${seed.value}，起伏强度 ${str.toFixed(1)}，点「重新生成」换一块`
}

watch(intensity, generate)

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  ctx = createScene(box.value)
  const { scene, camera, renderer, resize } = ctx

  // 地形演示不需要网格线，去掉网格
  scene.traverse(o => {
    if (o.isGridHelper) scene.remove(o)
  })

  // 斜上方俯瞰
  camera.position.set(4.5, 7, 4.5)
  camera.lookAt(0, 0, 0)

  const geo = new THREE.PlaneGeometry(8, 8, 64, 64)
  geo.rotateX(-Math.PI / 2)
  terrain = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 }))
  scene.add(terrain)

  generate()

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
    <div class="controls">
      <button @click="seed = Math.floor(Math.random() * 100000); generate()">🎲 重新生成</button>
      <button class="done" @click="play">完成</button>
    </div>
    <div class="sliders">
      <label>起伏强度：<input type="range" min="0.2" max="3" step="0.1" v-model.number="intensity"> {{ intensity.toFixed(1) }}</label>
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
