// 可视化脚本 Visual Scripting 系列（visuals-1 至 visuals-4）
export const lessons = [
  { id: 'visuals-1', title: '可视化脚本是什么' },
  { id: 'visuals-2', title: '节点基础：事件、变量、操作' },
  { id: 'visuals-3', title: '动手练：做一个完整小逻辑' },
  { id: 'visuals-4', title: '可视化 vs 代码对比' },
]

export const cards = {
  'visuals-1': [
    { type: 'text', title: '可视化脚本是什么', body: 'Unity 里做游戏逻辑，最常见的路子是写 C# 脚本——但很多人一听「代码」就发怵。这一节介绍 Visual Scripting（可视化脚本）：不写一行代码，靠「节点 + 连线」把逻辑搭出来。\n\n一、它是什么\n\n屏幕上是一张流程图：方块（节点）代表「一个动作或一个判断」，方块间的连线代表「做完这个做那个」。你把节点拖出来、用线连起来，游戏逻辑就成了。和拼电路、画流程图一个思路——电流变逻辑流，开关变判断。\n\n如果你用过 Shader Graph（shadergraph 那几课），会发现套路很像：同样是节点 + 连线。区别只在服务对象——Shader Graph 管「材质长什么样」（颜色、发光、变形），Visual Scripting 管「游戏怎么运行」（谁先动、点按钮后发生什么、血扣光会怎样）。一个是给显卡看的，一个是给游戏逻辑看的。\n\n二、为什么有这东西\n\n门槛低：美术、策划、新手不用啃语法，拖节点就能做逻辑。直观：逻辑是看得见的，流程从哪个口进往哪个口走，一目了然。改得快：想加个条件，拖个判断节点连上线就行。\n\n三、怎么启用\n\nVisual Scripting 是 Unity 自带的包。菜单 Window → Package Manager → 搜 Visual Scripting → Install，再到 Window → Visual Scripting → Visual Scripting 里点 Create 生成设置，就能用。\n\n⚠️ 坑：老项目（尤其从旧版升上来的）这个包可能没自动带进来，得手动装；第一次打开会提示 Generate，等它跑完再操作。另外别在一个物体上「又挂图又写代码脚本」管同一功能，出问题都不知道查哪边——用哪套认准哪套。\n\n四、适合谁、什么时候用\n\n适合：快速原型、简单交互（开门、按钮、UI 弹窗）、让美术策划自己搭逻辑。不适合当主力写大型系统——图一大连线一多，光看就晕。\n\n一句话总结：可视化脚本 = 节点 + 连线，把「做逻辑」变成「拼图」，和 Shader Graph 一个思路但管游戏行为；门槛低、直观，适合原型和简单交互，老项目先装包、别和代码混用。' },
    { type: 'quiz', question: 'Visual Scripting 和 Shader Graph 最大的共同点是？', options: ['都要写很多 C# 代码', '都靠「节点 + 连线」搭逻辑，只是服务对象不同——一个管材质、一个管游戏行为', '都只能用来做 UI'], answer: 1, tip: '两者都是节点编辑器：Shader Graph 管材质渲染，Visual Scripting 管游戏逻辑，思路完全一样——拖节点、连线、看流程图。区别只在管什么，不在怎么管。' },
  ],
  'visuals-2': [
    { type: 'text', title: '认识三类节点：事件、变量、操作', body: '上一节讲了可视化脚本是「节点 + 连线」。这一节认识最常见的三类节点，你就看得懂大多数图了。\n\n一、事件节点：逻辑的入口\n\n事件节点是「引子」——游戏里发生什么，它就点亮后面连着的逻辑。最常用的三个：\n· On Start —— 游戏开始执行一次，做初始化\n· On Update —— 每帧执行，做持续变化（如角色一直走）\n· On Button Click —— 按钮被点时执行\n\n看图先找事件节点，往下就是它的逻辑。\n\n二、变量节点：存数据的地方\n\n变量就是「给数据起个名字存起来」。常用两类：\n· Graph 变量 —— 只在这张图里有效，图关了数据就没了\n· Object 变量 —— 挂在当前物体上，物体在数据就在\n\n图上右键 → Create Variable 或从左侧 Variables 面板新建。口诀：要换地方用选 Object 变量，临时用一下就 Graph 变量。\n\n三、操作节点：真正干活的动作\n\n· Transform 类：Set Position（设位置）、Move（移动）、Do Tween（动画式）\n· GameObject 类：Set Active（激活/停用物体）\n· Debug 类：Log（在 Console 打印，调试神器）\n\n四、流程图 vs 状态图\n\n新建 Graph 时 Unity 会问选哪种：\n· Flow Graph（流程图）—— 按顺序执行的逻辑链，前面讲的都是这种\n· State Graph（状态图）—— 状态机：物体在「状态」间按条件跳转，做 AI、敌人行为用它\n\n新手先玩熟流程图，有需要再学状态图。\n\n五、怎么连\n\n节点有两种口：逻辑口（带箭头）管「顺序」——上节点的输出口拖到下节点的输入口；数据口（圆点）管「值」——塞数字、物体、颜色，比如 Set Position 的 Position 口从变量节点拖数据线。类型对不上接不进去，系统在保护你。\n\n六、常见坑\n\n· 搜节点搜不到 —— 包没装（回第一节看），或名字记错，试试英文\n· 连了线没反应 —— 八成接错口：数据口接成逻辑口，或连到不执行的分支，先确认从事件到操作「一串通」\n\n一句话总结：事件节点是入口，变量节点存数据（Graph/Object），操作节点干活；Flow 走流程、State 管状态；逻辑口连逻辑、数据口连数据，接错没反应先查口。' },
    { type: 'component', title: '三类节点速查', items: [
      { name: 'On Start', desc: '游戏开始执行一次，做初始化' },
      { name: 'On Update', desc: '每帧都执行，做持续变化' },
      { name: 'On Button Click', desc: '按钮被点时触发' },
      { name: 'Graph 变量', desc: '只在这张图里有效' },
      { name: 'Object 变量', desc: '挂在物体上，别的图也能读' },
      { name: 'Transform 操作', desc: 'Set Position / Move / Do Tween' },
      { name: 'Set Active', desc: '激活 / 停用物体' },
      { name: 'State Graph', desc: '状态机，状态间按条件跳转' },
    ] },
    { type: 'quiz', question: '想让「角色一被点击就执行逻辑」，该用哪个事件节点做入口？', options: ['On Start', 'On Update', 'On Button Click（或物体上的点击事件）'], answer: 2, tip: 'On Start 只在开始时跑一次、On Update 每帧都跑，都不是「点击时触发」；按钮被点触发 On Button Click，普通物体的点击则用对应的点击事件节点，记得绑定对象。' },
  ],
  'visuals-3': [
    { type: 'text', title: '动手练：点按钮 → 方块移动 + 变色', body: '光看不动手记不住。这一节做两个小逻辑，就摸清完整流程了。\n\n🎯 第一个：点按钮 → 方块移动 + 变色\n\n建一个 Cube（3D Object → Cube）改名 Block；再建个 Button（UI → Button）。\n\n第 1 步｜建 Graph\n选中 Block → Add Component 搜「Script Machine」添加。Graph 栏点 Create / New，选 Flow Graph。\n\n⚠️ 图要挂在操作的物体上，不然逻辑没对象可用。\n\n第 2 步｜放事件节点\n图里右键 → Add Node 搜「On Button Click」，它要「认领」按钮：从 Hierarchy 把 Button 拖到 Target 口。\n\n⚠️ 坑：事件不触发，多是按钮没绑上。\n\n第 3 步｜连移动\n右键搜「Set Position」，把 On Button Click 的输出口拖到它输入口，再 Create Variable 建 Graph 变量 TargetPos（Vector3，值 (2, 0, 0)），连到 Position 口。\n\n要「走着去」就改用 Do Tween → Move，Duration 填 1。\n\n第 4 步｜连变色\n再放「Material Set Color」，连在上一节点后面；Block 拖到 Target 口，Color 填红。\n\n跑起来：点 Play、点按钮——方块右移 1 秒变红，成了。\n\n🎯 第二个：按空格，角色前进\n\n给角色挂 Script Machine 建 Flow Graph：放「On Update」当入口、「Transform Move」当操作，On Update 输出 → Move 输入，建 Vector3 变量 (0, 0, 1) 连到 Direction 口。只按空格才动？中间插「If」，前面加「On Keyboard Input」选 Space，On Update → If，If 的 True 分支 → Move。\n\n⚠️ 坑：最典型是接错口——数据线插到逻辑口，后面一串点不亮。连线完看口型：箭头接箭头、圆点接圆点。\n\n一句话总结：先挂 Script Machine 建 Graph，再放事件节点当入口、操作节点干活，连成一条「通」的逻辑链；事件记得绑定触发对象，没反应先查口、再查绑定。' },
    { type: 'component', title: '本次用到的节点', items: [
      { name: 'Script Machine', desc: '挂到物体上，承载 Graph 的组件' },
      { name: 'On Button Click', desc: '按钮点击事件，需绑定按钮对象' },
      { name: 'On Update', desc: '每帧触发，做持续移动' },
      { name: 'On Keyboard Input', desc: '键盘事件，可选手上选 Space' },
      { name: 'Set Position', desc: '把位置设到某点（瞬移）' },
      { name: 'Do Tween / Move', desc: '花 Duration 秒滑动移动' },
      { name: 'Material Set Color', desc: '改材质颜色' },
      { name: 'If 判断', desc: '条件分支，True / False 两出口' },
    ] },
    { type: 'quiz', question: '做完「点按钮 → 方块移动」后，点按钮没任何反应，第一步该排查什么？', options: ['节点搜错了名字，换个关键词重搜', '看 On Button Click 事件的 Target 口有没有绑上场景里的按钮对象，以及逻辑口有没有连通到操作节点', '把方块删了重建'], answer: 1, tip: '按钮点了没反应，九成是两件事：一是事件节点没绑定到按钮（Target 口空着），二是逻辑口没连成一条通——先查口、再查绑定，别急着删东西。' },
  ],
  'visuals-4': [
    { type: 'text', title: '什么时候用图、什么时候写码', body: '学完前三节，你已经能搭出像样的可视化逻辑了。这一节把可视化脚本和写 C# 放一起比一比，搞清楚一个实用问题：这活儿该用哪套？\n\n一、什么时候优先用可视化脚本\n\n· 快速原型：想法先跑起来最重要，拖节点比写代码快、改起来也快\n· 美术 / 策划自己搭逻辑：不碰代码的同事也能改玩法、调数值，不用等人\n· 简单交互：点按钮开门、触碰触发、UI 弹窗、简单的物体移动——图小，一目了然\n· 状态机：State Graph 做敌人 AI 的待机/巡逻/攻击，比一堆 switch 直观\n\n二、什么时候老老实实写代码\n\n· 复杂算法：寻路、弹道、大量数据筛选排序，节点能把你绕疯\n· 性能敏感：每帧跑几十万次的逻辑，代码快、开销小；节点图有运行时开销，还多一层「解释执行」\n· 大规模逻辑：几百节点的图是团乱麻，代码能靠函数拆块、注释说明\n· 版本管理 / 协作：代码是文本，diff 一目了然；.asset 图文件合并冲突很难受\n· 深度调试：断点、单步、看变量，IDE 调试器比图上的调试强\n\n三、可读性对比\n\n小图（几个到十几个节点）：可视化完胜。大图（几十上百个节点）：连线纵横交错，新手看晕——代码按函数拆分反而清晰。判断标准就一条：这张图「一眼能不能看懂」，不能就该拆或改代码了。\n\n四、性能\n\n纯逻辑上代码略快——每执行一个节点都要过一层分发。但对绝大多数游戏逻辑，这点差距根本感觉不到；真正抠性能的地方（每帧巨量计算）本来就不该用图做。\n\n五、混合使用：两套互相调\n\n· 图里调代码：图上右键搜你脚本里的公开方法（如 Player.LevelUp()），直接当节点用——复杂算法写成方法，图里调一下就行\n· 代码里调图：用代码触发图的「自定义事件」节点（Custom Event），图听着事件干活\n\n最佳实践：重活（算法、性能关键）用代码写成方法，流程（点击后干什么、状态怎么跳）用图搭，各干各擅长的。\n\n六、从可视化走向代码\n\n别把可视化脚本当终点。先用图把逻辑跑通、理解「顺序、判断、循环」这些概念 → 再对照 C# 把同样逻辑用代码写一遍 → 你会发现「哦，原来代码就是这个意思」。图是你的翻译器，概念学会了，代码只是换种写法。\n\n一句话总结：小交互、原型、策划改玩法用图；复杂算法、性能、大项目用码；两者能互相调——重活用码、流程用图；从图到码，是学会编程一条温柔的路。' },
    { type: 'quiz', question: '下面哪个场景，应该优先选写 C# 代码而不是可视化脚本？', options: ['策划想自己快速改「点击按钮弹个提示框」的交互', '做一个战斗伤害计算系统：涉及几百个敌人、每帧大量浮点运算和排序筛选', '原型阶段，想先验证「角色碰到箱子就变色」的想法'], answer: 1, tip: '复杂算法 + 性能敏感 + 数据量大的场景该用代码：节点图有解释执行开销、几百节点也难维护；策划改交互、验证原型都是可视化的舒适区。' },
  ],
}
