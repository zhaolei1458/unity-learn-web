<script setup>
import { ref, computed } from 'vue'
import { courses } from '../data/courses'
import { getProgress, resetLesson } from '../store/progress'
const props = defineProps({ courseId: String })
const emit = defineEmits(['open-lesson', 'home', 'progress'])
const course = computed(() => courses.find(c => c.id === props.courseId))
const progress = ref(getProgress())
function doneCount(id) { return (progress.value[id] || []).length }
function resetOne(id, title) {
  if (!confirm('确定重置「' + title + '」的进度？学过的卡片会清空。')) return
  resetLesson(id)
  progress.value = getProgress()
  emit('progress') // 通知 App 刷新首页总进度
}
</script>
<template>
  <div v-if="course" class="course">
    <div class="course-top">
      <button class="back" @click="emit('home')">← 首页</button>
      <div>
        <h2>{{ course.emoji }} {{ course.title }}</h2>
        <p class="desc">{{ course.desc }}</p>
      </div>
    </div>
    <div class="lesson-list">
      <div v-for="(l, i) in course.lessons" :key="l.id" class="lesson-item" @click="emit('open-lesson', l.id)">
        <span class="idx">{{ i + 1 }}</span>
        <span class="name">{{ l.title }}</span>
        <span class="done">{{ doneCount(l.id) > 0 ? '✓ 学过' : '' }}</span>
        <button v-if="doneCount(l.id) > 0" class="reset" title="重置本课进度" @click.stop="resetOne(l.id, l.title)">↺ 重置</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.course-top { display:flex; align-items:flex-start; gap:14px; margin:14px 0 20px; }
.back { border:none; background:none; color:#4a9eff; font-size:15px; cursor:pointer; margin-top:6px; }
.desc { color:#666; margin-top:4px; }
.lesson-list { display:flex; flex-direction:column; gap:10px; }
.lesson-item { display:flex; align-items:center; gap:14px; padding:16px 18px; border:1px solid #e2e6ec; border-radius:10px; cursor:pointer; background:#fff; transition:.2s; }
.lesson-item:hover { border-color:#4a9eff; box-shadow:0 2px 6px rgba(0,0,0,.06); }
.idx { width:28px; height:28px; border-radius:50%; background:#eef5ff; color:#4a9eff; display:flex; align-items:center; justify-content:center; font-weight:700; flex-shrink:0; }
.name { font-size:16px; }
.done { margin-left:auto; color:#2ecc71; font-size:13px; }
.reset { margin-left:4px; padding:4px 10px; border-radius:6px; border:1px solid #e0a020; background:#fff; color:#e0a020; font-size:12px; cursor:pointer; flex-shrink:0; }
.reset:hover { background:#fff8e8; }
</style>
