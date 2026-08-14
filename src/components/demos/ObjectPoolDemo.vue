<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { createScene } from '../../three/scene'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

const POOL_SIZE = 8
const SPEED = 3.5
const LIMIT = 3.4

let ctx, raf
let directLive = [] // 直接生成：正在飞的球（每颗都是现 new 的）
let poolAll = [] // 对象池：预建的所有球
let poolActive = [] // 对象池：正在飞的球

const directAlive = ref(0)
const directTotal = ref(0)
const poolAlive = ref(0)
const poolTotal = ref(POOL_SIZE)

function makeBall(color) {
  const geo = new THREE.SphereGeometry(0.16, 16, 12)
  const mat = new THREE.MeshStandardMaterial({ color })
  const mesh = new THREE.Mesh(geo, mat)
  ctx.scene.add(mesh)
  return { mesh }
}

function randY() {
  return (Math.random() * 2 - 1) * 1.3
}
function randZ() {
  return (Math.random() * 2 - 1) * 1.0
}

// 直接生成：new 一颗球，向左飞，飞完销毁（几何和材质一起 dispose）
function spawnDirect() {
  directTotal.value++
  const b = makeBall(0xff6b6b)
  b.vx = -SPEED
  b.mesh.position.set(-0.45, randY(), randZ())
  directLive.push(b)
  directAlive.value = directLive.length
}

// 对象池：从池里取一颗复用；没有空闲就把飞得最远的那颗收回重发
function firePool() {
  let b = poolAll.find(x => !x.active)
  if (!b) {
    poolActive.sort((a, b2) => b2.mesh.position.x - a.mesh.position.x)
    b = poolActive.shift()
    b.active = false
  }
  b.active = true
  b.vx = SPEED
  b.mesh.visible = true
  b.mesh.position.set(0.45, randY(), randZ())
  poolActive.push(b)
  poolAlive.value = poolActive.length
}

// 对比按钮：一口气发 20 个
function burst20() {
  for (let i = 0; i < 20; i++) {
    spawnDirect()
    firePool()
  }
}

function reset() {
  directLive.forEach(b => {
    ctx.scene.remove(b.mesh)
    b.mesh.geometry.dispose()
    b.mesh.material.dispose()
  })
  directLive = []
  directAlive.value = 0
  directTotal.value = 0
  poolActive.forEach(b => {
    b.active = false
    b.mesh.visible = false
  })
  poolActive = []
  poolAlive.value = 0
  poolTotal.value = POOL_SIZE
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  ctx = createScene(box.value)
  const { scene, renderer, resize } = ctx
  ctx.camera.position.set(0, 2.4, 7)
  ctx.camera.lookAt(0, 0, 0)

  // 中间分界线
  const divider = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 4, 0.06),
    new THREE.MeshStandardMaterial({ color: 0x999999 })
  )
  scene.add(divider)

  // 左右两个底座色块，标出两块区域
  const lz = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 0.15, 1.6),
    new THREE.MeshStandardMaterial({ color: 0xff6b6b })
  )
  lz.position.set(-2, -1.9, 0)
  const rz = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 0.15, 1.6),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71 })
  )
  rz.position.set(2, -1.9, 0)
  scene.add(lz, rz)

  // 预建池子里的 8 颗球（先全部隐藏）
  for (let i = 0; i < POOL_SIZE; i++) {
    const b = makeBall(0x2ecc71)
    b.active = false
    b.mesh.visible = false
    poolAll.push(b)
  }

  function frame() {
    const dt = 0.016
    // 直接生成：飞完就销毁，还连带新分配
    for (let i = directLive.length - 1; i >= 0; i--) {
      const b = directLive[i]
      b.mesh.position.x += b.vx * dt
      if (b.mesh.position.x < -LIMIT) {
        ctx.scene.remove(b.mesh)
        b.mesh.geometry.dispose()
        b.mesh.material.dispose()
        directLive.splice(i, 1)
      }
    }
    directAlive.value = directLive.length

    // 对象池：飞完就收回，下回接着用
    for (let i = poolActive.length - 1; i >= 0; i--) {
      const b = poolActive[i]
      b.mesh.position.x += b.vx * dt
      if (b.mesh.position.x > LIMIT) {
        b.mesh.visible = false
        b.active = false
        poolActive.splice(i, 1)
      }
    }
    poolAlive.value = poolActive.length

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
})
</script>

<template>
  <div>
    <div class="stage">
      <div ref="box" class="viewport"></div>
      <span class="zone zone-left">左 · 直接生成</span>
      <span class="zone zone-right">右 · 对象池</span>
    </div>

    <div class="stats">
      <div class="stat red">
        <b>直接生成</b>
        <span>存活 {{ directAlive }} 颗</span>
        <span>已生成 {{ directTotal }} 颗</span>
        <em>每发一颗都 new 一次，飞完销毁 → 反复分配，产生 GC 垃圾</em>
      </div>
      <div class="stat green">
        <b>对象池</b>
        <span>存活 {{ poolAlive }} 颗</span>
        <span>已生成 {{ poolTotal }} 颗</span>
        <em>预建 {{ POOL_SIZE }} 颗循环复用，总数恒定，不再产生垃圾</em>
      </div>
    </div>

    <div class="controls">
      <button @click="spawnDirect">直接生成 +1</button>
      <button class="green" @click="firePool">对象池发射</button>
      <button class="hot" @click="burst20">连发 20 个（对比）</button>
      <button class="ghost" @click="reset">重置</button>
      <button class="done" @click="play">✅ 完成</button>
    </div>
  </div>
</template>

<style scoped>
.stage {
  position: relative;
}
.viewport {
  width: 100%;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
}
.zone {
  position: absolute;
  top: 10px;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #fff;
  opacity: 0.92;
}
.zone-left {
  left: 10px;
  background: #ff6b6b;
}
.zone-right {
  right: 10px;
  background: #2ecc71;
}
.stats {
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
}
.stat {
  flex: 1;
  min-width: 200px;
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 13px;
  color: #333;
}
.stat.red {
  background: #fff0f0;
  border: 1px solid #ffd0d0;
}
.stat.green {
  background: #f0fff4;
  border: 1px solid #c8f0d4;
}
.stat b {
  font-size: 14px;
  margin-bottom: 2px;
}
.stat span {
  color: #444;
}
.stat em {
  font-style: normal;
  font-size: 12px;
  color: #888;
  margin-top: 4px;
}
.controls {
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
}
button {
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid #4a9eff;
  background: #4a9eff;
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  transition: 0.2s;
}
button.green {
  background: #2ecc71;
  border-color: #2ecc71;
}
button.hot {
  background: #ff9f1c;
  border-color: #ff9f1c;
}
button.ghost {
  background: #fff;
  color: #4a9eff;
}
button.done {
  background: #2ecc71;
  border-color: #2ecc71;
}
</style>
