<script setup>
import { ref } from 'vue'
import { markCardDone } from '../../store/progress'
const props = defineProps({ card: Object, lessonId: String, cardIndex: Number })
const active = ref(-1)
let interval = null
function play() {
  if (interval) return
  let i = 0
  active.value = 0
  markCardDone(props.lessonId, props.cardIndex)
  interval = setInterval(() => {
    i++
    if (i < props.card.items.length) active.value = i
    else { clearInterval(interval); interval = null }
  }, 1200)
}
</script>
<template>
  <div>
    <h3>{{ card.title }}</h3>
    <button @click="play">▶ 播放触发顺序</button>
    <div class="steps">
      <div v-for="(it,i) in card.items" :key="i" class="step" :class="{ on: active>=i, done: active>i }">
        <span class="dot"></span>
        <div>
          <div class="name">{{ it.name }}</div>
          <div class="desc">{{ it.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.steps { margin-top:16px; }
.step { display:flex; gap:12px; align-items:center; padding:10px 0; border-left:3px solid #e2e6ec; padding-left:14px; transition:.3s; }
.step.on { border-color:#4a9eff; }
.step.on .name { color:#4a9eff; font-weight:700; }
.step.done .dot { background:#2ecc71; }
.dot { width:10px; height:10px; border-radius:50%; background:#ccc; flex-shrink:0; }
.name { font-weight:600; }
.desc { color:#888; font-size:13px; }
</style>
