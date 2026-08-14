<script setup>
import { onUnmounted, ref } from 'vue'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])

const states = {
  patrol: { name: '巡逻', emoji: '🚶', color: '#4a9eff', desc: '没发现目标，按路线来回走' },
  chase: { name: '追踪', emoji: '🏃', color: '#ff9f1c', desc: '发现目标了，追上去' },
  attack: { name: '攻击', emoji: '⚔️', color: '#ff6b6b', desc: '目标进了攻击范围，出手' },
}

const current = ref('patrol')
const countdown = ref(null)
const log = ref([])
let timer = null

function setState(next, reason) {
  current.value = next
  log.value.unshift(`${states[next].name}（${reason}）`)
  if (log.value.length > 5) log.value.pop()
}

function clearCountdown() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  countdown.value = null
}

function startCountdown() {
  clearCountdown()
  countdown.value = 3
  timer = setInterval(() => {
    countdown.value -= 0.1
    if (countdown.value <= 0) {
      clearCountdown()
      if (current.value === 'chase') setState('attack', '已接近目标')
    }
  }, 100)
}

// 迁移：巡逻 --发现敌人--> 追踪 --(3秒)--> 攻击
function discover() {
  if (current.value !== 'patrol') return
  setState('chase', '发现敌人')
  startCountdown()
}

// 迁移：追踪 / 攻击 --敌人消失--> 巡逻
function loseSight() {
  if (current.value !== 'chase' && current.value !== 'attack') return
  clearCountdown()
  setState('patrol', '敌人消失')
}

function reset() {
  clearCountdown()
  current.value = 'patrol'
  log.value = []
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onUnmounted(clearCountdown)
</script>

<template>
  <div>
    <p class="rule">🤖 一个变量记「当前状态」，每帧按它执行逻辑，事件触发迁移——这就是状态机。</p>

    <div class="stage">
      <div class="char" :style="{ background: states[current].color }">
        <span class="emoji">{{ states[current].emoji }}</span>
        <span class="name">{{ states[current].name }}</span>
      </div>

      <div class="panel">
        <div class="current">
          <span class="dot" :style="{ background: states[current].color }"></span>
          当前状态：
          <strong :style="{ color: states[current].color }">{{ states[current].name }}</strong>
        </div>
        <p class="desc">{{ states[current].desc }}</p>

        <div class="buttons">
          <button :disabled="current !== 'patrol'" @click="discover">发现敌人</button>
          <button
            :disabled="!(current === 'chase' || current === 'attack')"
            @click="loseSight"
          >敌人消失</button>
        </div>

        <p v-if="countdown != null" class="countdown">⏳ {{ countdown.toFixed(1) }} 秒后接近目标 → 攻击</p>
      </div>
    </div>

    <div class="flow">
      <span class="flow-state" :class="{ on: current === 'patrol' }">巡逻</span>
      <span class="arrow">发现敌人 →</span>
      <span class="flow-state" :class="{ on: current === 'chase' }">追踪</span>
      <span class="arrow">接近 →</span>
      <span class="flow-state" :class="{ on: current === 'attack' }">攻击</span>
      <span class="arrow-back">敌人消失 ↺ 回巡逻</span>
    </div>

    <ul v-if="log.length" class="log">
      <li v-for="(item, i) in log" :key="i">{{ item }}</li>
    </ul>

    <div class="controls">
      <button class="ghost" @click="reset">重置演示</button>
      <button class="done" @click="play">✅ 完成</button>
    </div>
  </div>
</template>

<style scoped>
.rule {
  color: #666;
  font-size: 13px;
  text-align: center;
  margin: 0 0 12px;
}
.stage {
  display: flex;
  gap: 14px;
  align-items: stretch;
}
.char {
  flex: 0 0 120px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #fff;
  transition: background-color 0.35s ease;
}
.char .emoji {
  font-size: 42px;
  line-height: 1;
}
.char .name {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
}
.panel {
  flex: 1;
  border: 1px solid #e3e8ef;
  border-radius: 12px;
  padding: 12px 14px;
  background: #fbfcfe;
}
.current {
  font-size: 15px;
  color: #333;
}
.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
  vertical-align: -1px;
  transition: background-color 0.35s ease;
}
.desc {
  color: #666;
  font-size: 13px;
  margin: 8px 0;
}
.buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.countdown {
  color: #ff9f1c;
  font-size: 13px;
  margin: 10px 0 0;
}
.flow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
  font-size: 13px;
  color: #888;
}
.flow-state {
  padding: 4px 12px;
  border-radius: 6px;
  border: 1px solid #e3e8ef;
  background: #fff;
  color: #999;
  transition: 0.25s;
}
.flow-state.on {
  border-color: #4a9eff;
  color: #4a9eff;
  font-weight: 700;
}
.arrow {
  color: #4a9eff;
}
.arrow-back {
  color: #e67e22;
}
.log {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.log li {
  font-size: 12px;
  color: #777;
  background: #f5f7fa;
  border-radius: 6px;
  padding: 4px 10px;
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
button:disabled {
  background: #e3e8ef;
  border-color: #e3e8ef;
  color: #aab;
  cursor: not-allowed;
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
