<script setup>
/**
 * InteractiveLesson.vue —— 「三→二→一」交互式学习组件
 *
 * 每节课提供一个 scene 配置对象，定义三个阶段的场景和交互。
 * 组件负责流程控制（阶段切换、进度、下一步按钮），
 * 场景渲染交给内部的 Three.js 画布。
 */
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  lesson: Object,  // { id, title, stages: { observe, demonstrate, practice } }
  lessonId: String,
})
const emit = defineEmits(['course', 'complete'])

/* ── 阶段状态 ── */
const stage = ref(0)  // 0=观察 1=示范 2=实践
const stageDone = ref([false, false, false])
const nextEnabled = ref(false)
const showSuccess = ref(false)
const showFinish = ref(false)

/* ── Three.js 画布 ── */
const canvasRef = ref(null)
let renderer = null
let scene = null
let camera = null
let clock = null
let animFrame = null
let stageCleanup = null  // 当前阶段的清理函数

function initRenderer() {
  if (!canvasRef.value) return
  const canvas = canvasRef.value

  // 动态导入 Three.js
  import('three').then(THREE => {
    const { WebGLRenderer, Scene, PerspectiveCamera, Clock } = THREE
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    scene = new Scene()
    clock = new Clock()
    resizeCanvas()
    startLoop()
  })
}

function resizeCanvas() {
  if (!renderer || !canvasRef.value) return
  const w = canvasRef.value.parentElement.clientWidth
  const h = canvasRef.value.parentElement.clientHeight
  renderer.setSize(w, h)
  if (camera) {
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
}

function startLoop() {
  function tick() {
    animFrame = requestAnimationFrame(tick)
    if (renderer && scene && camera) {
      const dt = clock.getDelta()
      // 调用当前阶段的 update 回调
      if (currentUpdateFn) currentUpdateFn(dt)
      renderer.render(scene, camera)
    }
  }
  tick()
}

let currentUpdateFn = null

/* ── 阶段切换 ── */
function nextStage() {
  if (!nextEnabled.value) return
  if (stage.value < 2) {
    stage.value++
    nextEnabled.value = false
  } else {
    // 实践完成 → 结算
    showFinish.value = true
  }
}

function closeSuccess() {
  showSuccess.value = false
  nextEnabled.value = true
}

function markStageDone() {
  stageDone.value[stage.value] = true
  if (stage.value < 2) {
    nextEnabled.value = true
  } else {
    // 实践完成
    setTimeout(() => { showSuccess.value = true }, 600)
  }
}

/* ── 阶段初始化 ── */
async function initStage(idx) {
  // 清理上一阶段
  if (stageCleanup) { stageCleanup(); stageCleanup = null }
  currentUpdateFn = null

  await nextTick()
  if (!canvasRef.value || !props.lesson?.stages) return

  const stages = ['observe', 'demonstrate', 'practice']
  const stageConfig = props.lesson.stages[stages[idx]]
  if (!stageConfig?.setup) return

  // 等待 Three.js 加载
  const THREE = await import('three')
  if (!renderer) {
    await new Promise(r => setTimeout(r, 100))
    if (!renderer) return
  }

  // 清空旧场景
  while (scene.children.length > 0) scene.remove(scene.children[0])

  // 创建相机
  const camCfg = stageConfig.camera || { pos: [0, 3, 8], target: [0, 0, 0] }
  camera = new THREE.PerspectiveCamera(50, canvasRef.value.parentElement.clientWidth / canvasRef.value.parentElement.clientHeight, 0.1, 100)
  camera.position.set(...camCfg.pos)
  camera.lookAt(...camCfg.target)
  resizeCanvas()

  // 灯光
  const ambient = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambient)
  const dir = new THREE.DirectionalLight(0xffffff, 0.8)
  dir.position.set(5, 8, 5)
  dir.castShadow = true
  scene.add(dir)

  // 调用场景搭建函数
  const cleanup = await stageConfig.setup(scene, camera, THREE, {
    markDone: markStageDone,
    stage: idx,
    canvasRef: canvasRef,
  })
  if (typeof cleanup === 'function') stageCleanup = cleanup
}

