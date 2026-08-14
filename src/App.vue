<script setup>
import { ref } from 'vue'
import HomeView from './components/HomeView.vue'
import CourseView from './components/CourseView.vue'
import LessonView from './components/LessonView.vue'
import SavePanel from './components/SavePanel.vue'

const view = ref('home')
const currentCourseId = ref(null)
const currentLessonId = ref(null)
const showSave = ref(false)
const slotVersion = ref(0)

function openCourse(id) { currentCourseId.value = id; view.value = 'course' }
function openLesson(id) { currentLessonId.value = id; view.value = 'lesson' }
function goHome() { view.value = 'home' }
function onSaveChanged() { slotVersion.value++ } // 切换/改名后让页面重挂载，刷新进度显示
</script>

<template>
  <div class="app">
    <header class="topbar">
      <h1 @click="goHome" class="logo">🎮 Unity 学习工具</h1>
      <div class="actions">
        <button v-if="view!=='home'" class="home-btn" @click="goHome">🏠 首页</button>
        <button class="home-btn" @click="showSave = true">💾 存档</button>
      </div>
    </header>
    <main class="content">
      <HomeView v-if="view==='home'" :key="'h'+slotVersion" @open-course="openCourse" />
      <CourseView v-else-if="view==='course'" :key="'c'+slotVersion" :courseId="currentCourseId" @open-lesson="openLesson" @home="goHome" @progress="onSaveChanged" />
      <LessonView v-else :key="'l'+slotVersion" :lessonId="currentLessonId" @course="openCourse(currentCourseId)" @home="goHome" />
    </main>
    <SavePanel v-if="showSave" @close="showSave = false" @changed="onSaveChanged" />
  </div>
</template>

<style scoped>
.app { max-width: 900px; margin: 0 auto; padding: 0 16px 40px; }
.topbar { border-bottom: 1px solid #e2e6ec; padding: 14px 0; display: flex; align-items: center; justify-content: space-between; }
.logo { cursor: pointer; font-size: 20px; margin: 0; }
.actions { display: flex; gap: 8px; }
.home-btn { padding: 6px 14px; border-radius: 8px; border: 1px solid #4a9eff; background: #fff; color: #4a9eff; cursor: pointer; font-size: 14px; }
.home-btn:hover { background: #eef5ff; }
@media (max-width: 600px) {
  .logo { font-size: 17px; }
  .app { padding: 0 10px 30px; }
}
</style>
