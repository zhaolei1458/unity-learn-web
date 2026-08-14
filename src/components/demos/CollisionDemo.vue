<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { createScene } from '../../three/scene'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])
const box = ref(null)

const mode = ref('collision')   // collision | trigger
const launched = ref(false)
const triggered = ref(false)
const hitCount = ref(0)

let ctx, raf, ball, wallMesh, wallMat
let vx = 0
let flashTimer = 0

const BALL_R = 0.35
const WALL_X = 0.6
const START_X = -2.6
const ONE = new THREE.Vector3(1, 1, 1)

function applyModeMaterial() {
  wallMat.color.set(0x4a9eff)
  if (mode.value === 'collision') {
    wallMat.transparent = false
    wallMat.opacity = 1
  } else {
    wallMat.transparent = true
    wallMat.opacity = 0.35
  }
  wallMat.needsUpdate = true
}

function resetBall() {
  ball.position.set(START_X, BALL_R, 0)
  ball.scale.set(1, 1, 1)
  vx = 0
  flashTimer = 0
  launched.value = false
  triggered.value = false
  hitCount.value = 0
  applyModeMaterial()
}

function setMode(m) {
  mode.value = m
  resetBall()
}

function fire() {
  resetBall()
  vx = 3.6
  launched.value = true
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
    new THREE.MeshStandardMaterial({ color: 0x333355 })
  )
  ground.position.y = -0.1
  scene.add(ground)

  // 小球
  ball = new THREE.Mesh(
    new THREE.SphereGeometry(BALL_R, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0xff6b6b })
  )
  ball.position.set(START_X, BALL_R, 0)
  scene.add(ball)

  // 墙
  wallMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 2, 2.4),
    new THREE.MeshStandardMaterial({ color: 0x4a9eff })
  )
  wallMesh.position.set(WALL_X, 1, 0)
  scene.add(wallMesh)
  wallMat = wallMesh.material
  applyModeMaterial()

  function frame() {
    const dt = 0.016
    if (launched.value) {
      ball.position.x += vx * dt
      vx *= 0.998

      if (mode.value === 'collision') {
        // 撞墙：速度反转，弹开
        if (vx > 0 && ball.position.x + BALL_R >= WALL_X) {
          ball.position.x = WALL_X - BALL_R
          vx = -vx * 0.8
          hitCount.value++
          ball.scale.set(1.25, 0.75, 1.25) // 撞的一瞬间压扁
        }
        // 弹到最左边停住，别飞出视口
        if (ball.position.x - BALL_R <= -3.5) {
          ball.position.x = -3.5 + BALL_R
          vx = 0
          launched.value = false
        }
        if (Math.abs(vx) < 0.05) {
          vx = 0
          launched.value = false
        }
      } else {
        // 触发器：穿过不弹开，触发事件（墙变绿一下）
        if (!triggered.value && ball.position.x + BALL_R >= WALL_X) {
          triggered.value = true
          wallMat.color.set(0x2ecc71)
          flashTimer = 0.6
        }
        // 飞过头后停住
        if (ball.position.x > 3.4) {
          ball.position.x = 3.4
          vx = 0
          launched.value = false
        }
      }

      // 形变恢复圆润
      ball.scale.lerp(ONE, 0.08)
    }

    if (flashTimer > 0) {
      flashTimer -= dt
      if (flashTimer <= 0) wallMat.color.set(0x4a9eff)
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
  ctx?.scene?.traverse(o => {
    if (o.geometry) o.geometry.dispose()
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material]
      mats.forEach(m => m.dispose())
    }
  })
})
</script>
<template>
  <div>
    <p class="note">碰撞 = 实体阻挡 · 触发器 = 只感应、不阻挡（碰墙的「感受」不同，结果就不同）</p>
    <div ref="box" class="viewport"></div>
    <div class="controls">
      <button :class="{ on: mode === 'collision' }" @click="setMode('collision')">碰撞模式</button>
      <button :class="{ on: mode === 'trigger' }" @click="setMode('trigger')">触发器模式</button>
      <button class="launch" @click="fire">发射</button>
      <button class="ghost" @click="resetBall">重置</button>
      <button class="done" @click="play">完成</button>
    </div>
    <p class="hint">
      {{ mode === 'collision'
        ? '🔴 碰撞模式：墙是实体 Collider，球撞上会「弹开」，被挡住'
        : '🟡 触发器模式：墙是半透明感应区 Is Trigger，球「穿过」不阻挡，触发事件' }}
      <template v-if="mode === 'trigger' && triggered"> · 事件触发：墙变绿了！</template>
      <template v-else-if="mode === 'collision' && hitCount"> · 已弹开 {{ hitCount }} 次</template>
    </p>
  </div>
</template>
<style scoped>
.note { color: #888; font-size: 13px; margin: 0 0 8px; }
.viewport { width: 100%; height: 280px; border-radius: 8px; overflow: hidden; }
.controls { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
button { padding: 6px 14px; border-radius: 6px; border: 1px solid #4a9eff; background: #fff; color: #4a9eff; cursor: pointer; }
button.on { background: #4a9eff; color: #fff; }
button.launch { background: #ffd93d; border-color: #ffd93d; color: #333; }
button.ghost { border-color: #ccc; color: #666; }
button.done { background: #2ecc71; border-color: #2ecc71; color: #fff; }
.hint { color: #666; font-size: 13px; margin-top: 10px; }
</style>
