// 课程清单：大课程 → 小节列表
export const courses = [
  {
    id: 'basics',
    title: 'Unity 入门基础',
    emoji: '🚀',
    desc: '认识 Unity 的界面、物体、坐标',
    lessons: [
      { id: 'basics-1', title: '认识 Unity 界面' },
      { id: 'basics-2', title: '认识 GameObject' },
      { id: 'basics-3', title: '认识 Transform' },
      { id: 'basics-4', title: '认识相机' },
      { id: 'basics-5', title: '世界坐标 vs 本地坐标' },
      { id: 'basics-6', title: '场景 Scene' },
    ],
  },
  {
    id: 'math',
    title: '游戏数学',
    emoji: '🔢',
    desc: '向量、点积叉积、四元数、插值',
    lessons: [], // 小节由 src/data/extra/math.js 装载
  },
  {
    id: 'motion',
    title: '让世界动起来',
    emoji: '⚙️',
    desc: '生命周期、物理、输入、动画、粒子',
    lessons: [
      { id: 'motion-1', title: '组件与生命周期' },
      { id: 'motion-2', title: '物理与碰撞' },
      { id: 'motion-3', title: '输入控制' },
      { id: 'motion-4', title: '动画' },
      { id: 'motion-5', title: '粒子效果' },
      { id: 'motion-6', title: 'C# 脚本基础' },
      { id: 'motion-7', title: '碰撞器 vs 触发器' },
    ],
  },
  {
    id: 'logic',
    title: '游戏逻辑',
    emoji: '🧠',
    desc: '规则、通信、调试思路',
    lessons: [
      { id: 'logic-1', title: '游戏逻辑基础' },
      { id: 'logic-2', title: '对象间通信' },
      { id: 'logic-3', title: '调试思路' },
    ],
  },
  {
    id: 'art',
    title: '画面与声音',
    emoji: '🎨',
    desc: '光照、UI、音效',
    lessons: [
      { id: 'art-1', title: '光照' },
      { id: 'art-2', title: 'UI 与锚点' },
      { id: 'art-3', title: '音效' },
      { id: 'art-4', title: '预制体 Prefab' },
      { id: 'art-5', title: '材质 Material' },
    ],
  },
  {
    id: 'prog',
    title: '进阶编程',
    emoji: '📘',
    desc: '面向对象、协程、单例、事件',
    lessons: [
      { id: 'prog-1', title: '类与对象' },
      { id: 'prog-2', title: '继承与多态' },
      { id: 'prog-3', title: '协程 Coroutine' },
      { id: 'prog-4', title: '单例模式' },
      { id: 'prog-5', title: '事件与委托' },
    ],
  },
  {
    id: 'ai',
    title: 'AI 与寻路',
    emoji: '🤖',
    desc: '导航、敌人AI、射线、状态机',
    lessons: [
      { id: 'ai-1', title: 'NavMesh 导航寻路' },
      { id: 'ai-2', title: '敌人简单 AI' },
      { id: 'ai-3', title: '射线检测 Raycast' },
      { id: 'ai-4', title: '有限状态机 FSM' },
    ],
  },
  {
    id: 'perf',
    title: '性能优化',
    emoji: '⚡',
    desc: '对象池、Draw Call、Profiler',
    lessons: [
      { id: 'perf-1', title: '对象池' },
      { id: 'perf-2', title: 'Draw Call 与批处理' },
      { id: 'perf-3', title: 'Profiler 性能分析' },
      { id: 'perf-4', title: '遮挡剔除与 LOD' },
    ],
  },
  {
    id: 'arch',
    title: '游戏架构',
    emoji: '🏗️',
    desc: '设计模式、存档、资源、数据驱动',
    lessons: [
      { id: 'arch-1', title: '设计模式入门' },
      { id: 'arch-2', title: '存档系统' },
      { id: 'arch-3', title: '资源管理' },
      { id: 'arch-4', title: '数据驱动设计' },
    ],
  },
  {
    id: 'anim',
    title: '动画系统',
    emoji: '🎬',
    desc: '剪辑、状态机、混合树、事件',
    lessons: [
      { id: 'anim-1', title: '动画是什么' },
      { id: 'anim-2', title: 'Animator 状态机' },
      { id: 'anim-3', title: '混合树 Blend Tree' },
      { id: 'anim-4', title: '动画事件' },
    ],
  },
  {
    id: 'cinemachine',
    title: '相机与过场',
    emoji: '🎥',
    desc: 'Cinemachine 相机、运镜、Timeline 过场',
    lessons: [], // 小节由 src/data/extra/cinemachine.js 装载
  },
  {
    id: 'd2d',
    title: '2D 游戏开发',
    emoji: '🌐',
    desc: '精灵、物理2D、瓦片地图、角色控制',
    lessons: [
      { id: 'd2d-1', title: '精灵 Sprite' },
      { id: 'd2d-2', title: '2D 物理' },
      { id: 'd2d-3', title: '瓦片地图 Tilemap' },
      { id: 'd2d-4', title: '2D 角色控制' },
    ],
  },
  {
    id: 'render',
    title: '渲染与 Shader',
    emoji: '💡',
    desc: '渲染管线、Shader、贴图、后处理',
    lessons: [
      { id: 'render-1', title: '渲染管线是什么' },
      { id: 'render-2', title: 'Shader 基础' },
      { id: 'render-3', title: '贴图与材质进阶' },
      { id: 'render-4', title: '光照烘焙与后处理' },
    ],
  },
  {
    id: 'net',
    title: '网络与多人',
    emoji: '🔌',
    desc: '网络原理、Netcode、同步房间',
    lessons: [
      { id: 'net-1', title: '网络游戏是啥' },
      { id: 'net-2', title: 'Netcode 基础' },
      { id: 'net-3', title: '同步与房间' },
    ],
  },
  {
    id: 'editor',
    title: '编辑器扩展',
    emoji: '🎛️',
    desc: '菜单、自定义窗口、Inspector、工具',
    lessons: [
      { id: 'editor-1', title: '菜单项与快捷键' },
      { id: 'editor-2', title: '自定义窗口' },
      { id: 'editor-3', title: 'Inspector 定制' },
      { id: 'editor-4', title: 'ScriptableObject 做工具' },
    ],
  },
  {
    id: 'platform',
    title: '平台与构建',
    emoji: '📱',
    desc: '构建流程、各平台、移动优化、发布',
    lessons: [
      { id: 'platform-1', title: '构建基础' },
      { id: 'platform-2', title: '各平台差异' },
      { id: 'platform-3', title: '移动端优化' },
      { id: 'platform-4', title: '包体优化与发布' },
    ],
  },
  {
    id: 'ecs',
    title: 'ECS 与 DOTS',
    emoji: '🧱',
    desc: '数据导向、实体组件、Job 并行',
    lessons: [
      { id: 'ecs-1', title: '为什么需要 ECS' },
      { id: 'ecs-2', title: 'ECS 三大件' },
      { id: 'ecs-3', title: 'Jobs 与 Burst' },
    ],
  },
  {
    id: 'aiadv',
    title: 'AI 进阶',
    emoji: '🤖',
    desc: '行为树、寻路进阶、群体 AI',
    lessons: [
      { id: 'aiadv-1', title: '行为树 Behavior Tree' },
      { id: 'aiadv-2', title: '寻路进阶' },
      { id: 'aiadv-3', title: '群体 AI 与决策' },
    ],
  },
  {
    id: 'project',
    title: '完整项目实战',
    emoji: '🎮',
    desc: '从零做一个滚球小游戏',
    lessons: [
      { id: 'project-0', title: '动手项目：从零搭滚球游戏' },
      { id: 'project-1', title: '搭场景' },
      { id: 'project-2', title: '让小球动' },
      { id: 'project-3', title: '收集与计分' },
      { id: 'project-4', title: '胜利条件与收尾' },
    ],
  },
  {
    id: 'debug',
    title: '调试与测试',
    emoji: '🔍',
    desc: '控制台、断点、单元测试',
    lessons: [
      { id: 'debug-1', title: 'Console 与日志' },
      { id: 'debug-2', title: '断点调试' },
      { id: 'debug-3', title: '单元测试与回归' },
    ],
  },
  {
    id: 'procgen',
    title: '程序化生成',
    emoji: '🧩',
    desc: '随机、噪声地形、生成关卡',
    lessons: [
      { id: 'procgen-1', title: '随机数与种子' },
      { id: 'procgen-2', title: '噪声生成地形' },
      { id: 'procgen-3', title: '随机摆放物体' },
      { id: 'procgen-4', title: '程序化生成关卡' },
    ],
  },
  {
    id: 'shadergraph',
    title: 'Shader Graph',
    emoji: '🖌️',
    desc: '可视化 Shader，节点图',
    lessons: [
      { id: 'shadergraph-1', title: 'Shader Graph 是什么' },
      { id: 'shadergraph-2', title: '常用节点' },
      { id: 'shadergraph-3', title: '做几个效果' },
    ],
  },
  {
    id: 'physadv',
    title: '物理进阶',
    emoji: '⚙️',
    desc: '物理材质、关节、碰撞响应',
    lessons: [
      { id: 'physadv-1', title: '物理材质与刚体调校' },
      { id: 'physadv-2', title: '关节与连接' },
      { id: 'physadv-3', title: '碰撞响应与射线实战' },
    ],
  },
  {
    id: 'audio',
    title: '音频系统',
    emoji: '🎵',
    desc: '混音器、空间音效、音效管理',
    lessons: [
      { id: 'audio-1', title: 'AudioMixer 混音器' },
      { id: 'audio-2', title: '3D 空间音效' },
      { id: 'audio-3', title: '音效管理与动态音量' },
    ],
  },
  {
    id: 'inputadv',
    title: '输入系统进阶',
    emoji: '🎮',
    desc: '新版 Input、按键重映射、多设备',
    lessons: [
      { id: 'inputadv-1', title: '新版 Input System' },
      { id: 'inputadv-2', title: '按键重映射' },
      { id: 'inputadv-3', title: '多设备与触屏' },
    ],
  },
  {
    id: 'leveldesign',
    title: '关卡设计与美术',
    emoji: '🗺️',
    desc: '场景搭建、光照氛围、玩法引导',
    lessons: [
      { id: 'leveldesign-1', title: '场景搭建技巧' },
      { id: 'leveldesign-2', title: '光照与氛围' },
      { id: 'leveldesign-3', title: '玩法与引导' },
    ],
  },
  {
    id: 'uitoolkit',
    title: 'UI Toolkit',
    emoji: '🖥️',
    desc: '新一代 UI 系统，游戏界面和编辑器插件一套技术',
    lessons: [
      { id: 'uitoolkit-1', title: 'UI Toolkit 是什么' },
      { id: 'uitoolkit-2', title: '基础控件与布局' },
      { id: 'uitoolkit-3', title: '样式与 USS' },
      { id: 'uitoolkit-4', title: '运行时 UI 与编辑器扩展' },
    ],
  },
  {
    id: 'dialogue',
    title: '对话系统',
    emoji: '💬',
    desc: '剧情对话、分支选择、任务引导',
    lessons: [
      { id: 'dialogue-1', title: '对话系统是什么' },
      { id: 'dialogue-2', title: '对话数据结构' },
      { id: 'dialogue-3', title: '分支与选择' },
      { id: 'dialogue-4', title: '与游戏整合' },
    ],
  },
  {
    id: 'xr',
    title: 'VR/AR 入门',
    emoji: '🥽',
    desc: 'XR 概念、VR 交互、AR 平面检测',
    lessons: [
      { id: 'xr-1', title: 'XR 是什么' },
      { id: 'xr-2', title: 'VR 开发基础' },
      { id: 'xr-3', title: 'AR 开发基础' },
    ],
  },
]

