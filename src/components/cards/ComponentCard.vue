<script setup>
import { ref } from 'vue'
import { markCardDone } from '../../store/progress'
const props = defineProps({ card: Object, lessonId: String, cardIndex: Number })
const active = ref(-1)
function select(i) {
  active.value = i
  if (i >= 0) markCardDone(props.lessonId, props.cardIndex)
}
</script>
<template>
  <div>
    <h3>{{ card.title }}</h3>
    <div class="comps">
      <div v-for="(it,i) in card.items" :key="i" class="comp" :class="{ on: active===i }" @click="select(i)">
        <span class="icon">🧩</span>
        <span class="name">{{ it.name }}</span>
      </div>
    </div>
    <div v-if="active>=0" class="detail">
      <strong>{{ card.items[active].name }}</strong> — {{ card.items[active].desc }}
    </div>
    <p v-else class="hint">点上面的组件，看看它给物体加什么能力</p>
  </div>
</template>
<style scoped>
.comps { display:flex; gap:10px; flex-wrap:wrap; margin-top:14px; }
.comp { display:flex; align-items:center; gap:6px; padding:10px 14px; border:1px solid #e2e6ec; border-radius:8px; cursor:pointer; background:#fff; transition:.2s; }
.comp.on { border-color:#4a9eff; background:#eef5ff; }
.detail { margin-top:14px; padding:12px; background:#f6f8fb; border-radius:8px; }
.hint { color:#888; margin-top:14px; }
</style>
