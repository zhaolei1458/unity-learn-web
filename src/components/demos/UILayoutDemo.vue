<script setup>
import { ref } from 'vue'
import { markCardDone } from '../../store/progress'

const props = defineProps({ lessonId: String, cardIndex: Number })
const emit = defineEmits(['played'])

// 画布固定 240x400，示意元素的坐标都是相对它算好的
const anchors = [
  {
    id: 'top-left',
    name: '左上角',
    label: '成就图标',
    color: '#4a9eff',
    bg: '#4a9eff',
    textColor: '#fff',
    desc: '锚点钉在左上角，元素永远贴着屏幕左上，截图按钮、返回键常放这儿。',
    pos: { top: '20px', left: '20px', width: '96px', height: '48px' },
    marker: [{ left: '20px', top: '20px' }],
  },
  {
    id: 'top-center',
    name: '顶部居中',
    label: '标题栏',
    color: '#ff6b6b',
    bg: '#ff6b6b',
    textColor: '#fff',
    desc: '锚点钉在顶边中点，水平永远居中，标题、顶栏提示都这么放。',
    pos: { top: '20px', left: '72px', width: '96px', height: '48px' },
    marker: [{ left: '120px', top: '20px' }],
  },
  {
    id: 'bottom-center',
    name: '底部居中',
    label: '开始按钮',
    color: '#2ecc71',
    bg: '#2ecc71',
    textColor: '#fff',
    desc: '锚点钉在底边中点，是放「主按钮」最常见的位置。',
    pos: { top: '332px', left: '60px', width: '120px', height: '48px' },
    marker: [{ left: '120px', top: '380px' }],
  },
  {
    id: 'bottom-right',
    name: '右下角',
    label: '关闭按钮',
    color: '#ff9f1c',
    bg: '#ff9f1c',
    textColor: '#fff',
    desc: '锚点钉在右下角，常用来放「关闭」「设置」这类次要操作。',
    pos: { top: '332px', left: '124px', width: '96px', height: '48px' },
    marker: [{ left: '220px', top: '380px' }],
  },
  {
    id: 'fill',
    name: '填满全屏',
    label: '全屏面板',
    color: '#a29bfe',
    bg: 'rgba(162,155,254,0.32)',
    textColor: '#4c3fbe',
    desc: '锚点四角拉开、占满整块画布，背景图、全屏弹窗、加载页都这样。',
    pos: { top: '0px', left: '0px', width: '240px', height: '400px' },
    marker: [
      { left: '6px', top: '6px' },
      { left: '234px', top: '6px' },
      { left: '6px', top: '394px' },
      { left: '234px', top: '394px' },
    ],
  },
]

const active = ref(anchors[0])

function select(a) { active.value = a }
function play() {
  emit('played')
  markCardDone(props.lessonId, props.cardIndex)
}
</script>

<template>
  <div>
    <p class="rule">📌 锚点决定 UI 元素相对屏幕哪里 —— 换锚点，元素就跟着锚点走。</p>

    <div class="phone-wrap">
      <div class="phone">
        <div
          class="ui-element"
          :class="{ fill: active.id === 'fill' }"
          :style="{
            top: active.pos.top,
            left: active.pos.left,
            width: active.pos.width,
            height: active.pos.height,
            background: active.bg,
            color: active.textColor,
          }"
        >{{ active.label }}</div>
        <span
          v-for="(m, i) in active.marker"
          :key="i"
          class="marker"
          :style="{ left: m.left, top: m.top, background: active.color }"
        ></span>
      </div>
    </div>

    <div class="anchors">
      <button
        v-for="a in anchors"
        :key="a.id"
        :class="{ on: active.id === a.id }"
        @click="select(a)"
      >{{ a.name }}</button>
    </div>

    <p class="desc"><strong>{{ active.name }}</strong> —— {{ active.desc }}</p>

    <div class="controls">
      <button class="ghost" @click="play">✅ 完成</button>
    </div>
  </div>
</template>

<style scoped>
.rule {
  color: #666;
  font-size: 13px;
  text-align: center;
}
.phone-wrap {
  width: 250px;
  padding: 5px;
  background: #23272f;
  border-radius: 26px;
  margin: 12px auto 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.16);
}
.phone {
  width: 240px;
  height: 400px;
  background: #f8fafc;
  border-radius: 21px;
  position: relative;
  overflow: hidden;
}
.ui-element {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  white-space: nowrap;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.18);
  z-index: 1;
  transition:
    top 0.45s ease,
    left 0.45s ease,
    width 0.45s ease,
    height 0.45s ease,
    background-color 0.3s ease,
    border-color 0.3s ease,
    border-radius 0.3s ease;
}
.ui-element.fill {
  border-style: dashed;
  border-color: rgba(124, 110, 242, 0.55);
  box-shadow: none;
  font-size: 14px;
  letter-spacing: 2px;
}
.marker {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
  z-index: 2;
  transition:
    left 0.45s ease,
    top 0.45s ease;
  animation: pulse 1.8s ease-out infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(74, 158, 255, 0.35), 0 1px 4px rgba(0, 0, 0, 0.35); }
  70% { box-shadow: 0 0 0 9px rgba(74, 158, 255, 0), 0 1px 4px rgba(0, 0, 0, 0.35); }
  100% { box-shadow: 0 0 0 0 rgba(74, 158, 255, 0), 0 1px 4px rgba(0, 0, 0, 0.35); }
}
.anchors {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 14px;
}
button {
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid #4a9eff;
  background: #fff;
  color: #4a9eff;
  cursor: pointer;
  font-size: 13px;
  transition: 0.2s;
}
button:hover { background: #eef5ff; }
button.on { background: #4a9eff; color: #fff; }
button.on:hover { background: #3d8ce0; }
button.ghost { border-color: #ccc; color: #666; }
button.ghost:hover { background: #f6f8fb; }
.desc {
  color: #444;
  font-size: 14px;
  margin: 12px 0 0;
  text-align: center;
}
.controls {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}
</style>
