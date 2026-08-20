# 三阶交互式课程转换指南

## 概述

将传统的卡片式课程（讲解卡→演示卡→测验卡）转换为「三→二→一」交互式课程：
- **观察阶段**：拨开关/拉滑杆，主动探索概念
- **示范阶段**：微动画演示正确操作
- **实践阶段**：亲手操作，判定过关

## 文件结构

```
src/
├── data/
│   ├── interactiveLessons.js    # 交互式课程数据（三阶段 setup 函数）
│   └── courses.js               # 课程列表（标记 type: 'interactive'）
├── components/
│   ├── InteractiveLesson.vue    # 交互式课程渲染组件
│   └── LessonView.vue           # 课程视图（自动检测交互式课程）
```

## 转换步骤

### 1. 在 courses.js 中标记课程

```javascript
// 找到对应的课程，添加 type: 'interactive'
{ id: 'basics-1', title: '认识 Unity 界面', type: 'interactive' },
```

### 2. 在 interactiveLessons.js 中添加课程数据

```javascript
export const interactiveLessons = {
  'basics-1': {
    id: 'basics-1',
    title: '认识 Unity 界面',
    summary: '课程完成后的总结文字',
    stages: {
      observe: {
        hint: '给学员的提示',
        camera: { pos: [0, 2, 6], target: [0, 0, 0] },
        async setup(scene, camera, THREE, { markDone, canvasRef }) {
          // 搭建场景、绑定交互
          // 调用 markDone() 完成阶段
          // 返回清理函数
          return () => { /* 清理 */ }
        },
      },
      demonstrate: {
        hint: '给学员的提示',
        camera: { pos: [0, 2, 6], target: [0, 0, 0] },
        async setup(scene, camera, THREE, { markDone }) {
          // 动画演示
          // 调用 markDone() 完成阶段
          return () => { /* 清理 */ }
        },
      },
      practice: {
        hint: '给学员的提示',
        camera: { pos: [0, 2, 6], target: [0, 0, 0] },
        successTitle: '达成标题',
        successText: '达成文字',
        async setup(scene, camera, THREE, { markDone, canvasRef }) {
          // 交互判定
          // 调用 markDone() 完成阶段
          return () => { /* 清理 */ }
        },
      },
    },
  },
}
```

## 交互模式模板

### 模式 A：开关切换（observe 阶段）

适用于：展示不同状态、切换属性、对比概念

```javascript
// 创建开关 UI
const switchPanel = document.createElement('div')
switchPanel.style.cssText = `
  position:absolute; bottom:20px; left:50%; transform:translateX(-50%); z-index:10;
  background:#fff; border-radius:14px; padding:12px 20px;
  box-shadow:0 4px 20px rgba(0,0,0,0.08); display:flex; align-items:center; gap:12px;
  font-size:14px; color:#555; user-select:none;
`
switchPanel.innerHTML = `
  <span>拨一下：看看效果</span>
  <div id="toggle" style="
    width:44px;height:24px;border-radius:12px;background:#ccc;
    cursor:pointer;position:relative;transition:background 0.3s;flex-shrink:0;
  "><div style="
    position:absolute;top:3px;left:3px;width:18px;height:18px;
    border-radius:50%;background:#fff;transition:transform 0.3s;
    box-shadow:0 1px 3px rgba(0,0,0,0.15);
  "></div></div>
`
canvasRef?.value?.parentElement?.appendChild(switchPanel)

const toggle = switchPanel.querySelector('#toggle')
const toggleDot = toggle.querySelector('div')

toggle.addEventListener('click', () => {
  toggleOn = !toggleOn
  if (toggleOn) {
    toggle.style.background = '#4a9eff'
    toggleDot.style.transform = 'translateX(20px)'
    // 执行操作
  } else {
    toggle.style.background = '#ccc'
    toggleDot.style.transform = 'translateX(0)'
    // 撤销操作
  }
})

// 计数完成
let toggleCount = 0
toggle.addEventListener('click', () => {
  toggleCount++
  if (toggleCount >= 3 && !done) {
    done = true
    markDone()
  }
})
```

### 模式 B：动画序列（demonstrate 阶段）

