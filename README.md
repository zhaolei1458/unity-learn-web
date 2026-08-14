# 🎮 Unity 学习工具（Web 版）

纯网页的 Unity 零基础学习工具——**概念图解 + 互动演示**，浏览器即开即学，不用装 Unity。

## 功能

- 4 大课程、21 节：入门基础 / 让世界动起来 / 画面与声音 / 游戏逻辑
- 8 个 3D/2D 互动演示：Transform、重力碰撞、相机、坐标、光照、材质、碰撞触发器、UI 锚点
- 讲解卡 → 演示卡 → 小测验卡 的学习流程
- 进度本地存档（localStorage）

## 开发

```bash
npm install      # 装依赖
npm run dev      # 本地开发，浏览器开 http://localhost:5173
```

## 部署

```bash
npm run build    # 构建，产物在 dist/
```

`dist/` 是纯静态文件，扔到任意静态托管即可：
- **GitHub Pages**：`dist/` 传到 gh-pages 分支
- **Vercel / Netlify**：Build 命令 `npm run build`，输出目录 `dist`
- **本地/内网**：把 `dist/` 整个拷到任意 Web 服务器或直接打开 `dist/index.html`

无需后端、无需数据库、无需 API key。

## 目录结构

```
src/
├─ data/courses.js          # 课程数据（加课改这里）
├─ store/progress.js        # 进度存储
├─ components/
│  ├─ HomeView.vue          # 首页（课程卡）
│  ├─ CourseView.vue        # 课程页（小节列表）
│  ├─ LessonView.vue        # 内容页（卡片流程）
│  ├─ cards/                # 卡片组件（讲解/测验/演示/图解）
│  └─ demos/                # 互动演示组件（3D/2D）
└─ three/scene.js           # Three.js 场景工具
```

## 加一课

在 `src/data/courses.js` 的 `courses` 数组加小节标题、在 `lessonCards` 加卡片内容（`text`/`quiz`/`demo`/`component`/`lifecycle`）即可，不用改组件代码。
