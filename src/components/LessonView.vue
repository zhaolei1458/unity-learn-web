<script setup>
import { ref, computed, watch } from 'vue'
import { courses, lessonCards } from '../data/courses'
import { interactiveLessons } from '../data/interactiveLessons'
import { markCardDone, isCardDone } from '../store/progress'
import TextCard from './cards/TextCard.vue'
import QuizCard from './cards/QuizCard.vue'
import DemoCard from './cards/DemoCard.vue'
import LifecycleCard from './cards/LifecycleCard.vue'
import ComponentCard from './cards/ComponentCard.vue'
import InteractiveLesson from './InteractiveLesson.vue'

const props = defineProps({ lessonId: String })
const emit = defineEmits(['course', 'home'])

// 判断是否是交互式课程
const isInteractive = computed(() => {
  return !!interactiveLessons[props.lessonId]
})
const interactiveLesson = computed(() => interactiveLessons[props.lessonId])

// 传统卡片课程
const cards = computed(() => lessonCards[props.lessonId] || [])
const index = ref(0)
const current = computed(() => cards.value[index.value])

watch(index, i => markCardDone(props.lessonId, i))

function next() { if (index.value < cards.value.length - 1) index.value++ }
function prev() { if (index.value > 0) index.value-- }
</script>
<template>
  <!-- 交互式课程 -->
  <InteractiveLesson
    v-if="isInteractive"
    :lesson="interactiveLesson"
    :lessonId="lessonId"
    @course="emit('course')"
    @complete="emit('course')"
  />
  <!-- 传统卡片课程 -->
  <div class="lesson" v-else>
    <div class="lesson-top">
      <button class="back" @click="emit('course')">← 返回课程</button>
      <span class="progress">{{ index + 1 }} / {{ cards.length }}</span>
    </div>
    <div class="card-area">
      <TextCard v-if="current.type==='text'" :card="current" />
      <QuizCard v-else-if="current.type==='quiz'" :card="current" :done="isCardDone(lessonId, index)" :lessonId="lessonId" :cardIndex="index" />
      <DemoCard v-else-if="current.type==='demo'" :card="current" :lessonId="lessonId" :cardIndex="index" />
      <LifecycleCard v-else-if="current.type==='lifecycle'" :card="current" :lessonId="lessonId" :cardIndex="index" />
      <ComponentCard v-else-if="current.type==='component'" :card="current" :lessonId="lessonId" :cardIndex="index" />
    </div>
    <div class="lesson-nav">
      <button :disabled="index===0" @click="prev">← 上一页</button>
      <button v-if="index<cards.length-1" @click="next">下一页 →</button>
      <button v-else @click="emit('course')">学完这节，回课程 ✓</button>
    </div>
  </div>
</template>
<style scoped>
.lesson-top { display:flex; justify-content:space-between; align-items:center; margin: 14px 0; }
.card-area { min-height: 340px; border:1px solid #e2e6ec; border-radius:12px; padding:24px; background:#fff; }
.lesson-nav { display:flex; justify-content:space-between; margin-top:16px; }
button { padding:8px 16px; border-radius:8px; border:1px solid #ccc; cursor:pointer; background:#fff; font-size:14px; }
button:disabled { opacity:.4; cursor:default; }
.back { border:none; background:none; color:#4a9eff; }
</style>