// 每小节的卡片内容（讲解/演示/测验）
export const lessonCards = {
  'basics-1': [
    { type: 'text', title: '四个面板', body: 'Unity 编辑器有四块宝地：\n· 场景视口 —— 看得见的 3D 世界\n· 层级 —— 场景里所有物体的名单\n· 检查器 —— 选中物体的属性面板\n· 控制台 —— 报错和信息的地方\n\n刚学 Unity，先记住这四块在哪、各自管啥，后面所有操作都在它们之间打转。' },
    { type: 'quiz', question: '哪个面板能看到 3D 场景？', options: ['层级', '场景视口', '检查器'], answer: 1, tip: '场景视口就是那块能看见 3D 世界的地方，鼠标拖拽就能转视角。' },
  ],
  'basics-2': [
    { type: 'text', title: '万物皆物体', body: '场景里每个东西都是一个 GameObject（物体）——方块、灯光、相机，都是物体。\n\n物体本身是个「空壳」，能力全靠它身上的组件（Component）。比如：\n· 想让它能被看见 → 加 MeshRenderer\n· 想让它受重力 → 加 Rigidbody\n· 想让它有声音 → 加 AudioSource\n\n「物体 + 组件 = 功能」，这是 Unity 最核心的思想。' },
    { type: 'component', title: '给物体加组件', items: [
      { name: 'Transform', desc: '位置/旋转/缩放 —— 每个物体必须有' },
      { name: 'MeshRenderer', desc: '让它能被看见（有网格和材质）' },
      { name: 'Rigidbody', desc: '受物理影响（重力、力）' },
      { name: 'AudioSource', desc: '能播放声音' },
    ] },
    { type: 'quiz', question: '物体要有「能看见」的能力，靠哪个组件？', options: ['Transform', 'MeshRenderer', 'AudioSource'], answer: 1, tip: 'MeshRenderer 让物体渲染出来，不然它在场景里是隐形的。' },
  ],
  'basics-3': [
    { type: 'text', title: '位置是 XYZ', body: '每个物体都有 Transform 组件，管三件事：\n· Position 位置 —— X左右 / Y上下 / Z前后\n· Rotation 旋转 —— 绕各轴转多少度\n· Scale 缩放 —— 各方向放大缩小\n\n位置坐标 (0,0,0) 是世界的原点。想挪物体，改 Position 就对了。' },
    { type: 'demo', demo: 'TransformDemo', title: '动手拖一拖', instructions: '改下面的数值，看方块怎么变。位置 X 左右、Y 上下、Z 前后；旋转 Y 转起来；缩放放大缩小。' },
    { type: 'quiz', question: '让方块「上升」该改哪个轴？', options: ['X', 'Y', 'Z'], answer: 1, tip: 'Y 轴是上下方向，Y 变大物体就升上去了。' },
  ],
  'basics-4': [
    { type: 'text', title: '相机就是你的眼睛', body: '场景里必须有相机（Camera），玩家才看得到世界。\n\n两种相机，效果完全不同：\n· 透视相机 —— 近大远小，像人眼看世界（3D 游戏主视角）\n· 正交相机 —— 没有近大远小，像工程图纸（UI、2D 游戏常用）\n\n换相机类型，观感天差地别。' },
    { type: 'demo', demo: 'CameraDemo', title: '切换两种相机', instructions: '点按钮切换透视/正交相机，看同样一排方块，观感有什么不同。' },
    { type: 'quiz', question: '2D 游戏（比如俄罗斯方块）通常用哪种相机？', options: ['透视相机', '正交相机', '都要'], answer: 1, tip: '正交相机没有近大远小，画面平直，正适合 2D 游戏和 UI。' },
  ],
  'basics-5': [
    { type: 'text', title: '世界坐标 vs 本地坐标', body: '每个物体有两套坐标：\n· 世界坐标 —— 物体在场景里的绝对位置，全场景唯一\n· 本地坐标 —— 相对父物体的位置，父物体动了它也相对父物体不动\n\n想象坐在行驶的火车里：你的「本地位置」是车厢里的座位，永远不变；但你的「世界位置」却跟着火车一路在变。\n\nUnity 里子物体挂在父物体下（层级里的父子关系），改父物体的位置/旋转，子物体跟着动，但子物体的本地坐标始终不变。' },
    { type: 'demo', demo: 'CoordinateDemo', title: '拖一拖父方块', instructions: '改父方块的位置 X 和旋转 Y，看红方块跟着动——但它的本地坐标（相对父方块）始终是 (0,1,0)，世界坐标却一直在变。' },
    { type: 'quiz', question: '把父方块往右移了 2 个单位，子方块的本地坐标会怎样？', options: ['跟着变成 2', '始终不变', '变回原点'], answer: 1, tip: '本地坐标是相对父物体算的，父物体怎么动都不影响它；变的是子物体的世界坐标。' },
  ],
  'basics-6': [
    { type: 'text', title: '场景是你的舞台', body: '场景（Scene）就像游戏的一个「舞台」——里面放你搭好的物体、灯光、相机。\n\n一个游戏可以有很多场景：主菜单一个、第 1 关一个、第 2 关一个……游戏运行时在场景之间切换。\n\n搭场景 = 摆物体、设灯光、摆相机，把这一关的世界搭出来。' },
    { type: 'quiz', question: '「第 1 关」和「第 2 关」通常怎么做？', options: ['做两个场景', '做两个相机', '写两段代码'], answer: 0, tip: '每个关卡通常是一个独立场景，游戏在场景间切换。' },
  ],
  'motion-1': [
    { type: 'text', title: '生命周期', body: '挂在物体上的脚本，会按固定顺序被 Unity 调用：\n· Awake —— 物体出生时，先跑一次\n· Start —— 游戏开始前，跑一次\n· Update —— 每一帧都跑（大约每秒几十次）\n· OnDestroy —— 物体销毁前\n\n想在开始时做一次准备 → Awake/Start；想持续动 → Update。' },
    { type: 'lifecycle', title: '看看触发顺序', items: [
      { name: 'Awake', desc: '出生时，初始化用' },
      { name: 'Start', desc: '开局前，跑一次' },
      { name: 'Update', desc: '每帧都跑，持续逻辑' },
      { name: 'OnDestroy', desc: '销毁前，清理用' },
    ] },
    { type: 'quiz', question: '哪段代码每帧都会执行？', options: ['Awake()', 'Start()', 'Update()'], answer: 2, tip: 'Update 每帧都调用，是让物体持续运动/响应的主力。' },
  ],
  'motion-2': [
    { type: 'text', title: '重力与碰撞', body: '想让物体「活」得像真的一样，两个组件上场：\n· Rigidbody（刚体）—— 让它受物理影响：重力、力、运动\n· Collider（碰撞器）—— 让它能跟别的物体碰\n\n有 Rigidbody 没 Collider，物体从世界掉下去；两个有 Collider 的物体才会相撞。两者常一起用。' },
    { type: 'demo', demo: 'GravityDemo', title: '试试重力和碰撞', instructions: '点「开重力」看方块受重力下落砸地；点「加碰撞」看两个方块相撞弹开。' },
    { type: 'quiz', question: '物体要受重力，需要哪个组件？', options: ['Collider', 'Rigidbody', 'MeshRenderer'], answer: 1, tip: 'Rigidbody（刚体）让物体进入物理系统，重力是物理系统的一部分。' },
  ],
  'motion-3': [
    { type: 'text', title: '输入控制', body: '游戏「活」起来的第一步：响应玩家的输入。\n\n键盘：Input.GetAxis("Horizontal") 读左右键\n鼠标：点击、移动、滚轮\n触摸：手机上的点按滑动\n\n读输入 → 改物体位置/状态，就实现「按方向键移动物体」这类控制了。' },
    { type: 'quiz', question: '按键 WASD 控制物体移动，靠读取哪类输入？', options: ['键盘输入', '鼠标输入', '触摸输入'], answer: 0, tip: '键盘输入用 Input.GetKey / GetAxis 读取按键状态。' },
  ],
  'motion-4': [
    { type: 'text', title: '动画是怎么来的', body: '动画 = 不断变化。Unity 里做动画有两条路：\n· 动画剪辑（Animation Clip）—— 把物体的位置/旋转/缩放随时间录下来回放\n· 动画控制器（Animator）—— 管理多个动画之间的切换（待机 → 跑 → 跳）\n\n简单说：想做个会动会跳的角色，就是给它的「变化」安排好时间轴。' },
    { type: 'quiz', question: '管理多个动画切换（如待机→跑步）用什么？', options: ['Animation Clip', 'Animator 控制器', 'Particle System'], answer: 1, tip: 'Animator 控制器像导演，决定什么时候放哪段动画。' },
  ],
  'motion-5': [
    { type: 'text', title: '粒子效果', body: '粒子系统（Particle System）专门做「大量小东西」的效果——火焰、烟雾、雨雪、爆炸。\n\n它像一台「撒粒子机」：设定粒子数量、速度、大小、颜色、寿命，系统就不断往外喷粒子，组合出各种特效。' },
    { type: 'demo', demo: 'ParticleDemo', title: '粒子系统演示', instructions: '点「发射」看粒子向上喷出、受重力落地消失；点「爆炸」看粒子向四周炸开。' },
    { type: 'quiz', question: '做一团火焰特效，通常用什么？', options: ['MeshRenderer', 'Particle System', 'AudioSource'], answer: 1, tip: '粒子系统是 Unity 做火焰/烟雾/爆炸的首选。' },
  ],
  'motion-6': [
    { type: 'text', title: '脚本是游戏的剧本', body: '脚本（Script）就是用 C# 写的「剧本」，告诉物体该做什么。\n\n最核心的要素：\n· 变量 —— 存数据（血量、速度、分数）\n· 函数 —— 一段可重复用的动作\n· 判断 if —— 满足条件才执行\n\n把脚本拖到物体上，物体就按剧本活起来。' },
    { type: 'quiz', question: '想存「分数」这个数，用代码里的什么？', options: ['变量', '函数', '循环'], answer: 0, tip: '变量就像一个小盒子，存一个数（如 int score = 0）。' },
  ],
  'logic-1': [
    { type: 'text', title: '游戏逻辑是什么', body: '游戏逻辑 = 规则。比如「碰到敌人扣血」「金币 +1」「按空格跳跃」。\n\n逻辑写在脚本（Script）里——用 C# 代码描述「发生什么 → 怎么做」。\n\n判断（if）、循环（for/while）、变量、函数，这些代码基本功就是写逻辑的工具。' },
    { type: 'quiz', question: '「碰到敌人就扣血」属于什么？', options: ['渲染逻辑', '游戏逻辑', '动画逻辑'], answer: 1, tip: '游戏逻辑是游戏的规则，决定游戏怎么玩。' },
  ],
  'logic-2': [
    { type: 'text', title: '物体之间怎么通信', body: '一个物体怎么让另一个物体做事？常见几种：\n· 引用 —— 脚本里存另一个物体的引用，直接调它的方法\n· 事件（Event）—— A 发通知，B 响应\n· 消息（SendMessage）—— 按名字调用方法\n\n就像说话：直接喊、广播通知、点名，各有用途。' },
    { type: 'quiz', question: '脚本里直接调用另一个物体组件的方法，靠什么？', options: ['引用', '随机数', '物理引擎'], answer: 0, tip: '拿到另一个物体的引用，就能调用它的方法（如 GetComponent<Player>().TakeDamage()）。' },
  ],
  'logic-3': [
    { type: 'text', title: '调试思路', body: '游戏出 bug 了怎么办？别慌，按路子来：\n1. 复现 —— 让问题稳定出现\n2. 定位 —— 看控制台报错（Console）、打断点、打印日志（Debug.Log）\n3. 修 —— 改代码，再验证\n\nDebug.Log 是最常用的「探针」，在关键位置打印值，看哪一步不对。' },
    { type: 'quiz', question: '想在代码里打印一个值看对不对，用什么？', options: ['Debug.Log()', 'Vector3', 'Rigidbody'], answer: 0, tip: 'Debug.Log(变量) 会在控制台输出值，是排查问题最常用的手段。' },
  ],
  'art-1': [
    { type: 'text', title: '光是看得见的魔法', body: '没有光，再好看的物体也是一团黑。Unity 里常用三种灯光：\n· 平行光（Directional）—— 光从同一个方向照来，全场景均匀，像太阳\n· 点光源（Point）—— 从一个点向四周发散，近亮远暗，像灯泡\n· 聚光灯（Spot）—— 锥形光柱，只照亮锥内，像手电筒\n\n场景里可以同时放多盏灯，颜色、强度、位置不同，画面氛围完全不同。' },
    { type: 'demo', demo: 'LightDemo', title: '切换三种灯光', instructions: '点按钮切换平行光/点光源/聚光灯，看同一批彩球方块在三种光照下有什么不同；灯光位置有小球标记。' },
    { type: 'quiz', question: '想让全场景像太阳一样均匀照亮，用哪种灯光？', options: ['点光源', '聚光灯', '平行光'], answer: 2, tip: '平行光从同一方向照来，近远一样亮，最适合做太阳。' },
  ],
  'art-2': [
    { type: 'text', title: 'UI 与锚点', body: 'UI（用户界面）就是游戏里能点的按钮、能看的血条和文字，它们都铺在一块叫 Canvas（画布）的大布上。\n\n锚点（Anchor）决定 UI 元素相对屏幕哪里：\n· 锚点在左上角 → 元素跟着左上角走\n· 锚点在底部居中 → 元素始终待在底部中间\n· 锚点四角拉开 → 元素填满整块画布\n\n改锚点、不改坐标，元素也会自动换位置——这就是 UI 能适应不同屏幕的关键。' },
    { type: 'demo', demo: 'UILayoutDemo', title: '点一点锚点布局', instructions: '点锚点按钮，看屏幕里的元素怎么跟着锚点移动。锚点钉在哪，元素就贴在哪。' },
    { type: 'quiz', question: '想做一个始终贴在屏幕底部中间的「开始按钮」，锚点该设在哪个位置？', options: ['左上角', '底部居中', '右下角'], answer: 1, tip: '锚点钉在底边中点，按钮就永远待在屏幕底部中间。' },
  ],
  'art-3': [
    { type: 'text', title: '声音怎么加', body: '给物体加一个 AudioSource 组件，再放一个音频文件（音乐/音效），它就能发声。\n\n要点：\n· AudioSource —— 负责「播放」（像喇叭）\n· AudioListener —— 场景里通常一个，负责「听」（像耳朵，一般挂在主相机上）\n\n想播哪段、调多大音量、是否循环，都在 AudioSource 里设置。' },
    { type: 'quiz', question: '负责「播放」声音的组件是？', options: ['AudioListener', 'AudioSource', 'AudioMixer'], answer: 1, tip: 'AudioSource 是喇叭，AudioListener 是耳朵。' },
  ],
  'art-4': [
    { type: 'text', title: '预制体：可复用的模板', body: '预制体（Prefab）是「做好的物体的模板」——做好一个敌人/道具，存成预制体，就能在场景里反复放，改模板所有副本一起变。\n\n好处：\n· 一次做好，到处放\n· 改一个模板，所有用它的物体跟着变\n· 程序里还能随时生成（Instantiate）\n\n做游戏大量用到它。' },
    { type: 'quiz', question: '想在场景里放 100 个相同的小怪，最高效的做法？', options: ['一个个手动做', '做一个预制体反复放', '写 100 段代码'], answer: 1, tip: '预制体是模板，放 100 个实例又快又好改。' },
  ],
  'art-5': [
    { type: 'text', title: '材质就是物体的「皮肤」', body: '材质（Material）决定一个物体看起来是什么样——颜色、反光、金属感，都靠它。\n\n以最常用的 Standard 材质为例，关键就几个数：\n· Color 颜色 —— 物体本身是什么颜色\n· Metallic 金属度 —— 调大像金属（有反光），调小像塑料/陶瓷\n· Roughness 粗糙度 —— 越小越光滑、高光越亮，越大越磨砂\n\n同样一个球，换个材质参数，能像塑料、像金属、像镜子。' },
    { type: 'demo', demo: 'MaterialDemo', title: '把玩一下材质', instructions: '点颜色按钮换色；拖「金属感」滑块看球变金属，拖「光滑度」滑块看高光亮不亮。' },
    { type: 'quiz', question: '想让球的表面像抛光的金属，应该怎么调？', options: ['金属度调大、粗糙度调小', '金属度调大、粗糙度调大', '只把颜色换亮一点'], answer: 0, tip: 'Metallic 调大更像金属；Roughness 调小表面更光滑、高光更集中更亮。' },
  ],
  'motion-7': [
    { type: 'text', title: '碰撞器 vs 触发器', body: 'Collider（碰撞器）是「实体」，挡住别的物体，两物相撞有反应。\n\n触发器（勾上 Is Trigger 的碰撞器）是「感应区」：物体穿过去不挡、不弹，但会触发事件（比如开灯、加血、播动画）。\n\n一句话：碰撞 = 实体阻挡；触发器 = 只感应、不阻挡。' },
    { type: 'demo', demo: 'CollisionDemo', title: '碰撞 vs 触发器', instructions: '点「发射」把球打向墙。碰撞模式下球被弹开；切到触发器模式，墙变半透明，球直接穿过去、墙闪绿一下。' },
    { type: 'quiz', question: '想让角色「穿墙而过」又能在穿过时触发事件，墙该设成什么？', options: ['普通 Collider', 'Is Trigger 触发器', 'Rigidbody'], answer: 1, tip: '勾上 Is Trigger 的碰撞器是感应区，只触发事件、不产生物理阻挡。' },
  ],
  'prog-1': [
    { type: 'text', title: '类与对象', body: '「类」和「对象」是面向对象语言（C#、Java、C++）的根，也是 Unity 里一切代码的地基。\n\n一句话：类 = 蓝图，对象 = 实例。\n\n拿做包子打比方：\n· 类（Class）—— 那张「做包子的配方」，写明白包子有什么（属性：馅料、大小）、能干什么（方法：被咬一口）\n· 对象（Object）—— 按配方做出来的一个个真包子，每个都是独立的一只\n\n你写脚本，就是写一张新配方：\npublic class Player : MonoBehaviour {\n    public int health = 100;   // 属性：血量\n    void Jump() { ... }        // 方法：跳跃\n}\n\nUnity 把这张配方挂到物体上时，会按配方给每个物体「做一份」——这叫实例化。场景里 3 个物体都挂同一个 Player 脚本，就是 3 个 Player 对象，各有各的血量，互不干扰。\n\n为什么说 Unity 处处是类？Transform、Rigidbody、Camera……每一个组件都是一个类，GameObject 也是类。你在检查器里看到的每个组件，都是某个类的「一个对象」。理解了「类=配方、对象=成品」，再看 Unity 里全是类，就通了。' },
    { type: 'quiz', question: '你在场景里摆了 3 个方块，都挂了同一个 Enemy 脚本（脚本里有血量变量）。下面哪个说法对？', options: ['3 个方块共享一份血量，改一个全变', '3 个方块各有各的血量，互相独立', '挂脚本后每个方块都重新生成一份 Enemy 类'], answer: 1, tip: '脚本是「配方（类）」，挂到物体上就按配方做出独立的对象（实例），血量各归各的。' },
  ],
  'prog-2': [
    { type: 'text', title: '继承与多态', body: '继承（Inheritance）让一个类「继承」另一个类的家底。\n\n写法很简单：\npublic class Animal { public void Eat() { ... } }\npublic class Dog : Animal { public void Bark() { ... } }\n\nDog 后面冒号跟 Animal，Dog 就是 Animal 的子类。子类自动拥有父类的字段和方法——Dog 不用重写 Eat，直接用；还能加自己的新东西（Bark），也能覆盖父类的方法（override）。\n\n多态（Polymorphism）是继承带来的最大好处：一个父类类型的变量，能装下任意子类对象。\n\nList<Enemy> enemies = new List<Enemy>();\nenemies.Add(new Slime());\nenemies.Add(new Goblin());\nforeach (Enemy e in enemies) {\n    e.Attack();   // 同一个方法名，Slime 黏糊糊地扑、Goblin 嗷嗷地砍\n}\n\n你只管把它们当 Enemy 统一处理，具体怎么 Attack 各显神通——这就是多态。\n\nUnity 里处处是继承：你的每个脚本都继承自 MonoBehaviour（所以能用 Start/Update）。写不同类型敌人时，通常先做一个 Enemy 基类，Slime、Goblin 继承它，游戏逻辑里用 List<Enemy> 一锅管理。' },
    { type: 'quiz', question: 'Slime 和 Goblin 都继承自 Enemy，用 List<Enemy> 装它们，再对每个调用 Attack()，会发生什么？', options: ['编译报错，类型不统一', '只调用 Enemy 自己的 Attack', '每个对象调用自己覆盖后的 Attack，各自动作'], answer: 2, tip: '多态的关键：父类引用调同名方法，实际执行的是各子类自己覆盖的版本。' },
  ],
  'prog-3': [
    { type: 'text', title: '协程 Coroutine', body: '协程（Coroutine）是 Unity 里做「延时逻辑」的头号工具。\n\n最常见的需求：让敌人「先攻击，等 1 秒，再攻击」。用 Update 做会很别扭——你得自己计时。而协程让这件事像写流水账一样直白：\n\nIEnumerator AttackLoop() {\n    while (true) {\n        Attack();                          // 先攻击\n        yield return new WaitForSeconds(1f); // 挂起，等 1 秒\n    }\n}\n\n关键就两样：\n· 返回类型必须是 IEnumerator\n· yield return 是「暂停点」——协程跑到这一行就停住，等条件满足再接着往下走\n\nyield return 后面跟什么，决定等多久：\n· WaitForSeconds(2f) —— 等 2 秒\n· null —— 等一帧\n· WaitForEndOfFrame() —— 等这一帧画面结束\n\n启动它用 StartCoroutine(AttackLoop());，注意不是直接调用函数名。\n\n协程和 Update 的区别要记牢：\n· Update 每帧都跑，你不能让它「中途停下来等一会儿」\n· 协程可以暂停、等待、恢复，专门写分阶段的流程\n· 协程不是多线程！它仍在主线程上，只是被拆成「等一等再继续」的一段段\n\n凡是「先……等……再……」「渐变色慢慢变」「剧情演出走一步停一步」，都是协程的拿手好戏。' },
    { type: 'quiz', question: '想让爆炸特效「显示 0.5 秒后消失」，下面哪个是协程最地道的写法？', options: ['在 Update 里每帧检查是否过了 0.5 秒', '用 yield return new WaitForSeconds(0.5f) 再隐藏', '写个循环死转 500 次再隐藏'], answer: 1, tip: 'yield return new WaitForSeconds(0.5f) 让协程挂起等 0.5 秒，代码像流水账一样顺着写，正是协程的意义。' },
  ],
  'prog-4': [
    { type: 'text', title: '单例模式', body: '单例（Singleton）解决一个很常见的问题：有些东西整个游戏只有一份，谁都要能随时访问——比如 GameManager（总管理）、AudioManager（声音管理）。\n\n如果每个脚本都存一个 GameManager 引用，得一个个拖拽赋值，麻烦还容易漏。单例的思路：让这个类自己保存「唯一的那一份」，谁需要谁直接取。\n\npublic class GameManager : MonoBehaviour {\n    public static GameManager Instance;\n\n    void Awake() {\n        Instance = this;   // 出生时把自己存进去\n    }\n\n    public void GameOver() { ... }\n}\n\n之后任何脚本都能一行拿到它：GameManager.Instance.GameOver();\n\nstatic 是关键——静态成员属于「类」而不是某个对象，全项目只有一份。\n\n什么场景适合用单例：\n· 全局只有一份的管理者：GameManager、AudioManager、UI 管理器\n· 需要被各种零散脚本随手访问\n\n要小心两件事：\n· 场景里别放两个 GameManager，否则 Awake 会被覆盖出 bug\n· 想跨场景保留，通常加 DontDestroyOnLoad(gameObject)\n· 别滥用——什么都做成单例，类之间会缠成一团乱麻。玩家、敌人这种一堆的东西，不该用单例' },
    { type: 'quiz', question: '下面哪个情况最适合用单例模式？', options: ['一个关卡里的 50 个敌人', '全局唯一的 GameManager，任何脚本都要访问它', '每个物体的独立血条'], answer: 1, tip: '单例适合「全局唯一、到处要访问」的管理者；一堆同类的东西（敌人、血条）不该用单例。' },
  ],
  'prog-5': [
    { type: 'text', title: '事件与委托', body: '先理解委托（delegate）——它其实就是「方法的变量」。\n\n普通的变量存数：int score = 100;\n委托存方法：MyAction act = Jump;   // 把 Jump 这个方法装进变量\n然后 act(); 就等于调用了 Jump();\n\n为什么要把方法装进变量？因为能传：A 把自己做事的方法交给 B，让 B 在合适的时机调用——B 根本不认识 A，也能让 A 动起来。\n\n事件（event）是在委托外面又套了一层壳，变成「广播」：\n· 发事件的人不用知道谁会响应，只管广播\n· 想响应的人自己「订阅」就行\n\npublic static event System.Action OnBossDied;   // 声明一个事件\n\nBoss 死的时候广播：OnBossDied?.Invoke();        // ?. 表示没订阅者也不报错\n\n别处想响应，订阅一下：\nvoid OnEnable() => GameManager.OnBossDied += AddScore;    // 订阅（+=）\nvoid OnDisable() => GameManager.OnBossDied -= AddScore;   // 退订（-=）\n\nBoss 脚本从头到尾不知道「谁在听」，只管广播。加血、播音效、刷下一波怪的脚本各自订阅自己的响应——这就是解耦。\n\nUnity 还给了更方便的 UnityEvent：能在 Inspector 面板里直接拖拽接线，不用写代码——UI 按钮的 onClick 就是典型。' },
    { type: 'quiz', question: '场景里有「Boss 死亡」这个时刻，需要「加分」「播音效」「刷下一波怪」三个互不相干的系统各自响应。最干净的做法是？', options: ['Boss 脚本里分别调用三个系统的方法', 'Boss 用一个事件广播，三个系统各自订阅', '让三个系统每帧检查 Boss 死没死'], answer: 1, tip: '事件让 Boss 只广播、不点名，三个系统各自订阅，互不认识也互不影响——这就是解耦。' },
  ],
  'ai-1': [
    { type: 'text', title: 'NavMesh 导航寻路', body: '让敌人自动绕开墙走到玩家面前，不用自己一行行写寻路算法——Unity 早就备好了：NavMesh + NavMeshAgent。\n\n流程三步走：\n1. 把地面标成 Navigation Static，在 Window → AI → Navigation 里点 Bake（烘焙），把「能走的路」烤成一张导航网格\n2. 给敌人加上 NavMeshAgent 组件，它就是敌人自己会开路的「司机」\n3. 代码里一句 agent.SetDestination(玩家位置)，敌人就开始绕障碍走过去了\n\n关键参数：Radius 越大越贴不了墙角；Speed 是走路速度；Stopping Distance 是停在离目标多远处。烘焙完按 N 键能看到蓝色网格——蓝色盖住的地方才是 Agent 走得过去的。\n\n坑：敌人得先落在网格上才能走；动态挡路的门、塌下来的墙，要么勾 Navigation Static 的 Dynamic，要么单独处理，否则 Agent 会一头撞上去。' },
    { type: 'demo', demo: 'NavMeshDemo', title: '寻路演示', instructions: '点击地面任意位置，看小球绕开障碍走到目标——这就是寻路的效果。' },
    { type: 'quiz', question: '让角色自动绕开障碍走到目标，核心组件是哪个？', options: ['Rigidbody', 'NavMeshAgent', 'CharacterController'], answer: 1, tip: 'NavMeshAgent 会自己沿着烘焙好的导航网格找路、绕障碍，你只要告诉它目的地。' },
  ],
  'ai-2': [
    { type: 'text', title: '敌人简单 AI：巡逻→发现→追踪', body: '敌人 AI 最经典的套路：巡逻 → 发现 → 追踪。核心就一句话——用距离判断状态。\n\n怎么量距离：\n· Vector3.Distance(敌人位置, 玩家位置)，或\n· (玩家位置 - 敌人位置).magnitude\n\n套路骨架：\n· 巡逻：在几个巡逻点之间来回走\n· 发现：if (距离 < 发现范围) → 切换成追踪\n· 追踪：每帧朝玩家走（配合 NavMeshAgent.SetDestination）\n· 攻击：if (距离 < 攻击范围) → 开火、挥刀\n· 跟丢：if (距离 > 脱离范围) → 退回巡逻\n\n记住一个坑：发现范围要小于脱离范围，留出缓冲带，不然敌人会在边界反复横跳，像抽风一样。数值留点余量，AI 才显得自然。' },
    { type: 'quiz', question: '敌人从「巡逻」切到「追踪」，靠什么触发？', options: ['动画播完', '和玩家的距离小于发现范围', '时间到 10 秒'], answer: 1, tip: '距离判断是敌人 AI 最常用的触发器，每帧量一次距离，够近就切换状态。' },
  ],
  'ai-3': [
    { type: 'text', title: '射线检测 Raycast', body: '射线 = 从一点朝一个方向打一根看不见的线，看它撞到什么。撞到就返回 true，还能拿到撞点坐标和撞到的是谁。\n\n基本写法：\nPhysics.Raycast(起点, 方向, out RaycastHit hit, 最大距离)\n· hit.point —— 撞到的那个点\n· hit.collider / hit.transform —— 撞到的物体\n\n三个最常见的用途：\n· 射击：枪口向前打一根射线，命中谁就扣谁血\n· 点击选物体：相机向点击位置发一条射线（Camera.ScreenPointToRay），撞到谁选谁\n· 视线检测：AI 判断「我看得见玩家吗」——中间隔堵墙，射线就被墙截住，说明看不见\n\n调试小技巧：用 Debug.DrawRay 画出来，在 Scene 视口能亲眼看见这根线打到了哪。' },
    { type: 'demo', demo: 'RaycastDemo', title: '射线检测演示', instructions: '点击场景里的方块，看射线从相机射出、方块高亮——这就是射线拾取。' },
    { type: 'quiz', question: '想实现「鼠标点击选物体」，第一步该把屏幕坐标转成什么？', options: ['世界坐标', '一条从相机发出的射线', '一个音效'], answer: 1, tip: '先用 Camera.ScreenPointToRay 把屏幕点转成射线，再用 Physics.Raycast 检测它撞到谁。' },
  ],
  'ai-4': [
    { type: 'text', title: '有限状态机 FSM', body: '把 AI 干的事拆成几个「状态」，每个状态管一块逻辑，状态之间按条件切换——这就是有限状态机（FSM）。名字听着唬人，写起来就两样东西：\n\n1. 一个枚举列状态：\nenum EnemyState { 待机, 巡逻, 追踪, 攻击 }\n\n2. 一个变量记当前状态，Update 里按状态分头办事：\nswitch (当前状态) {\n  case 待机: ... break;\n  case 巡逻: ... break;\n  case 追踪: ... break;\n}\n\n状态切换 = 改这个变量：发现玩家 → 当前状态 = 追踪。\n\n好处立竿见影：一长串 if 缠成乱麻的代码，变成一块块互不打扰的格子；想加新行为，加一个枚举值加一个 case 就行，不用碰其他逻辑。' },
    { type: 'demo', demo: 'FSMDemo', title: '状态机演示', instructions: '点「发现敌人」看角色从巡逻切到追踪、接近后攻击；点「敌人消失」回到巡逻。' },
    { type: 'quiz', question: '状态机里「从一个状态切到另一个状态」，本质是在做什么？', options: ['改记录当前状态的变量', '删掉旧的代码', '重启游戏'], answer: 0, tip: '切换状态就是改当前状态那个变量，Update 每帧按这个变量决定执行哪块逻辑。' },
  ],
  'perf-1': [
    { type: 'text', title: '对象池：别反复生、反复死', body: '子弹、敌人这类东西，打一发 new 一个、打中又销毁，一多就卡。为什么？\n\n每次 Instantiate（生成）和 Destroy（销毁），都要向系统申请/归还内存，还伴随垃圾回收（GC）——GC 一跑，游戏就卡顿一下。\n\n对象池的思路很简单：\n· 开局先一口气建好一堆（比如 50 颗子弹），放「池」里藏起来\n· 要用时从池里取一颗，设好位置放出来\n· 用完不销毁，而是收回池里、藏起来等下次再用\n\n一句话：借了要还，别每次都现买现扔。做子弹、敌人、特效必备，尤其适合大量、频繁出现的物体。' },
    { type: 'demo', demo: 'ObjectPoolDemo', title: '对象池对比演示', instructions: '左边直接生成、右边对象池复用，点「连发」对比两边的小球数和流畅度。' },
    { type: 'quiz', question: '用对象池以后，物体用完会怎样？', options: ['直接销毁，释放内存', '收回池里，下次接着用', '留在原地不动'], answer: 1, tip: '对象池把用完的物体收回池子复用，避免反复生成销毁带来的卡顿和 GC 抖动。' },
  ],
  'perf-2': [
    { type: 'text', title: 'Draw Call：一帧里 GPU 被叫了几次', body: 'Draw Call（绘制调用）就是「一帧里 CPU 向 GPU 提交一次绘制命令」。命令越多，CPU 越忙，游戏越卡。\n\n几十个各不相同的物体 → 几十次 Draw Call，扛得住；几百上千个 → CPU 直接累趴。\n\n怎么少提交几次？核心思路——让 GPU 一次画更多：\n· 同材质合并 —— 长得一样的物体尽量用同一个材质，Unity 才能把它们合批（Batching）一次画完\n· 图集（Atlas）—— UI 和 2D 的小图片拼成一张大图，一次提交画一大片\n· 少用独立的透明物体、少打动态光照，都能减少绘制开销\n\n记着：同材质物体越多越省，五花八门越多越卡。' },
    { type: 'quiz', question: '想让 100 个长得一样的方块尽量少占用 Draw Call，最有效的做法？', options: ['每个方块用不同材质', '统一用同一个材质，让 Unity 合批', '给每个方块加独立光照'], answer: 1, tip: '同材质是合批的前提，Unity 能把同材质物体合并成一次绘制提交。' },
  ],
  'perf-3': [
    { type: 'text', title: '先测再优化：别瞎猜', body: '卡了别慌，先别急着改代码——先搞清楚到底卡在哪。用 Profiler（性能分析器）看数据：\n\n· Window → Analysis → Profiler 打开\n· 看 CPU 耗在哪 —— 是脚本逻辑？物理？渲染？\n· 看 GPU 耗在哪 —— 是不是画面渲染太重\n· 看内存（Memory）—— 是不是一直涨（多半是泄漏/GC 太频繁）\n\n优化的大忌是「凭感觉改」。先拿数据定位瓶颈：是 CPU 卡还是 GPU 卡？是哪个函数最贵？找准了再动手，往往几行就见效。' },
    { type: 'quiz', question: '游戏卡了，第一步应该做什么？', options: ['凭感觉把贴图全换成小的', '用 Profiler 找到瓶颈再优化', '把脚本全删了重写'], answer: 1, tip: '先测后优是铁律，Profiler 会告诉你 CPU、GPU、内存各耗在哪，对症下药才有效。' },
  ],
  'perf-4': [
    { type: 'text', title: '看不到的别画：遮挡剔除与 LOD', body: '场景大了以后，真正画在屏幕上的往往只是一小部分，剩下全是白费功夫。两个省法：\n\n· 遮挡剔除（Occlusion Culling）—— 被墙挡住的物体不渲染。相机看不见它们，就不提交绘制，省下大量 GPU 开销\n· LOD（多细节层次）—— 同一个物体准备几档模型：近处用高模（细节多），远处用低模（省），再远的用一张图代替甚至不画\n\n玩法：远处一棵树的细节根本没人看得出来，换成低模毫无差别，帧数却能明显上去。\n\n一句话：看不见的、看不清的，别按最高规格画。' },
    { type: 'quiz', question: '被一座大山完全挡住、相机看不见的房子，开遮挡剔除后会怎样？', options: ['照样完整渲染', '不渲染，省下绘制开销', '自动变成线框'], answer: 1, tip: '遮挡剔除会跳过相机看不到的物体，不向 GPU 提交绘制，从而省性能。' },
  ],
  'arch-1': [
    { type: 'text', title: '设计模式入门', body: '设计模式不是高深的武林秘籍，就是前辈们踩坑踩出来的「常用套路」。游戏里有两招最常用：\n\n· 状态模式 —— 一个角色有不同状态（待机/跑/跳/攻击），每个状态的行为不一样。别用一堆 if 把状态全搅在一个 Update 里，而是把「每个状态」拆成独立的类/脚本，到点就切换。好处：加新状态只加一块，老代码不用动。\n· 观察者模式 —— 一处发出通知，多处同时响应。比如「敌人死了」这个事件，得分系统要加分、音效要播放、任务系统要记一笔，谁都不用知道别人存在，只听通知就行。\n\n一句话：状态模式管「行为怎么切换」，观察者模式管「事情怎么广播」。小游戏用不上，游戏一复杂，这两招能让你的代码不变成一团乱麻。' },
    { type: 'quiz', question: '「敌人死亡时，得分系统、音效、任务系统都要响应」，最适合用什么模式？', options: ['状态模式', '观察者模式', '工厂模式'], answer: 1, tip: '观察者模式就是一处广播、多处监听，彼此互不依赖。状态模式管的是行为切换，不是事件广播。' },
  ],
  'arch-2': [
    { type: 'text', title: '存档系统', body: '游戏关掉再打开，进度还在——这就是存档。Unity 里从简单到复杂，两条路：\n\n· PlayerPrefs —— 最简单的键值对存档，适合存「开关、音量、最高分」这类少量简单数据。一行代码：PlayerPrefs.SetInt("金币", 100) 存，PlayerPrefs.GetInt("金币") 读，它自动落盘。\n· JSON 序列化 —— 想存「背包列表、玩家属性、整关的存档」这种复杂结构，就先把数据转成 JSON 字符串，写进文件（或 PlayerPrefs），读的时候再转回来。自己写一套 Save/Load 函数，代码里一个 SaveData 类统一管。\n\n套路都一样：收集数据 → 存下来；读回来 → 填回去。区别只是「存哪里、存什么格式」。' },
    { type: 'quiz', question: '想存「玩家背包里 50 件装备」这种复杂数据，最合适的做法？', options: ['用 PlayerPrefs 一件件存', '把整个存档对象转成 JSON 统一存取', '写进代码里写死'], answer: 1, tip: '复杂数据用 JSON 序列化成一个结构整体存取，好维护也好扩展；PlayerPrefs 适合存零散的简单数值。' },
  ],
  'arch-3': [
    { type: 'text', title: '资源管理', body: '模型、贴图、音效都是资源。资源怎么加载、什么时候释放，直接决定游戏卡不卡、内存爆不爆。三种路数：\n\n· Resources 文件夹 —— 放在 Assets/Resources 里的东西，用 Resources.Load("名字") 直接加载。最省事，适合原型和小项目，但所有资源都打进去，包大、加载慢。\n· AssetBundle —— 把资源打成一个个「包」，运行时按需下载/加载，适合大游戏热更新。手动管理，麻烦但灵活。\n· Addressables —— 现在的官方推荐，把「按名字加载」和「打包管理」的优点都占了，还能自动管引用计数和内存释放。新项目优先学它。\n\n共通的省钱心法：资源用完就卸载，别把「可能用到」的东西一直占着内存；能共用就共用（材质、图集），别每个物体各来一份。' },
    { type: 'quiz', question: '新项目想做资源按需加载、自动管理内存，优先选哪个？', options: ['Resources', 'AssetBundle', 'Addressables'], answer: 2, tip: 'Addressables 是官方现在的推荐方案，能按需加载又能自动管理引用和释放。Resources 最省事但不适合大项目。' },
  ],
  'arch-4': [
    { type: 'text', title: '数据驱动设计', body: '小游戏常犯的毛病：怪物的血量、关卡的时间、掉落的概率全写死在代码里。想调平衡，就得翻代码、改数值、重新编译，还容易手滑改错。\n\n数据驱动的思路：把「数值和配置」从代码里拆出来，代码只负责「按数据执行」。\n\n· ScriptableObject —— Unity 亲儿子，在编辑器里建「配置资产」，一个敌人一张卡，面板上直接改数值，不用碰代码。最适合做道具表、敌人表。\n· JSON 文件 —— 把关卡配置写在 JSON 里，程序加载时读。适合大量、需要外部工具生成的数据。\n· Excel 导出 —— 策划在 Excel 里配表，一键导成 JSON/CSV。团队协作、数据量大的标配。\n\n改数值不改代码，这是游戏越做越大后必过的一关。' },
    { type: 'quiz', question: '想把「敌人的血量、攻击力」做成能随时调整的配置，最方便的做法？', options: ['写死在这些敌人的代码里', '用 ScriptableObject 做成配置资产，面板上调', '每次改数值都重新写一遍代码'], answer: 1, tip: 'ScriptableObject 让策划/开发者直接在编辑器面板改数值，不用碰代码、不用重新编译。' },
  ],
  'anim-1': [
    { type: 'text', title: '动画剪辑：把变化录下来', body: '动画到底是什么？一句话：变化。静止不动的物体没有动画；物体在动（位置、旋转、缩放、颜色……任何属性随时间在变），就是动画。\n\nUnity 里做动画的核心工具是动画剪辑（Animation Clip）——把物体在一段时间里的变化「录下来」，之后随时回放。\n\n怎么做一段最简单的动画：\n· 选中物体，按 Ctrl+6（或 Window → Animation → Animation）打开动画窗口\n· 如果物体还没有动画剪辑，点 Create 新建一个（比如叫 Jump.anim）\n· 点左上角的红点进入录制模式\n· 把时间线停在某一刻（比如第 0 帧），记下物体当时的样子——这叫关键帧（Keyframe）\n· 把时间线拖到后面（比如第 12 帧），把物体挪到新位置，又记一帧\n· 关掉录制，点播放——物体自己从第 0 帧的样子平滑走到第 12 帧的样子\n\n关键点：你只摆「首尾两帧」，中间每一帧怎么过渡，是电脑自动「补」出来的，这叫补间（插值 Interpolation）。\n\n所以一段动画 = 几个关键帧 + 电脑替你补的中间过程。\n\n动画窗口里还能切到曲线视图（Curves）：横轴时间、纵轴数值，拖曲线就能调整「变化快慢」——比如加速起步、缓入缓出，动作一下子就活了。\n\n能录什么？不只是位置。旋转、缩放、材质颜色、灯光亮度，几乎所有数值属性都能录。一个剪辑只做一件事，比如 Jump 一个、Walk 一个、Idle 一个，各管各的。' },
    { type: 'quiz', question: '想让一个方块「从 A 点平滑飞到 B 点」，做动画最少要定几个关键帧？', options: ['0 个，直接点播放就行', '2 个——A 点一帧、B 点一帧', '100 个，每一帧都要手摆'], answer: 1, tip: '只要首尾两个关键帧，中间的变化电脑会自动补间（插值）出来，不用一帧帧手摆。' },
  ],
  'anim-2': [
    { type: 'text', title: 'Animator 状态机：给动画排个出场顺序', body: '一个角色往往有好几段动画：待机、跑、跳、攻击。谁先谁后、什么情况下放哪段，得有个「导演」——这就是 Animator Controller（动画控制器）。\n\n三个核心概念，一个都不能少：\n· 状态（State）—— 一段动画就是一个状态（Idle 待机、Walk 走路、Jump 跳跃）\n· 过渡（Transition）—— 状态之间连的箭头，表示「可以从 A 切到 B」\n· 条件参数（Parameter）—— 控制切换的开关，常见三种：Float（速度这种连续值）、Bool（开关，比如是否在地面）、Trigger（一次性触发，比如按了跳跃键）\n\n搭建流程：\n1. 模型放进场景后自带 Animator 组件\n2. 在 Assets 里右键 → Create → Animator Controller，新建一个控制器\n3. 把它拖到物体的 Animator 组件上\n4. 双击控制器打开「状态机视图」，把动画剪辑拖进来\n5. 右键状态 → Make Transition，拉箭头连到目标状态，画过渡\n6. 选中过渡箭头，在检查器里设条件：比如 Float 参数 Speed 大于 0.1 时，从 Idle 切到 Walk\n\n代码怎么控制？记住：不要直接调 Play()，而是通过参数让状态机自己决定切到哪：\n\nAnimator anim = GetComponent<Animator>();\nanim.SetFloat(\"Speed\", 3f);        // 数值变了，满足条件自动切到跑\nanim.SetBool(\"IsGrounded\", false); // 离地了\nanim.SetTrigger(\"Jump\");           // 触发跳跃这个一次性动作\n\n你只管「改参数」，状态机负责「放哪段动画」。好处是切换逻辑都可视地摊在控制器里，加动画、改条件都不用碰代码。\n\n这套东西其实是「有限状态机（FSM）」的 Unity 实现——和 AI 那节讲的敌人状态机是同一套思路，只是 Unity 把它做成了可视化工具。' },
    { type: 'quiz', question: '想让角色「移动速度大于 0.1 时从待机切到跑步」，该在哪里怎么设？', options: ['在过渡（Transition）上设条件：Speed 大于 0.1', '直接在代码里调用 anim.Play(\"Walk\")', '把待机动画从控制器里删掉'], answer: 0, tip: '过渡箭头可以挂条件（Condition），条件满足才切换。用参数驱动状态机，比硬编码 Play 平滑、可控得多。' },
  ],
  'anim-3': [
    { type: 'text', title: '混合树：让动画像水一样平滑过渡', body: '用状态机切「待机 → 走路 → 跑步」有个毛病：切的那一瞬姿势是「硬跳」的，动作会突然一变，看着卡。\n\n混合树（Blend Tree）就是为这事准备的——把几段动画按一个（或两个）参数混在一起，参数变多少，就播放多少对应的动画。\n\n一维混合树（1D）：一个参数控制，最典型的是 Speed 速度。\n· Speed = 0 → 播放待机\n· Speed = 2 → 播放走路\n· Speed = 5 → 播放跑步\n· Speed = 3 → 自动混成「走路和跑步之间」的姿势\n\n中间值不靠你做任何事，Unity 自动把相邻两段动画的姿势按比例揉在一起，所以速度从 0 慢慢加到 5，角色是「一步一个姿势渐变」地跑起来的，一点不跳。\n\n二维混合树（2D）：两个参数控制，适合「方向 + 速度」。比如八方向移动：X 轴管左右，Y 轴管前后，四个/八个方向各放一段走路动画，角色朝哪个方向跑，就混出哪个方向的姿势。\n\n怎么搭：\n1. 在 Animator 视图空白处右键 → Create State → From New Blend Tree\n2. 双击进入混合树，点 + 号 Add Motion Field，把动画拖进去\n3. 给每段动画设阈值（Threshold）：0 待机、2 走路、5 跑步\n4. 混合参数选 Speed（Float）\n\n代码里只需要改一个参数，剩下的渐变混合树自己干：\n\nanim.SetFloat(\"Speed\", 3f);\n\n想让起步、停下也有缓动，可以把速度慢慢「追」过去：\n\nanim.SetFloat(\"Speed\", Mathf.Lerp(anim.GetFloat(\"Speed\"), targetSpeed, 0.1f));\n\n用法要分清：数值连续变化的（速度、方向、刀锋角度）用混合树；离散的、一次性的（跳跃、死亡、攻击出招）用状态机。' },
    { type: 'quiz', question: '想让角色走路速度「从慢到快平滑渐变」、不想切换瞬间硬跳动画，该用什么？', options: ['建两个状态加过渡硬切', '用一维混合树，Speed 参数控制', '把动画剪辑全部删掉重新录'], answer: 1, tip: '混合树按一个连续参数（如 Speed）把多段动画平滑混在一起——参数连续变，姿势就连续变，正是「从慢到快渐变」的解。' },
  ],
  'anim-4': [
    { type: 'text', title: '动画事件：播到某一帧，喊一声代码', body: '想让「脚踩到地面的那一瞬间」播放脚步音效。能不能在 Update 里自己计时？能，但靠不住——动画时长一改、帧率一波动，时间就对不上了。\n\n正解是动画事件（Animation Event）：在动画时间线上放一个「闹钟」，动画播到那一帧，Unity 就自动去调用你指定名字的函数。\n\n怎么做：\n1. 选中物体，Ctrl+6 打开 Animation 窗口（第一课学过）\n2. 在时间线顶部的 Events 栏上右键 → Add Animation Event，放一个标记，拖到「脚踩地」那一帧\n3. 在检查器里填：要调用的函数名，和要传的参数（字符串、int、float、Object 都行）\n\n代码侧只要准备好这个同名函数（一般写在挂 Animator 的同一个物体上）：\n\npublic void PlayFootstep() {\n    GetComponent<AudioSource>().Play();   // 播脚步音效\n}\n\n到那一帧，Unity 就在这个物体上按名字找 PlayFootstep 并调用它。\n\n常用场景：\n· 配音效：脚步、挥剑破空声、落地声\n· 攻击结算：刀挥到一半那一帧调用伤害函数，比碰撞检测更精确\n· 演出控制：出生/死亡动画播到中间弹出特效、切换相机\n\n为什么比计时靠谱：事件是「绑在动画上」的，动画本身就知道该在哪一帧响——动画变长变短，事件跟着走，天然同步，绝不会跑偏。\n\n几个坑要记牢：\n· 函数名拼写必须和检查器里选的一模一样，区分大小写\n· 函数最好写在挂 Animator 的物体上；要调别的物体的函数，先拿到引用\n· 参数类型要对上，别填了 string 但函数接的是 float' },
    { type: 'quiz', question: '想让攻击动画「刀挥到一半的那一帧」结算伤害，最靠谱的做法？', options: ['在 Update 里数帧数、凑时间', '在那个时间点放一个动画事件，触发伤害函数', '把伤害写在动画的每一帧里'], answer: 1, tip: '动画事件绑在动画时间线上，播到那帧就触发，跟帧率、动画时长无关，天然和动作同步——比凑时间稳得多。' },
  ],
  'd2d-1': [
    { type: 'text', title: '精灵 Sprite：2D 游戏的积木', body: '2D 游戏里你看到的每一个图片元素，都叫精灵（Sprite）——人物、树木、硬币、背景，全是 Sprite。它是 2D 游戏最基本的「积木」。\n\n把一张图片变成精灵，走四步：\n1. 把图片拖进 Assets 文件夹（推荐 PNG，自带透明通道，人物才能是「抠好的」）\n2. 选中图片，在检查器里把 Texture Type 改成 Sprite (2D and UI)——不改的话 Unity 只当它是普通贴图，不能当精灵用，这是新手最容易卡住的一步\n3. 设置 Pixels Per Unit（每单位多少像素，默认 100，即 100 像素 = 1 米）。像素画想显得大，就把这个数调小\n4. 把图片从项目面板拖进场景或层级面板，精灵就上场了\n\n精灵身上会自动带一个 Sprite Renderer 组件，它是 2D 版本的「渲染器」，管怎么画这张图：\n· Sprite —— 显示哪张图\n· Color —— 染色/透明度（做淡入淡出、受击闪白都用它）\n· Flip X / Flip Y —— 水平/垂直翻转（做角色转身）\n· Sorting Layer 排序层、Order in Layer 层内顺序 —— 决定谁盖在谁上面\n\n为什么用排序而不是 Z 坐标？在 2D 里前后关系（谁遮挡谁）靠 Sorting Layer 和 Order in Layer 决定，改 Z 坐标反而会乱——这是 2D 和 3D 的一大区别，记牢它。\n\n配合正交相机（Orthographic）看最合适：没有近大远小，画面平直，正是 2D 游戏的观感。' },
    { type: 'quiz', question: '把一张 PNG 图片导入 Unity 后，想让它能当精灵（Sprite）拖进场景，第一步得做什么？', options: ['放进 Assets 后就能直接用，什么都不用改', '把 Texture Type 改成 Sprite (2D and UI)', '给它加一个 Rigidbody2D 组件'], answer: 1, tip: '不改 Texture Type，Unity 只把它当普通贴图，无法作为精灵使用；改成 Sprite (2D and UI) 才能拖进场景当 2D 图片元素。' },
  ],
  'd2d-2': [
    { type: 'text', title: '2D 物理：让精灵「活」起来', body: '想让精灵受重力下落、被撞弹开、踩上平台站住——要给它加两个组件，缺一不可：\n\n· Rigidbody2D（2D 刚体）—— 让物体进入 2D 物理世界：受重力、能受力、有速度\n· Collider2D（2D 碰撞器）—— 定义身体的「范围」，负责跟别的物体碰、挡、站\n\n碰撞器（Collider2D）常用四种形状：\n· Box Collider 2D —— 方块，最省性能\n· Circle Collider 2D —— 圆形，滚动顺滑\n· Capsule Collider 2D —— 胶囊（竖椭圆），人形角色常用\n· Polygon Collider 2D —— 多边形，能贴着精灵轮廓自动生成，最贴合也最贵\n\nRigidbody2D 关键参数：\n· Gravity Scale 重力倍数 —— 1 是正常，0 是失重（飘着）；想让跳跃干脆利落，常见调到 2~3\n· Linear Drag 线性阻尼 —— 运动阻力，越大停得越快\n· Body Type 类型 —— Dynamic 动态（受物理影响）、Kinematic 运动学（程序控制、不推不碰）、Static 静态（固定不动）\n\n跟 3D 物理的区别（对照着记）：\n· 2D 只在一个平面（XY 平面）上动，刚体只能绕 Z 轴旋转\n· 碰撞回调全带 2D 后缀：OnCollisionEnter2D、OnTriggerEnter2D（3D 是 OnCollisionEnter）\n· 物理引擎用的是 Box2D，不是 3D 的 PhysX，规则更简单、跑得更快\n\n记住核心一句：碰撞器是「真身」，精灵图片只是「皮」。两物体相撞，物理引擎用的是碰撞器。想让碰撞范围比画面小一点（子弹好躲、不容易卡角），就手动调 Collider 的 Size。' },
    { type: 'quiz', question: '想让一个 2D 物体受重力下落，还能被地面挡住不穿过去，最少需要哪两个组件？', options: ['Sprite Renderer + Collider2D', 'Rigidbody2D + Collider2D', 'Rigidbody2D + Sprite Renderer'], answer: 1, tip: 'Rigidbody2D 让它进入物理系统受重力，Collider2D 给它一个身体去碰撞。只有刚体没碰撞器会直接穿透掉下去；只有碰撞器不受重力。' },
  ],
  'd2d-3': [
    { type: 'text', title: '瓦片地图 Tilemap：像拼乐高一样搭关卡', body: '关卡里的地面、墙壁、平台，如果一块块手动摆 GameObject，几百块能把你摆疯，改起来更是灾难。瓦片地图（Tilemap）就是为这个生的——用「瓦片」在格子里刷刷刷，整片关卡就画出来了。\n\n核心概念：\n· 瓦片（Tile）—— 一小块图片，通常是正方形，比如一块 32×32 的草地砖\n· 瓦片地图（Tilemap）—— 一张按格子组织的画布，记录「哪个格子放哪块瓦片」\n· 网格（Grid）—— 决定格子大小、有没有错位（Grid 是 Tilemap 的爸爸，自动生成）\n· 瓦片调色板（Tile Palette）—— 你的「图章盘」，选一块瓦片，鼠标一划就是一排\n\n上手步骤：\n1. 准备好瓷砖图（按格切好的小方块，比如每块 32×32，带白边框方便对格）\n2. 用 Sprite Editor（Sprite 模式下点 Sprite Editor）把大图按网格切成一个个小 Sprite\n3. Window → 2D → Tile Palette 打开瓦片调色板\n4. 新建调色板，把切好的小 Sprite 拖进去，按提示存到 Assets\n5. 在场景里右键 → 2D Object → Tilemap（Unity 会自动生成 Grid + Tilemap）\n6. 调色板上选笔刷，在场景里画；橡皮擦擦掉，矩形工具批量铺，再用笔刷补细节\n\n为什么用 Tilemap：\n· 搭得快、改得更快——画错一块擦掉重画，不用删物体\n· 省资源——几万格瓦片只占一块贴图，比几万个 GameObject 轻太多了\n\n想让瓦片有碰撞（能站人）：给 Tilemap 物体加一个 Tilemap Collider 2D，它会按「有瓦片的格子」自动生成碰撞体。格子非常多时，建议勾上 Composite 选项再挂一个 Rigidbody2D（Body Type 选 Static），把所有碰撞体合成一块，性能最好。' },
    { type: 'quiz', question: '用 Tilemap 画好关卡后，想让瓦片能「站人、挡路」（有碰撞），该给 Tilemap 加什么组件？', options: ['Sprite Renderer', 'Tilemap Collider 2D', 'Particle System'], answer: 1, tip: 'Tilemap Collider 2D 会按有瓦片的格子自动生成碰撞体；格子很多时勾 Composite 合成，还能进一步省性能。' },
  ],
  'd2d-4': [
    { type: 'text', title: '2D 角色控制：横版角色的完整套路', body: '把前面学的串起来，拼一个完整的横版角色：左右移动 + 跳跃。拆开看就三步——读输入 → 改刚体速度 → 判断着地。\n\n第一步，搭身体：\n· 给角色加 Rigidbody2D（Gravity Scale 调到 2~3，跳跃手感更利落）\n· 加 Box Collider 2D，Size 稍微收窄一点，不容易卡墙角\n· 角色脚下放一个空的子物体，命名 GroundCheck，位置贴近脚底——它就是「地面检测点」\n\n第二步，写移动脚本（完整可跑）：\n\npublic class PlayerMove : MonoBehaviour\n{\n    public float moveSpeed = 5f;    // 左右移动速度\n    public float jumpForce = 10f;   // 跳跃力度\n    public Transform groundCheck;   // 地面检测点\n    public LayerMask groundLayer;   // 哪些层算「地面」\n    private Rigidbody2D rb;\n    private bool isGrounded;\n\n    void Start() { rb = GetComponent<Rigidbody2D>(); }\n\n    void Update()\n    {\n        float h = Input.GetAxisRaw(\"Horizontal\");   // 读左右键：-1/0/1\n        rb.velocity = new Vector2(h * moveSpeed, rb.velocity.y);  // 只动X，Y交给重力\n        isGrounded = Physics2D.Raycast(groundCheck.position, Vector2.down, 0.1f, groundLayer);\n        if (Input.GetButtonDown(\"Jump\") && isGrounded)\n            rb.velocity = new Vector2(rb.velocity.x, jumpForce);\n    }\n}\n\n第三步，说人话解释每段在干嘛：\n· 左右移动用「直接设速度」（rb.velocity），别用 AddForce 推——推着走手感发飘、刹车滑老远\n· 跳跃同样是「一次性把 Y 速度设成 jumpForce」，干脆利落\n· 地面检测是「能不能跳」的关键：一条向下的短射线（Raycast）撞到地面就返回 true，没它角色能空中无限连跳\n· 拖拽接线：把 GroundCheck 拖进脚本的 groundCheck 槽；给地面物体建一个叫 Ground 的 Layer，把地面设成该层，再把 groundLayer 选成 Ground\n\n常见坑和救法：\n· 按跳跃没反应 —— GroundCheck 离地面太远/太近，或 LayerMask 没选对\n· 移动发飘 —— 改成直接设 velocity；顺手把 Rigidbody2D 的 Interpolate 打开，画面更顺滑\n· 转身 —— 检测移动方向，翻转 Sprite 的 Flip X\n\n整套套路一句话：每帧读输入 → 直接设刚体速度 → 着地时才允许跳。' },
    { type: 'quiz', question: '下面哪个做法能让跳跃手感最利落、也不容易出「空中无限跳」的 bug？', options: ['每帧用 AddForce 往上推，靠力累计起来跳', '检测到着地时，直接把 velocity 的 Y 设成一个向上的初速度', '把角色的 Scale 放大一点，看起来像跳起来了'], answer: 1, tip: '跳跃就是「着地时一次性给 velocity.y 设一个跳跃初速度」，干脆利落；靠 AddForce 累计会发飘，不做地面检测就会空中无限跳。' },
  ],
  'render-1': [
    { type: 'text', title: '渲染管线是什么', body: '渲染管线（Rendering Pipeline），就是「3D 数据变成屏幕像素」这条流水线。你每帧看到的画面，都是这条流水线跑一趟的结果。\n\n游戏里的流程大概是这样的：\n\n1. 准备（CPU 侧）—— CPU 把每个物体的网格数据（顶点坐标、法线、贴图）和材质、灯光信息整理好，逐个提交给 GPU。这一步提交一次的「绘制命令」，就是前面学的 Draw Call。\n\n2. 顶点处理（顶点着色器）—— GPU 拿到顶点数据，算出每个顶点在屏幕上该出现在哪个位置（把 3D 坐标换算成屏幕坐标），顺便把每个顶点的法线、贴图坐标这些「随身信息」准备好。\n\n3. 光栅化—— 把一个个三角形按屏幕位置填成像素。这一步像「涂色格子」：三角形盖住哪些像素，就生成哪些片元（Fragment，可以理解成「待上色的像素」）。\n\n4. 片元处理（片元着色器）—— 对每个片元算「最终颜色」：光照够不够亮、贴图上取什么颜色、有没有阴影、半透明还是完全不透明……全在这一步算出来。\n\n5. 深度测试与混合—— 画得近的盖住远的（深度测试）；半透明物体把颜色混到后面画的颜色上（混合）。\n\n6. 输出到屏幕—— 颜色写到屏幕缓冲区，一帧完成。\n\n记住四个词就够了：顶点处理 → 光栅化 → 片元着色 → 输出。\n\nUnity 里的「管线」还有讲究，三种要分清：\n· 内置管线（Built-in）—— 老牌默认管线，项目多、资料多，但灯光一多效果就打折扣\n· URP（通用渲染管线）—— 官方现在主推，轻量、跑得快，移动端最合适，新项目默认用它\n· HDRP（高清渲染管线）—— 追求极致画质，功能最全，但吃性能，适合 PC / 主机大作\n\n选管线是大决定：新项目默认 URP 一般没错；想要电影级画面且配置够，再考虑 HDRP。管线不同，材质和 Shader 的写法也会不一样。' },
    { type: 'quiz', question: '把 3D 三角形变成屏幕上一排像素的过程，叫哪一步？', options: ['顶点处理', '光栅化', '深度测试'], answer: 1, tip: '光栅化就是把三角形盖住的屏幕区域填成像素（片元），是「3D 转 2D 像素」的关键一步。' },
  ],
  'render-2': [
    { type: 'text', title: 'Shader 基础', body: '上一节说过，片元着色器是「算每个像素颜色」的那一步。Shader（着色器）就是跑在 GPU 上的小程序——告诉 GPU「这个物体的每个像素，该怎么画」。\n\n先说清关系：材质（Material）是「用哪个 Shader + 哪些参数」，Shader 才是真正干活的那段代码。你在材质面板看到的一堆滑块和贴图槽，就是喂给 Shader 的「输入」。\n\n一个 Shader 里通常有两段核心程序：\n· 顶点着色器（Vertex Shader）—— 每个顶点跑一次，管「顶点画在屏幕哪里」，顺便把顶点信息传给下一步\n· 片元着色器（Fragment Shader）—— 每个像素跑一次，管「这个像素最终是什么颜色」\n\n用大白话说：顶点着色器搭「框架」，片元着色器负责「填色」。\n\n下面是一个最简单的 Unlit 着色器（不发光的纯色），能看懂结构就行：\n\nShader \"Learn/FlatColor\"\n{\n    Properties\n    {\n        _Color (\"颜色\", Color) = (1, 1, 1, 1)   // 材质面板上的颜色参数\n    }\n    SubShader\n    {\n        Pass\n        {\n            CGPROGRAM\n            #pragma vertex vert\n            #pragma fragment frag\n            float4 _Color;\n            float4 vert (float4 pos : POSITION) : SV_POSITION\n            { return UnityObjectToClipPos(pos); }\n            fixed4 frag () : SV_Target\n            { return _Color; }\n            ENDCG\n        }\n    }\n}\n\n逐块拆开，结构其实很好认：\n· Properties —— 在材质面板上暴露参数（这个例子是颜色）\n· SubShader + Pass —— 一个「画一遍」的流程\n· vert —— 顶点着色器，UnityObjectToClipPos 把 3D 坐标换成屏幕坐标\n· frag —— 片元着色器，return 什么颜色，像素就显示什么颜色\n\n这个 Shader 不做任何光照，所以物体看起来是死板的纯色。真正常见的材质，是在片元里算光照、采样贴图——这就是下一节的事。\n\n初学者常被术语劝退，其实先记住一条主线就够了：顶点算位置，片元算颜色。' },
    { type: 'quiz', question: '顶点着色器和片元着色器各管什么？', options: ['都管最终颜色', '顶点管位置、片元管颜色', '顶点管颜色、片元管位置'], answer: 1, tip: '顶点着色器每个顶点跑一次算位置，片元着色器每个像素跑一次算颜色——框架和填色。' },
  ],
  'render-3': [
    { type: 'text', title: '贴图与材质进阶', body: '材质进阶，从「贴图怎么贴上去」说起。\n\n贴图（Texture）就是一张二维图片，要贴到 3D 物体上，得知道「图片哪个点，贴到模型哪个位置」——这个对应关系靠 UV 坐标。模型表面每个顶点都带一组 UV（0 到 1 的二维坐标），画的时候按 UV 去贴图里取颜色：UV 是 (0.5, 0.5) 就取图片正中间那个像素的颜色。建模软件里「展 UV」，就是把这层对应关系铺平、铺好。\n\n材质面板上把贴图拖进 Albedo / Base Map 槽，模型表面立刻就有花纹了。\n\n真正让画面「像真的」，靠的是几张贴图配合：\n\n· 法线贴图（Normal Map）—— 它是「骗光」的高手。一张低模配上法线贴图，表面好像有凹凸起伏，光照打上去该亮该暗全对，其实几何完全没变。地面砖缝、石墙凸起，都是这么骗出来的——省掉几十万个顶点，观感还差不多。\n\n· 金属度贴图（Metallic Map）—— 告诉 Shader「哪些地方是金属、哪些不是」。金属的地方反射更强、更像镜子；非金属以漫反射为主。它配合粗糙度贴图（Roughness Map）决定表面是抛光还是磨砂：金属配光滑是镜面，金属配粗糙是哑光金属，塑料配什么都还是塑料。\n\n材质球配出真实效果的路子：\n\n1. 把贴图全拖进去：Base Map 颜色、Normal Map 法线、Metallic / Roughness 金属度和粗糙度\n2. 看几个关键滑块：Smoothness（光滑度）、Metallic（金属度）、Normal Strength（法线强度）\n3. 主光源打亮看高光：高光小而亮 = 光滑，高光散而淡 = 粗糙\n4. 一点点调，多对比场景里真实物体\n\n要点就一句：材质参数不是「调着玩」，它们对应的是真实物理——粗糙度、金属度决定光怎么反射，照这个思路调，材质自然就真了。' },
    { type: 'quiz', question: '一块地面的砖缝凹凸起伏，其实几何是平的，怎么做到的？', options: ['换了高模', '贴了法线贴图骗光照', '贴了金属度贴图'], answer: 1, tip: '法线贴图不改几何，只改表面每个点的法线方向，让光照算出的明暗像有凹凸——省性能观感还真实。' },
  ],
  'render-4': [
    { type: 'text', title: '光照烘焙与后处理', body: '光照和画面，有两种思路：运行时现算，还是提前烤好。\n\n实时光照（Realtime）：灯一开一关、物体一挪，光影马上跟着变，灵活但贵——尤其是阴影、间接光（光弹来弹去照到墙角的那种），每帧现算很吃性能。\n\n烘焙光照（Baked Lighting）：在编辑器里先「烤」一遍——把灯光的颜色、阴影、间接光一次性算好，存成一张张 Lightmap（光照贴图）。运行时物体直接读这张「画好光影」的图，几乎不花性能。\n\n选哪种看需求：\n· 灯会动、物体可破坏 → 用实时\n· 场景固定、只要好看又要跑得动 → 用烘焙\n· 两者结合：动的物体用实时，不动的场景烘焙——这是最常见\n\n烘焙的流程也简单：把场景里不动的物体标记成静态（Static），在 Window → Rendering → Lighting 面板把光照模式设成 Mixed 或 Baked，点 Generate Lighting，等着烤完就行。\n\n再来说后处理（Post-processing）——它不改场景里的东西，而是把「整帧画面」再加工一遍，像拍照后的滤镜。效果全靠一堆效果器堆在相机上：\n\n· 色调 / 调色（Color Adjustments）—— 整体色调冷暖、亮度对比\n· 辉光（Bloom）—— 亮的地方向外发光晕，夜晚霓虹灯、爆炸特效的核心\n· 景深（Depth of Field）—— 远处虚化、聚焦主角，电影感\n· 环境光遮蔽（Ambient Occlusion）、镜头光晕、泛光模糊……\n\nURP 里的用法：创建一个 Post-processing Volume，加上想要的效果并启用，把相机的 Post Processing 打开，然后调参数看效果。\n\n调后处理的心法：少即是多。辉光拉满会糊成一片，色调扭过头人物都变样。先定「这一帧的情绪」（明亮清新？暗黑紧张？），再对症加两三样，微调到位就停。\n\n一句话总结：烘焙管「场景的光影」，后处理管「整帧的滤镜」，两个合起来，画面既真实又跑得动。' },
    { type: 'quiz', question: '墙角被光反弹照到的那圈暗影（间接光照），想真实又要省性能，最合适的做法？', options: ['烘焙成 Lightmap，运行时直接读', '每帧实时算一次全局光', '不处理，直接忽略它'], answer: 0, tip: '烘焙把间接光、阴影在编辑器里提前算好存进 Lightmap，运行时几乎不耗性能，画面还真实。' },
  ],
  'net-1': [
    { type: 'text', title: '网络游戏是啥：从单机到联机', body: '单机游戏，世界就活在你这一台机器里——你按下攻击键，下一秒伤害就结算了，因为「裁判」「场地」「玩家」全在你电脑里。\n\n联机游戏不一样：屏幕里的 2 个玩家，其实是 2 台电脑上的 2 个世界在「假装是同一个世界」。这一步跨出去，麻烦就来了：\n\n一、延迟（Latency / Ping）\n数据在网线上走要花时间。你家到服务器 60ms，对面到服务器 120ms——你「开枪」那一下，服务器可能 0.2 秒后才收到。这就是为什么玩外服总觉得打不中人，不是手残，是延迟。\n\n二、不同步（Desync）\nA 电脑上你站在 (1,0,0)，B 电脑上你还在 (0,0,0)——两台机器的世界对不上了。位置、判定、血量一旦对不上，玩家就会看到「我明明躲开了，还是被打中」。\n\n三、谁说了算（权威 Authoritative）\n两个人打架，血谁扣？位置谁定？如果每台客户端都自己说了算，等着吵翻天加外挂满天飞。\n\n所以行业通用的答案就是「客户端/服务器」模式：\n· 服务器 —— 权威，唯一拥有世界真相的「裁判」。位置、血量、胜负都由它结算\n· 客户端 —— 你的机器，只负责「把操作发给服务器 + 把服务器的世界渲染给你看」\n\n这个设计叫权威服务器（Authoritative Server）。好处：防作弊（你改不了服务器上的血条）、全世界统一（大家都听裁判的）。代价：服务器在中间，多一层延迟。\n\n和你熟悉的单机开发对比：\n· 单机：角色逻辑直接跑，改变量立刻生效\n· 联机：你的输入要先「请求」服务器，服务器「裁决」后再广播回来，你才看到结果\n\n一句话总结：联机不是「把单机做成多人」，而是「让两台机器相信他们玩的是同一个游戏」——靠服务器当裁判，把延迟和不同步当家常便饭来处理。' },
    { type: 'quiz', question: '联机游戏里，为什么通常让服务器（而不是每个客户端）来决定「谁的血条扣多少」？', options: ['因为服务器算得比客户端快', '因为服务器是权威，能防作弊、保证所有玩家看到的世界一致', '因为客户端没有足够内存存血条'], answer: 1, tip: '权威服务器是唯一裁判：血量、位置、胜负都由它结算。客户端只上报操作、接收结果，改不了也骗不了服务器——这是防作弊和世界一致的根本。' },
  ],
  'net-2': [
    { type: 'text', title: 'Netcode 基础：三样家当 + RPC', body: 'Netcode for GameObjects（简称 NGO）是 Unity 官方的免费多人框架，联机起步认它就行。\n\n装好它：Window → Package Manager → 搜索 Netcode for GameObjects → Install。装完你有三样核心家当：\n\n1. NetworkManager —— 网络的中枢，管「谁连谁」\n挂上 NetworkManager 并填好 Player Prefab（每个玩家角色的预制体）：\nusing Unity.Netcode;\npublic class NetworkStarter : MonoBehaviour {\n    public void HostGame() => NetworkManager.Singleton.StartHost();   // 我建房，兼当服务器\n    public void JoinGame() => NetworkManager.Singleton.StartClient(); // 我加入别人的房\n}\n服务器=权威，客户端=汇报操作。StartHost 的人既是房主也是服务器（这叫主机 Host）。\n\n2. NetworkObject —— 要在网上同步的物体的「身份证」\n普通物体只有你自己机器知道；想让大家看到同一个物体，这个物体（和它的预制体）必须挂 NetworkObject，由服务器生成：\nif (NetworkManager.Singleton.IsServer) {\n    GameObject go = Instantiate(prefab);\n    go.GetComponent<NetworkObject>().Spawn(); // 服务器生成，广播给所有客户端\n}\n\n3. NetworkTransform —— 位置/旋转的同步器\n一个物体有了 NetworkObject，自己动并不会自动广播。要让它「在每台机器上动得一样」，再挂一个 NetworkTransform——服务器改变它的位置，所有客户端会追着同步。\n\n真正难懂的是 RPC（远程过程调用）——「让你的代码在别人的机器上跑起来」。两种方向：\n· ServerRpc —— 客户端喊，服务器听：客户端按了跳跃，发一条 ServerRpc 给服务器「我要跳」\n· ClientRpc —— 服务器喊，所有人听：服务器广播「敌人刷新了」，所有客户端播放\n\n写起来就是给方法加个特性：\n[ServerRpc]\npublic void JumpServerRpc() { /* 跑在服务器上：检查合法性，再广播结果 */ }\n\n[ClientRpc]\npublic void EnemySpawnedClientRpc(Vector3 pos) { /* 跑在每台客户端上：刷出敌人 */ }\n\n用法和普通方法一样：JumpServerRpc(); 框架自动帮你「跨机器」执行。\n\n这里呼应 net-1 的心法：客户端不直接改世界，只发 ServerRpc 请求；服务器验证后改，再 ClientRpc 广播回去。谁有最终决定权？还是服务器。' },
    { type: 'quiz', question: '客户端玩家按了跳跃键，想让服务器来裁决这次跳跃是否合法，应该怎么做？', options: ['直接用 ClientRpc 广播给所有人', '调用一个加了 [ServerRpc] 的方法，让请求先到服务器', '在本地直接改位置，不做任何网络处理'], answer: 1, tip: '[ServerRpc] 是「客户端→服务器」的方向，请求先上服务器裁决；[ClientRpc] 是「服务器→所有客户端」的广播方向，别搞反了。' },
  ],
  'net-3': [
    { type: 'text', title: '同步与房间：拼出你的多人小游戏', body: '前两节是零件，这一节把它们拼成「能玩的小游戏」。\n\n主机/客户端模式（Host/Client）\n最省事的联机方式，不用自己租服务器：\n· 房主点 StartHost() —— 自己既是玩家，又当服务器\n· 别人点 StartClient() + 填房主 IP —— 加入\n适合 2~8 人的小型派对游戏；缺点是房主掉线，全房就散。\n\n玩家生成与位置同步\nNetworkManager 里设好 Player Prefab，玩家一进房，服务器自动替每位玩家生成一个实例，归各自操控：\nvoid Update() {\n    if (!IsOwner) return;   // 这具身体不是我的，不碰\n    // 读自己的输入改位置，NetworkTransform 自动把位置同步给其他人\n}\n和单机移动代码几乎一样，区别就在两行：NetworkBehaviour、IsOwner。\n\n为什么位置要插值（Interpolate）？\n服务器发来的位置其实是「一小会儿之前」的位置（因为延迟）。如果直接把物体瞬移过去，你会发现别人在画面里一步一卡、抽搐。NetworkTransform 内置了插值：把收到的位置存下来，在两次更新之间「平滑地滑过去」，视觉就顺了。一句话：收到的数据永远是「过去时」，渲染的是「补出来的现在时」。\n\n房间与匹配（Room / Matchmaking）\n· 房间（Room）—— 一个共享的游戏会话，有房号/房名，满员就开局\n· 匹配（Matchmaking）—— 系统按等级、延迟自动帮你找人、凑一桌\nUnity 官方提供 Relay + Lobby（中继+大厅），适合不想搭服务器的小项目；第三方方案（Photon、Mirror）也很流行。\n\n实战思路：做一个「联网抢金币」\n1. 场景放一个 NetworkManager，配好 Player Prefab（挂 NetworkObject + NetworkTransform + 移动脚本）\n2. 金币做成网络预制体：挂 NetworkObject + 触发器碰撞器 + 抢币脚本\n3. 抢币走权威流程：\n[ServerRpc(RequireOwnership = false)]\npublic void GrabServerRpc() {\n    score += 10;                              // 服务器结算分数\n    GetComponent<NetworkObject>().Despawn();   // 服务器决定金币消失\n}\n4. 分数用 ClientRpc 同步到各人的 UI\n5. 开局：房主 StartHost，别人 StartClient 填 IP\n\n把这个流程跑通，你就一脚踏进了「真正的联机游戏」——剩下无非是延迟补偿、防外挂、断线重连这些更深的坑。' },
    { type: 'quiz', question: '玩家 A 看到玩家 B 的位置「一步一卡、往前瞬移」，最常见的原因和解决办法是？', options: ['服务器发的位置数据太多了，删掉一部分就行', '收到的位置是过去的位置，没有插值平滑；应该启用插值让物体平滑过渡', '玩家 B 的显卡太差，换配置就能解决'], answer: 1, tip: '网络传输有延迟，收到的永远是「过去时」的位置；NetworkTransform 的插值会在新旧位置之间平滑过渡，画面才不抽搐。' },
  ],
  'ecs-1': [
    { type: 'text', title: '为什么需要 ECS：大量物体的性能瓶颈', body: '你大概早就发现了：一个场景里放几十个挂脚本的物体没问题，可一旦放到几千、几万个，帧数就开始跳水。这不是电脑不够好，而是 MonoBehaviour 这套写法在「数量上去之后」天生吃亏。\n\n两个核心瓶颈，都是「量」的锅：\n\n一、Update 每帧被调用 N 次\n每个挂脚本的物体，Update 都会被每帧调用一次。1 万个物体就是 1 万次方法调用，每次都带着各种检查、压栈出栈的固定开销。物体越多，「来回叫醒这些方法」本身就能吃掉大量 CPU 时间。\n\n二、内存碎片 + 缓存不命中\n一个 GameObject 和它身上的一组组件，是分散堆在内存各处的：这个物体的 Transform 在这、Rigidbody 在那、脚本又在别处。CPU 处理数据前得先把数据搬进自己身边的高速缓存，搬过来发现不够，还得再去更远的地方搬。\n\n物体越多、数据越散，CPU 就有大量时间耗在「搬数据」而不是「算数据」上——这就是缓存不命中（Cache Miss）。\n\n面对这个局面，前辈们提出了数据导向设计（Data-Oriented Design），思路和面向对象正好相反：\n· 面向对象：关心「这个物体是什么、它身上的方法怎么调」\n· 数据导向：关心「数据在内存里怎么摆、怎么让 CPU 少跑冤枉路」\n\nECS（Entity Component System）就是 Unity 把这套思路落地的框架。先说结论：ECS 不是「更优雅的 MonoBehaviour」，而是一条专门跑「大量数据」的赛道——成千上万的粒子、单位、AI 个体，才是它的主场。' },
    { type: 'quiz', question: '1 万个挂脚本的物体，传统方式下为什么一多就卡？', options: ['因为每个物体每帧都要调用 Update，而且各物体数据在内存里散落，CPU 大量时间花在搬数据上（缓存不命中）', '因为 GPU 一次只能画一个方块', '因为硬盘读写速度跟不上'], answer: 0, tip: '两大元凶：Update 被反复调用 + 数据分散导致的缓存不命中。ECS 先把数据紧凑排好，再让逻辑按批处理。' },
  ],
  'ecs-2': [
    { type: 'text', title: 'ECS 三大件：实体、组件、系统', body: 'ECS 就是三个字面意思：Entity（实体）、Component（组件）、System（系统）。拆开看，每一样都简单得吓人。\n\n一、Entity —— 实体，就是一个「编号」\n实体不是一个物体，也不含任何数据，它只是一个 ID（一串编号），用来标识「有这么个东西存在」。场景里第 0 号实体是一颗子弹，这个编号就是实体。\n\n二、Component —— 组件，只存数据\n组件是纯数据的一块结构体（struct），不带任何逻辑：\n\nstruct Position { public float X, Y, Z; }\nstruct Velocity { public float VX, VY, VZ; }\n\n一颗子弹的实体 = 一个编号 + 一组组件：Position + Velocity + 一个贴图 ID。想给实体加能力，就给它挂组件；想去掉，就摘掉组件。\n\n三、System —— 系统，只写逻辑\n逻辑全部收进 System 里，一个 System 管「一类事」：移动系统只负责移动，碰撞系统只负责碰撞。\n\n最关键的是：系统不是「一个个实体地处理」，而是「把匹配组件的一整批实体一起处理」。\n\n// 伪代码：移动系统，一次处理所有带 Position 和 Velocity 的实体\nvoid MoveSystem(float dt) {\n    foreach (var e in 所有带 Position 和 Velocity 的实体) {\n        e.Position += e.Velocity * dt;\n    }\n}\n\n为什么这样快？因为 ECS 会把「带同一组组件」的实体的数据，在内存里紧凑地排成连续的块，系统扫描时一路顺序读过去，缓存命中率极高——上一节说的缓存不命中问题直接消失。\n\n和 GameObject 方式对比，差别在「职责」：\n· GameObject 方式：数据和逻辑黏在同一个组件里，一个脚本既存血量又写战斗逻辑，靠引用串来串去\n· ECS 方式：数据归数据（Component），逻辑归逻辑（System），靠「匹配组件组合」把两者临时拼起来\n\n一句话记忆：Entity 是编号，Component 是数据，System 是加工数据的流水线。' },
    { type: 'quiz', question: 'ECS 里，一个 System 是怎么确定「我该处理哪些实体」的？', options: ['根据实体的名字一个一个找', '根据实体上有没有「我要的那组组件」来批量匹配', '由程序员在代码里手动指定每个实体的 ID'], answer: 1, tip: '系统按「组件组合」匹配实体——只要带 Position 和 Velocity 的实体，移动系统就一股脑全处理，不关心它叫什么名字。' },
  ],
  'ecs-3': [
    { type: 'text', title: 'Jobs 与 Burst：把算力榨干', body: 'ECS 把数据排好了，可代码还是一条线程在跑——单核再快也有限。真正让它「起飞」的，是 ECS 的两位搭档：Job System（任务系统）和 Burst（编译器）。\n\n一、Job System —— 把活拆给多线程\nJob（任务）就是一段「只处理数据」的小代码。Job System 会按数据把大任务切成块，分给多个线程同时算。\n\n比如 3 万颗粒子要更新位置：拆成 4 块，4 个线程各算 7500 颗，同时开工，总耗时只有单线程的四分之一左右——前提是 CPU 至少 4 个核。\n\n用 Job 写移动逻辑大概长这样：\n\nstruct MoveJob : IJobParallelFor {\n    public NativeArray<Position> positions;\n    public NativeArray<Velocity> velocities;\n    public float dt;\n    public void Execute(int i) {\n        positions[i] += velocities[i] * dt;\n    }\n}\n\nExecute 会在多个线程上被同时调用，i 是这批数据里的第几份——你不用管线程怎么分，Job System 全包了。\n\n二、Burst —— 把 C# 编译成飞快的机器码\n普通 C# 跑在托管环境里，有各种运行时开销。Burst 是 Unity 的编译器，它把你的 Job 代码直接编译成高度优化的本地机器码，还自动用上 SIMD（单条指令同时算多个数据）。\n\n同一段移动逻辑，Burst 编出来可能比普通 C# 快几倍到几十倍。\n\n三、合起来：数量级的飞跃\n· 传统写法：1 万个 MonoBehaviour，串行、内存散、解释执行\n· ECS + Jobs + Burst：数据紧凑连续 + 多线程并行 + 机器码 + SIMD\n\n几个因素叠在一起，几十万粒子的特效、几万单位的模拟，都能稳稳跑满帧。这不是「优化一点」，是数量级的差距。\n\n两个和传统代码很不一样的「规矩」：\n· Job 里不能碰普通 Unity API（GameObject、GetComponent、Transform……）——它跑在工作线程上，碰主线程的东西会出问题。你要的数据得先放进 NativeArray 这类「原生内存容器」，算完再取回。\n· 数据分离才并行得起来：逻辑全在 System 里按数据批量处理。\n\n一句话总结：ECS 把数据摆好，Job 把算力用满，Burst 把代码榨干。三件套一起上，才是 DOTS 真正的威力。' },
    { type: 'quiz', question: '想用 Job 并行更新 3 万颗粒子的位置，最关键的前提是什么？', options: ['把粒子数据放进 Job 能访问的原生容器（如 NativeArray），且不碰 GameObject 这类主线程 API', '给每颗粒子都挂一个 MonoBehaviour', '把场景切到单线程模式'], answer: 0, tip: 'Job 跑在工作线程上，只认数据不认物体——数据放进 NativeArray 才并行得起来；在 Job 里碰 GameObject 会直接出问题。' },
  ],
  'editor-1': [
    { type: 'text', title: '编辑器扩展是什么', body: '平时我们用 Unity 编辑器搭场景、拖物体、改参数——这些「编辑器里的操作」，其实都可以用代码来做。专门写这种代码的，就叫编辑器扩展。\n\n它和普通游戏脚本最大的区别：普通脚本（MonoBehaviour）在游戏运行时（Play 模式）起作用；编辑器扩展只在「编辑器里」起作用——加菜单、弹窗口、定制面板，都是它。\n\n先认识第一个宝贝：MenuItem 特性（Attribute）。\n\n只要给一个静态方法贴上 [MenuItem]，Unity 顶部菜单栏就会多出你自定义的命令，点一下就执行：\n\nusing UnityEditor;\nusing UnityEngine;\n\npublic class EditorTools\n{\n    [MenuItem(\"Tools/新建方块\")]\n    static void CreateCube()\n    {\n        GameObject.CreatePrimitive(PrimitiveType.Cube);\n    }\n}\n\n保存后回 Unity，等它编译完，点顶部菜单 Tools → 新建方块，场景里立刻出现一个方块。\n\n三个必须知道的规矩：\n· 脚本要放在名为 Editor 的文件夹里（Assets/Editor/…），否则编译报错\n· 方法必须是 static（静态方法）\n· 顶部要写上 using UnityEditor;\n\n为什么非要 Editor 文件夹？Unity 打包发布游戏时，Editor 文件夹里的代码不会被打进游戏包——玩家运行时根本用不到编辑器代码。\n\nMenuItem 还能绑定快捷键，冒号后面跟组合键。常用修饰符：\n· % —— Ctrl（Mac 上是 Command）\n· # —— Shift\n· & —— Alt\n比如 %#D 就是 Ctrl+Shift+D。\n\n再来一个实用的：一键清空场景里所有物体。\n\n[MenuItem(\"Tools/清空场景 %#D\")]\nstatic void ClearScene()\n{\n    Transform[] all = UnityEngine.Object.FindObjectsByType<Transform>(FindObjectsSortMode.None);\n    int count = 0;\n    for (int i = 0; i < all.Length; i++)\n    {\n        if (all[i].parent == null && all[i].gameObject.scene.IsValid())\n        {\n            UnityEngine.Object.DestroyImmediate(all[i].gameObject);\n            count++;\n        }\n    }\n    Debug.Log(\"清空完成，删除了 \" + count + \" 个根物体\");\n}\n\n为什么只删根物体？删掉根物体，它的整棵子树一起没了——遍历一遍就清干净。\n\n提示：编辑器代码里删物体用 DestroyImmediate（立即删），不是游戏运行时的 Destroy（延迟到帧末删）。' },
    { type: 'quiz', question: '编辑器扩展脚本必须放在哪个文件夹里？', options: ['Assets/Editor', 'Assets/Scripts', 'Assets/Resources'], answer: 0, tip: 'Editor 文件夹里的代码只给编辑器用、不会打包进游戏；放别的地方会直接编译报错。' },
  ],
  'editor-2': [
    { type: 'text', title: '自己做一个工具窗口', body: '菜单能执行命令，但有些工具需要「界面」——填参数、点按钮、看结果。这就需要 EditorWindow：一个属于你自己的编辑器窗口，从 Window 菜单打开。\n\n先看整体骨架，一个能打开、能画按钮的窗口：\n\nusing UnityEditor;\nusing UnityEngine;\n\npublic class ToolWindow : EditorWindow\n{\n    [MenuItem(\"Tools/我的工具窗口\")]\n    static void Open()\n    {\n        GetWindow<ToolWindow>(\"我的工具\"); // 取（或建）窗口并显示\n    }\n\n    void OnGUI()\n    {\n        if (GUILayout.Button(\"在原点新建方块\"))\n        {\n            GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);\n            cube.name = \"工具造的方块\";\n        }\n    }\n}\n\n几处要记住：\n· 类要继承 EditorWindow\n· GetWindow<T>() 负责把窗口弹出来\n· 画界面的地方是 OnGUI() 方法——窗口每次重绘都会调用它\n\nOnGUI 里能用哪些「积木」？最常用的三件套：\n· GUILayout.Button(\"文字\") —— 按钮，被点了返回 true\n· GUILayout.TextField(字符串) —— 单行输入框\n· GUILayout.Label(\"文字\") —— 普通文字\n\n小技巧：想要「点一次按钮，方块就多一个」？把数量存成字段，每次点完自增：\n\nint count = 0;  // 字段要声明在类里，而不是 OnGUI 里\n\nvoid OnGUI()\n{\n    count = EditorGUILayout.IntField(\"方块数量\", count);\n    if (GUILayout.Button(\"按数量生成\"))\n    {\n        for (int i = 0; i < count; i++)\n            GameObject.CreatePrimitive(PrimitiveType.Cube);\n    }\n}\n\n注意：字段声明在 OnGUI 外面，数据才能跨重绘保存——OnGUI 每次重绘都会重新跑，变量写在里面等于每次都被清零。\n\n做一个完整小工具的套路：\n1. 字段声明在类里（存状态数据）\n2. OnGUI 里用 EditorGUILayout 摆控件\n3. 按钮回调里干实事，改字段刷新界面\n4. [MenuItem] 挂在静态 Open 方法上，用来开窗口' },
    { type: 'quiz', question: '自定义窗口里画界面（按钮、输入框）的代码，要写在哪个方法里？', options: ['Start()', 'OnGUI()', 'Update()'], answer: 1, tip: '编辑器窗口没有 Start/Update 那套生命周期，界面代码写在 OnGUI()，窗口每次重绘都会调用它。' },
  ],
  'editor-3': [
    { type: 'text', title: '把检查器打扮得更顺眼', body: '给物体挂上脚本组件后，参数就显示在右侧「检查器（Inspector）」里。默认显示方式是「一个字段一行」，字段一多、还带数组，看着就头大。\n\n[CustomEditor] 特性允许你接管某个组件的检查器显示——画什么、怎么画、加什么按钮，全由你说了算。\n\n场景：写了一个「敌人」组件，想让它显示血量进度条，外加一个一键回满血的按钮：\n\n// Enemy.cs —— 普通游戏脚本，放 Assets 下即可\npublic class Enemy : MonoBehaviour\n{\n    public int maxHealth = 100;\n    public int health = 100;\n}\n\n// EnemyEditor.cs —— 编辑器代码，必须放 Editor 文件夹！\n[CustomEditor(typeof(Enemy))]\npublic class EnemyEditor : Editor\n{\n    public override void OnInspectorGUI()\n    {\n        Enemy enemy = (Enemy)target;\n        Rect bar = GUILayoutUtility.GetRect(200, 20);\n        EditorGUI.ProgressBar(bar, enemy.health / (float)enemy.maxHealth, \"血量\");\n        if (GUILayout.Button(\"回满血\"))\n        {\n            enemy.health = enemy.maxHealth;\n            EditorUtility.SetDirty(enemy);\n        }\n        base.OnInspectorGUI();\n    }\n}\n\n这里藏着三个新概念：\n\n一、target 是「当前正在检查的那个组件」\n[CustomEditor(typeof(Enemy))] 说了管谁，target 就自动指向这个 Enemy 实例。\n\n二、EditorGUI.ProgressBar 是现成的进度条\nGUILayoutUtility.GetRect 帮我们按布局自动申请一块地方。\n\n三、EditorUtility.SetDirty 必须记牢\n在编辑器里改了组件的数据，Unity 可能不认为它「变了」——不标记的话，重开编辑器修改就丢了。SetDirty 明确告诉 Unity「这里有改动，别忘了存」。\n\nEditorGUILayout 这一族控件，在 Inspector 里也全能用：\n· EditorGUILayout.Slider(\"缩放\", value, 0f, 5f) —— 滑块\n· EditorGUILayout.TextField(\"名字\", name) —— 输入框\n· EditorGUILayout.ObjectField(…) —— 拖拽资产/物体的槽\n\n写自定义检查器的意义：把「要小心别填错」的参数，变成「一眼看懂、一按就搞定」的界面。' },
    { type: 'quiz', question: '在自定义检查器里改了组件数据，想确保改动被保存，必须调用哪个方法？', options: ['DestroyImmediate', 'EditorUtility.SetDirty', 'GUILayout.Button'], answer: 1, tip: 'SetDirty 告诉 Unity「这个对象有改动」，改动才会被记进场景存档；不标记的话重开编辑器修改就丢了。' },
  ],
  'editor-4': [
    { type: 'text', title: 'ScriptableObject：把配置做成资产', body: '前面学的都是「改编辑器界面」。这一节上一个台阶：用 ScriptableObject 做「配置资产」——把游戏的数值、配置存成编辑器里的一个个「文件对象」，右键就能建，面板上随便改，不碰代码。\n\n它和普通 MonoBehaviour 的本质区别：\n· MonoBehaviour 挂在场景物体上，跟着物体走\n· ScriptableObject 是独立的「数据资产」，存在 Assets 里，全项目谁都能引用——正适合存「共享的配置」\n\n经典场景：做一张「敌人配置表」。\n\n// EnemyData.cs —— 数据定义（放 Assets 下即可）\n[CreateAssetMenu(fileName = \"NewEnemy\", menuName = \"数据/敌人配置\")]\npublic class EnemyData : ScriptableObject\n{\n    public string enemyName = \"小怪\";\n    public int maxHealth = 100;\n    public float moveSpeed = 3f;\n    public GameObject prefab;\n}\n\n[CreateAssetMenu] 做了两件事：\n· 让菜单多出「Assets → Create → 数据/敌人配置」这一项\n· 右键 Project 面板也能直接创建\n\n于是不用打开代码，在 Project 里右键创建、改数值、命名保存，一份配置就是一个 .asset 资产文件。\n\n批量生成配置：写个编辑器工具，一次生成多种怪物配置并自动存成资产：\n\nusing UnityEditor;\nusing UnityEngine;\n\npublic static class EnemyFactory\n{\n    [MenuItem(\"Tools/批量生成敌人配置\")]\n    static void GenerateAll()\n    {\n        if (!AssetDatabase.IsValidFolder(\"Assets/敌人配置\"))\n            AssetDatabase.CreateFolder(\"Assets\", \"敌人配置\");\n        for (int i = 0; i < 5; i++)\n        {\n            EnemyData data = ScriptableObject.CreateInstance<EnemyData>();\n            data.enemyName = \"敌人 \" + i;\n            data.maxHealth = 50 + i * 30;\n            data.moveSpeed = 2f + i * 0.5f;\n            AssetDatabase.CreateAsset(data, \"Assets/敌人配置/Enemy_\" + i + \".asset\");\n        }\n        AssetDatabase.Refresh();\n        Debug.Log(\"批量生成完成\");\n    }\n}\n\nAssetDatabase 是编辑器和资产文件打交道的总管：\n· AssetDatabase.CreateAsset —— 把对象存成 .asset 资产文件\n· AssetDatabase.CreateFolder / IsValidFolder —— 建文件夹 / 判断\n· AssetDatabase.Refresh —— 刷新 Project 面板\n\n这套「配置资产」的玩法为什么高级：\n1. 数据与代码分离：改数值零风险，不碰代码、不用重新编译\n2. 可复用：同一份配置多个系统共用，改一处全局生效\n3. 可批量：用代码批量生成\n4. 适合团队：策划自己建、自己调，程序员只管写逻辑\n\n一句话收尾：学到这，你已经会「做工具」了——菜单、窗口、定制面板、配置资产四件套配齐，重复枯燥的活儿都能自己造工具一键解决。' },
    { type: 'quiz', question: '[CreateAssetMenu] 特性加到 ScriptableObject 类上，主要作用是？', options: ['让脚本自动挂在场景物体上', '在 Assets 菜单/右键菜单里增加创建这个配置资产的入口', '让这个类只能在代码里 new 出来'], answer: 1, tip: 'CreateAssetMenu 就是给 ScriptableObject 加「右键创建资产」的入口，不用碰代码就能在 Project 里建配置、改数值。' },
  ],
  'aiadv-1': [
    { type: 'text', title: '行为树 Behavior Tree', body: '上一节我们学了有限状态机（FSM），小怪用它恰到好处。可一旦碰上满身技能的 BOSS、天天唠嗑的 NPC，状态机就开始发胖：状态一多，状态之间的箭头乱成蜘蛛网。游戏 AI 圈早备好了另一个趁手的家伙——行为树（Behavior Tree）。\n\n行为树就是把 AI 的决策画成一颗倒挂的树：根在顶上，往下分叉，最末端的叶子是「动作」或「条件」。AI 每一帧从根出发，顺着树枝往下走，走到哪片叶子就执行哪个动作。\n\n节点就三种，记住就入门：\n\n· 选择节点 Selector —— 从左到右挨个试孩子，试到第一个「能干成」的就执行，干成就停；全都不行，它才算失败。好比点菜：先问有没有红烧肉，没有就换酱鸭。「或者」的关系。\n\n· 顺序节点 Sequence —— 从左到右一个接一个全干完，才算成功；中间任何一个失败，立刻停下，整体算失败。好比三步连招：先瞄准、再扣扳机、最后收枪。「而且」的关系。\n\n· 叶子节点 —— 树的末端：要么是条件（问一句「玩家在视野里吗」），要么是动作（「朝玩家走一步」「开火」）。\n\n看一个巡逻兵的例子：根用顺序节点，「这一帧要把这套流程走完」：\n\n└─ 顺序节点（一套流程）\n   ├─ 条件：玩家在视线内？\n   ├─ 动作：追到玩家身边\n   ├─ 动作：开火\n\n条件满足就追、追到就开火；条件不满足，顺序节点直接失败。\n\n但巡逻兵总不能「玩家不在视线里就啥也不干」，所以地道的老写法是把根换成选择节点，让「巡逻」兜底：\n\n选择节点（从左到右试）\n├─ 顺序节点（追玩家这套）\n│  ├─ 条件：玩家在视线内？\n│  └─ 动作：追向玩家\n└─ 动作：巡逻\n\n每一帧都从根重新评估：先试「追玩家」，条件不满足就掉到「巡逻」。这就是行为树「每帧重新决策」的脾性，比状态机灵活。\n\n为什么游戏 AI 这么爱它：\n1. 可扩展 —— 加一个行为就是挂一棵新子树\n2. 可复用 —— 做好的子树能直接拖到别的 AI 身上\n3. 条件一票否决 —— 「死亡」「被击晕」挂在最顶层，任何情况下都能插队\n4. 可视化调试 —— Behavior Designer、NodeCanvas 这类插件，树直接在编辑器里摆\n\n跟状态机的对比，一句话说清：\n· 状态机画「状态和箭头」—— 你永远知道「现在是谁、下一步去哪」，适合切换分明的行为\n· 行为树画「决策和动作」—— 每帧从根重新评估，条件一票否决，行为自由组合，适合条件多、优先级明确的复杂 AI\n\n小怪用状态机顺手；等你的 BOSS 有三段变身、NPC 会巡逻会交谈会逃跑，就该上行为树了。' },
    { type: 'quiz', question: '根节点是选择节点（Selector），两个子节点：A 是顺序节点（条件「玩家在视线内」→ 动作「追玩家」），B 是动作「巡逻」。当玩家在视线内时，AI 会怎么做？', options: ['只执行 B 巡逻，A 整棵跳过', '执行 A 里的「追玩家」，B 不执行', 'A 和 B 都执行，先 A 后 B'], answer: 1, tip: '选择节点从左到右试，试到第一个能成功的就停。A 里条件满足 → 追玩家成功，B 巡逻就不出场了——这是「或者」的关系。' },
  ],
  'aiadv-2': [
    { type: 'text', title: '寻路进阶：避障、平滑与 A*', body: '上一节我们把世界烤成 NavMesh，敌人能绕墙了。但 NavMesh 是「烤」出来的，是静态的：烤完再塌一堵墙、开过来一辆装甲车，NavMeshAgent 全都不知道，照样一头撞上去。要在「会变」的世界里走得不撞人、不堵车，得学这几样本事。\n\n第一样：动态避障（RVO）\nRVO 全称 Reciprocal Velocity Obstacles，「相互速度避障」。核心思路：每个移动单位不光躲固定的墙，还会盯着周围的同类——预判对方接下来往哪儿走，双方各自让一点，像走廊里迎面走来两个人，同时侧身就错过去了。\n\nUnity 里 NavMeshAgent 自带一层避障能力：Radius（半径）是你的身体宽度，Avoidance Priority（避障优先级）是让路规矩——数值越小越「横」，越大越「怂」。一队 Agent 挤在一起时，会自动互相让开。\n\n第二样：路径平滑\nNavMesh 给出的是一条沿着网格的折线，拐角全是生硬的直角。三种平滑办法：\n1. 提前转弯 —— 还没到路径点就开始转，把折角抹成圆弧\n2. Catmull-Rom 曲线 —— 把路径点当控制点，生成一条「穿过去」的光滑曲线\n3. 转向插值 —— 路径点之间用插值平滑过渡，配合旋转的 Lerp，角色自然转身\n\n一句话：网格负责给路线，平滑负责「走得像个人」。\n\n第三样：A*（读作 A-star）\n这是游戏寻路界的标准答案。把世界切成小格子，从起点一格一格往外试，给每个格子打分：\n\nF = G + H\n· G —— 从起点走到这格已经花的代价\n· H —— 从这格到终点「猜」还要花多少（启发式）\n· F —— 两者相加，这一格「总共的预估」\n\n每轮只挑当前 F 最小的格子往外走。核心一句话：永远优先探索看起来最有希望的格子，方向感极强。\n\n启发式 H 怎么猜？两种常用：\n· 曼哈顿距离（只能横竖走时用）：|dx| + |dy|\n· 欧几里得距离（能斜着走时用）：开方(dx² + dy²)\n\n为什么 A* 比无脑广度优先快？广度优先像水波一样一圈圈平推；A* 因为有 H 这个「朝目标的方向感」，几乎笔直朝终点捅过去。\n\n网格寻路 vs 导航网格，别搞混：\n· 网格寻路（Grid）—— 地图切成整齐方格，一格一格算，能动态更新，但格子细了数量爆炸、路带锯齿\n· 导航网格（NavMesh）—— 把能走的面烤成不规则多边形，点数少路径顺，但烘焙是静态的\n\n职业做法是两样都用：静态大世界交给 NavMesh，会动的临时堵的交给 RVO 和网格 A*，最后的路线交给平滑——三样合起来，AI 才能在会变的世界里走得又快又像人。' },
    { type: 'quiz', question: 'A* 算法里，格子 X 的 F 值 = G + H。其中 H（启发式）代表什么？', options: ['从起点走到 X 已经花的路程', '从 X 到终点预估还要花的路程', 'X 这个格子上有几个障碍物'], answer: 1, tip: 'G 是已经花的（起点到 X），H 是还要花的预估（X 到终点），F 是这条路的总预估。H 猜得越准，A* 越会笔直朝终点推进。' },
  ],
  'aiadv-3': [
    { type: 'text', title: '群体 AI 与决策：一群兵的走位和脑子', body: '前面几节教的都是「一只 AI 怎么想」。这一节让一群小兵一起上场——乌鸦齐刷刷起飞、鱼群忽左忽右忽散忽聚，靠的不是每只都聪明绝顶，而是几条极简单的「小规则」叠加，从底下长出一整群的「大智慧」。这就是 Flocking（群聚行为），祖师爷是 Craig Reynolds 的 Boids 模型。\n\n三条力，就是 Flocking 的全部家底：\n\n1. 分离（Separation）—— 别挤！看看周围的邻居，谁离我太近，我就往相反方向躲一点，保持个人间距。\n2. 聚合（Cohesion）—— 往群中心靠！算出周围邻居的平均位置，朝那个方向走。\n3. 对齐（Alignment）—— 跟上大部队！取邻居的平均朝向，把我的方向朝它掰过去。\n\n每帧把三条力各乘一个权重，加起来就是本帧的移动方向：\n\nVector3 dir = separation * w1 + cohesion * w2 + alignment * w3;\n\n权重是灵魂：分离调大 → 队伍散得开；聚合调大 → 挤成一团；对齐调大 → 步调整齐。\n\n排队走（队列）是另一种「群体感」：\n· 跟随队长 —— 队长在前头走，队员们用「聚合 + 对齐」保持固定前后间距\n· 阵型（Formation）—— 给每个位置算好相对队长的偏移量，队长挪一步全队平移。箭头阵、方阵、楔形阵都是这个原理\n\n群体是走位，脑子是决策。AI 想「聪明」，其实只会两招：\n\n第一招：判断（阈值）—— 血量低于 30% 就跑，距离小于 5 就开火。确定性决策。\n\n第二招：概率（随机）—— 给决策加点「味道」：\n· 固定概率 —— if (Random.value < 0.3f) 就是三成概率\n· 权重随机 —— 给每个选项一个权重，按权重挑。逃跑权重 3、反击 2、发呆 1\n\n再送几招「让 AI 显得聪明」的免费技巧：\n1. 反应延迟 —— AI 别瞬间转身，先停 0.2 秒再追\n2. 状态记忆 —— 追丢了别立刻放弃，朝「最后一次看到玩家的位置」再走 2 秒\n3. 视线检测 —— 结合 Raycast：中间隔墙就不追\n4. 预测埋伏 —— 追「玩家 1 秒后会到的地方」（位置 + 速度 × 时间）\n5. 概率犯错 —— 命中率不是 100%，偶尔打偏\n6. 群体共享情报 —— 一个兵看见玩家，广播给整队\n\n收个尾：Flocking 管「走位像一群」，判断和概率管「行为像个人」，那几招技巧管「观感像高手」——三层叠起来，NPC 就从纸片人变成活角色了。' },
    { type: 'quiz', question: '用 Flocking 做一群跟随玩家的小兵，发现它们全都挤在玩家脚下同一个点、互相穿模。最可能的原因和改法？', options: ['聚合权重太大，应该调小聚合', '分离权重太小，应该调大分离', '对齐权重太大，应该调小对齐'], answer: 1, tip: '挤成一团、互相穿模，正是「分离」失效的典型症状——它专门负责跟邻居保持个人间距。Flocking 三条力的权重是灵魂。' },
  ],
  'project-0': [
    { type: 'text', title: '这门课不是「看」，是「做」', body: '前面学的课，是让你看懂 Unity；这门课，是让你亲手做出一个游戏。\n\n接下来的几节，请打开你电脑上的 Unity，从零搭一个滚球小游戏——小球在院子里滚、滚过金币加分、集满胜利。每一节都是「分步引导」，你跟着在 Unity 里一步步做，做完一节回来打个勾。\n\n📦 先备好工具：\n· 装好 Unity Hub，再装一个 Unity 编辑器（选 3D 模板，任何近版本都行）\n· 用 Unity Hub 新建一个项目（Project），选 3D Core / 3D（URP）模板\n\n🛠 怎么做：\n· 每一节先把「动手步骤」读一遍，再照做\n· 卡住的地方看该节的「常见坑」，或回去翻对应课（场景/物理/脚本/UI 都是前面学过的）\n· 做完一节的验收清单，回网页点「完成」\n\n🏁 全部做完后的总体验收：\n能 □ 球在院子里滚得动、撞墙被挡、加速有惯性\n能 □ 滚过金币：金币消失、分数 +1、有音效\n能 □ 收集满：显示「你赢了」、游戏暂停\n能 □ 主菜单能进关、能返回、再进关不卡死\n能 □ 手感打磨到位（有反馈、不飘）\n\n做完这五条——恭喜，你的第一个 Unity 游戏「出生」了！' },
    { type: 'quiz', question: '这门「完整项目实战」课跟前面课程最大的不同是什么？', options: ['内容更深更难', '要你在自己电脑的 Unity 里亲手跟着做，做完用验收清单自检', '只有演示没有文字讲解'], answer: 1, tip: '前面的课帮你「看懂」，这门课要你「亲手做」——每个步骤都对应一个真实操作，做完的验收清单就是你的通关证明。' },
  ],
  'project-1': [
    { type: 'text', title: '搭场景：先把舞台摆出来', body: '这一课，咱们把「滚球游戏」的舞台搭出来。新建一个 3D 场景，然后一样一样摆：地面、玩家小球、金币、围墙、相机。\n\n第一步，新建场景\n· File → New Scene，选 Basic 3D（URP 项目就选 URP 模板的 Basic）。别手滑选了 2D。\n\n第二步，地面\n· 菜单 GameObject → 3D Object → Plane，场景里出现一块平面。\n· 默认 Plane 是 10×10。在检查器的 Transform 里把 Scale 设成 (4, 1, 4)，地面就变成 40×40 的院子。\n· 为什么用 Plane 不用 Cube？Plane 是单面薄片，做地面最省；Cube 是实心六面体，做墙更合适。\n\n第三步，玩家小球\n· GameObject → 3D Object → Sphere，把位置设成 (0, 0.5, 0)。\n· 关键点：Sphere 默认半径 0.5。想让球的底部正好贴住 Y=0 的地面，球心就得抬高 0.5，也就是 Y=0.5。这个道理全游戏通用：物体的中心位置，不等于它贴地的那一面位置。\n\n第四步，金币（收集品）\n· GameObject → 3D Object → Cube，Scale 缩成 (0.5, 0.5, 0.5)，摆到 (1, 0.5, 1)。\n· 选中金币按 Ctrl+D 复制，沿场地铺一小片，比如 8 个。位置随意，但别太贴墙。\n\n第五步，围墙\n· 做四根 Cube，围成一个 40×40 的院子。\n· 北墙：Scale (40, 1, 0.5)，位置 (0, 0.5, 20)；南墙 (0, 0.5, -20)\n· 东墙：Scale (0.5, 1, 40)，位置 (20, 0.5, 0)；西墙 (-20, 0.5, 0)\n\n第六步，上色（材质）\n· 项目面板右键 → Create → Material，改名 GroundMat，把 Albedo 调成草地绿，拖到地面。\n· 再建 PlayerMat（蓝）给小球、CoinMat（金黄）给金币。想有点金属感，把 Metallic 拉到 0.8 左右。\n\n第七步，摆相机\n· 选中 Main Camera，位置 (0, 12, -12)，Rotation (60, 0, 0)，从上往下斜着俯瞰整个院子。\n· 想看镜头对准了哪，先选相机再按 Ctrl+Shift+F。\n\n搭完别急，先按 Play 看一眼前方：地面绿、球蓝、金币金、围墙围得严严实实，舞台就绪。' },
    { type: 'quiz', question: '小球默认半径是 0.5，想让它的底部刚好贴住 Y=0 的地面，球心的 Y 坐标应该设成多少？', options: ['0', '0.5', '1'], answer: 1, tip: '球心在 Y=0.5，球体向下伸 0.5 正好落在地面；设成 0 球会陷进地面一半，设成 1 球会悬空 0.5。' },
  ],
  'project-2': [
    { type: 'text', title: '让小球动：Rigidbody + 输入 + 控制脚本', body: '舞台有了，这课让小球「活」起来——按方向键就滚。核心就两件事：给球加物理刚体，再写脚本读按键、给球推力。\n\n第一步，加 Rigidbody（刚体）\n· 选中小球，Add Component → Rigidbody。\n· 有了刚体，球才受重力、受力、会滚动。\n\n为什么不用直接改位置？\n· 直接改 transform.position，球是「瞬移」过去的，没有惯性、还能穿墙。用物理（Rigidbody）加力，球才会像真球：起步慢、越滚越快、撞墙被挡住。\n\n第二步，写控制脚本\n· 项目面板右键 → Create → C# Script，命名 PlayerController，双击打开编辑。\n· 写完整代码（可直接抄）：\n\npublic class PlayerController : MonoBehaviour\n{\n    public float speed = 10f;        // 推力大小，检查器里就能调\n    private Rigidbody rb;\n\n    void Start()\n    {\n        rb = GetComponent<Rigidbody>();   // 拿到自己身上的刚体\n    }\n\n    void Update()\n    {\n        float moveX = Input.GetAxis(\"Horizontal\");   // A/D 或 ←/→\n        float moveZ = Input.GetAxis(\"Vertical\");     // W/S 或 ↑/↓\n        Vector3 force = new Vector3(moveX, 0f, moveZ) * speed;\n        rb.AddForce(force);                          // 每帧朝这个方向推一下\n    }\n}\n\n· 保存，回到编辑器，把脚本拖到小球身上。\n\n代码逐段说明：\n· public float speed —— 公开变量，检查器面板出现 Speed 输入框，不用改代码就能调手感。这是 Unity 的黄金习惯：数值尽量暴露到面板。\n· Input.GetAxis(\"Horizontal\") —— 读「横向」输入：按 A 或 ← 返回 -1，按 D 或 → 返回 1；而且是连续的 -1~1。Vertical 管 W/S，对应 Z 轴。\n· new Vector3(moveX, 0f, moveZ) —— 把左右、前后合成方向向量，Y 给 0 球不往上飞。\n· rb.AddForce(force) —— 每帧加力，力会累积，球越滚越快，这就是「加速」的手感。\n\n第三步，跑起来\n· 点 Play。按方向键，球就在院子里滚起来了。想换手感？检查器里直接拖 Speed。\n\n常见坑：\n· 按了没反应 —— 脚本没挂到球上，或文件名/类名拼错（必须完全同名）\n· 球刹不住 —— 惯性的正常表现，手感调教在第 4 课\n· 报错 NullReferenceException —— 球上根本没加 Rigidbody' },
    { type: 'quiz', question: '想让小球「像真球一样加速滚动、有惯性、还能被墙挡住」，用哪种方式控制最对？', options: ['每帧直接改 transform.position 瞬移', '用 Rigidbody 的 AddForce 给它加力', '每帧改它的 Scale 大小'], answer: 1, tip: 'AddForce 走物理引擎：球会加速、有惯性、撞墙被挡。直接改位置等于瞬移，没有物理效果。' },
  ],
  'project-3': [
    { type: 'text', title: '收集与计分：触发器 + UI 得分', body: '球会滚了，这课让它「吃」金币，再用 UI 把得分亮出来。用到的正是「触发器」那课讲的东西——勾了 Is Trigger 的碰撞器只感应、不阻挡。\n\n第一步，把金币设成触发器\n· 选中所有金币，检查器里把 Collider 的 Is Trigger 勾上。\n· 为什么金币用触发器、墙用普通碰撞器？希望球「滚过去就吃掉」，而不是被金币弹开；墙是要挡住球的，必须保持实体碰撞。\n\n第二步，给金币打标签（Tag）\n· 选中一个金币，检查器顶部 Tag → Add Tag → 新建一个叫 Coin 的标签。再把所有金币的 Tag 都设成 Coin。标签用来区分「这是金币」，代码里好判断。\n\n第三步，写收集脚本\n· 新建脚本 PickupController，拖到小球上：\n\nusing UnityEngine;\nusing UnityEngine.UI;\n\npublic class PickupController : MonoBehaviour\n{\n    public int count = 0;\n    public Text scoreText;\n\n    void Start()\n    {\n        count = 0;\n        scoreText.text = \"得分: 0\";\n    }\n\n    void OnTriggerEnter(Collider other)\n    {\n        if (other.CompareTag(\"Coin\"))\n        {\n            count++;\n            scoreText.text = \"得分: \" + count;\n            Destroy(other.gameObject);   // 让这枚金币消失\n        }\n    }\n}\n\n第四步，做 UI 显示分数\n· 菜单 GameObject → UI → Text。Unity 会自动建一个 Canvas（画布）和 EventSystem。\n· 把 Text 拖到屏幕左上角，内容改成「得分: 0」。\n· 把场景里的 Text 拖进小球上 PickupController 的 scoreText 槽里——这是「接线」。\n\n代码逐段说明：\n· OnTriggerEnter(Collider other) —— 球一进入触发器区域，Unity 自动调用，other 就是「撞进来的物体」。前提：至少一个有 Rigidbody，且至少一个设了 Is Trigger。\n· other.CompareTag(\"Coin\") —— 判断进来的到底是不是金币。\n· Destroy(other.gameObject) —— 销毁这枚金币，「吃」掉了。\n· scoreText.text —— 更新 UI 文字。\n\n第五步，跑一遍：滚过金币，金币消失、分数 +1。\n\n常见坑：\n· NullReferenceException —— scoreText 没拖进槽\n· 球滚过没反应 —— 金币 Is Trigger 没勾，或球上没有 Rigidbody' },
    { type: 'quiz', question: '想实现「球滚过金币时触发收集，但球撞墙仍被挡住」，金币的 Collider 应该怎么设？', options: ['设成普通碰撞器（默认）', '勾上 Is Trigger，设成触发器', '把金币的 Collider 整个删掉'], answer: 1, tip: '触发器只感应不阻挡：球穿过去触发收集，不会被弹开；墙保持实体碰撞器才能挡住球。' },
  ],
  'project-4': [
    { type: 'text', title: '胜利条件与收尾：通关、音效、调手感', body: '最后一课，把游戏做「完整」：收集完显示胜利、加点音效、把球的手感调到舒服。\n\n一、胜利条件：全收集就「你赢了」\n· 先让脚本知道一共有多少金币：\n\npublic int totalCoins;\n\nvoid Start()\n{\n    totalCoins = GameObject.FindGameObjectsWithTag(\"Coin\").Length;\n    scoreText.text = \"得分: 0 / \" + totalCoins;\n}\n\n· FindGameObjectsWithTag(\"Coin\") —— 找所有带 Coin 标签的物体，Length 就是个数。以后加金币也不用改数字。\n· 再做一块胜利文字：GameObject → UI → Text，内容「你赢了！」，摆在屏幕中央。先在检查器里把它的 GameObject 取消勾选（隐藏）。\n· 在 PickupController 里加 winText 引用，收集时检查：\n\npublic Text winText;\n\nif (other.CompareTag(\"Coin\"))\n{\n    count++;\n    scoreText.text = \"得分: \" + count;\n    if (count >= totalCoins)\n    {\n        winText.gameObject.SetActive(true);   // 亮出「你赢了！」\n        Time.timeScale = 0f;                  // 游戏时间暂停\n    }\n    Destroy(other.gameObject);\n}\n\n· SetActive(true) —— 把隐藏的物体显示出来。\n· Time.timeScale = 0f —— 让整个游戏时间暂停：球停住、物理停住，等于「通关定格」。\n\n二、音效：收集有声音\n· 给小球加 AudioSource 组件，拖一个音效文件到 AudioClip 槽。收集时播一下：\n\npublic AudioSource coinSound;\n...\ncoinSound.Play();\n\n三、（可选）特效：吃掉时炸一团粒子\n· 做个粒子特效存成预制体，收集时在金币位置生成：\n\npublic GameObject collectEffect;\n...\nif (collectEffect != null)\n    Instantiate(collectEffect, other.transform.position, Quaternion.identity);\n\n四、调手感（最影响「好不好玩」）\n· 球飘、收不住 → Rigidbody 的 Drag 调到 0.5~1，Angular Drag 同理\n· 球太迟钝 → 调大 speed，或把 Mass 调小到 0.5\n· 想要「跟手」不漂移 → 试试直接设速度：\n\nVector3 move = new Vector3(moveX, 0f, moveZ) * speed;\nrb.velocity = new Vector3(move.x, rb.velocity.y, move.z);\n\n· 直接设 velocity 是「指哪打哪」；AddForce 是「推着走」。各有利弊都试试。\n· 相机跟随：写个简单跟随脚本挂在相机上：\n\npublic class CameraFollow : MonoBehaviour\n{\n    public Transform target;\n    public Vector3 offset = new Vector3(0, 12, -12);\n    void LateUpdate()\n    {\n        transform.position = target.position + offset;\n    }\n}\n\n· 为什么用 LateUpdate？在 Update 之后跑：球先动完，相机再跟上，画面不抖。\n\n五、整体跑一遍（验收清单）\n· 能滚、能加速、撞墙被挡住\n· 滚过金币：分数 +1、金币消失、有音效\n· 吃完最后一块：显示「你赢了！」、游戏暂停\n· 手感顺眼、球不会滚出院子\n\n跑通这五条，你的第一个完整小游戏就「出生」了。这正是 Unity 小游戏的标准骨架，以后做任何小游戏都先照这个套路搭一遍。' },
    { type: 'quiz', question: '想判断「是否收集完所有金币」，下面哪个条件最正确？', options: ['count 每次收集都重新归零', 'count 大于等于 totalCoins（总数）时触发', '只要金币一消失就触发'], answer: 1, tip: 'count 从 0 累加到等于总数，说明全收齐了，才显示胜利。归零或单个金币消失都不能代表「全部收集完」。' },
  ],
  'platform-1': [
    { type: 'text', title: '构建：把项目变成能玩的游戏', body: '构建（Build）就是把你在编辑器里做的项目，打包成一个能独立运行、别人电脑上也能玩的成品。你在编辑器里看着的场景是「开发版」，Build 出来的 exe 是「发布版」。\n\n打包流程三步走：\n1. File → Build Settings 打开构建面板\n2. 左侧选平台（Windows / Mac / Android / WebGL……）\n3. 点 Build，选个文件夹，Unity 开始打包，进度条跑完，文件夹里就出现了你的游戏\n\nBuild Settings 面板里三样东西要认识：\n· Scenes In Build —— 勾上哪些场景会打进去。列表里没有的场景，玩家永远看不到！新场景记得拖进来\n· Player Settings —— 点开跳到检查器，改公司名、产品名、图标、启动画面\n· Build / Build And Run —— 前者只打包，后者打包完自动运行\n\nPlayer Settings 里最该先填的：\n· Company Name 公司名 —— 影响默认数据目录，最好一开始就定好\n· Product Name 产品名 —— 玩家在系统里看到的游戏名\n· Default Icon 图标 —— 上架前一定要换成自己的\n· Splash Image 启动画面 —— 免费版会强制显示 Unity logo\n\n打包出来有什么：一个游戏本体（.exe）+ 一堆文件夹。注意整个文件夹要一起拷给别人，只拷 exe 会打不开。\n\n一句话：Build = 把项目拍成一张能到处跑的「成片」。前期不用天天打，快完成时再反复打。' },
    { type: 'quiz', question: '你新加了一个场景，但打包出来的游戏里玩家进不去这个场景，最可能的原因是？', options: ['场景没被勾进 Build Settings 的 Scenes In Build', '场景里没有相机', '场景文件太大了'], answer: 0, tip: '只有 Build Settings 里勾选了的场景才会被打进包，新场景要记得拖进列表并勾上。' },
  ],
  'platform-2': [
    { type: 'text', title: '各平台各有脾气', body: '同一个项目，切到不同平台，打包出来的东西天差地别——因为每个平台的「脾气」不一样。\n\n先在 Build Settings 左下角选中目标平台，再点 Switch Platform 切换。Unity 会重新导入资源、重编译代码，第一次切换往往要等很久，属正常现象。\n\nWindows：\n· 打包出 .exe + Data 文件夹，整个文件夹一起分发\n· 桌面性能无压力，画质可以拉满\n\nMac / Linux：\n· Mac 打包出 .app，必须在 Mac 上打（Unity 官方要求）\n· Linux 打包出可执行文件，注意选 x86_64\n\nAndroid：\n· 打包出 APK 或 AAB（上 Google Play 用 AAB），默认要装 Android SDK\n· 代码建议用 IL2CPP：运行更快、更难破解，代价是打包时间长\n· 必填：包名（com.公司名.游戏名）、签名 keystore、目标 API 版本\n· 纹理格式用 ASTC，包体小画质好\n\niOS：\n· 坑最多：只能在 Mac 上打包\n· 打出来的是 Xcode 工程，还得用 Xcode 二次构建、签名\n· 必填：苹果开发者账号、Bundle Identifier、签名证书\n\nWebGL：\n· 打包成网页文件，放服务器上浏览器直接玩\n· 体积限制最严：上百 MB 的包网页加载会把人急死\n· 内存受限，别做大型 3D 场景\n\n切换平台的坑：切回桌面平台时常要重新导入资源（纹理压缩格式不同）；换平台后务必重新测试。' },
    { type: 'quiz', question: '想发布 iOS 游戏，以下哪个是硬性条件？', options: ['必须在 Mac 电脑上用 Unity 打包', '必须有 Windows 电脑', '必须用 WebGL 平台打包'], answer: 0, tip: 'iOS 打包要求 Mac 环境，且打出来的是 Xcode 工程，还需开发者账号签名才能上真机和上架。' },
  ],
  'platform-3': [
    { type: 'text', title: '手机游戏：戴着镣铐跳舞', body: '手机游戏和 PC 游戏是两个物种。手机玩家没有 4090，只有中端芯片，还要对抗发热、电量、屏幕适配——做手机游戏，处处是「戴着镣铐跳舞」。\n\n一、分辨率适配\n· 屏幕宽高比五花八门（16:9、19.5:9、折叠屏……），UI 必须会「自己找位置」——靠锚点（Anchor）贴边贴角，别用写死的像素坐标\n· 刘海屏、挖孔屏会挡 UI，要处理「安全区（Safe Area）」\n\n二、性能（帧数 / 内存 / 发热）\n· 目标帧率：手游一般 60 帧，或锁 30 帧省电。稳定比峰值重要\n· 帧预算：每帧 CPU+GPU 只有 16ms（60 帧）。卡了先上 Profiler 看谁超预算\n· 内存：手机内存是「分水岭」，内存爆了 iOS 会直接杀进程（闪退一大元凶）\n· 发热：手机过热会降频（thermal throttling），芯片「罢工」，帧数雪崩。特效、粒子要克制\n\n三、触屏输入\n· 读触摸用 Input.touches（多点触控），别只用鼠标模拟\n· 虚拟摇杆、虚拟按键是标配，UI 要响应快、不跟手\n\n四、省电\n· 锁帧：不需要高帧的场景锁到 30，功耗立省\n· 切后台（OnApplicationPause）就停掉更新\n\n一句话心法：手游优化不是「能跑就行」，而是「在别人手机上也稳、不烫、不闪退」——从第一天就把帧率、内存、适配当正经指标盯。' },
    { type: 'quiz', question: '手机游戏长时间运行后，帧数突然雪崩式下滑，最常见的原因是？', options: ['手机没电了', '手机过热触发降频（thermal throttling）', '游戏画面突然变复杂了'], answer: 1, tip: '过热时芯片会主动降频保护，性能骤降、帧数雪崩。所以手游要控制发热，从第一天就把帧率和特效密度当指标。' },
  ],
  'platform-4': [
    { type: 'text', title: '包体优化与发布上架', body: '上架前最后一关：包体为什么这么大？怎么瘦下来？怎么过审上架？\n\n一、包体为什么大\n大头永远是三个：贴图（几百张 2K/4K 图）、音频（BGM 和音效全是高码率文件）、模型。还有一类隐形杀手——「其实没用到」的资源。\n\n二、怎么瘦身\n1. 纹理压缩：手机端用 ASTC 等压缩格式，别把 PNG 原图直传；UI 用图集（Sprite Atlas）合并小图\n2. 音频压缩：BGM 用 Vorbis/MP3 高压缩，音效用 ADPCM\n3. 剔除无用资源：测试用的、废弃的统统删掉。Editor 专属资源放 Editor 文件夹，不会打进去\n4. Shader 变体裁剪：同一个 Shader 配不同开关会生成一堆「变体」，勾上 Strip Unused Variants 只留真正用到的——这一步对包体影响极大\n5. IL2CPP 裁剪（Stripping）：把没引用的代码剪掉，代价是反射这类功能可能被误删\n6. 整体压缩：勾上 LZ4 / LZ4HC\n\n三、发布到商店\nApp Store（iOS）：\n· Apple Developer 账号（99 美元/年），用 Xcode 签名、归档、上传\n· 审核通常 24~48 小时，被打回常见原因：隐私说明缺失、截图不过关\n· 正式发布前用 TestFlight 内测\n\nGoogle Play（安卓）：\n· Play Console 注册（一次性 25 美元）\n· 上架格式用 AAB，Google 自动按设备分发\n· 权限「按需申请」，别一上来全要\n\nSteam（PC）：\n· Steamworks 后台建 app，上传到 depot，设置发售日\n· 用 SteamPipe 上传构建\n\n一句话总结：包体瘦身 = 压缩 + 剔除 + 裁剪三件套；上架 = 账号 + 签名 + 提交审核。' },
    { type: 'quiz', question: '同一个 Shader 因为勾选了不同功能开关，在包里生成了很多份「变体」，导致包体偏大。最直接的解决办法是？', options: ['把 Shader 从包里删掉', '在打包设置里勾上 Strip Unused Variants，裁剪没用到的变体', '把 Shader 改成纯黑色'], answer: 1, tip: 'Shader 变体是包体的大头之一，Strip Unused Variants 会把没被用到的变体从包里剔除，包体和加载时间都明显下降。' },
  ],
  'debug-1': [
    { type: 'text', title: '控制台：游戏的「医生报告单」', body: '游戏一出毛病，第一站就是控制台（Console）。它像一张「医生报告单」，把游戏的每一次异常、每一条提醒都记下来。\n\n打开它：菜单 Window → General → Console，快捷键 Ctrl+Shift+C。\n\n日志分三个级别，颜色也不同：\n· 普通信息 —— 白色，正常流程的记录\n· 警告 —— 黄色，有隐患但不影响运行\n· 错误 —— 红色，代码出问题了，通常伴随一大串堆栈\n\n对应的三个方法：\nDebug.Log(\"玩家进入关卡\");\nDebug.LogWarning(\"血量低于 30%\");\nDebug.LogError(\"找不到玩家预制体\");\n\n想随手把「是哪个物体出的事」一起记上，加第二个参数：\nDebug.Log(\"玩家出生了\", gameObject);   // 控制台点这条，场景里会高亮\n\n日志怎么看才不是瞎看？三招：\n\n第一招，点一下这条日志，下方详情区展开完整信息。\n第二招，双击日志条目，直接跳到出错的代码行。\n第三招，看堆栈（Stack Trace）——详情区底部那串一层套一层的「栈帧」，就是「谁调用了谁」的调用链：报错那行在最上面，往下是一层层的调用入口。点任意一层跳到对应代码，顺着栈往下翻，追到「最开始是谁引发的事故」。\n\n新手最容易踩的两个坑：\n· 把日志当刷屏——在 Update 里每帧 Debug.Log，真报错反而被冲走\n· 见红就慌——先双击跳过去看是哪个对象、哪一行，再顺着堆栈找源头\n\n一句话总结：认颜色分轻重，双击跳代码，读堆栈找根因。' },
    { type: 'quiz', question: '控制台里出现一条红色日志，通常表示什么？', options: ['普通信息，一切正常', '警告，有隐患但不影响运行', '错误，代码出了问题，通常伴随堆栈'], answer: 2, tip: '红色是 Debug.LogError 或抛出的异常，说明代码出错了。点开这条日志能看堆栈，双击能跳到出错的代码行。' },
  ],
  'debug-2': [
    { type: 'text', title: '断点调试：把游戏「暂停」在出事那一刻', body: '断点调试比 Debug.Log 高一个段位。Debug.Log 像往黑屋里扔探照灯，断点则是「把世界暂停在出事那一刻」。\n\n用什么工具？Visual Studio 或 Rider，挑一个趁手的。\n\n第一步，把调试器连上 Unity（新手最容易漏的一步）：\n· VS：菜单 调试 → 附加到 Unity（Attach Unity Debugger）\n· Rider：工具栏上的 Unity 图标 → Attach to Unity Editor\n\n连上之后，回到 Unity 编辑器点 Play，调试器就跟着生效了。\n\n第二步，打断点：在脚本代码行号左边点一下，出一个红点——这就是断点。游戏跑到这一行，会当场「定格」：\n\nvoid Update()\n{\n    if (Input.GetKeyDown(KeyCode.Space))\n    {\n        health -= 10;              // ← 在这行打断点，跑到这里停住\n        Debug.Log(\"扣血后：\" + health);\n    }\n}\n\n游戏停住后，你能把现场看个透：\n· 鼠标悬停在任何变量上，直接看它的当前值\n· F11 单步进入——一步一行，还能钻进函数内部\n· F10 单步跳过——整行执行，遇到函数调用不进去\n· Shift+F11 跳出——从当前函数一口气跳到调用处\n· Locals 窗口看局部变量；Watch 窗口自定义盯几个关键变量；Immediate 窗口当场敲表达式\n· F5 继续跑，跑到下一个断点或游戏结束\n\n断点调试真正的杀手锏是条件断点。在 Update 里打断点，游戏一跑就「一帧一停」，根本没法看——右键断点的红点 → Conditions → 填一个条件，比如 health < 0，只有血量小于 0 的那一帧才停。想停在「出事前一刻」？条件写 health == 5。\n\n几个常见的坑：\n· 断点不生效，红点是空心的——调试器没连上 Unity\n· 改了代码断点没变——代码要重新编译后才生效\n· 断点打在没被调用的分支——比如 if 里走不到的那半边，它永远不触发\n\n一句话总结：Debug.Log 告诉你「值不对」，断点让你亲眼看到「哪一步开始不对」。' },
    { type: 'quiz', question: '在 Update 里打断点，游戏一跑就「一帧一停」，根本没法看，怎么办？', options: ['删掉断点，改用 Debug.Log', '右键断点设条件（比如 health < 0），只在满足条件时停', '把 Update 改成只跑一帧'], answer: 1, tip: '条件断点指定「血量小于 0 才停」，就不会每帧都停，直击出问题的那一帧，是断点调试的进阶。' },
  ],
  'debug-3': [
    { type: 'text', title: '单元测试：给代码上「保险」', body: '游戏功能越攒越多，最怕的事是：改了一个小地方，把别处弄坏了还没发现。单元测试就是给代码上「保险」——自动帮你检查核心逻辑算得对不对，改完代码一键全跑，全绿才敢拍胸脯。\n\n单元测试是啥？一句话：写一小段代码，自动验证「某个函数在给定输入下，输出对不对」。\n\n在 Unity 里用它，三步：\n\n第一步，装：Package Manager → 搜索 Unity Test Framework → Install。\n\n第二步，把「可测的逻辑」抽出来：计分、血量、伤害计算这类核心逻辑，最好写成不依赖 Unity 的纯 C# 类：\n\npublic class Player\n{\n    public int Health { get; private set; }\n    public Player(int health) { Health = health; }\n    public void TakeDamage(int dmg) { Health = System.Math.Max(0, Health - dmg); }\n}\n\n注意：这里用的是 System.Math.Max，没碰 Unity API——这就是「可测」的关键。\n\n第三步，写测试，跑到 Test Runner（Window → General → Test Runner）里跑：\n\nusing NUnit.Framework;\n\npublic class PlayerTests\n{\n    [Test]\n    public void 受伤_血量不会低于零()\n    {\n        Player p = new Player(50);\n        p.TakeDamage(100);\n        Assert.AreEqual(0, p.Health);\n    }\n}\n\n[Test] 标记一个测试；Assert.AreEqual 是「断言」——期待值不对，测试就红。\n\n两种模式，按需选：\n· EditMode 测试——不进游戏就能跑，快，测纯逻辑首选\n· PlayMode 测试——要进 Play 才跑，测跟「运行」有关的（协程、时间、物理），用 [UnityTest] 配合 yield return\n\n测试怎么防「回归」？回归就是「改 A 弄坏 B」。核心逻辑——计分、血量、伤害——每块都盖上几条测试，之后不管谁改代码，一键全量跑一遍：全绿说明没碰坏别的；红了说明哪个功能被改出问题了。\n\n给新手的两个心法：\n· 测试要快、要小——一次只验证一件事，命名用「行为_结果」风格（受伤_血量不会低于零）\n· 先测「最容易错」的边界——血量不能负数、加分不能加出小数、分数不能重复结算\n\n一句话总结：单元测试是回归安全网——核心逻辑盖满测试，改完代码一键全跑，全绿才放心，这是「敢改代码」的底气。' },
    { type: 'quiz', question: '你改了伤害计算公式，担心把「加分」功能弄坏。最稳妥的做法是？', options: ['凭感觉进游戏跑两圈', '全量跑一遍单元测试，全绿再放心', '把加分代码删了重新写'], answer: 1, tip: '单元测试是回归安全网——计分、血量、伤害这些核心逻辑都盖上测试，改完代码一键全跑，全绿说明没碰坏别的地方。' },
  ],
  'shadergraph-1': [
    { type: 'text', title: 'Shader Graph：不用写代码的 Shader', body: '上一课学 Shader，那种一行行写代码的方式叫「代码 Shader」。Shader Graph 是另一条路——在编辑器里用「拖节点 + 连线」拼出 Shader，全程不写一行代码。它特别像搭积木或接水管：左边是输入（颜色、贴图、UV），中间是处理（数学节点），右边是输出。\n\nShader Graph 只能在 URP（通用渲染管线）项目里用。怎么创建：项目窗口右键 → Create → Shader Graph → URP → Lit Shader Graph（带光照的）或 Unlit Shader Graph（纯自发光）。双击打开，进入可视化编辑面板。\n\n面板布局要记牢：\n· 主预览（Main Preview）—— 右边一大块，实时显示材质效果\n· 属性区（Blackboard）—— 左侧小面板，声明「外部可调的参数」：颜色、贴图、发光强度\n· 主节点（Master Node）—— 中间偏右，整张图的「出口」，所有计算最后都汇到这里\n\n每个 Shader 图最后都有同一个出口——Master Node，里面有两根关键接线：\n· Vertex（顶点）接口 —— 管「顶点位置」，可以让物体变形、飘动、缩放（顶点着色器）\n· Fragment（片元）接口 —— 管「每个像素的最终颜色」（片元着色器）\n\n不接线时，Master Node 用默认值，材质就是一块灰白。你干的每一件事，无非是「接根线到 Fragment 或 Vertex」。\n\n一句话：Shader Graph = URP 里用节点连线做 Shader 的可视化工具，顶点管形变、片元管颜色，谁都不用手写代码。' },
    { type: 'quiz', question: 'Shader Graph 和传统代码 Shader 最大的区别是什么？', options: ['Shader Graph 只能在 Built-in 项目里用', 'Shader Graph 用节点连线的方式做 Shader，不用手写代码', 'Shader Graph 只能改顶点，不能改颜色'], answer: 1, tip: 'Shader Graph 就是把代码换成「拖节点、接线」的可视化方式，它依赖 URP 管线，顶点（Vertex）和片元（Fragment）都能改。' },
  ],
  'shadergraph-2': [
    { type: 'text', title: '常用节点：颜色、贴图、UV 和数学', body: '这一节把最常用的几类节点认全，够拼出八成的基础效果。\n\n一、颜色节点（Color）\n空白处右键 → Create Node，搜 Color。它输出一个 4 维向量（RGB + 透明 A），直接接 Master Node 的 Base Color，材质就变成这个颜色。\n\n二、贴图采样节点（Sample Texture 2D）\n想让材质贴一张图，用这个节点。三个接口：\n· Texture 2D —— 接贴图（从属性区建一个 Texture 2D 属性）\n· UV —— 接 UV 坐标，决定图片怎么贴\n· RGBA 输出 —— 取到的颜色，接 Base Color\n\n三、UV 节点（UV / Tiling And Offset）\n每个物体表面都带 UV 坐标（0~1 的平面坐标）。Tiling And Offset 节点把 UV 缩放（Tiling）和偏移（Offset）——Tiling 调大贴图重复更多，Offset 让贴图平移。\n\n四、数学节点（Math）\n右键 Create Node 搜 Math，最常用的三兄弟：\n· Add（加法）—— 加亮度：把颜色加一个白色，整体变亮\n· Multiply（乘法）—— 颜色 × 数值 = 调明暗；贴图 × 颜色 = 给贴图染色\n· Lerp（线性插值）—— 三个口 A、B、T（0~1）。T=0 全用 A，T=1 全用 B，中间平滑混合。做「过渡」全靠它\n\n实战：把「贴图 + 颜色 + 发光」组合成一个材质：\n1. 属性区建三个属性：颜色（Color）、贴图（Texture 2D）、发光强度（Float）\n2. Sample Texture 2D 采样贴图 → Multiply 乘上颜色（给贴图染色）→ 接 Base Color\n3. 再把同一份贴图颜色 × 发光强度 → 接 Emission\n4. 材质面板上就能调：换贴图、改颜色、拉发光强度\n\n这条「贴图 × 颜色 = 染色，再单独乘强度接发光」是最经典的材质套路，先把它吃透。' },
    { type: 'quiz', question: '想让一张贴图既显示花纹、又能整体染上红色，该怎么接线？', options: ['把颜色接 Base Color，贴图接 Emission', '贴图采样结果用 Multiply 乘上红色，再接到 Base Color', '贴图直接接 Vertex，颜色接 Fragment'], answer: 1, tip: 'Multiply 把贴图颜色和红色逐像素相乘，就是「给贴图染色」的标准做法，接 Base Color 生效。' },
  ],
  'shadergraph-3': [
    { type: 'text', title: '做几个效果：发光边缘、流动水面、渐变发光', body: '把前面学的节点串起来，做三个真正能用上的效果。\n\n效果一：发光边缘（Fresnel）\n想让物体边缘发亮、中间不发亮——菲涅尔效应。搜 Fresnel Effect 节点，输出 0~1：越靠边缘越接近 1。\n接线：Fresnel Effect → 乘上一个发光的颜色和强度 → 接 Emission。物体边缘立刻透出一圈光晕，做星球大气、能量护盾、霓虹招牌都靠它。\n\n效果二：流动的水面（UV 偏移 + 时间）\n水面要「动」，动的是 UV——让贴图坐标随时间平移，花纹就像水一样流起来。\n1. Time 节点（输出当前时间）\n2. Time → 乘一个速度值 → 接 Tiling And Offset 的 Offset 口\n3. Tiling And Offset 的 UV 口接 Sample Texture 2D\n4. 采样结果接 Base Color\n\n想更像水：\n· 叠两层：两组「不同速度、不同 UV」的水纹叠加\n· 加 Sine（正弦波）：Time × 频率 → Sine → 加到 UV 的 Y 上，表面像在起伏\n\n效果三：渐变发光\n「上亮下暗」这种渐变，核心是 Position 节点（拿物体空间坐标）或 UV 的某个分量。\n做法：取 UV 的 Y → 用 Remap 节点把范围映射到 0~1 → 接 Emission，亮度就沿高度渐变。\n\n做完怎么用？右键 → Create → Material 生成材质，拖到物体上。调发光强度、水速，都在材质面板上拖。\n\n心法：所有「会动、会变」的效果，无非是「拿一个变量（时间、位置、UV）→ 用数学节点折腾 → 接到颜色或顶点」；所有「好看」的效果，大多是一个节点（Fresnel、噪声、法线）加一个数学变换。' },
    { type: 'quiz', question: '做流动水面，让贴图花纹随时间移动，关键是把什么接到什么？', options: ['把 Time 节点的值，通过数学处理后接到 UV 的偏移上，让 UV 随时间平移', '把贴图直接接到 Vertex 接口让网格动', '把颜色接到 Time 节点让颜色变化'], answer: 0, tip: '水流 = UV 动。Time 乘速度 → 接 Tiling And Offset 的 Offset，UV 随时间平移，采样出的贴图花纹就像流动起来。' },
  ],
  'leveldesign-1': [
    { type: 'text', title: '先搭灰模：玩法没跑通前别碰美术', body: '关卡设计最大的坑，就是「一开始就急着上美术」——贴图、花草、灯光一通猛摆，结果玩起来发现路不对、节奏乱，全部推倒重来。\n\n高手都先用「灰模」（也叫白盒 Greybox）搭关卡：只用 Unity 自带的方块、圆柱、平面这些基础几何体，把地形、墙、平台、出口先「搭个大概」。\n\n为什么灰模这么神？\n· 快 —— 拖几个 Cube 几秒钟的事\n· 专注玩法 —— 没有花里胡哨的干扰，你眼里只剩下「路怎么走、跳不跳得过去」\n· 便宜 —— 玩法不对，删掉重摆，一分钱不心疼\n\n灰模阶段该验证的事：\n· 玩家从出生点到终点，路顺不顺\n· 跳跃距离、平台间距，跳得过去吗\n· 会不会迷路 —— 闭着眼睛走一遍，找得到出口吗\n\n等玩法彻底跑顺了，再开始换美术资源、上材质——那时你的每一分美术功夫都花在「确认好」的关卡上。\n\n记得：灰模是「骨架」，美术是「衣服」。' },
    { type: 'quiz', question: '关卡设计师先用灰模（白盒）搭关卡，最主要的目的是什么？', options: ['让场景先好看一点', '用简单的几何体把玩法快速跑通，验证设计', '代替美术，不用再买素材了'], answer: 1, tip: '灰模用基础几何体快速搭出玩法原型，优先验证「路顺不顺、好不好玩」，美术等玩法定了再上，避免返工浪费。' },
    { type: 'text', title: '动线与节奏：让玩家「知道往哪走」', body: '一个场景好不好玩，一半看「玩家怎么走」。玩家在关卡里移动的路线，行话叫动线（Player Flow）——它不是墙逼出来的死路，而是靠「看得见的东西」把人引过去。\n\n怎么让玩家不迷路？三招：\n· 视线引导 —— 让目标「看得见」。把出口设计成能从远处望到，玩家看到「那里有条亮光」，脚步自然就迈过去\n· 地标（Landmark）—— 在关键位置放一个醒目的塔、大树或高台，玩家记住「往那个高塔走」\n· 光照开口 —— 暗暗的走廊尽头透进一束光，暗示「那边有路」\n\n节奏（Pacing）是另一个关键词：好的关卡像音乐，有高有低。\n\n常见套路：张弛交替\n· 紧张 —— 窄走廊、敌人密集、悬崖边\n· 放松 —— 开阔广场、安全区、补给点\n\n一段刺激的遭遇战之后，给玩家一小段安静的路缓缓神。情绪有起伏，玩家才不腻。\n\n一句话：用「看得见的目标」定动线，用「张弛交替」定节奏。' },
    { type: 'quiz', question: '想让玩家自然地走向「下一段路」，而不是被墙硬逼过去，最有效的做法是？', options: ['把路封死，只留一个出口', '让下一段路在远处就能看见（视线引导），再配个醒目的地标', '在场景里放很多岔路让玩家自己摸'], answer: 1, tip: '视线引导 + 地标让玩家「自愿」往目标走，比用墙逼着走自然得多——看得见目标，脚步自然就去了。' },
  ],
  'leveldesign-2': [
    { type: 'text', title: '光照就是情绪：三种典型氛围怎么调', body: '一个场景看起来是「温馨」还是「恐怖」，一半是光照说的算。灯光不只是照亮物体，它是在给画面「定情绪」。\n\n掌握三样旋钮，就能调出大部分氛围：\n· 颜色（Color）—— 灯光的色调\n· 强度（Intensity）—— 亮还是暗\n· 方向（Direction）—— 光从哪来\n\n典型氛围三例：\n\n白天 / 温馨\n· 平行光（太阳光）用暖黄白，强度 1 左右，阴影柔和\n\n黄昏 / 夕阳\n· 平行光偏橙色甚至橘红，压低一点，天光带一点暖紫\n\n夜晚 / 恐怖\n· 平行光几乎不用，主光源换成月亮冷光（偏蓝）\n· 点光源只在局部亮：一盏摇曳的灯、一扇漏光的窗\n· 强度压低、大片阴影 —— 恐惧来自「看不清」\n\n操作上：选中灯光改 Color 和 Intensity；Window → Rendering → Lighting 面板把 Ambient Mode 调成 Skybox，天光自动跟着天空盒走。\n\n心法：先把「这一关的情绪」想清楚，再反推灯光怎么调。光跟着情绪走，别乱打光。' },
    { type: 'quiz', question: '想做一个「恐怖氛围」的走廊场景，下面哪组灯光设置最对路？', options: ['明亮的暖黄光，强度拉满', '冷色（偏蓝）低强度光，大片阴影，局部微弱点光', '用五颜六色的彩灯把走廊照亮'], answer: 1, tip: '恐怖感来自「看不清」：冷色、低强度、多阴影，只在局部留一点微光。暖黄亮光是温馨/白天的配置。' },
    { type: 'text', title: '天空盒与烘焙：画面好看的最后一公里', body: '灯光定情绪，天空盒（Skybox）定「世界」。天空盒就是包在场景外面那层「天」。\n\n换天空盒两步：\n· Window → Rendering → Lighting → Environment 面板\n· 把 Skybox Material 换成现成的天空盒材质\n\n再来说让画面「好看又跑得快」的大招——烘焙光照（Baked Lighting）。\n\n直接打实时灯光，阴影每帧现算，灯一多就卡。烘焙把光影在编辑器里「烤」一遍，存成光照贴图（Lightmap），运行时直接贴，几乎不耗性能。\n\n流程四步：\n1. 把不动的场景物体在检查器右上角勾成 Static\n2. Window → Rendering → Lighting 打开面板\n3. 光照模式选 Baked 或 Mixed\n4. 点 Generate Lighting，等进度条跑完\n\n烤完再看场景，墙壁、墙角都有了柔和真实的明暗——「自带光影的氛围感」扑面而来，帧数还不掉。\n\n一句话：天空盒给世界「定调」，烘焙给光影「提前做好」。' },
    { type: 'quiz', question: '想让不动的墙壁和建筑「自带真实柔和的光影」，又不想每帧实时计算拖慢游戏，最合适的做法是？', options: ['多摆几盏实时点光源', '把静态物体标记后烘焙光照（Baked Lighting），生成光照贴图', '把阴影全部关掉，纯靠贴图'], answer: 1, tip: '烘焙光照在编辑器里提前算好静态物体的光影，存成光照贴图，运行时几乎不耗性能，画面还更真实柔和。' },
  ],
  'leveldesign-3': [
    { type: 'text', title: '新手引导：教得会，又不惹人烦', body: '新手引导（Onboarding）是把「玩家」变成「会玩的玩家」的那道桥。做坏了，玩家要么学不会、要么被烦走。\n\n大忌：弹窗轰炸 + 满屏文字。\n\n「点击屏幕移动。长按加速。双击跳跃……」连弹五条弹窗，没人读得下去。\n\n讨喜的引导，核心一句：让玩家在玩中学（Learning by Doing）。\n\n三个原则：\n1. 一次只教一件事\n刚开场别同时塞「移动 + 跳跃 + 攻击」。先只教移动。\n\n2. 先给机会，再给答案\n让玩家先试，失败/卡住了再弹提示。\n\n3. 用行动代替文字\n教「跳跃」不是写「按空格跳跃」，而是摆一堵矮墙，让玩家自然想跳过去。\n\n好的引导像无形的老师：玩家没察觉被教，但自然而然就会了。\n\n做个自检：找个从没玩过的人玩你的开场五分钟，你在旁边只看不说话——他卡在哪，那里就是该补的地方。' },
    { type: 'quiz', question: '新手引导最忌讳哪种做法？', options: ['一次只教一个新操作', '开局就连弹好几条文字说明，把玩法一口气讲完', '先让玩家自己试，卡住再给提示'], answer: 1, tip: '弹窗轰炸+满屏文字是新手引导的大忌。讨喜的做法是「在玩中学」：一次一件事、先试后教、用行动代替文字。' },
    { type: 'text', title: '暗示方向与难度曲线：让玩家「顺着走、有奔头」', body: '关卡设计高手不止会「教」，还会「引」——不直接说话，而是用颜色、光、声音偷偷把玩家往对的方向带。\n\n三大暗示武器：\n· 颜色（Color）—— 关键交互物用亮眼的高对比颜色。金色的道具、发红的开关、发光的门。注意别五颜六色撒得到处都是，全亮等于全不亮\n· 光（Light）—— 黑暗里一束光柱、远方一盏灯，都是「往那边走」的路标\n· 声音（Sound）—— 远处流水声 = 那边有水源；金币叮当 = 那边有奖励\n\n再讲难度曲线（Difficulty Curve）——黄金法则是：先易后难，有张有弛。\n\n为什么必须先易后难？\n· 第一关如果就让玩家反复失败，人马上就跑了\n· 开场先给「我能行」的感觉\n\n具体套路：\n· 慢热开局 —— 开场几步路毫无威胁\n· 一次一个新挑战 —— 每个新机制配一小段「安全演练」\n· 张弛交替 —— 难一段，松一段\n· 难度小坡爬 —— 每次只比上次难一点点\n\n一句话：颜色、光、声音是「无声的路标」，难度曲线是「玩家的呼吸节奏」——两样做好了，玩家不知不觉就被你牵着走完了整关。' },
    { type: 'quiz', question: '设计关卡难度时，下面哪个才是正确的难度曲线？', options: ['开局就上最难的机制，让玩家迎难而上', '先易后难、一次引入一个新挑战、张弛交替', '全程一个难度，保持平稳'], answer: 1, tip: '先易后难给玩家「我能行」的起跑感觉；一次一个新挑战防止信息过载；张弛交替让情绪有起伏。开局最难或全程平淡都会劝退玩家。' },
  ],
  'procgen-1': [
    { type: 'text', title: '随机数与种子：世界怎么「变」与怎么「不变」', body: '随机是程序化生成的地基——一个 Random，世界就活了。但随机也有「任性」的一面，得靠种子（Seed）来管住它。\n\n先认识最常用的随机数：\nRandom.Range(0f, 10f)   // 浮点：0.0 ~ 10.0 随便取一个\nRandom.Range(0, 10)     // 整数：0 ~ 9，注意不含 10\n\n拿来生成东西：\nfloat x = Random.Range(-5f, 5f);   // 左右随机\nfloat y = Random.Range(1f, 8f);    // 高低随机\n\n问题来了：每次启动游戏，随机数都「完全不一样」。做随机地图很爽；可要做存档、要做「抽到的这关明天还想玩同一关」，就抓瞎了——需要让随机变得可重复。\n\n答案就是种子（Seed）：\nRandom.InitState(42);   // 定下种子\n\n一旦定了种子，之后按顺序取出来的随机数就完全固定：种子是 42，第一次拿到的永远是同一个数。种子相同，结果就相同。\n\n于是「每次进游戏地图一样/不一样」就变成了一个开关：\n\n// 地图一样：用固定种子（比如关卡编号做种子）\nRandom.InitState(levelNumber);\n\n// 地图不一样：不设种子，或用当前时间做种子\nRandom.InitState((int)(System.DateTime.Now.Ticks & 0x7FFFFFFF));\n\n生成地图的代码一个字都不用改，只改这一行种子，世界就「一样/不一样」。' },
    { type: 'quiz', question: '想让「每次进游戏生成的地图完全一样」，该怎么做？', options: ['每次都用 Random.Range 就自然一样', '在生成前调用 Random.InitState(相同种子)', '生成后把地图存成图片'], answer: 1, tip: '种子决定随机序列：同一个种子，之后按顺序取出的每个随机数都固定，所以地图可复现。' },
  ],
  'procgen-2': [
    { type: 'text', title: 'Perlin 噪声：让地形像「真山真水」', body: '上一课学会了随机，可你要是拿 Random.Range 给地形逐点抬高度，会得到什么？一片锯齿、满地尖刺，像针山——因为每个点的高度和邻居毫无关系，上一格还是 0，下一格直接蹦到 100。\n\n真山真水不长这样：山是连绵的，这一格高一点，旁边的格通常也高一点，是渐变的。\n\n噪声（Noise）就是专门生成这种「连续随机」的数学函数。Unity 现成的叫 Perlin 噪声：\nMathf.PerlinNoise(x, y)\n\n给它两个坐标，它返回 0~1 之间的一个数，两个关键性质：\n· 邻近的点返回值很接近——连续、平滑\n· 全局又没有规律——起伏自然、不重复\n\n用法：把地形每个顶点的坐标喂进去，拿返回值当高度。\n\n// 生成一块 width × depth 的地形网格，用噪声定每个顶点高度\nfor (int x = 0; x < width; x++)\n{\n    for (int z = 0; z < depth; z++)\n    {\n        // 0.1f 是缩放：调小起伏更平缓，调大地形更碎\n        float h = Mathf.PerlinNoise(x * 0.1f, z * 0.1f);\n        vertices[x + z * width] = new Vector3(x, h * 30f, z);\n    }\n}\n\n三个数各管什么：\n· 输入坐标乘的 0.1f —— 缩放：越大地形越碎，越小越平缓\n· 乘的高度 30f —— 落差：控制山有多高\n· 给 x 坐标加偏移，比如 x * 0.1f + 5f —— 整片地形换一片新模样\n\n再叠一层更有味：两层不同缩放的噪声相加，叫分形噪声（FBM）——低层管大起伏、高层管小细节，出来就是「有远山也有近坡」。\n\n一句话对比：Random.Range 逐点随机 = 尖锐破碎；Perlin 噪声 = 点与点连续、起伏自然，才是地形的料。' },
    { type: 'demo', demo: 'NoiseDemo', title: '噪声地形演示', instructions: '看 Perlin 噪声生成的连绵地形，点「重新生成」换一座新山。' },
    { type: 'quiz', question: '为什么用 Perlin 噪声生成地形，而不是 Random.Range 逐点随机？', options: ['Random.Range 计算更慢，噪声更快', '噪声返回的值是连续的，邻近点接近，地形起伏自然；纯随机逐点跳变会出尖刺针山', '噪声是 Unity 自带的免费素材包，随机不行'], answer: 1, tip: '噪声的关键是「连续」：邻近的点返回值接近，所以是连绵起伏；纯随机每点独立，全是锯齿尖刺。' },
  ],
  'procgen-3': [
    { type: 'text', title: '随机摆放物体：树、石头、敌人怎么撒', body: '地图上要撒树、撒石头、撒敌人——直接 Random.Range 个坐标就 Instantiate？先别急，两个坑等着你：物体可能重叠摞成一坨；东西一多，帧数可能崩。\n\n坑一：防重叠\n思路：每放一个记下位置；下一个想放时，先和已放的位置比距离，太近就重新抽一个坐标。\n\nList<Vector3> placed = new List<Vector3>();\n\nfor (int i = 0; i < 50; i++)\n{\n    for (int attempt = 0; attempt < 20; attempt++)   // 最多试 20 次\n    {\n        Vector3 pos = new Vector3(\n            Random.Range(-20f, 20f), 0f,\n            Random.Range(-20f, 20f));\n\n        if (!TooClose(pos, placed, 2f))   // 和所有已放位置距离都大于 2\n        {\n            placed.Add(pos);\n            Instantiate(treePrefab, pos, Quaternion.identity);\n            break;\n        }\n    }\n}\n\nbool TooClose(Vector3 p, List<Vector3> list, float minDist)\n{\n    foreach (Vector3 other in list)\n        if ((p - other).sqrMagnitude < minDist * minDist)\n            return true;\n    return false;\n}\n\n注意那个 sqrMagnitude：它算「距离的平方」，免去开方（sqrt）。比大小只看谁大谁小，平方不影响结论——几千次检测省下的开方很可观。\n\n外层套「最多试 20 次」是防死循环：区域塞满了放不下，抽不到合适位置就跳过。\n\n坑二：大量生成的性能\n· 摆放逻辑放 Start/Awake 一次性做完，别放 Update\n· 反复生成销毁用对象池，避免 GC 卡顿\n· 数量几百上千，同种物体共用一个材质利于合批\n\n一句话心法：随机摆放 = 距离检测防重叠 + 开局一次性生成 + 海量时换性能手段。' },
    { type: 'quiz', question: '想在区域里随机放 50 棵树、不让它们重叠，最直接的思路是？', options: ['生成前检查与已放物体的距离，太近就重新随机一个位置', '把所有树缩放到 0.01 大小，重叠也看不出来', '一次把树全放坐标原点再散开'], answer: 0, tip: '每放一个记下位置，新的位置先做「距离体检」，不合格就重抽——这是防重叠的标准做法。' },
  ],
  'procgen-4': [
    { type: 'text', title: '程序化生成关卡：随机但不能「不可通关」', body: '随机撒树撒石头算简单，生成一整关就难多了——难在：关卡是随机造的，但你得保证玩家能过关。随机出一个「跳不过去的断崖」「够不着的平台」，玩家摔死三遍就会卸载游戏。\n\n核心心法一句话：随机的是「数值」，锁死的是「规则」。每一关都随机生成，但生成参数永远被困在「保证能过」的笼子里。\n\n以随机平台跑酷为例，拆解规则约束：\n\n1. 平台间隔要「跳得过」\n玩家最大跳跃距离算 6 米，平台之间的空隙就永远取 2~5 米——留点余量，不贴极限。\n\n2. 高度差要「爬得上去」\n平台高度差限制在 ±3 米内，不会冒出 10 米高的墙。\n\n3. 起点终点固定\n出生点、终点保证安全，规则只作用在中间路段。\n\n代码骨架：\n\nfloat x = 0f;\nfloat lastY = 0f;\n\nwhile (x < levelLength)\n{\n    float gap = Random.Range(2f, 5f);         // 间隔锁死在可跳范围\n    float y = lastY + Random.Range(-2f, 2f);  // 高度差锁死在 ±2\n    y = Mathf.Clamp(y, -4f, 4f);              // 再夹一次\n    Instantiate(platformPrefab, new Vector3(x + gap, y, 0f), Quaternion.identity);\n    x += gap + platformWidth;\n    lastY = y;\n}\n\n关卡「长相」每次都不一样，但每一关都保证跳得过去——这就是程序化关卡的全部秘密：把随机数关进规则的笼子里。\n\n再延伸几个思路：\n· 地牢（Dungeon）：先按格子摆房间，再保证相邻房间之间开一条通路\n· 敌人强度：离起点越远敌人越强\n· 钥匙门：放钥匙之前，保证门一定出现在钥匙后面\n\n一句话总结：程序化生成关卡 = 随机生成内容 + 规则保证可玩。' },
    { type: 'quiz', question: '程序化生成的跑酷关卡，为什么平台的间隔要锁在 2~5 米而不是 1~20 米全随机？', options: ['2~5 米的数值更美观', '玩家最大跳跃距离是 6 米，把间隔限制在可跳过范围内才能保证一定通关', '因为 Random.Range 只能取 2~5'], answer: 1, tip: '程序化生成的核心是「随机数值 + 锁死规则」：把随机参数限制在保证可玩的范围里，关卡的随机才是安全的。' },
  ],
  'physadv-1': [
    { type: 'text', title: '物理材质与刚体调校', body: '默认情况下，Unity 的物理世界像一块「又滑又僵的冰面」——你加个 Rigidbody 让它掉下来，它会跟地板撞一下然后缓缓滑走。想让物体该滑的滑、该停的停、该弹的弹，得靠两样东西：物理材质（Physic Material）和刚体参数。\n\n一、物理材质：摩擦与弹性的「皮肤」\n\n物理材质是个独立资产（Assets 右键 → Create → Physic Material），建好后拖到物体的 Collider 上。\n\n四个关键参数：\n· Static Friction 静态摩擦 —— 让物体从静止开始动，要克服的摩擦力\n· Dynamic Friction 动态摩擦 —— 动起来之后的阻力\n· Bounciness 弹性 —— 0 完全弹不起来，1 几乎永动机式弹跳\n· Friction Combine / Bounce Combine —— 两物体相碰时摩擦和弹性怎么合：Average 取平均（默认）、Minimum 取小、Multiply 相乘、Maximum 取大\n\n经典配方：\n· 冰面地板 —— 摩擦往 0 拉，Bounciness 保持 0：球滚上去几乎不减速\n· 橡皮球 —— Bounciness 0.8 左右，摩擦调低\n· 木箱 —— 摩擦 0.6~0.8，Bounciness 0：推到哪停到哪\n\n二、刚体参数：手感藏在细节里\n\n· Mass 质量 —— 影响碰撞时「谁推得动谁」。注意一个大坑：质量和下落快慢几乎无关，改质量主要影响撞起来的劲道\n· Drag 阻力 —— 平移阻力，像空气阻力。球刹不住？把 Drag 调到 0.5~1，立刻「听话」\n· Angular Drag 角阻力 —— 旋转阻力，滚动太猛就调它\n· Interpolate 插值 —— 开 Interpolate，画面补出中间位置，小球滚动顺滑。做滚球、跑酷记得打开\n· Collision Detection —— 高速子弹会「穿透」薄墙。改成 Continuous（连续检测），高速物体就穿不过去了\n\n三、调出舒服手感的一套流程\n\n1. 球滚太快刹不住 → Drag、Angular Drag 一起加\n2. 撞了东西像打滑 → 配摩擦材质 + 调大 Drag\n3. 跳起来发飘、飘在空中下不来 → 检查重力没关，Mass 别调太小\n4. 穿墙 → Collision Detection 开 Continuous\n5. 一帧一卡 → Rigidbody 的 Interpolate 打开' },
    { type: 'quiz', question: '想让一块地板像冰面一样滑（球滚上去几乎不减速），物理材质该怎么配？', options: ['静态摩擦和动态摩擦都调高', '摩擦全调低、Bounciness 保持 0', '摩擦调低、Bounciness 调成 1'], answer: 1, tip: '摩擦越低越滑，这是「滑」的本体；Bounciness 管的是「反弹」不是「滑」。想滑，就只降摩擦，弹性保持 0 别乱开。' },
  ],
  'physadv-2': [
    { type: 'text', title: '关节与连接', body: '关节（Joint）是 Unity 物理的「胶水」——把两个刚体连在一起，限制它们之间的相对运动。门、秋千、链条、吊桥，全靠它。\n\n两条铁律，先记牢：\n· 被连接的双方都必须有 Rigidbody；通常「不动的那头」（门框、横梁）设成 Kinematic，当锚点\n· 关节组件挂在「会动的那头」上（门板、座椅）\n\n一、铰链关节 HingeJoint —— 绕一根轴转\n\nHingeJoint 让物体只能绕一条轴转，像门、像摆锤。关键参数：\n· Connected Body —— 连到谁（拖门框的刚体；留空就连世界）\n· Anchor / Axis —— 铰链装在物体哪个位置、朝哪个方向转\n· Use Limits 角度限制 —— 勾上后限定转动范围（门只开到 90 度）\n· Spring 回位弹簧 —— 松手后自己弹回原位\n· Motor 电机 —— 自己能转，像自动门\n\n做门：门板挂 HingeJoint，Connected Body 拖门框，Use Limits 打开设 0~90 度，门框 Rigidbody 设成 Kinematic。\n\n想用代码开门（玩家按 E），给铰链开电机：\n\npublic class Door : MonoBehaviour\n{\n    private HingeJoint hinge;\n    void Start()\n    {\n        hinge = GetComponent<HingeJoint>();\n        JointMotor motor = hinge.motor;\n        motor.targetVelocity = 90f;\n        motor.force = 1000f;\n        hinge.motor = motor;\n        hinge.useMotor = true;\n    }\n}\n\n二、弹簧关节 SpringJoint —— 弹性的「软连接」\n\nSpringJoint 像一根弹簧拴着两个刚体：拉开会自动往回拽。三个参数：\n· Spring 刚度 —— 越大越硬，越像铁棍\n· Damper 阻尼 —— 越大震荡衰减越快\n· Min / Max Distance —— 最小/最大距离限制\n\n三、固定关节 FixedJoint —— 焊死\n\nFixedJoint 把两个刚体焊成一体：一个动，另一个死死跟着动。典型用法：把箱子焊在移动平台上、把武器焊在角色手上。\n\n四、做一条荡来荡去的链条\n\n1. 做一个链环，加 Rigidbody，存成预制体\n2. 循环实例化：每节链环挂 HingeJoint，Connected Body 指向上一个\n3. 第一节指向横梁（Kinematic）\n\n小坑提醒：关节物理要「跑稳」需要几帧，别一开局就猛推它。' },
    { type: 'demo', demo: 'JointDemo', title: '物理关节演示', instructions: '点「推一下」看摆锤和链条晃起来——关节把它们连在一起摆动。' },
    { type: 'quiz', question: '想做一扇门：门框钉在墙上不动，门板能被推开但最多开 90 度。正确的做法是？', options: ['门框和门板各挂一个 HingeJoint', '门板挂 HingeJoint，Connected Body 指向门框、设好角度限制，门框设成 Kinematic', '给门板加一个 SpringJoint 弹簧就行'], answer: 1, tip: '关节挂在「动的那头」，连到「不动的那头」；不动的一头设成 Kinematic 当锚点。HingeJoint 配角度限制正好管「最多开 90 度」。' },
  ],
  'physadv-3': [
    { type: 'text', title: '碰撞响应与射线实战', body: '前两节把物体的「手感」和「连接」搞定了，这一节上战场：怎么知道物体撞了谁、撞得多狠，以及用射线做精准判定。\n\n一、碰撞回调：OnCollisionEnter 里能拿到什么\n\npublic void OnCollisionEnter(Collision collision)\n{\n    collision.gameObject;        // 撞到的是谁\n    collision.transform;         // 撞到物体的 Transform\n    collision.collider;          // 撞进来的那个 Collider\n    collision.contacts[0].point; // 撞点坐标（做火花、音效位置）\n    collision.relativeVelocity;  // 相对速度（判断撞得多狠）\n}\n\n最实用的一招：用 relativeVelocity.magnitude 判断撞击该多响：\n\npublic void OnCollisionEnter(Collision collision)\n{\n    float hitSpeed = collision.relativeVelocity.magnitude;\n    if (hitSpeed > 8f)\n    {\n        GetComponent<AudioSource>().Play();\n    }\n}\n\n配套回调：OnCollisionStay（接触中）、OnCollisionExit（分开了）。触发器则是 OnTriggerEnter/Stay/Exit。碰撞管「实体阻挡」，触发器管「感应不阻挡」。\n\n二、力与冲量：AddForce 的四种模式\n\nrb.AddForce(Vector3.up * 10f, ForceMode.Impulse);   // 瞬间爆发\nrb.AddForce(Vector3.up * 10f);                       // 默认 Force，持续推\n\nForceMode 四种，记个口诀：\n· Force 连续力 —— 乘以质量，靠「累计」加速（像持续吹的风）\n· Acceleration 加速度 —— 忽略质量，当「恒定加速度」用\n· Impulse 冲量 —— 乘以质量，瞬间一击（跳跃、爆炸、被击飞）\n· VelocityChange 速度突变 —— 忽略质量直接改速度（子弹命中，最干脆）\n\n注意：Update 每帧时长不固定，在里面用 AddForce 要乘 Time.deltaTime；物理加力优先放 FixedUpdate。\n\n三、射线进阶：过滤与多发\n\n1. LayerMask 过滤 —— 只打你想打的层\n\nint enemyLayer = 1 << LayerMask.NameToLayer(\"Enemy\");\nRay ray = Camera.main.ScreenPointToRay(Input.mousePosition);\nbool hit = Physics.Raycast(ray, out RaycastHit info, 100f, enemyLayer);\n\n2. 拿全部命中 —— 一枪打穿一排敌人\n\nRaycastHit[] hits = Physics.RaycastAll(ray, 100f, enemyLayer);\n\n3. 每帧都射、又要稳，用 RaycastNonAlloc：把结果写进「预先分配好的数组」，不产生任何垃圾回收（GC）：\n\nRaycastHit[] results = new RaycastHit[16];\nint count = Physics.RaycastNonAlloc(ray, results, 100f, enemyLayer);' },
    { type: 'quiz', question: '想做一把能一枪打穿整排敌人（每个都掉血）的枪，射线该怎么用？', options: ['用 Physics.Raycast，它一次能返回所有命中', '用 RaycastAll / RaycastNonAlloc 拿全部命中，再用 LayerMask 只算敌人层', '不用射线，靠每帧的 OnCollisionEnter 慢慢碰'], answer: 1, tip: 'Raycast 只返回第一个撞到的；贯穿多个目标要用 RaycastAll（高频射击选 RaycastNonAlloc 避免 GC），LayerMask 负责只挑敌人层。' },
  ],
  'audio-1': [
    { type: 'text', title: 'AudioMixer 混音器：把声音分门别类', body: '会做「加音效」之后，你迟早撞上这个问题：玩家想分开调音乐、音效、环境声的音量，怎么办？\n\n最粗暴的做法：每个 AudioSource 存一个音量变量，自己一个个管——几十个音效管到你怀疑人生。正解是 AudioMixer（混音器）：把声音分门别类，一组一闸。\n\n一、分组（Groups）\n· Project 面板右键 → Create → Audio Mixer，建一个混音器\n· 双击打开 Audio Mixer 窗口，默认有三个分组：Master（总闸）、Music（音乐）、SFX（音效）\n· 右键还能新建分组（Environment 环境声、UI 界面声）\n\n二、把声音送进分组\n选中带 AudioSource 的物体，把检查器里 AudioSource 的 Output 槽拖进对应分组：\n· 背景音乐的 AudioSource → Music\n· 受击、得分等音效 → SFX\n\n从此推 Music 的滑杆，所有音乐一起变。\n\n三、代码里控制音量\n混音器把滑杆对应成参数，代码能改。\n\n第一步，暴露参数：Audio Mixer 窗口选中 Music 分组 → 检查器里 Volume 右侧的 ... → Expose Volume to script，再到 Parameters 栏把名字改成 MusicVolume。\n\n第二步，用 SetFloat 改：\nAudioMixer mixer = Resources.Load<AudioMixer>(\"主混音器\");\nmixer.SetFloat(\"MusicVolume\", Mathf.Log10(vol) * 20);\n\n为什么套 Log10？混音器的 Volume 单位是分贝（dB），不是 0~1 的线性值！玩家滑杆是 0~1，得转成分贝：1.0 约 0dB，0.5 约 -6dB。反着读回来：\nmixer.GetFloat(\"MusicVolume\", out float db);\nfloat vol = Mathf.Pow(10f, db / 20f);\n\n四、做音量设置（存玩家偏好）\n完整套路：开局读存档 → 应用到混音器 → 玩家拖滑杆时更新并存回。\n\n一句话：AudioMixer = 声音的分组总控台；暴露参数 + SetFloat，游戏里随时调各组音量。' },
    { type: 'quiz', question: '玩家把音量滑杆设成 0.5（一半音量），想让混音器 Music 分组准确反映这个音量。下面哪句是对的？', options: ['mixer.SetFloat(\"MusicVolume\", 0.5f)，混音器和滑杆一个单位', 'mixer.SetFloat(\"MusicVolume\", Mathf.Log10(0.5f) * 20f)，先转成分贝', 'mixer.SetFloat(\"MusicVolume\", 0f)，静音就是一半'], answer: 1, tip: '混音器 Volume 是分贝单位：0.5 线性音量 ≈ Log10(0.5)*20 ≈ -6dB。直接传 0.5 音乐会轻得几乎听不见——滑杆值和分贝是两个单位，必须换算。' },
  ],
  'audio-2': [
    { type: 'text', title: '3D 空间音效：声音有远近、有左右', body: '2D 音效像贴在耳边：不管多远都一个音量。3D 空间音效不一样——声音有远近、有方位，角色跑远了脚步变轻，敌人从左边开枪声音就从左边来。\n\n一、Spatial Blend：2D 与 3D 的旋钮\nAudioSource 上有个关键参数 Spatial Blend：\n· 0 —— 纯 2D：音量恒定（背景音乐、UI 音效）\n· 1 —— 纯 3D：音量随距离渐弱，声像左右定位\n· 中间值 —— 两者混合\n\n二、3D 声音的四大参数\n· Volume Rolloff 衰减曲线 —— 声音随距离怎么变弱：Logarithmic（对数，最真实）、Linear（线性）、Custom（自绘）\n· Min Distance —— 这个距离内音量满格不衰减\n· Max Distance —— 超过后声音基本消失\n· Doppler Level 多普勒 —— 靠近尖锐、远离低沉（火车呼啸）。0 关闭，游戏里常用 0.5~1\n\n三、脚步声怎么做\n给角色一个子物体挂 AudioSource（Spatial Blend=1，Min Distance=0.5，Max Distance=15），用动画事件在「脚踩地」那一帧 Play 一下。再备几段脚步音频随机换着播。\n\n四、环境声怎么做\n· 声源设 Spatial Blend=1，把 Max Distance 拉大到盖住想覆盖的区域，衰减选 Linear\n· 想「走进房间才有回声」，给房间加 Reverb Zone（混响区）组件\n\n一句话：Spatial Blend 决定「是不是 3D」，衰减曲线和 Min/Max Distance 调远近，Doppler 给速度感。' },
    { type: 'quiz', question: '场景里一个火堆发出噼啪声，想让玩家「走近声音渐大、走远声音渐小」。该怎么设置？', options: ['Spatial Blend 设 1（3D），选好衰减曲线并配 Min/Max Distance', 'Spatial Blend 设 0（2D），音量恒定', '不做任何设置，默认值就行'], answer: 0, tip: '只有 3D（Spatial Blend=1）才做距离衰减，配合衰减曲线和 Min/Max Distance 控制「渐大渐小」的节奏；2D 音量恒定不变。' },
  ],
  'audio-3': [
    { type: 'text', title: '音效管理器：即时播放、不卡顿、还能淡入淡出', body: '前面做音效，习惯是「给物体挂 AudioSource 再 Play」。游戏一大就露馅：50 个怪物一起受击，都要能同时出声，还都要「立即播放、不卡一下」。\n\n一、单例音效管理器\n把「播放音效」集中到一个全局管理对象：\npublic class AudioManager : MonoBehaviour {\n    public static AudioManager Instance;\n    public AudioSource sfxSource;\n    void Awake() { Instance = this; }\n    public void PlaySFX(AudioClip clip) {\n        sfxSource.PlayOneShot(clip);\n    }\n}\n\n注意 PlayOneShot 和 Play 的区别：\n· Play() —— 正播着再调就从头重播，前一声被掐掉\n· PlayOneShot(clip) —— 在同一 AudioSource 上「叠加」播，不打断当前声音，适合连续受击、连发子弹\n\n二、音效池：一堆声源轮着用\npublic class AudioManager : MonoBehaviour {\n    public static AudioManager Instance;\n    public AudioSource sfxPrefab;\n    public int poolSize = 16;\n    private List<AudioSource> pool = new List<AudioSource>();\n    private int index = 0;\n\n    void Awake() {\n        Instance = this;\n        for (int i = 0; i < poolSize; i++) {\n            AudioSource s = Instantiate(sfxPrefab, transform);\n            pool.Add(s);\n        }\n    }\n\n    public void PlaySFX(AudioClip clip, float volume = 1f) {\n        AudioSource s = pool[index];\n        index = (index + 1) % pool.Count;\n        s.pitch = Random.Range(0.95f, 1.05f);   // 轻微随机音高，去复读感\n        s.volume = volume;\n        s.PlayOneShot(clip);\n    }\n}\n\n三、背景音乐切换：淡入淡出\nIEnumerator Fade(AudioSource s, float target, float time) {\n    float start = s.volume;\n    float t = 0;\n    while (t < time) {\n        t += Time.deltaTime;\n        s.volume = Mathf.Lerp(start, target, t / time);\n        yield return null;\n    }\n    s.volume = target;\n}\n\n四、完整套路串一遍\n受击音效 → AudioManager.Instance.PlaySFX(hitClip)；得分 → PlaySFX(scoreClip)；BOSS 战 → 音乐淡出 → 换战斗 BGM → 淡入。\n\n一句话：PlayOneShot 叠加不打断、音效池解决高频不卡顿、协程做淡入淡出——三个凑齐，声音系统就「上道」了。' },
    { type: 'quiz', question: '怪物连续受击时，要求「每次受击立即播放、多次受击能叠加出声、不卡顿」。下面哪个组合最合适？', options: ['一个 AudioSource 用 Play() 循环播', '音效池（一组 AudioSource 轮着用）+ PlayOneShot 叠加播放', '每受击一次就 Instantiate 一个新 AudioSource 再销毁'], answer: 1, tip: '音效池复用声源 + PlayOneShot 叠加：高频受击既不掐掉前一声，又不现 new 现销毁卡顿。' },
  ],
  'inputadv-1': [
    { type: 'text', title: '新版 Input System：告别 Input 老一套', body: '你以前这么写输入：\nfloat h = Input.GetAxis(\"Horizontal\");\nif (Input.GetKeyDown(KeyCode.Space)) { Jump(); }\n\n这套老 Input 类用起来简单，但天生几个毛病：\n· 依赖「魔法字符串」—— GetAxis(\"Horizontal\") 拼错了不报错，只在运行时装死\n· 想给玩家改键 —— 得自己写一套映射，烦\n· 手柄、触屏支持 —— 东拼西凑，游戏机/手机上体验差\n\n于是官方推出了新版 Input System 包。核心思想只有一句话：把「行为」和「按键」拆开。\n\n三个概念，必须分清：\n· Action（动作）—— 玩家想干的事，比如「移动」「跳跃」「开火」。只描述行为，不管按哪个键\n· Binding（绑定）—— 「哪个键/哪个摇杆」触发「哪个动作」的对应关系。跳跃默认绑到空格键\n· Map（映射表）—— 一组动作的集合，比如「UI 界面」一套、「游戏操控」一套\n\n这些关系不用写代码，用 Input Action 资产在编辑器里可视化地配：右键 → Create → Input Actions。\n\n怎么在代码里读？两种主流姿势。\n\n姿势一：声明输入引用，勾选事件自动接：\npublic class Player : MonoBehaviour\n{\n    public InputActionReference moveAction;\n    public InputActionReference jumpAction;\n    void OnEnable() { jumpAction.action.performed += OnJump; }\n    void OnDisable() { jumpAction.action.performed -= OnJump; }\n    void Update()\n    {\n        Vector2 move = moveAction.action.ReadValue<Vector2>();\n        transform.Translate(move * Time.deltaTime);\n    }\n    void OnJump(InputAction.CallbackContext ctx) { Jump(); }\n}\n\n姿势二：让 Input System 自动生成 C# 封装类（Asset 上勾 Generate C# Class）：\nplayerInput.Player.Move.ReadValue<Vector2>();\nplayerInput.Player.Jump.performed += OnJump;\n\n比老 Input 硬写字符串优雅得多——拼错名字直接编译报错。\n\n一句话：老 Input 图省事，新 Input System 图的是「可重配、多设备、好维护」。新项目建议直接上新。' },
    { type: 'quiz', question: '在新 Input System 中，「跳跃」这个动作要绑定到空格键，这个「动作对按键」的对应关系叫什么？', options: ['Action（动作）', 'Binding（绑定）', 'PlayerInput 组件'], answer: 1, tip: 'Action 只描述行为（跳不跳），Binding 才决定「哪个按键触发它」。PlayerInput 是挂在角色身上管理整套输入的组件。' },
  ],
  'inputadv-2': [
    { type: 'text', title: '按键重映射：把键盘交给玩家', body: '「让玩家自定义按键」是动作类游戏的基本功。新 Input System 里做这件事，官方早就备好了轮子。\n\n原理先讲透：绑定分两层。\n· 原始绑定（Binding）—— 你在 Input Action 资产里配的默认键，永远不动\n· 覆盖（Override）—— 玩家重映射后生成的「替代键」，只记在 override 里\n\n玩家改键，改的是 override，原始配置毫发无损。想「恢复默认」，把 override 清空就行。\n\n第一步，让玩家改键。用 PerformInteractiveRebinding：\npublic class RebindButton : MonoBehaviour\n{\n    public InputActionReference jumpAction;\n    public void StartRebinding()\n    {\n        jumpAction.action.PerformInteractiveRebinding()\n            .WithControlsExcluding(\"Mouse\")\n            .WithCanceling(\"<Keyboard>/escape\")\n            .OnComplete(op => { op.Dispose(); Save(); })\n            .OnCancel(op => op.Dispose())\n            .Start();\n    }\n}\n\n第二步，存盘。改完的 override 序列化成 JSON，塞进 PlayerPrefs：\nvoid Save()\n{\n    string json = jumpAction.action.SaveBindingOverridesAsJson();\n    PlayerPrefs.SetString(\"Rebinds\", json);\n    PlayerPrefs.Save();\n}\nvoid Load()\n{\n    if (PlayerPrefs.HasKey(\"Rebinds\"))\n        jumpAction.action.LoadBindingOverridesFromJson(PlayerPrefs.GetString(\"Rebinds\"));\n}\n\nAwake 里调一次 Load()，玩家上次改的键，一进游戏就在。\n\n第三步，恢复默认：\nvoid ResetAll()\n{\n    jumpAction.action.RemoveAllBindingOverrides();\n    PlayerPrefs.DeleteKey(\"Rebinds\");\n}\n\n为什么「改键即时生效」不用重启？override 是在运行时直接盖在原始绑定上的——Load 完那一刻，绑定就已经换好了。\n\n实战细节：\n· 记录「当前在改哪个动作」—— 用一个字段记当前 rebinding 的 action\n· 显示新键名 —— 用 action.GetBindingDisplayString(0)，把「改了哪个键」拼进按钮文字\n· 复用同一个 rebind 流程 —— 移动/跳跃/开火共用一个\n\n一句话：改键 = 玩家录新键（override）→ 存 JSON 进 PlayerPrefs → 启动时 Load → 想还原就清空 override。' },
    { type: 'quiz', question: '玩家把「跳跃」从空格改成 K 键后，这份改键配置要跨重启保存，最稳的做法是？', options: ['写死在代码里，改一次编译一次', '把 override 存成 JSON 写进 PlayerPrefs，启动时 Load', '每次启动让玩家重新按一遍键'], answer: 1, tip: 'SaveBindingOverridesAsJson 把改键结果序列化成 JSON，存进 PlayerPrefs 跨重启保留；原始绑定没动过，想恢复默认清空 override 即可。' },
  ],
  'inputadv-3': [
    { type: 'text', title: '多设备与触屏：键盘手柄触屏一锅端', body: '一个动作，键盘能触发、手柄能触发、手机上点屏幕也能触发——这不是「多写几份代码」，新 Input System 天生就是干这个的。\n\n原理一句话：一个 Action 底下挂多个 Binding，每个 Binding 绑定一种设备上的一个键/摇杆。\n\n「跳跃」这个动作，你可以给它加：\n· Binding 1：键盘 空格\n· Binding 2：手柄 X 键\n· Binding 3：触屏按钮（OnScreenButton）\n\n运行时，任何一个设备触发，动作都算触发。代码里你只读一个动作，完全不用关心玩家用的是啥设备。\n\n配置方法：打开 Input Action 资产，选中动作，点 + 号 Add Binding 一路加下去。\n\n代码里怎么区分设备？三个全局指针：\nKeyboard.current.WKey.isPressed\nGamepad.current.buttonSouth.isPressed\nMouse.current.leftButton.isPressed\n\n想检测设备变化？用事件：\nInputSystem.onDeviceChange += (device, change) => {\n    if (change == InputDeviceChange.Added) Debug.Log(\"插进来一个 \" + device);\n};\n\n触屏这块，两个标配武器：\n一、虚拟摇杆（OnScreenStick）。在 Canvas 上放一个摇杆图片，挂 OnScreenStick 组件，它会把触摸拖动换算成 2D 方向，直接喂给绑定的动作。\n二、OnScreenButton。想做「点这个按钮就跳」，同理放个图片挂 OnScreenButton，绑定到跳跃动作。\n\n写一个同时吃键盘+手柄的移动：\npublic class PlayerMove : MonoBehaviour\n{\n    public PlayerControls controls;\n    void Update()\n    {\n        Vector2 input = controls.Player.Move.ReadValue<Vector2>();\n        Vector3 dir = new Vector3(input.x, 0f, input.y);\n        transform.Translate(dir * Time.deltaTime);\n    }\n}\n\n玩家拿键盘、拿手柄、拿触屏，这段代码一行不改。\n\n踩坑提醒：\n· OnScreenStick 需要项目里启用相应设置，否则组件找不到\n· 触屏虚拟键别铺满屏，留出视野\n· 手柄「死区」在动作的 Deadzone 处理器里调，避免角色自己飘\n\n一句话：一个动作配多个绑定 = 多设备全兼容；触屏用 OnScreenStick / OnScreenButton 补上虚拟键。' },
    { type: 'quiz', question: '想让「跳跃」在键盘空格、手柄 X 键、手机虚拟按钮上都能触发，新 Input System 里应该怎么配？', options: ['建三个不同的动作，一个设备用一个', '给同一个动作加三个 Binding，各绑一个设备', '写三个脚本分别监听三类设备'], answer: 1, tip: '一个 Action 挂多个 Binding，是 Input System 多设备的核心——任意一个设备触发，动作都响应，代码里只读这一个动作。' },
  ],
  'uitoolkit-1': [
    { type: 'text', title: 'UI Toolkit：Unity 的新一代 UI', body: 'UI Toolkit 是 Unity 官方主推的新一代 UI 系统，思路很像网页开发——用 HTML 一样的方式搭界面，用 CSS 一样的方式定样式。\n\n和老的 UGUI 比，最大区别是「三件事分开管」：\n· UXML —— 描述界面长什么样（有什么按钮、什么文字），像 HTML\n· USS —— 定义界面好不好看（颜色、字体、边距），像 CSS\n· C# 代码 —— 只管逻辑（点了之后干什么），不碰样式\n\n这套「结构 / 样式 / 逻辑」三分离的好处：\n· 一套技能两处用 —— 游戏运行时 UI 和编辑器扩展（Inspector、自定义窗口）都能用 UI Toolkit 写\n· 换主题只改 USS —— 不用动一行 C#，给 UI 换个「皮肤」就是换个样式文件\n· 好维护 —— 界面的「长相」和「行为」不再缠在一起\n\n记住一个基石：UI Toolkit 里一切元素都是 VisualElement 的子类——Label 是文字、Button 是按钮、TextField 是输入框，全是它的后代。' },
    { type: 'quiz', question: 'UI Toolkit 里，所有 UI 元素（文字、按钮、输入框……）的共同基类是什么？', options: ['Component', 'VisualElement', 'GameObject'], answer: 1, tip: 'VisualElement 是 UI Toolkit 的万物基石，Label、Button、TextField 等都是它的子类，就跟 HTML 里一切元素都是 Element 一样。' },
  ],
  'uitoolkit-2': [
    { type: 'text', title: '常用控件与布局：把界面「摆」出来', body: '先认熟 UI Toolkit 的常用控件，都是英文名，好记：\n· Label —— 显示文字\n· Button —— 按钮\n· TextField —— 单行输入框\n· Toggle —— 开关（勾选）\n· Slider —— 滑条\n· Dropdown —— 下拉选择\n\n怎么创建？两种方式等价：\n· 写代码：new Button(); 再加到容器里\n· 写 UXML：用 XML 标签声明，更像「搭积木」\n\n布局是 UI Toolkit 最香的地方——它用类似网页 Flexbox（弹性盒子）的机制，几句话就能摆出各种排列：\n· flex-direction: row —— 子元素横着排（像一排按钮）\n· flex-direction: column —— 竖着排（像一列菜单）\n· justify-content —— 主轴方向怎么对齐（居中、靠左、拉开）\n· align-items —— 交叉轴方向怎么对齐\n· flex-grow —— 子元素空间怎么分配（谁多占）\n\nUI Toolkit 不用像 UGUI 那样精算锚点坐标——它像网页一样「自适应」，窗口拉大拉小，界面自己会排。' },
    { type: 'component', title: 'UI Toolkit 常用控件', items: [
      { name: 'VisualElement', desc: '所有 UI 元素的基石，负责布局容器' },
      { name: 'Label', desc: '显示一行文字' },
      { name: 'Button', desc: '可点击的按钮' },
      { name: 'TextField', desc: '输入框' },
      { name: 'Toggle', desc: '开关，勾选/取消' },
      { name: 'Slider', desc: '滑条，拖动取值' },
    ] },
    { type: 'quiz', question: '想让三个按钮「横着排成一排」，用 UI Toolkit 的布局属性该设什么？', options: ['flex-direction: column', 'flex-direction: row', 'flex-grow: 0'], answer: 1, tip: 'flex-direction 决定主轴方向：row 是横排、column 是竖排。一排按钮是横的，所以用 row，跟网页 Flexbox 完全一个道理。' },
  ],
  'uitoolkit-3': [
    { type: 'text', title: '样式与 USS：像 CSS 一样给 UI「化妆」', body: 'USS（UI Style Sheet）就是 UI Toolkit 的「化妆师」——语法和网页 CSS 几乎一模一样，专门管界面好不好看。\n\n三种选择器，从宽到细：\n· 类型选择器 —— Button { } 所有按钮都生效\n· 类选择器 —— .warning { } 打了这个 class 的元素生效\n· ID 选择器 —— #scoreLabel { } 只对这一个元素生效\n\n常见样式属性（都是 CSS 老面孔）：\n· color —— 文字颜色\n· background-color —— 背景色\n· font-size —— 字号\n· padding —— 内边距\n· margin —— 外边距\n· border-radius —— 圆角\n· flex-direction —— 布局方向\n\n还支持「状态」，比如鼠标悬停：\nButton:hover { color: yellow; }   // 鼠标指上去变黄\n\n最妙的是「样式与逻辑分离」：\n· 换主题 —— 整个界面换一套 USS 文件，代码一行不动\n· 一处定义，多处复用 —— 所有确认按钮都打同一个 class，改一处全变\n\n一句话：USS 就是把网页 CSS 那套搬到 Unity——class 管「一群」，id 管「一个」，状态管「交互时」。' },
    { type: 'quiz', question: 'USS 样式文件里写 `.warning { color: red; }`，这个 `.warning` 是什么选择器？', options: ['类型选择器，所有 Button 都生效', '类选择器，打了 warning 这个 class 的元素生效', 'ID 选择器，只有 id 是 warning 的元素生效'], answer: 1, tip: '点号开头是 class 选择器——凡是打上 class=\"warning\" 的元素都会套这套红色样式；类型选择器直接写 Button，ID 选择器用 # 开头。' },
  ],
  'uitoolkit-4': [
    { type: 'text', title: '运行时 UI 与编辑器扩展：一套技术两处用', body: 'UI Toolkit 最大的杀手锏：同一套技术，既能做「游戏里显示的界面」，又能做「Unity 编辑器自己的界面」。\n\n一、做游戏运行时 UI\n1. 先写 UXML 搭结构、USS 定样式（就是前几课学的）\n2. 场景里给任意物体挂一个 UIDocument 组件\n3. 把 UXML 和 USS 文件拖进 UIDocument 的槽里\n4. 按 Play —— 游戏界面上就出现你搭的 UI 了\n\n监听点击这类事件，用 RegisterCallback：\nbutton.RegisterCallback<ClickEvent>(ev =>\n{\n    score += 10;\n    scoreLabel.text = \"得分: \" + score;\n});\n\n想动态改文字？从 UIDocument 拿到 rootVisualElement，再 query 找元素：\nvar root = GetComponent<UIDocument>().rootVisualElement;\nvar scoreLabel = root.Q<Label>(\"scoreLabel\");   // 按名字找\n\n二、做编辑器扩展\nUI Toolkit 是现在做编辑器插件的推荐方案：\n· 自定义窗口 —— 继承 EditorWindow，用 UI Toolkit 搭窗口内容\n· 定制 Inspector —— 给组件画属性面板\n· 工具面板 —— 批量处理、场景工具\n\n编辑器里还能「实时预览」——在编辑器里跑 UI Toolkit，所见即所得，开发体验比老 UGUI 舒服一截。\n\n一句话：游戏 UI 和编辑器插件共用一套 UI Toolkit，学一次，两处受益。' },
    { type: 'quiz', question: '想在游戏运行时把一套 UI Toolkit 界面显示出来，第一步要做什么？', options: ['在场景物体上挂 UIDocument 组件，指定 UXML 和 USS 文件', '写一个 MonoBehaviour 继承 EditorWindow', '把 UXML 文件存成预制体'], answer: 0, tip: 'UIDocument 就是「把 UI Toolkit 界面搬进游戏场景」的入口：挂上它、拖进 UXML/USS，Play 就显示。EditorWindow 是做编辑器扩展窗口用的。' },
  ],
  'dialogue-1': [
    { type: 'text', title: '对话系统：剧情游戏的「嘴」', body: '对话系统管的是游戏里所有「说话」的事——NPC 打招呼、过场剧情、任务说明，全靠它把话说出来。\n\n一段对话，最少由两部分组成：\n· 说话人 —— 谁在说（村民、村长、系统）\n· 台词 —— 说了什么\n\n加个「料」就升级成互动对话：\n· 分支选项 —— 给玩家几个选择，选哪个走哪条线\n\n对话系统的本质，一句话：管理「现在说到哪一句」和「根据玩家选择走到哪一句」。\n\n为什么值得单独做一套系统，而不是直接写死？\n· 对话量大 —— 一个 RPG 几百段对话，散在代码里会乱成麻\n· 策划要改剧本 —— 数据驱动后，改对话不用动代码，填表就行\n· 状态要联动 —— 对话完要接任务、加好感、开商店，系统化才好接\n\n学完这一门，你会搭出「剧本在外、引擎在内」的对话架子——这是 RPG、文字冒险、视觉小说类游戏的共同地基。' },
    { type: 'quiz', question: '一段最基本的对话，至少包含哪两部分？', options: ['说话人和台词', '分支选项和剧情树', '音效和立绘'], answer: 0, tip: '说话人（谁在说）+ 台词（说了什么）是对话的最小单元；分支选项是互动对话才需要的「升级料」。' },
  ],
  'dialogue-2': [
    { type: 'text', title: '对话数据结构：把「剧本」变成「数据」', body: '写对话系统，第一步不是写界面，而是先定「对话长什么样」——用数据结构把剧本表达出来。\n\n从大到小三层：\n· Dialogue（整段对话）—— 一整套对话，通常是一个数组或列表\n· Sentence（一句话）—— 说话人 + 台词，这是最小的显示单元\n· Choice（分支选项）—— 玩家能选的选项：选项文字 + 指向下一条\n\n用 C# 表达大概是这样：\npublic class Sentence\n{\n    public string speaker;   // 谁在说\n    public string text;      // 说什么\n}\n\npublic class Choice\n{\n    public string text;      // 选项上显示什么\n    public int nextId;       // 选它后跳到哪一句\n}\n\n这一层的精髓是「数据驱动」：\n· 对话内容写在 JSON / ScriptableObject / Excel 里，剧本归策划管\n· 代码只负责「读一条 → 显示一条 → 按选择跳转」，剧本怎么改都不动代码\n\n进阶一点，对话数据可以带「字段」：\n· 说话人 id —— 显示名字、头像、表情都靠它查\n· 触发条件 —— 好感度够才说某句\n· 结局动作 —— 说完这句加道具、接任务\n\n一句话：先把「话」变成「数据」，后面的一切（显示、跳转、接任务）都是对这堆数据的处理。' },
    { type: 'component', title: '对话数据结构三件套', items: [
      { name: 'Dialogue', desc: '整段对话，若干条句子的集合' },
      { name: 'Sentence', desc: '一句话：说话人 speaker + 台词 text' },
      { name: 'Choice', desc: '分支选项：显示文字 text + 跳转目标 nextId' },
    ] },
    { type: 'quiz', question: '一条分支选项 Choice 通常要存哪两个信息？', options: ['选项文字 + 选它后跳到哪一句', '选项文字 + 字体大小', '说话人头像 + 台词内容'], answer: 0, tip: '分支选项的核心是「给玩家看的文字」和「选它后的去处」——显示靠 text，跳转靠 nextId。这就是对话分支的骨架。' },
  ],
  'dialogue-3': [
    { type: 'text', title: '分支与选择：让对话「认得」玩家', body: '只会一路平铺的对话是「台词」，会分叉的对话才是「互动」。这一节把分支做出来。\n\n一、分支从哪来\n对话数据里，某句话后面跟着的不是「下一句」，而是一排 Choice——每个 Choice 指向不同的路线。\n\n二、玩家的选择要「记下来」\n光分叉还不够，要能「回得来」——比如：\n· 玩家选了「帮村长找药」，后面再遇村长，村长要说「药找着了吗」\n· 选了「拒绝帮助」，后续这条线就走不通\n\n靠什么记？状态变量：\n· 布尔标记 —— acceptedQuest = true\n· 数值 —— 好感度、声望、金币\n· 进度 —— 当前任务到哪一步\n\n这些变量由游戏其他地方维护，对话系统只负责「读」。\n\n三、按状态走线\n在对话数据里给句子/选项加「条件」，条件满足才显示：\n· 好感度 > 50 → 出现隐藏选项「告白」\n· 已经帮过忙 → 村长问「药找着了吗」\n· 否则 → 村长只说客套话\n\n条件逻辑要放在「数据层」，不能散在界面代码里：\nSentence 加个字段 CanShow(GameState s)，返回「这句现在该不该显示」——剧本判断归剧本，界面只管显示。\n\n一句话：分支 = 数据结构里挂选项 + 游戏状态变量做裁判 + 条件决定哪句露面。' },
    { type: 'demo', demo: 'DialogueDemo', title: '对话分支演示', instructions: '和村长对话，选不同选项看台词和剧情走不同分支。' },
    { type: 'quiz', question: '想实现「玩家上次帮过村长，这次村长问『药找着了吗』；没帮过就说客套话」，靠什么判断走哪条线？', options: ['随机数碰运气', '读记录玩家选择的状态变量（比如 acceptedQuest），按它走对应分支', '让玩家重新选一次'], answer: 1, tip: '玩家之前的行动要「存」成状态变量，对话系统读它、按条件走线——这是分支对话能「认得」玩家的核心。' },
  ],
  'dialogue-4': [
    { type: 'text', title: '与游戏整合：从触发到收尾的一条龙', body: '前几课把「对话本身」做出来了，这一课把它接进游戏——玩家怎么触发、对话中怎么锁、结束后怎么结算。\n\n完整流程六步：\n1. 触发 —— 玩家靠近 NPC 按 E 键，或走进一片区域自动触发\n2. 锁定 —— 对话开始时锁住玩家输入：不能移动、不能攻击、不能存档\n3. 显示 —— 逐句显示台词，常配「打字机」效果，按一下跳下一句\n4. 分支 —— 遇到 Choice 停住，等玩家选\n5. 解锁 —— 对话结束，恢复玩家控制\n6. 结算 —— 执行结局动作：接任务、发奖励、加好感、推进剧情\n\n代码骨架：一个对话管理器统一调度。\npublic class DialogueManager : MonoBehaviour\n{\n    public static DialogueManager Instance;\n    private Dialogue current;\n    private int index;\n\n    public void Play(Dialogue d)\n    {\n        current = d;\n        index = 0;\n        LockPlayer(true);          // 锁输入\n        ShowPanel(true);           // 弹对话面板\n        ShowSentence();\n    }\n\n    void ShowSentence()\n    {\n        // 显示 current 的第 index 句话；遇 Choice 就显示选项\n    }\n\n    public void End()\n    {\n        LockPlayer(false);         // 解锁输入\n        ShowPanel(false);\n        current.onEnd?.Invoke();   // 结算：接任务、发奖励\n    }\n}\n\n触发那步，用「近处按 E」的写法：\nif (playerInRange && Input.GetKeyDown(KeyCode.E))\n    DialogueManager.Instance.Play(npc.dialogue);\n\n一句话：触发 → 锁输入 → 逐句播 → 选分支 → 解锁 → 结算，六步串起来，对话就成了游戏里顺滑的一环。' },
    { type: 'quiz', question: '对话刚打开时，第一步通常要先做什么？', options: ['立刻结算奖励', '锁定玩家输入，防止对话中还能乱跑乱打', '直接跳到最后一句话'], answer: 1, tip: '对话开始先锁输入是标准动作——不然玩家一边看剧情一边还能走动攻击，节奏就乱了；对话结束再解锁并结算。' },
  ],
  'xr-1': [
    { type: 'text', title: 'XR 是什么：VR、AR、MR 一家门', body: 'XR（Extended Reality，扩展现实）是 VR、AR、MR 的总称——凡是「把数字世界和真实世界揉在一起」的技术，都归它管。\n\n三兄弟分清楚：\n· VR 虚拟现实 —— 完全沉浸：戴着头显，眼前全是假的，你看不见现实。代表：Meta Quest、SteamVR（HTC Vive）、PS VR\n· AR 增强现实 —— 虚拟叠在真实世界上：用手机摄像头看现实，画面上多出一只恐龙，但底子是真实的桌子。代表：手机 AR、苹果 ARKit、谷歌 ARCore、HoloLens\n· MR 混合现实 —— 更进一层：虚拟和真实不光叠加，还能互相影响、交互。虚拟的球能「砸」到真实的桌子上\n\n记忆口诀：VR 是「全假的」，AR 是「真上加假」，MR 是「真假交融」。\n\nUnity 怎么做 XR？\n· 装包：Project 里装 XR Plugin Management（XR 插件管理），再加对应平台包（OpenXR 管 VR，AR Foundation 管 AR）\n· 一套工程可以同时支持多平台，按需打包\n\n一句话：XR 是伞，伞下 VR 全虚拟、AR 叠现实、MR 交融——Unity 用 XR Plugin Management 一把抓。' },
    { type: 'quiz', question: '用手机摄像头对准餐桌，屏幕上叠了一只正在走动的虚拟恐龙——这属于哪种 XR？', options: ['VR（虚拟现实）', 'AR（增强现实）', 'MR（混合现实）'], answer: 1, tip: '底子是真实的桌子（手机拍到的现实），上面叠了虚拟恐龙，是「真上加假」，正是 AR 的定义。VR 是全假的，MR 是两者交融。' },
  ],
  'xr-2': [
    { type: 'text', title: 'VR 开发基础：头显追踪与手柄交互', body: '做 VR，先抓两大核心：头部追踪和控制器交互。\n\n一、头部追踪：你就是相机\nVR 头显会跟踪你转头的角度，虚拟世界的相机跟着转——你往左看，虚拟世界就显示左边。这是 VR 和普通 3D 游戏最大的不同：视角不是代码控制的，是玩家脑袋控制的。\n\n二、设备锚点：XR Origin\n场景里要放一个 XR Origin（旧版叫 XRRig）节点——它代表「玩家在虚拟世界里的位置」。相机、双手都挂在它下面。玩家动、它动，整个虚拟身体跟着走。\n\n三、控制器交互：抓、指、按\n手柄的输入方式：\n· 扳机 —— 抓取 / 开枪\n· 握把 —— 握紧\n· 摇杆 —— 移动\n\n两种主流交互方案：\n· 射线交互 —— 手柄射出一条激光线，指到按钮/地面，扳机确认。最稳，菜单、传送都靠它\n· 抓取交互 —— 手靠近物体，按扳机就「抓住」拎起来，松手放下。拿东西、拼积木用它\n\n四、防眩晕（VR 必修课）\nVR 晕，主要是「眼睛说在动、身体说没动」打架。缓解招式：\n· 移动用「瞬移」而不是平滑移动 —— 指哪传哪，不产生「假位移」\n· 转向用「瞬移转向」—— 一下转 30~45 度，别平滑转\n· 保持帧率：低于 60fps 晕感暴增，性能要给足\n\n一句话：头显管你看，手柄管你碰，XR Origin 管你在哪；防眩晕记住「瞬移优先」。' },
    { type: 'quiz', question: 'VR 里「你转头，虚拟世界里的视角也跟着转」，这靠什么实现？', options: ['手柄摇杆控制视角', '头显的头部追踪（Head Tracking）', '用鼠标控制相机'], answer: 1, tip: 'VR 视角跟着脑袋走，靠头显的头部追踪传感器实时读取转头角度。这也是 VR 沉浸感的来源——手柄和鼠标都管不着「往哪看」。' },
  ],
  'xr-3': [
    { type: 'text', title: 'AR 开发基础：平面检测与放置物体', body: 'AR 的核心动作就一个：把虚拟物体「放在」真实世界里，让它像真的一样站在那儿。\n\n用 Unity 的 AR Foundation 做，流程四步：\n\n一、平面检测 —— 地基\n手机摄像头对着真实世界，AR 系统会识别出水平的「平面」：桌面、地板、墙面。AR Foundation 里由平面管理器（ARPlaneManager）负责，检测到平面会出现一个半透明网格，告诉你「这里可以放东西」。\n\n二、射线放到平面上 —— 定位\n玩家点屏幕，从屏幕那点射一条射线（ARRaycast），打到刚才识别出的平面上，交点就是「要放东西的位置」。\n\n三、放置物体 —— 落地\n在交点 Instantiate 物体，它就像「粘」在那个平面上了。\n\n四、跟踪 —— 钉住\n手机一动，AR 系统持续跟踪周围环境，虚拟物体保持「钉」在真实位置上——你绕着桌子走，茶杯不会漂走。\n\n进阶两个锦上添花：\n· 光照估计 —— AR 系统估出环境光的方向和强度，让虚拟物体受同样的光，看起来更「真」\n· 锚点持久化 —— 把放置位置存下来，下次打开还能在原处\n\n经典应用先想想：\n· 家具摆放 —— 把沙发「放」到客厅看效果\n· 量尺寸 —— 在真实物体上拉线测长度\n· 试戴/试穿 —— 眼镜、首饰「戴」到人脸上\n\n一句话：AR 开发 = 扫出平面（检测）→ 点到位置（射线）→ 放下物体（生成）→ 钉住不动（跟踪）。' },
    { type: 'quiz', question: '想在餐桌上「放」一个虚拟茶杯，让它像真的一样立在桌面上，第一步必须先做什么？', options: ['直接 Instantiate 茶杯，随机找个位置放', '先做平面检测，识别出桌面这个平面，再把茶杯放到平面上', '先给茶杯加 Rigidbody 让它受重力'], answer: 1, tip: '没有平面检测，AR 系统不知道「桌面在哪」，茶杯放哪都会飘在空气里。先检测出平面，再沿屏幕射线打到平面上，茶杯才有「落脚点」。' },
  ],
}

