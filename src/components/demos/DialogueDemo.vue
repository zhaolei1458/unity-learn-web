<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])

// 三条分支：选哪句，NPC 就回哪句，剧情走哪条线
const options = [
  {
    branch: 'A',
    player: '接下任务，这就出发！',
    npc: '就知道你靠得住！后山路口有棵老槐树，还魂草就长在树根边。早去早回，路上当心野兽。',
  },
  {
    branch: 'B',
    player: '呃……村长，我、我还有别的事要忙。',
    npc: '唉……也罢。老夫再想想别的法子。你若是改主意了，随时来村口寻我。',
  },
  {
    branch: 'C',
    player: '帮您跑腿倒也行，可总得给点好处吧？',
    npc: '哈哈哈，爽快！采回三株还魂草，老夫送你一把祖传的鱼竿——村里孩子都眼馋的那把。',
  },
]

const openLine = '年轻人，你来了。村里的药草库被野猪糟蹋了，老夫想请你走一趟后山，采几株还魂草回来。'

const branchDesc = {
  A: '你接了任务，剧情推进到「采药」线',
  B: '你谢绝了，系统把「没接任务」记成状态变量，下次再来对话 NPC 会换台词',
  C: '你谈好了报酬，对话记录下「接受了报酬条件」，往后能拿到那把鱼竿',
}

const messages = ref([])
const phase = ref('idle') // idle | choice | done
const chosen = ref(null)
const logEl = ref(null)

function scrollBottom() {
  nextTick(() => {
    if (logEl.value) logEl.value.scrollTop = logEl.value.scrollHeight
  })
}

function start() {
  messages.value = [{ who: 'npc', text: openLine }]
  phase.value = 'choice'
  chosen.value = null
  scrollBottom()
}

function choose(opt) {
  messages.value.push({ who: 'player', text: opt.player })
  messages.value.push({ who: 'npc', text: opt.npc })
  chosen.value = opt
  phase.value = 'done'
  scrollBottom()
}

function restart() {
  start()
}

function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}

onMounted(start)
</script>

<template>
  <div>
    <p class="rule">🗨️ 玩家选一句，NPC 就走一条不同的线——对话分支的骨架就这么简单。</p>

    <div ref="logEl" class="chat">
      <div v-for="(m, i) in messages" :key="i" class="msg" :class="m.who">
        <span class="avatar">{{ m.who === 'npc' ? '👴' : '🧑' }}</span>
        <div class="bubble">{{ m.text }}</div>
      </div>
    </div>

    <div v-if="phase === 'choice'" class="options">
      <button v-for="(o, i) in options" :key="i" class="opt" @click="choose(o)">
        {{ o.player }}
      </button>
    </div>

    <div v-else-if="phase === 'done' && chosen" class="verdict">
      <p><strong>你选了：</strong>{{ chosen.player }}</p>
      <p><strong>剧情走了分支 {{ chosen.branch }}</strong> —— {{ branchDesc[chosen.branch] }}</p>
    </div>

    <div class="controls">
      <button class="ghost" @click="restart">重开对话</button>
      <button class="done" @click="play">✅ 完成</button>
    </div>
  </div>
</template>

<style scoped>
.rule {
  color: #666;
  font-size: 13px;
  text-align: center;
  margin: 0 0 10px;
}
.chat {
  height: 220px;
  overflow-y: auto;
  background: #f5f7fa;
  border: 1px solid #e3e8ef;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.msg {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  max-width: 82%;
}
.msg.player {
  align-self: flex-end;
  flex-direction: row-reverse;
}
.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #e3e8ef;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}
.bubble {
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.6;
  background: #fff;
  border: 1px solid #e3e8ef;
  color: #333;
}
.msg.player .bubble {
  background: #4a9eff;
  border-color: #4a9eff;
  color: #fff;
}
.options {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}
.opt {
  padding: 9px 14px;
  border-radius: 8px;
  border: 1px dashed #4a9eff;
  background: #f0f7ff;
  color: #2266bb;
  cursor: pointer;
  font-size: 13px;
  text-align: left;
  transition: 0.2s;
}
.opt:hover {
  background: #4a9eff;
  color: #fff;
}
.verdict {
  margin-top: 10px;
  padding: 10px 14px;
  background: #fffbea;
  border: 1px solid #ffe08a;
  border-radius: 8px;
  font-size: 13px;
  color: #7a5b00;
}
.verdict p {
  margin: 4px 0;
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
button.ghost {
  background: #fff;
  color: #4a9eff;
}
button.done {
  background: #2ecc71;
  border-color: #2ecc71;
}
</style>
