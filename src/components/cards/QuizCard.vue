<script setup>
import { ref } from 'vue'
import { markCardDone } from '../../store/progress'
const props = defineProps({ card: Object, done: Boolean, lessonId: String, cardIndex: Number })
const picked = ref(null)
function choose(i) {
  picked.value = i
  if (i === props.card.answer) markCardDone(props.lessonId, props.cardIndex)
}
const finished = () => picked.value !== null || props.done
</script>
<template>
  <div>
    <h3>{{ card.question }}</h3>
    <div class="options">
      <button v-for="(opt,i) in card.options" :key="i"
        :class="{ picked: picked===i, right: (picked===i && i===card.answer) || (done && i===card.answer), wrong: picked===i && i!==card.answer }"
        :disabled="finished()" @click="choose(i)">{{ opt }}</button>
    </div>
    <p v-if="finished()" class="tip">
      <span v-if="picked===card.answer || done">✅ 答对了！</span>
      <span v-else>❌ 答错了，正确答案是：{{ card.options[card.answer] }}</span>
      <br v-if="card.tip"><em v-if="card.tip" class="tip-body">{{ card.tip }}</em>
    </p>
  </div>
</template>
<style scoped>
.options { display:flex; flex-direction:column; gap:10px; margin-top:14px; }
.options button { text-align:left; padding:12px 16px; font-size:15px; }
.picked { border-color:#4a9eff; }
.right { border-color:#2ecc71; background:#eafaf1; }
.wrong { border-color:#e74c3c; background:#fdecea; }
.tip { margin-top:14px; font-size:15px; color:#333; }
.tip-body { color:#666; }
</style>