// ============================================================
// 扩充内容装载：27 门课各 +3 节，数据来自 src/data/extra/ 目录
// 把每门课的 lessons 追加到对应课程，cards 并入 lessonCards
// （想再加课：往 src/data/extra/ 放文件，照下面加两行即可）
// ============================================================
import { lessons as _basicsL, cards as _basicsC } from './extra/basics.js'
import { lessons as _motionL, cards as _motionC } from './extra/motion.js'
import { lessons as _logicL, cards as _logicC } from './extra/logic.js'
import { lessons as _artL, cards as _artC } from './extra/art.js'
import { lessons as _progL, cards as _progC } from './extra/prog.js'
import { lessons as _aiL, cards as _aiC } from './extra/ai.js'
import { lessons as _perfL, cards as _perfC } from './extra/perf.js'
import { lessons as _archL, cards as _archC } from './extra/arch.js'
import { lessons as _animL, cards as _animC } from './extra/anim.js'
import { lessons as _d2dL, cards as _d2dC } from './extra/d2d.js'
import { lessons as _renderL, cards as _renderC } from './extra/render.js'
import { lessons as _netL, cards as _netC } from './extra/net.js'
import { lessons as _editorL, cards as _editorC } from './extra/editor.js'
import { lessons as _platformL, cards as _platformC } from './extra/platform.js'
import { lessons as _ecsL, cards as _ecsC } from './extra/ecs.js'
import { lessons as _aiadvL, cards as _aiadvC } from './extra/aiadv.js'
import { lessons as _projectL, cards as _projectC } from './extra/project.js'
import { lessons as _debugL, cards as _debugC } from './extra/debug.js'
import { lessons as _procgenL, cards as _procgenC } from './extra/procgen.js'
import { lessons as _shadergraphL, cards as _shadergraphC } from './extra/shadergraph.js'
import { lessons as _physadvL, cards as _physadvC } from './extra/physadv.js'
import { lessons as _audioL, cards as _audioC } from './extra/audio.js'
import { lessons as _inputadvL, cards as _inputadvC } from './extra/inputadv.js'
import { lessons as _leveldesignL, cards as _leveldesignC } from './extra/leveldesign.js'
import { lessons as _uitoolkitL, cards as _uitoolkitC } from './extra/uitoolkit.js'
import { lessons as _dialogueL, cards as _dialogueC } from './extra/dialogue.js'
import { lessons as _xrL, cards as _xrC } from './extra/xr.js'
import { lessons as _mathL, cards as _mathC } from './extra/math.js'
import { lessons as _cinemachineL, cards as _cinemachineC } from './extra/cinemachine.js'

