<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { createScene } from '../../three/scene'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

const gravityOn = ref(false)
const collisionOn = ref(false)

let ctx, raf
let bodies = []   // { mesh, vx, vy, onGround }

function makeBox(color, x) {
  const geo = new THREE.BoxGeometry(0.8, 0.8, 0.8)
  const mat = new THREE.MeshStandardMaterial({ color })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(x, 3.5, 0)
  ctx.scene.add(mesh)
  return { mesh, vx: 0, vy: 0, onGround: false }
}

function resetDemo() {
  gravityOn.value = false
  collisionOn.value = false
  bodies.forEach(b => {
    b.mesh.position.set(b.initX, 3.5, 0)
    b.vy = 0; b.vx = 0; b.onGround = false
  })
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(() => {
  ctx = createScene(box.value)
  const { scene, renderer, resize } = ctx

  // 地面
  const ground = new THREE.Mesh(
    new THREE.BoxGeometry(8, 0.2, 6),
    new THREE.MeshStandardMaterial({ color: 0x4a9eff })
  )
  ground.position.y = -0.1
  scene.add(ground)

  bodies = [makeBox(0xff6b6b, -1.2), makeBox(0xffd93d, 1.2)]
  bodies[0].initX = -1.2
  bodies[1].initX = 1.2

  function frame() {
    const dt = 0.016
    if (gravityOn.value) {
      bodies.forEach(b => {
        if (!b.onGround) {
          b.vy -= 9.8 * dt
          b.mesh.position.y += b.vy * dt
          if (b.mesh.position.y <= 0.4) {
            b.mesh.position.y = 0.4
            b.vy = 0
            b.onGround = true
          }
        }
      })
    }
    if (collisionOn.value) {
      // 简单弹开：两方块接近时交换水平速度
      const a = bodies[0], b = bodies[1]
      const dist = Math.abs(a.mesh.position.x - b.mesh.position.x)
      if (dist < 0.9) {
        const tmp = a.vx; a.vx = b.vx; b.vx = tmp
        // 推开避免重叠
        const dir = a.mesh.position.x < b.mesh.position.x ? -1 : 1
        a.mesh.position.x += dir * 0.01
        b.mesh.position.x -= dir * 0.01
      }
      bodies.forEach(b => {
        if (!b.onGround) return
        b.mesh.position.x += b.vx * dt
        b.vx *= 0.99
        if (Math.abs(b.mesh.position.x) > 3) b.vx *= -1
      })
    }
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
      <button @click="gravityOn = !gravityOn">{{ gravityOn ? '关重力' : '开重力' }}</button>
      <button @click="collisionOn = !collisionOn">{{ collisionOn ? '关碰撞' : '加碰撞' }}</button>
      <button class="ghost" @click="resetDemo">重置</button>
      <button class="done" @click="play">完成</button>
    </div>
    <p class="hint">
      {{ gravityOn ? '🟢 重力开着：方块在下落' : '🔴 重力关着：方块悬空' }}
      {{ collisionOn ? ' · 🟢 碰撞开着：相撞会弹开' : '' }}
    </p>
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