适用于：演示操作流程、展示变化过程

```javascript
let t = 0
let done = false
const totalDuration = 6

currentUpdateFn = (dt) => {
  if (done) return
  t += dt

  // 分阶段动画
  if (t < 2) {
    // 第一阶段
  } else if (t < 4) {
    // 第二阶段
  } else {
    // 第三阶段
  }

  if (t >= totalDuration && !done) {
    done = true
    markDone()
  }
}

return () => { done = true; currentUpdateFn = null }
```

### 模式 C：点击判定（practice 阶段）

适用于：选择正确答案、识别对象

```javascript
const rc = new THREE.Raycaster()
const mv = new THREE.Vector2()
let done = false

function onClick(e) {
  if (done) return
  const rect = canvasRef.value.getBoundingClientRect()
  mv.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
  mv.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
  rc.setFromCamera(mv, camera)
  const hits = rc.intersectObjects(meshes)
  if (!hits.length) return

  const hit = hits[0].object
  if (hit.userData.name === '正确答案') {
    done = true
    hit.material.emissive = new THREE.Color(0x22aa22)
    hit.scale.setScalar(1.3)
    markDone()
  } else {
    // 错误反馈
    hit.material.emissive = new THREE.Color(0xaa2222)
    setTimeout(() => { hit.material.emissive = new THREE.Color(0x000000) }, 300)
  }
}

canvasRef.value.addEventListener('click', onClick)

return () => {
  done = true
  canvasRef.value?.removeEventListener('click', onClick)
}
```

### 模式 D：HTML 标签叠加

适用于：给 3D 对象添加文字说明

```javascript
// 创建标签容器
const labelContainer = document.createElement('div')
labelContainer.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:5;'
canvasRef?.value?.parentElement?.appendChild(labelContainer)

// 创建标签
const labelEls = items.map(item => {
  const el = document.createElement('div')
  el.style.cssText = `
    position:absolute; text-align:center; pointer-events:none;
    background:rgba(255,255,255,0.92); border-radius:8px; padding:6px 10px;
    box-shadow:0 2px 8px rgba(0,0,0,0.1); font-size:12px; color:#555;
    transform:translate(-50%,-100%); margin-top:-8px; white-space:nowrap;
  `
  el.innerHTML = `<div style="font-weight:500">${item.name}</div>`
  labelContainer.appendChild(el)
  return el
})

// 更新标签位置（在渲染循环中调用）
function updateLabels() {
  meshes.forEach((m, i) => {
    const pos = m.position.clone()
    pos.y += 0.5
    pos.project(camera)
    labelEls[i].style.left = ((pos.x * 0.5 + 0.5) * canvasRef.value.parentElement.clientWidth) + 'px'
    labelEls[i].style.top = ((-pos.y * 0.5 + 0.5) * canvasRef.value.parentElement.clientHeight) + 'px'
  })
}

// 清理
return () => {
  labelContainer.remove()
}
```

## 常见场景转换示例

### 场景 1：概念介绍类

**原课程**：文字讲解 + 图片
**新课程**：
- 观察：拨开关看概念的不同方面
- 示范：动画展示概念的应用
- 实践：点击选择正确的概念

### 场景 2：操作流程类

**原课程**：分步文字说明
**新课程**：
- 观察：拨开关看每一步操作
- 示范：完整动画演示流程
- 实践：按正确顺序点击步骤

### 场景 3：对比区分類

**原课程**：表格对比
**新课程**：
- 观察：拨开关切换对比项
- 示范：动画展示区别
- 实践：点击选择正确选项

## 注意事项

1. **清理函数**：每个 setup 函数必须返回清理函数，移除所有动态创建的 DOM 元素
2. **canvasRef**：使用 `canvasRef?.value?.parentElement` 获取画布容器
3. **标记完成**：调用 `markDone()` 完成阶段，不要忘记
4. **错误处理**：点击错误时给出视觉反馈（红色闪烁）
5. **性能**：避免在渲染循环中创建新对象，复用已有对象

## 下一步

1. 批量转换其他课程（math/motion/logic/art 等）
2. 建立更多交互模式模板
3. 性能优化和用户体验提升
