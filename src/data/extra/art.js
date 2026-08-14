// 进阶内容：art 画面与声音（art-6/7/8）
export const lessons = [
  { id: 'art-6', title: '天空盒与环境光' },
  { id: 'art-7', title: '后处理 Post Processing' },
  { id: 'art-8', title: '颜色与画面风格' },
  { id: 'art-9', title: 'TextMeshPro 文字系统' },
]
export const cards = {
  'art-6': [
    { type: 'text', title: '天空盒与环境光', body: 'art-1 讲了场景里的灯光，这一课把画面「最外层」和「最底层」的光处理好——天空盒决定世界长什么样，环境光决定阴影里是什么颜色。\n\n一、天空盒：包住世界的「天」\n\n天空盒（Skybox）是一层包在场景外面的贴图/材质，决定了你抬头看见的「天」：蓝天白云、晚霞、星空、纯色，全由它定。\n\n换天空盒：Window → Rendering → Lighting → Environment 面板，把 Skybox Material 换成目标材质。\n\nUnity 里两种主流天空盒：\n· 程序化天空盒（Procedural Skybox）—— 用参数实时生成：太阳高度、天空色调、云层雾，能调出日出日落的氛围\n· 6 面天空盒（6 Sided Skybox）—— 6 张图拼成一个立方体包住世界，适合自定义美术风格\n\n二、环境光：阴影里的「底色」\n\n场景里被光照不到的地方（背光面、阴影里）并不是纯黑——周围的光会弹射进来，让暗处带着颜色。这种「补进来的光」就是环境光（Ambient Light），又叫天光。\n\n在 Lighting 面板的 Environment 区设置：\n· Ambient Source 环境光源：\n  · Skybox —— 环境光从天空盒取色（最常用，阴面带着天空的蓝）\n  · Gradient —— 手调三个颜色：天顶、地平线、地面\n  · Color —— 整个环境光是单一颜色\n· Ambient Intensity 环境光强度 —— 数字越大，暗处越亮、画面越「平」\n\n调法示例：\n· 明亮的卡通风格：环境光强度调高，暗面也亮堂堂\n· 阴郁的恐怖氛围：环境光压暗、偏冷色，阴影里一片深蓝\n\n三、几个联动设置\n\n· 相机 Clear Flags 若设为 Solid Color，背景就不是天空盒而是纯色——注意别和天空盒设置打架\n· 烘焙光照（leveldesign-2 讲过）时，环境光会被烤进光照贴图\n· 天空盒材质本身也接受灯光参数影响\n\n四、实操心法\n\n1. 先定氛围：清晨的橙红、白天的湛蓝、夜晚的深紫\n2. 再换天空盒：挑/调出对应的天空\n3. 最后调环境光强度：暗部亮一点还是沉下去\n\n一句话总结：天空盒是「天」，环境光是「阴影里的底色」——先定天空定情绪，再调环境光强度控制明暗氛围，两层齐了画面才有「味道」。' },
    { type: 'component', title: '天空与环境光要素', items: [
      { name: 'Skybox 材质', desc: '包住世界的「天」，决定背景与氛围' },
      { name: 'Ambient Source', desc: '环境光来源：Skybox / Gradient / Color' },
      { name: 'Ambient Intensity', desc: '环境光强度，控制暗部明暗' },
      { name: '程序化天空盒', desc: '参数实时生成，能调日出日落' },
      { name: '6 面天空盒', desc: '六张贴图拼成立方体，适合自定义美术' },
    ] },
    { type: 'quiz', question: '想让阴影里的暗部带着淡淡的天空蓝（而不是死黑），最合适的设置是？', options: ['环境光 Source 设为 Skybox，环境光从天空盒取色', '把相机的 Clear Flags 改成纯白', '把场景里的灯光全部关掉'], answer: 0, tip: '环境光 Source 选 Skybox，暗部就会从天空盒采色——白天蓝色天空，阴影里自然带蓝；选 Gradient 或 Color 则用手调的颜色。' },
  ],
  'art-7': [
    { type: 'text', title: '后处理 Post Processing', body: 'art-1 到 art-6 改的都是「场景里的东西」。后处理（Post Processing）换了个思路——不改物体、不改灯光，而是把「整帧画面」再加工一遍，像照片拍完后的滤镜。辉光、景深、色彩调校，全是它的活。\n\n一、什么是后处理\n\n场景渲染完，得到一帧完整画面；后处理在「画面输出到屏幕之前」再对整帧做一遍处理。它是让画面从「3D 引擎感」变成「电影感」的关键一步。\n\n二、URP 里怎么用：Volume（体积）\n\nURP（通用渲染管线）项目里，后处理用 Volume 系统：\n\n1. 场景里右键 → Volume → Global Volume（全局后处理）\n2. 选中 Volume，检查器里 Profile 新建一个 Volume Profile\n3. 点 Add Override，添加要用的效果（Bloom、Depth of Field…）\n4. 勾选效果并调参数\n\n关键概念：\n· Global Volume —— 作用整个场景，最常用\n· Local Volume —— 只作用某个范围（进洞穴自动变暗）\n· Volume Profile —— 装着一堆效果设置的「配置文件」，可复用\n\n三、必学的几个效果\n\n· Bloom（辉光）—— 亮部向外发光晕。夜晚霓虹灯、爆炸、太阳光晕都靠它，最出「氛围感」\n· Tone Mapping（色调映射）—— 把超出屏幕亮度范围的亮光「压缩」回来，让画面不过曝，ACES 曲线最常用\n· Depth of Field（景深）—— 远近模糊，聚焦主角，电影感的关键\n· Vignette（暗角）—— 画面四角压暗，聚焦中心，恐怖/沉浸氛围常用\n· Color Adjustments（色彩调整）—— 色调、饱和度、亮度，整体「化妆」\n\n四、效果叠加：氛围配方\n\n几个效果叠起来，就是一套风格：\n· 电影开场：景深拉出主角 + 暗角压四角 + 色彩微调暖\n· 恐怖地牢：整体压暗 + 蓝色调 + 强暗角 + 少量 Bloom 点缀火光\n· 阳光卡通风：饱和度拉高 + 亮部微 Bloom + 色调偏暖\n\n五、性能与坑\n\n· 效果越叠越吃性能，手机上控制数量\n· 相机上要勾选 Post Processing 才生效\n· 调完一个效果再调下一个，别一把全开，看不出哪个在起作用\n\n一句话总结：后处理 = 整帧滤镜；URP 里用 Volume + Volume Profile 叠效果，Bloom 管光晕、Tone Mapping 管亮度、景深管焦点——先定氛围再选两三样微调，画面质感立刻上一个台阶。' },
    { type: 'component', title: '后处理常用概念', items: [
      { name: 'Global Volume', desc: '全局后处理卷，作用整个场景' },
      { name: 'Local Volume', desc: '局部范围生效（进洞穴变暗）' },
      { name: 'Volume Profile', desc: '效果设置的配置文件，可复用' },
      { name: 'Bloom', desc: '辉光，亮部发光晕' },
      { name: 'Tone Mapping', desc: '色调映射，防止过曝' },
      { name: 'Depth of Field', desc: '景深，远近模糊' },
    ] },
    { type: 'quiz', question: '夜晚城市的霓虹灯想发出光晕、亮部向外「晕开」，该加哪个后处理效果？', options: ['Bloom（辉光）', 'Depth of Field（景深）', 'Vignette（暗角）'], answer: 0, tip: 'Bloom 就是「亮部向外发光晕」的效果，夜晚霓虹、爆炸、太阳光晕都是它做的；景深管模糊，暗角管四角压暗。' },
  ],
  'art-8': [
    { type: 'text', title: '颜色与画面风格', body: '同样的场景，换一套配色，情绪完全两样——颜色是游戏画面最强的「情绪开关」。这一课把色彩理论和调色思路讲透，让你能主动设计画面风格，而不是瞎调好看就行。\n\n一、颜色三个维度\n\n任何颜色都能用三个量描述：\n· 色相（Hue）—— 是什么颜色：红/橙/黄/绿/蓝/紫，色环上转一圈\n· 饱和度（Saturation）—— 颜色鲜艳还是灰扑扑：高饱和亮眼，低饱和柔和复古\n· 明度（Value）—— 亮还是暗\n\n调色时先想清楚三个方向：色相定「色系」，饱和度定「浓淡」，明度定「明暗」。\n\n二、冷暖色调：情绪的温度\n\n· 冷色调（蓝、青、紫）—— 冷静、神秘、恐怖、科技感。夜晚、深海、雪地\n· 暖色调（红、橙、黄）—— 温暖、热烈、危险、希望。黄昏、火焰、狂欢\n\n一个场景通常有一个主色调，别让画面「五颜六色」没有重心。\n\n三、几种经典的配色思路\n\n· 互补色 —— 色环相对的两个颜色（如红 vs 绿、橙 vs 蓝）放一起，对比强烈、很抓眼。游戏里常让「主角和背景」成互补色，主角一眼被看到\n· 同类色 —— 一个色系里深浅不同，画面和谐统一，温馨感\n· 近似色 —— 色环上相邻的颜色，柔和耐看\n\n四、调色的实操路子\n\n1. 定情绪：这一关想让玩家感觉什么？紧张、放松、温馨、阴森\n2. 定主色调：给场景一个「底色」（暖黄 / 冷蓝…）\n3. 控制饱和度：风格化/卡通 → 高饱和；写实/暗黑 → 适当降饱和\n4. 用灯光和后处理收尾：art-6 的环境光 + art-7 的 Color Adjustments 统一色温\n\n五、风格化思路\n\n· Low Poly 低多边形 —— 几何面少 + 亮色，干净可爱，材质最简单（纯色 + 无光）\n· 卡通渲染 —— 边缘描边 + 亮暗分明的色块，靠 Toon Shader 实现\n· 手绘贴图 —— 贴图本身带笔触和风格，配合低饱和\n\n六、一个常见误区\n\n「颜色越多越好」是新手第一大误区。真正的风格是「克制」：主色 + 辅色 + 点缀色，两三套颜色走天下，画面反而高级。\n\n一句话总结：颜色靠色相/饱和度/明度三维控制；冷色冷静、暖色温暖；主角和背景用互补色突出；调色先定情绪再定主色，克制用色才出风格。' },
    { type: 'component', title: '色彩与风格要素', items: [
      { name: '色相 Hue', desc: '是什么颜色，色环定位' },
      { name: '饱和度 Saturation', desc: '浓淡鲜艳程度' },
      { name: '明度 Value', desc: '颜色的明暗' },
      { name: '冷色调', desc: '蓝青紫，冷静神秘科技感' },
      { name: '暖色调', desc: '红橙黄，温暖热烈危险' },
      { name: '互补色', desc: '色环相对色，对比突出主角' },
    ] },
    { type: 'quiz', question: '想让游戏主角在场景里「一眼就被看到」，最直接的配色思路是？', options: ['主角和背景用同一种颜色', '主角用和背景互补的颜色，形成强烈对比', '把整个场景调成高饱和的五彩斑斓'], answer: 1, tip: '互补色（色环相对的颜色）放一起对比最强，主角用背景的互补色，自然从背景里「跳」出来。同色会融进背景，五彩斑斓会没有重心。' },
  ],
  'art-9': [
    { type: 'text', title: 'TextMeshPro 文字系统', body: 'UI Text 的时代过去了——现在 Unity 默认的文字方案是 TextMeshPro（TMP）。这一课把它讲透。\n\n一、为什么是 TMP 而不是旧的 UI Text\n\n旧的 UI Text（UnityEngine.UI.Text）基本已被官方放弃：渲染是位图拉伸，放大了糊、远了虚，功能也少。TMP（TextMeshPro）取代了它，本质是「把文字渲染成网格」的字体方案，三大优势：\n· 渲染更清晰——文字按字形重排，任意字号放大不糊、小字号更锐利\n· 支持富文本——字符串里直接写 <b>、<color> 这类标签，一段文字能混排加粗、变色、变字号\n· 中文字体可控——字体是专门的 Font Asset，用什么字体、含哪些字，全由你说了算\n现在新建 UGUI 的 UI 文字，默认就是 TextMeshPro。\n\n二、怎么创建\n\n· 菜单：Hierarchy 右键 → UI → Text - TextMeshPro，自动生成一个 TextMeshProUGUI 组件\n· 或给任意物体 Add Component → 搜 TextMeshProUGUI\n· 项目窗口右键 → Create → Text → 生成 TMP 的字体资产（Font Asset）与样式表（Style Sheet）\n\n三、富文本标签：一段文字里混排样式\n\n富文本是 TMP 的大杀器，直接在字符串里写标签：\n\n你好，这是 <b>加粗</b>、<color=red>红色</color>、<size=30>放大</size> 的文字\n\n· <b></b> 加粗、<i></i> 斜体\n· <color=red> / <color=#FF5500> 变色（支持颜色名和十六进制）\n· <size=30> / <size=150%> 字号\n· <link=\"http://unity.com\">点这里</link> 超链接——配合 TMP_TextUtilities 检测点击\n注意：标签要在输入框勾上 Rich Text 才生效（默认开着）；标签拼错（少个 > 或标签名写错）会被当成纯文字显示出来，不报错但样式没了。\n\n四、中文字体：最关键的一步\n\nTMP 不直接用 .ttf/.otf 文件，要先把它转成 TMP 字体资产（Font Asset）：\n1. 把中文字体文件（如思源黑体、微软雅黑）拖进 Assets\n2. 选中字体 → Window → TextMeshPro → Font Asset Creator → Generate\n3. 生成时选 Dynamic（动态）——运行时按需提取字形，最省包体，但每次生成字形有一点开销，还要保证字体文件没被裁剪\n4. 字符集（Character Set）选 Unicode Range 并覆盖要用的范围；中文最常见的坑就是「缺字」——某几个字没显示，多半是字符集没覆盖全，或 Dynamic 模式下那几个字恰好没被用到\n· Static（静态）则把所有字形预烘焙进贴图，显示快、无运行时开销，但包体大、只能显示烘焙过的字\n中文字体务必勾上 Include Font Features（或确保字形集覆盖），否则会缺笔画、缺字。\n\n五、代码控制\n\n获取组件后直接改属性：\n\nTextMeshProUGUI text = GetComponent<TextMeshProUGUI>();\ntext.text = \"得分：\" + score;   // 改文字（支持富文本标签）\ntext.fontSize = 36f;              // 改字号\ntext.color = Color.red;           // 改颜色\ntext.alignment = TextAlignmentOptions.Center;  // 居中\ntext.richText = true;             // 富文本开关\n\n另外：text.font 换字体资产、text.textInfo 拿排版信息、text.ForceMeshUpdate() 强制刷新网格。\n\n六、常见坑\n\n· 旧项目没有 TMP——菜单 Window → TextMeshPro → Import TMP Essential Resources 导入基础资源，否则新建 TMP 文字会报错\n· 中文字缺字——生成字体资产时字符集没覆盖全，或用的还是英文专用字体资产\n· Dynamic 字体性能——运行时第一次遇到新字会实时生成，开场大量新字会卡一下，正式项目可把常用字用 Static 预烘焙\n· 富文本标签拼错——不报错，标签被当普通文字显示，检查 < > / 和标签名\n· 忘了勾 Rich Text——字符串里的 <b> 全部原样显示\n\n一句话总结：TMP 是 Unity 现在的默认文字方案，渲染清晰、支持富文本、中文字体自己可控；创建走 UI → Text - TextMeshPro，中文字体记得用 Font Asset Creator 生成并覆盖字符集，标签拼错和中文字缺字是两大新手坑。' },
    { type: 'component', title: 'TMP 关键概念', items: [
      { name: 'TextMeshProUGUI', desc: '显示 TMP 文字的 UGUI 组件' },
      { name: 'Font Asset 字体资产', desc: '由 ttf/otf 生成，TMP 显示文字的前提' },
      { name: 'Dynamic 动态字体', desc: '运行时按需生成字形，省包体但有开销' },
      { name: 'Static 静态字体', desc: '字形预烘焙进贴图，快但包大' },
      { name: '富文本标签', desc: '<b> <color> <size> <link> 混排样式' },
      { name: 'Font Asset Creator', desc: '把字体文件转成 TMP 字体资产的窗口' },
    ] },
    { type: 'quiz', question: '想在一段 TMP 文字里「把几个字放大加粗，其他字不变」，最直接的做法是？', options: ['建两个 Text 组件叠在一起', '在字符串里直接写 <b>加粗</b>、<size=30>放大</size> 富文本标签', '换一张更大的图片字体'], answer: 1, tip: '富文本标签就是干这个的——在字符串里内联 <b>、<size> 等标签，一段文字即可混排样式；拆成多个 Text 组件又碎又难对齐。' },
  ],
}