courses.find(c => c.id === 'basics').lessons.push(..._basicsL)
Object.assign(lessonCards, _basicsC)
courses.find(c => c.id === 'motion').lessons.push(..._motionL)
Object.assign(lessonCards, _motionC)
courses.find(c => c.id === 'logic').lessons.push(..._logicL)
Object.assign(lessonCards, _logicC)
courses.find(c => c.id === 'art').lessons.push(..._artL)
Object.assign(lessonCards, _artC)
courses.find(c => c.id === 'prog').lessons.push(..._progL)
Object.assign(lessonCards, _progC)
courses.find(c => c.id === 'ai').lessons.push(..._aiL)
Object.assign(lessonCards, _aiC)
courses.find(c => c.id === 'perf').lessons.push(..._perfL)
Object.assign(lessonCards, _perfC)
courses.find(c => c.id === 'arch').lessons.push(..._archL)
Object.assign(lessonCards, _archC)
courses.find(c => c.id === 'anim').lessons.push(..._animL)
Object.assign(lessonCards, _animC)
courses.find(c => c.id === 'd2d').lessons.push(..._d2dL)
Object.assign(lessonCards, _d2dC)
courses.find(c => c.id === 'render').lessons.push(..._renderL)
Object.assign(lessonCards, _renderC)
courses.find(c => c.id === 'net').lessons.push(..._netL)
Object.assign(lessonCards, _netC)
courses.find(c => c.id === 'editor').lessons.push(..._editorL)
Object.assign(lessonCards, _editorC)
courses.find(c => c.id === 'platform').lessons.push(..._platformL)
Object.assign(lessonCards, _platformC)
courses.find(c => c.id === 'ecs').lessons.push(..._ecsL)
Object.assign(lessonCards, _ecsC)
courses.find(c => c.id === 'aiadv').lessons.push(..._aiadvL)
Object.assign(lessonCards, _aiadvC)
courses.find(c => c.id === 'project').lessons.push(..._projectL)
Object.assign(lessonCards, _projectC)
courses.find(c => c.id === 'debug').lessons.push(..._debugL)
Object.assign(lessonCards, _debugC)
courses.find(c => c.id === 'procgen').lessons.push(..._procgenL)
Object.assign(lessonCards, _procgenC)
courses.find(c => c.id === 'shadergraph').lessons.push(..._shadergraphL)
Object.assign(lessonCards, _shadergraphC)
courses.find(c => c.id === 'physadv').lessons.push(..._physadvL)
Object.assign(lessonCards, _physadvC)
courses.find(c => c.id === 'audio').lessons.push(..._audioL)
Object.assign(lessonCards, _audioC)
courses.find(c => c.id === 'inputadv').lessons.push(..._inputadvL)
Object.assign(lessonCards, _inputadvC)
courses.find(c => c.id === 'leveldesign').lessons.push(..._leveldesignL)
Object.assign(lessonCards, _leveldesignC)
courses.find(c => c.id === 'uitoolkit').lessons.push(..._uitoolkitL)
Object.assign(lessonCards, _uitoolkitC)
courses.find(c => c.id === 'dialogue').lessons.push(..._dialogueL)
Object.assign(lessonCards, _dialogueC)
courses.find(c => c.id === 'xr').lessons.push(..._xrL)
Object.assign(lessonCards, _xrC)
courses.find(c => c.id === 'math').lessons.push(..._mathL)
Object.assign(lessonCards, _mathC)
courses.find(c => c.id === 'cinemachine').lessons.push(..._cinemachineL)
Object.assign(lessonCards, _cinemachineC)
