<script setup>
import { courses } from '../data/courses'
import { getProgress, getActiveSlot } from '../store/progress'
const emit = defineEmits(['open-course'])
const progress = getProgress()
const slot = getActiveSlot()
const courseById = Object.fromEntries(courses.map(c => [c.id, c]))

function learnedCount(c) {
  return c.lessons.filter(l => (progress[l.id] || []).length > 0).length
}
function stageStats(ids) {
  let done = 0, total = 0
  ids.forEach(id => {
    const c = courseById[id]
    if (!c) return
    total += c.lessons.length
    done += learnedCount(c)
  })
  return { done, total }
}

const path = [
  { step: '① 打地基', ids: ['basics', 'math', 'motion', 'logic', 'art', 'modeling', 'prog', 'visuals'], practice: '练手：搭场景 / 滚球接金币 / 计分逻辑 / 继承重构' },
  { step: '② 会玩法', ids: ['ai', 'perf', 'arch', 'anim', 'd2d'], practice: '练手：巡逻敌人 / 对象池 / 2D接水果' },
  { step: '③ 上强度', ids: ['render', 'net', 'editor', 'platform', 'ecs', 'debug', 'cinemachine'], practice: '前两步吃透再上来，概念偏硬' },
  { step: '④ 进深水', ids: ['aiadv', 'procgen', 'shadergraph', 'physadv', 'audio', 'inputadv', 'leveldesign'], practice: '' },
  { step: '⑤ 新领域', ids: ['uitoolkit', 'dialogue', 'xr'], practice: '' },
  { step: '🏁 出师', ids: ['project'], practice: '跟着做，亲手搭出你的第一个游戏' },
]
path.forEach(p => { p.stats = stageStats(p.ids) })

const totalDone = path.reduce((a, p) => a + p.stats.done, 0)
const totalAll = path.reduce((a, p) => a + p.stats.total, 0)
const pct = totalAll ? Math.round(totalDone / totalAll * 100) : 0
const finishedStages = path.filter(p => p.stats.total && p.stats.done === p.stats.total).length
</script>
<template>
  <div class="home">
    <h2>从 0 学 Unity —— 概念图解 + 互动演示</h2>
    <p class="sub">不用装 Unity，浏览器里就能看懂它的功能和逻辑；学完一门，再到编辑器里动手练。</p>
    <p class="slot-name">📁 当前存档：{{ slot?.name || '我的存档' }}</p>

    <div class="overall">
      <div class="overall-head">
        <span class="overall-title">📊 学习总进度</span>
        <span class="overall-num">{{ totalDone }} / {{ totalAll }} 节 · {{ pct }}%</span>
      </div>
      <div class="bar"><div class="bar-fill" :style="{ width: pct + '%' }"></div></div>
      <p class="overall-sub">已完成 {{ finishedStages }} / {{ path.length }} 个阶段</p>
    </div>

    <div class="path">
      <h3 class="path-title">🧭 学习路径（建议顺序）</h3>
      <div v-for="(p, i) in path" :key="i" class="path-step">
        <span class="step-label">{{ p.step }}</span>
        <span class="step-courses">{{ p.ids.map(id => courseById[id]?.title).filter(Boolean).join(' → ') }}</span>
        <span class="step-progress">{{ p.stats.done }}/{{ p.stats.total }}</span>
        <span v-if="p.practice" class="step-practice">{{ p.practice }}</span>
      </div>
    </div>

    <div class="cards">
      <div v-for="c in courses" :key="c.id" class="card" @click="emit('open-course', c.id)">
        <div class="card-emoji">{{ c.emoji }}</div>
        <div class="card-title">{{ c.title }}</div>
        <div class="card-desc">{{ c.desc }}</div>
        <div class="card-lessons">{{ learnedCount(c) }}/{{ c.lessons.length }} 节已学</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 14px; margin-top: 18px; }
.card { border: 1px solid #e2e6ec; border-radius: 12px; padding: 20px; cursor: pointer; transition: .2s; background:#fff; }
.card:hover { border-color: #4a9eff; box-shadow: 0 2px 8px rgba(0,0,0,.08); }
.card-emoji { font-size: 38px; }
.card-title { font-weight: 700; margin-top: 10px; font-size: 17px; }
.card-desc { color: #666; font-size: 14px; margin-top: 6px; }
.card-lessons { color: #4a9eff; font-size: 13px; margin-top: 10px; }
.sub { color: #666; }
.slot-name { color: #4a9eff; font-size: 13px; margin: 2px 0 0; }
.overall { border: 1px solid #4a9eff; border-radius: 12px; padding: 14px 16px; margin-top: 16px; background: #eef5ff; }
.overall-head { display: flex; justify-content: space-between; align-items: center; }
.overall-title { font-weight: 700; font-size: 15px; }
.overall-num { color: #4a9eff; font-weight: 700; font-size: 14px; }
.bar { height: 10px; border-radius: 6px; background: #d9e6f8; margin-top: 10px; overflow: hidden; }
.bar-fill { height: 100%; border-radius: 6px; background: #4a9eff; transition: width .4s ease; }
.overall-sub { color: #888; font-size: 12px; margin: 8px 0 0; }
.path { border: 1px solid #e2e6ec; border-radius: 12px; padding: 16px 18px; margin-top: 14px; background: #fff; }
.path-title { margin: 0 0 12px; font-size: 15px; }
.path-step { display: flex; align-items: baseline; gap: 10px; padding: 7px 0; border-top: 1px dashed #edf0f5; flex-wrap: wrap; }
.path-step:first-of-type { border-top: none; }
.step-label { flex-shrink: 0; font-weight: 700; color: #4a9eff; font-size: 14px; min-width: 72px; }
.step-courses { color: #333; font-size: 13px; line-height: 1.7; }
.step-progress { color: #2ecc71; font-size: 12px; font-weight: 700; }
.step-practice { color: #888; font-size: 12px; }
</style>