/* ── 监听阶段变化 ── */
watch(stage, (idx) => { initStage(idx) })
onMounted(() => {
  initRenderer()
  initStage(0)
  window.addEventListener('resize', resizeCanvas)
})
onBeforeUnmount(() => {
  if (stageCleanup) stageCleanup()
  if (animFrame) cancelAnimationFrame(animFrame)
  if (renderer) renderer.dispose()
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<template>
  <div class="interactive-lesson" v-if="lesson">
    <!-- 返回按钮 -->
    <div class="il-top">
      <button class="back" @click="emit('course')">← 返回课程</button>
      <span class="title">{{ lesson.title }}</span>
    </div>

    <!-- 画布容器 -->
    <div class="canvas-wrap">
      <canvas ref="canvasRef"></canvas>
    </div>

    <!-- 进度指示 -->
    <div class="il-progress">
      <div class="dot" :class="{ active: stage===0, done: stageDone[0] }"></div>
      <div class="dot" :class="{ active: stage===1, done: stageDone[1] }"></div>
      <div class="dot" :class="{ active: stage===2, done: stageDone[2] }"></div>
    </div>

    <!-- 阶段标签 -->
    <div class="il-stage-label">
      <span v-if="stage===0">👁️ 观察</span>
      <span v-else-if="stage===1">🎬 示范</span>
      <span v-else>🎯 实践</span>
    </div>

    <!-- 阶段提示（由场景配置提供） -->
    <div class="il-hint" v-if="lesson.stages?.[ ['observe','demonstrate','practice'][stage] ]?.hint">
      {{ lesson.stages[['observe','demonstrate','practice'][stage]].hint }}
    </div>

    <!-- 下一步按钮 -->
    <div class="il-bottom">
      <button class="next-btn" :class="{ enabled: nextEnabled }" @click="nextStage">
        {{ stage < 2 ? '下一步 →' : '完成 ✓' }}
      </button>
    </div>

    <!-- 过关弹窗 -->
    <div class="il-overlay" v-if="showSuccess">
      <div class="il-popup">
        <div class="badge">🎉</div>
        <h2>{{ lesson.stages.practice?.successTitle || '做得好！' }}</h2>
        <p>{{ lesson.stages.practice?.successText || '' }}</p>
        <button class="ok-btn" @click="closeSuccess">继续 →</button>
      </div>
    </div>

    <!-- 完成页 -->
    <div class="il-overlay" v-if="showFinish">
      <div class="il-popup">
        <div class="badge">🏆</div>
        <h2>这一节学完了！</h2>
        <p>{{ lesson.summary || '' }}</p>
        <div class="il-btn-row">
          <button class="il-btn-outline" @click="emit('course')">返回课程</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.interactive-lesson { position: relative; width: 100%; height: 100%; }
.il-top { display: flex; align-items: center; gap: 16px; padding: 12px 0; }
.il-top .back { border: none; background: none; color: #4a9eff; cursor: pointer; font-size: 14px; }
.il-top .title { font-size: 16px; color: #333; font-weight: 500; }
.canvas-wrap { position: relative; width: 100%; height: calc(100vh - 200px); border-radius: 12px; overflow: hidden; background: #f0f0f0; }
.canvas-wrap canvas { display: block; width: 100%; height: 100%; }
.il-progress { display: flex; justify-content: center; gap: 8px; margin: 12px 0 4px; }
.il-progress .dot { width: 10px; height: 10px; border-radius: 50%; background: #d0d0d0; transition: all 0.3s; }
.il-progress .dot.active { background: #4a9eff; transform: scale(1.2); }
.il-progress .dot.done { background: #4caf50; }
.il-stage-label { text-align: center; font-size: 13px; color: #888; margin-bottom: 4px; }
.il-hint { text-align: center; font-size: 14px; color: #555; margin-bottom: 12px; min-height: 22px; }
.il-bottom { display: flex; justify-content: flex-end; }
.next-btn { padding: 10px 24px; border-radius: 10px; border: none; background: #e0e0e0; color: #aaa; font-size: 15px; cursor: not-allowed; transition: all 0.3s; }
.next-btn.enabled { background: #4a9eff; color: #fff; cursor: pointer; }
.next-btn.enabled:hover { background: #3a8eef; }
.il-overlay { position: fixed; inset: 0; z-index: 30; background: rgba(0,0,0,0.25); display: flex; align-items: center; justify-content: center; }
.il-popup { background: #fff; border-radius: 16px; padding: 32px 40px; box-shadow: 0 8px 40px rgba(0,0,0,0.15); text-align: center; max-width: 400px; }
.il-popup .badge { font-size: 48px; margin-bottom: 12px; }
.il-popup h2 { font-size: 18px; color: #333; margin-bottom: 8px; }
.il-popup p { font-size: 13px; color: #888; line-height: 1.6; margin-bottom: 16px; }
.ok-btn { padding: 8px 28px; border-radius: 8px; border: none; background: #4caf50; color: #fff; font-size: 14px; cursor: pointer; }
.il-btn-row { display: flex; gap: 10px; justify-content: center; margin-top: 8px; }
.il-btn-outline { padding: 8px 24px; border-radius: 8px; border: 2px solid #4a9eff; background: #fff; color: #4a9eff; font-size: 14px; cursor: pointer; }
</style>
