<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { createScene } from '../../three/scene'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

// —— 物理参数 ——
const G = 9.8
const DAMP = 0.35

// 单摆：绕 Z 轴摆，在 XY 平面动
const PIVOT = { x: -1.6, y: 2.875, z: 0 }
const L = 1.9
const single = { theta: 0.18, omega: 0.7 }

// 双节链：绕 X 轴摆，在 ZY 平面动（两根杆 + 中间关节球）
const CP = { x: 1.6, y: 2.875, z: 0 }
const L1 = 0.95
const L2 = 0.95
const chain = { theta1: 0.25, omega1: 0.5, theta2: -0.15, omega2: -0.4 }

let ctx, raf
let rod, bob
let rod1, joint1, rod2, bob2

function buildPendulum() {
  // 单摆：一根杆 + 一颗底球
  rod = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, L, 0.05),
    new THREE.MeshStandardMaterial({ color: 0xcccccc })
  )
  bob = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 24, 16),
    new THREE.MeshStandardMaterial({ color: 0xff9f1c })
  )
  ctx.scene.add(rod, bob)

  // 双节链：杆1 + 关节球 + 杆2 + 底球
  const jointMat = new THREE.MeshStandardMaterial({ color: 0xffd93d })
  rod1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, L1, 0.05),
    new THREE.MeshStandardMaterial({ color: 0xcccccc })
  )
  joint1 = new THREE.Mesh(new THREE.SphereGeometry(0.14, 20, 14), jointMat)
  rod2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, L2, 0.05),
    new THREE.MeshStandardMaterial({ color: 0xcccccc })
  )
  bob2 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 20, 14), jointMat)
  ctx.scene.add(rod1, joint1, rod2, bob2)
}

// 摆锤物理：角度、角速度、重力恢复力矩 + 阻尼
function step(dt) {
  // 单摆
  const a = -(G / L) * Math.sin(single.theta) - DAMP * single.omega
  single.omega += a * dt
  single.theta += single.omega * dt

  // 双节链（标准双摆公式 + 阻尼）
  const m1 = 1
  const m2 = 1
  const t1 = chain.theta1
  const t2 = chain.theta2
  const w1 = chain.omega1
  const w2 = chain.omega2
  const d = t1 - t2
  const den = L1 * (2 * m1 + m2 - m2 * Math.cos(2 * d))
  const a1 =
    (-G * (2 * m1 + m2) * Math.sin(t1) -
      m2 * G * Math.sin(t1 - 2 * t2) -
      2 * Math.sin(d) * m2 * (w2 * w2 * L2 + w1 * w1 * L1 * Math.cos(d))) / den
  const a2 =
    (2 *
      Math.sin(d) *
      (w1 * w1 * L1 * (m1 + m2) + G * (m1 + m2) * Math.cos(t1) + w2 * w2 * L2 * m2 * Math.cos(d))) /
    (L2 * (2 * m1 + m2 - m2 * Math.cos(2 * d)))
  chain.omega1 += (a1 - DAMP * w1) * dt
  chain.omega2 += (a2 - DAMP * w2) * dt
  chain.theta1 += chain.omega1 * dt
  chain.theta2 += chain.omega2 * dt
}

// 按角度摆位置和杆朝向
function updateSingle() {
  const bx = PIVOT.x + L * Math.sin(single.theta)
  const by = PIVOT.y - L * Math.cos(single.theta)
  bob.position.set(bx, by, 0)
  rod.position.set((PIVOT.x + bx) / 2, (PIVOT.y + by) / 2, 0)
  rod.rotation.set(0, 0, Math.atan2(-(bx - PIVOT.x), by - PIVOT.y))
}

function updateChain() {
  const p1 = {
    x: CP.x,
    y: CP.y - L1 * Math.cos(chain.theta1),
    z: CP.z + L1 * Math.sin(chain.theta1),
  }
  const p2 = {
    x: CP.x,
    y: p1.y - L2 * Math.cos(chain.theta2),
    z: p1.z + L2 * Math.sin(chain.theta2),
  }
  rod1.position.set((CP.x + p1.x) / 2, (CP.y + p1.y) / 2, (CP.z + p1.z) / 2)
  rod1.rotation.set(Math.atan2(p1.z - CP.z, p1.y - CP.y), 0, 0)
  joint1.position.copy(p1)
  rod2.position.set((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, (p1.z + p2.z) / 2)
  rod2.rotation.set(Math.atan2(p2.z - p1.z, p2.y - p1.y), 0, 0)
  bob2.position.copy(p2)
}

function push() {
  single.omega += 2.6
  chain.omega1 += 2.0
  chain.omega2 -= 1.2
}

function reset() {
  single.theta = 0.18
  single.omega = 0.7
  chain.theta1 = 0.25
  chain.omega1 = 0.5
  chain.theta2 = -0.15
  chain.omega2 = -0.4
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  ctx = createScene(box.value)
  const { scene, renderer, resize } = ctx
  ctx.camera.position.set(4.2, 2.6, 6.5)
  ctx.camera.lookAt(0, 1.5, 0)

  // 横梁 + 两根柱子
  const beam = new THREE.Mesh(
    new THREE.BoxGeometry(6, 0.25, 0.25),
    new THREE.MeshStandardMaterial({ color: 0x4a9eff })
  )
  beam.position.y = 3.0
  scene.add(beam)
  const postGeo = new THREE.BoxGeometry(0.2, 3.0, 0.2)
  const postMat = new THREE.MeshStandardMaterial({ color: 0x777777 })
  const postL = new THREE.Mesh(postGeo, postMat)
  postL.position.set(-3, 1.5, 0)
  const postR = new THREE.Mesh(postGeo, postMat)
  postR.position.set(3, 1.5, 0)
  scene.add(postL, postR)

  buildPendulum()

  let last = performance.now()
  function frame() {
    const now = performance.now()
    const dt = Math.min((now - last) / 1000, 0.05)
    last = now
    step(dt)
    updateSingle()
    updateChain()
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
    <div ref="box" class="viewport"></div>
    <div class="controls">
      <button @click="push">推一下</button>
      <button class="ghost" @click="reset">重置</button>
      <button class="done" @click="play">✅ 完成</button>
    </div>
    <p class="hint">
      🟠 左边：单摆，一根杆连一个球；🟡 右边：双节链，两根杆靠「关节球」连起来。关节把连接点约束住，
      摆起来互相牵制——点「推一下」看两条都荡起来。
    </p>
  </div>
</template>

<style scoped>
.viewport {
  width: 100%;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
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
}
button.ghost {
  background: #fff;
  color: #4a9eff;
}
button.done {
  background: #2ecc71;
  border-color: #2ecc71;
}
.hint {
  color: #666;
  font-size: 13px;
  margin-top: 10px;
  line-height: 1.6;
}
</style>
