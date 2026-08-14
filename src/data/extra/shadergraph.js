// Shader Graph 进阶扩充：顶点位移 / 噪声与程序纹理 / 特效综合实战
export const lessons = [
  { id: 'shadergraph-4', title: '顶点位移' },
  { id: 'shadergraph-5', title: '噪声与程序纹理' },
  { id: 'shadergraph-6', title: '特效综合实战' },
]

export const cards = {
  'shadergraph-4': [
    { type: 'text', title: '顶点位移：让形状真的动起来', body: '前面学的都是改颜色——片元（Fragment）接口管每个像素最终画什么。这一节动「骨架」：顶点（Vertex）接口。\n\n顶点是什么？网格（Mesh）由「顶点 + 三角形」构成，顶点是骨架上的点，片元是骨架之间填的皮。Fragment 改颜色只是「换皮」，Vertex 改位置才是「动骨」——把顶点挪一挪，整个形状就变形。\n\n一、认识核心节点\n· Position 节点 —— 输出每个顶点的位置坐标，位移的基底\n· Sine 节点 —— 正弦波，起伏、摆动、波浪全靠它\n· Add / Multiply —— 加位移、调振幅\n· Normal 节点 —— 顶点法线，沿法线方向位移才不会「撕裂」\n\n二、正弦波水面（真·顶点起伏）\n第 3 节用 UV 偏移做的水面是「花纹在流」，形状没动。这节让水面真的上下起伏：\n1. 场景里放一张平面网格（3D Object → Plane）\n2. 打开 Shader Graph，找到 Master Node 的 Vertex 口\n3. 拿 Position(OS) 做基底，加 Time × 频率 → 接 Sine → 乘振幅 → 加到原位置 Y → 接 Vertex Position\n\n关键坑：平面默认只有很少的顶点，正弦根本没得动！要在 Blender 或建模软件里把平面细分（Subdivide），顶点够密，波浪才细腻；三角面一大，波形全是折线。\n\n三、旗帜飘动\n旗帜是一张竖着的面，要绕旗杆左右摆动：\n1. 取顶点的 X（旗面横向坐标）\n2. X × 频率 + Time → Sine → 乘振幅\n3. 把结果加到原位置的 Z（前后方向）→ 接 Vertex\n\n飘动方向要和旗杆垂直——别加错轴，否则旗子像被拧麻花。叠两层不同频率的正弦：一层管大摆、一层管抖动，更像真布。\n\n四、卡通头发：顶点色做权重\n卡通角色的头发要「发梢飘、发根不动」：\n1. 建模软件里给头发网格烘焙顶点色（Vertex Color）：发根涂黑（0）、发梢涂白（1）\n2. Shader Graph 里用 Vertex Color 节点读出每个顶点的颜色\n3. 正弦位移 × 顶点色 → 发根乘 0 不动、发梢乘 1 飘起来\n\n五、常见坑清单\n· 顶点密度不足 —— 效果出不来，先细分网格\n· 位移方向错 —— 沿法线或指定轴，别把面拉穿\n· 频率太高 —— 像筛糠，正弦频率控制在「能看清起伏」的区间\n· 阴影 / 碰撞不跟手 —— 顶点位移只影响渲染，Collider 还是原始形状，要交互的物体得额外处理\n\n一句话总结：Vertex 接口改顶点位置，正弦波 + 时间 = 起伏摆动，顶点色当权重让效果「有轻有重」。' },
    { type: 'component', title: '顶点位移关键节点', items: [
      { name: 'Position', desc: '拿每个顶点的位置坐标，位移的基底' },
      { name: 'Sine', desc: '正弦波，起伏、摆动、波浪的波形来源' },
      { name: 'Add', desc: '把算好的位移加到原位置上' },
      { name: 'Multiply', desc: '乘振幅、乘权重，控制位移大小' },
      { name: 'Vertex Color', desc: '读顶点色，做「哪里动得多」的权重' },
    ] },
    { type: 'quiz', question: '想让水面「真的上下起伏」而不是花纹流动，关键做法是？', options: ['用 Sine 改 UV 偏移，让贴图花纹动起来', '用正弦波数学节点改 Vertex 接口的顶点位置，让网格真变形', '把 Shader 换成 Unlit 就行'], answer: 1, tip: 'UV 偏移只能让「花纹」动，顶点位置没变；改 Vertex 接口的位置才是真·起伏，配合细分后的网格才有细腻的波浪。' },
  ],
  'shadergraph-5': [
    { type: 'text', title: '噪声与程序纹理：不贴图也能出材质', body: '做材质老问「贴图从哪来」？其实很多材质根本不用贴图——用「噪声」在 Shader 里实时算出来，叫程序纹理（Procedural Texture）。好处：无限放大不模糊、改参数就换样式、项目里一张图都不用带。\n\n一、认识 Noise 家族\n右键 Create Node 搜 Noise，最常用的三种：\n· Gradient Noise 渐变噪声 —— 平滑连续的渐变，云、大理石、地形用它\n· Simple Noise 简单噪声 —— 更方正的块状，做砖缝、碎块\n· Voronoi 细胞噪声 —— 蜂窝 / 细胞结构，做鳞片、裂纹、水磨石、科幻面板\n\n节点上的 Scale 口就是「频率」：Scale 越大，图样越密越碎；越小越平滑空旷。\n\n二、程序化云层\n1. Gradient Noise → Remap 调整对比度 → 接 Base Color\n2. 叠两层：低频大块云（Scale 小）+ 高频细节云（Scale 大），用 Multiply 或 Lerp 混合\n3. 想让云飘？Noise 节点的 UV 口前接 Tiling And Offset，Offset 用 Time 驱动，云就动了\n\n三、波纹 / 涟漪\n1. UV → 减 0.5 得到「到中心的向量」→ 用 Distance 算出到中心的距离\n2. 距离 × 频率 - Time → 接 Sine → 乘振幅 → 加到颜色或做 UV 偏移\n\n出来的就是一圈圈向外扩散的同心波纹。再往法线方向叠一份，水面反光也会跟着晃。\n\n四、大理石：噪声 × 方向 + 正弦\n拿 UV 的某一轴（比如 X）→ 乘 Scale → 加一份噪声采样值 → 接 Sine → 用结果在两种颜色间 Lerp。大理石那种「蜿蜒的纹路」就出来了——本质是「正弦 + 噪声扰动」。\n\n五、性能与常见坑\n· 噪声在 GPU 上逐像素算：Scale 拉太高、节点叠太多会变贵，能一处噪声解决的别用三处\n· 部分噪声节点有 2D / 3D 两种输入：UV 是 2D，Position 是 3D，别接错\n· 程序纹理「分辨率无限」是它吊打贴图的地方；但太均匀也假，叠噪声或加扰动才自然\n\n一句话总结：Noise 是程序材质的画笔——渐变噪声做云和大理石，Voronoi 做鳞片，配合 Sine、Distance、Time 就能实时长出纹理。' },
    { type: 'quiz', question: '想做「鳞片 / 水磨石 / 细胞状」的材质，该选哪种噪声？', options: ['Gradient Noise 渐变噪声', 'Voronoi 细胞噪声', 'Simple Noise 简单噪声'], answer: 1, tip: 'Voronoi 噪声天生是细胞 / 蜂窝状结构，做鳞片、裂纹、水磨石正合适；Gradient 是平滑渐变，Simple 是块状，都不出蜂窝。' },
  ],
  'shadergraph-6': [
    { type: 'text', title: '特效综合实战：把学过的节点串成完整特效', body: '这一节把前面所有节点——颜色、UV、Time、Fresnel、噪声、正弦——串成四个能直接上项目的特效。记住方法论：每个特效先拆成「几个基本能力」，再逐个节点实现。\n\n一、溶解效果（Dissolve）\n角色「从实到虚」消失，核心是「逐像素丢弃」：\n1. Gradient Noise 生成每像素的随机图案，当「溶解进度」\n2. 加一个 Float 属性 DissolveAmount（0~1）当阈值\n3. 用 Step（或 Compare）比较：Noise > 阈值 → 保留；否则 → 丢弃\n4. 怎么丢弃？Lit / Unlit Master 的 Surface Options 里打开 Alpha Clip Threshold，把比较结果接 Alpha——低于阈值的像素被「挖空」\n5. 加味：在阈值附近取一小段，用 Lerp 混入亮色，溶解边缘就发火 / 发光\n\n二、能量护盾（Shield）\n半透明的球壳，边缘发光，受击起波纹：\n1. Fresnel Effect → 乘亮色 → 接 Emission：边缘亮、中心透明\n2. 表面加扰动的法线：Noise + Time → 接 Normal 偏移，护盾像能量在流动\n3. 受击波纹：从命中点算 Distance，减去时间做同心环，叠加到 Fresnel 上\n\n三、激光（Laser）\n1. 用 UV 的 X 做「宽度」：Step 把 X 限制在一条窄带里，Y 是长条方向\n2. 加 Time 让亮斑沿激光移动（扫光）\n3. 颜色用 Emission + HDR 高亮值，配 Bloom 就有激光的刺眼感\n\n四、描边（Outline）\n最省事又稳的是「边缘光式描边」：Fresnel 在边缘加一圈颜色。想要「膨胀式」描边：用 Vertex 把顶点沿法线（Normal）向外推一圈，再做背面渲染。注意描边粗细受顶点密度影响，低模上别指望描得多匀。\n\n五、串场的核心心法\n· 颜色和发光 → Fragment + Emission\n· 变形和飘动 → Vertex + Sine + Time\n· 边缘和能量 → Fresnel\n· 随机和纹理 → Noise\n\n先想「这个效果要哪几样」，再进节点图找工具——这是做任何特效的套路。\n\n一句话总结：溶解靠 Noise + 阈值丢弃，护盾靠 Fresnel + 扰动，激光靠 UV 窄条 + 扫光，描边靠法线外扩——全是已学节点的组合。' },
    { type: 'quiz', question: '做「角色被击中后溶解消失」特效，最核心的一步是？', options: ['用 Noise 生成每像素随机值，拿时间驱动的阈值比较，低于阈值的像素逐渐丢弃', '用 Fresnel 让边缘发亮', '用 UV 偏移让贴图平移'], answer: 0, tip: '溶解的本质是「逐像素按进度丢弃」：Noise 提供随机度、阈值驱动进度、低于阈值的像素 alpha 归零被挖空。Fresnel 只是给溶解边缘加发光的配角。' },
  ],
}
