// 进阶内容：建模与 Blender（modeling-1/2/3/4）
export const lessons = [
  { id: 'modeling-1', title: '美术资源从哪来' },
  { id: 'modeling-2', title: 'Blender 入门' },
  { id: 'modeling-3', title: '从 Blender 导入 Unity' },
  { id: 'modeling-4', title: '模型优化与流程' },
]
export const cards = {
  'modeling-1': [
    { type: 'text', title: '美术资源从哪来', body: '做游戏，美术资源是绕不开的第一关。这一课把「资源从哪来」的几条路摆清楚，再讲怎么选、什么格式、怎么导进 Unity。\n\n一、三条路\n\n自己建：用 Blender 从零捏模型，完全可控、风格统一、无版权问题，但费时费力。适合核心资产——主角、关键道具。\n\n资产商店买：Unity 自带 Asset Store（Window → Asset Store），看价格、评分、支持的版本，Download 后 Import 进项目。适合通用的东西——树、石头、建筑，买回来改改就能用。\n\n免费资源网站：Poly Haven（CC0 协议，免费可商用、不用署名）、Sketchfab、Kenney 等。适合练手、原型、开源项目。\n\n二、怎么选：三个标准\n\n风格统一：整个游戏画风得一致——Low Poly 世界里放个写实雕像，一眼穿帮。先定画风再进货。\n\n授权：最容易栽的坑。商用游戏要用「可商用」授权，看清许可证：CC0 随便用，CC BY 要署名，有些只许个人学习。拿来卖钱被告，哭都来不及。\n\n性能：资源不是越精细越好。留意面数，手机上几万面已是高模；贴图分辨率 1024/2048 掂量着用。\n\n三、常见 3D 格式\n\nFBX：最通用，Unity、Blender、Maya 全认，模型+动画+材质都能带，游戏行业事实标准。从 Blender 导出、往 Unity 导入都用它。\n\nOBJ：只有几何信息，不带动画，兼容性好但功能少，适合简单互传。\n\nGLTF/GLB：新一代格式，适合 Web、AR/VR，能带 PBR 材质。\n\n四、导进 Unity\n\n把 .fbx/.obj 直接拖进 Project 窗口的 Assets 文件夹，Unity 自动导入；或右键 → Import New Asset。导入后拖到 Hierarchy 就能用。\n\n五、三个坑\n\n坑一：授权没看就商用，被起诉的新闻年年有，上架前记下每个外部资源的许可。\n坑二：风格不统一，万国牌资源场景一眼假。\n坑三：格式不对导入失败——统一走 FBX，文件名用英文，别带中文和特殊字符。\n\n一句话总结：资源三条路——自己建、商店买、免费站；选时盯住风格统一、授权可商用、性能够用；导 Unity 就拖 FBX 进 Assets。' },
    { type: 'component', title: '资源来源速查', items: [
      { name: '自己建', desc: 'Blender 建模，可控、风格统一、无版权问题' },
      { name: 'Asset Store', desc: 'Unity 官方商店，免费付费都有，看评分面数' },
      { name: 'Poly Haven', desc: 'CC0 免费资源：HDR、贴图、模型，可商用' },
      { name: '风格统一', desc: '先定画风再进货，别东拼西凑' },
      { name: '授权检查', desc: 'CC0 随便用，CC BY 要署名，商用前看清许可' },
      { name: 'FBX', desc: '最通用格式，模型+动画+材质都能带' },
    ] },
    { type: 'quiz', question: '自己用 Blender 建好一个模型，要导进 Unity 用，最稳妥的做法是？', options: ['把 .blend 原始文件直接拖进 Unity 的 Assets', '导出成 FBX 再拖进 Assets，文件名用英文', '把模型截图当贴图贴上去'], answer: 1, tip: 'FBX 是最通用的交换格式，导出 FBX 再导入 Unity 是标准流程；.blend 原始文件让 Unity 直读不稳定，截图更是开倒车。' },
  ],
  'modeling-2': [
    { type: 'text', title: 'Blender 入门', body: 'Blender 是免费开源的 3D 建模软件——免费、跨平台、体积小功能全，建模、材质、动画、渲染一把抓，独立游戏界用得最多。官网 blender.org 下载，首次打开选简体中文。\n\n一、界面\n\n· 3D 视口（中间最大）——建模主战场\n· 顶部工具栏——选择模式、变换工具、视图切换\n· 右侧属性面板——物体参数、材质、修改器\n· 左侧工具栏（T 键）——加删物体、挤出等建模工具\n\n两大模式最关键：物体模式（选整个物体移动旋转）和编辑模式（选内部的点/线/面改形状），Tab 键切换。\n\n二、基础操作（跟 Unity 完全不同，别混）\n\n· 选择：右键（Unity 是左键，Blender 默认右键）\n· 移动 G、旋转 R、缩放 S——按后鼠标移动，左键确认、右键取消\n· 转视角：中键按住拖；滚轮缩放；Shift+中键平移\n· 加物体：Shift+A 弹菜单选 Mesh → Cube/Sphere 等\n· 删除：选中按 X\n\n三、动手：用方块做桌子\n\n1. 新建场景默认有个立方体，按 S 再按 Z 输入 0.1 回车，压成薄板当桌面\n2. Tab 进编辑模式，选桌面四个角（四条边），按 E 挤出往下拖，长出四条腿\n3. Tab 回物体模式，G 移动调整腿的位置，框选全选\n4. 属性面板点材质标签（小球图标）新建材质，基础色选木色——桌子成型\n\n四、保存：Ctrl+S 是命根子\n\nBlender 默认手动保存，几小时忘了存一崩全白干。每改几步存一次。\n\n五、材质初识\n\n上色是给物体加材质（Material）：属性面板 → 材质标签 → 新建，调基础色、金属度、粗糙度。先把纯色材质调明白，贴图后面再说。\n\n六、两个坑\n\n坑一：快捷键混用——右键才选中、G/R/S 才是变换，第一天就把 Unity 肌肉记忆放一边。\n坑二：没保存白干——Ctrl+S 开场第一件事。\n\n一句话总结：Blender 免费开源，右键选中 + G/R/S 变换 + 中键转视角是基本功；Tab 切物体/编辑模式，Shift+A 加物体；方块压扁加四条腿就是桌子；快捷键别跟 Unity 混，记得存盘。' },
    { type: 'component', title: 'Blender 操作速查', items: [
      { name: '右键选中', desc: '和 Unity 相反，Blender 默认右键选' },
      { name: 'G / R / S', desc: '移动 / 旋转 / 缩放' },
      { name: '中键转视角', desc: '中键拖转视角，滚轮缩放，Shift+中键平移' },
      { name: 'Tab 切模式', desc: '物体模式 / 编辑模式切换' },
      { name: 'Shift+A', desc: '弹出菜单加物体' },
      { name: 'Ctrl+S', desc: '保存 .blend，命根子' },
    ] },
    { type: 'quiz', question: '在 Blender 里选中了一个立方体，想把它沿 Y 轴方向拉长（变成扁长条），正确的按键是？', options: ['按 G 后移动鼠标', '按 S 后按 Y 再输入数值，回车确认', '按 Delete 再重新加一个'], answer: 1, tip: 'S 是缩放，S 后面跟一个轴字母（X/Y/Z）就是只沿那个轴缩放，输入数值回车精确控制——把立方体拉成长条的正解。G 是移动，不是变形。' },
  ],
  'modeling-3': [
    { type: 'text', title: '从 Blender 导入 Unity', body: 'Blender 建好模型，要过「导出—导入」这道关才能进 Unity。新手模型导进去不是「躺平」就是「巨大无比」，全是这关没把好。\n\n一、Blender 导出 FBX\n\n1. 选中模型（可多选）\n2. File → Export → FBX (.fbx)\n3. 路径填英文、文件名英文小写（Table.fbx，别用 桌子.fbx）\n4. 右侧勾上「应用变换（Apply Transform）」——不勾模型进 Unity 容易歪\n5. 点「导出 FBX」\n\n二、Unity 导入\n\n把 .fbx 直接拖进 Project 的 Assets 文件夹，Unity 自动导入。选中 FBX 看检查器：\n\n· Model 页的 Scale Factor（默认 1）——大小不对靠它整体缩放。Blender 的 1 米 = Unity 的 1 单位，正常不用动\n· Rig 页——带骨骼动画才要设，纯静态用默认\n· Materials 页——管材质/贴图怎么导入，重点别让贴图丢（见坑三）\n\n三、为什么模型会「躺平」\n\n两套软件「面朝向」定义不同，导进去横躺多半是轴向没对齐：\n\n· 正解：回 Blender 把模型摆成「Z 轴朝上、正面朝 -Y」，重新导出\n· Unity 里硬改 Rotation (90,0,0) 是治标——模型本身歪\n\n四、导入后检查三件事\n\n1. 大小：放个 Unity 新建 Cube（边长 1 米）对比，差太多调 Scale Factor\n2. 方向：正面朝向对不对，躺了就回 Blender 摆正\n3. 材质：上色没、贴图糊没，丢了查导出打包\n\n五、改了模型重新导出\n\nBlender 改好 → 重导 FBX 覆盖原文件 → 回 Unity 点 Reimport（或点弹出的「重新导入」）——模型就地更新，所有引用一起变。\n\n六、三个坑\n\n坑一：缩放不对——Blender 单位设米、导出 Scale 别乱改，用 Cube 对比着调 Scale Factor。\n坑二：躺平——轴向没对齐，Z 朝上、正面朝 -Y 摆正再导。\n坑三：贴图丢了——模型一片灰/紫。导出时把贴图复制到和 FBX 同目录，材质用 Principled BSDF。\n\n一句话总结：导出 FBX 勾「应用变换」、路径英文；导入后拿 1 米方块对比大小、看朝向、查材质；改模型重导覆盖再 Reimport——缩放、躺平、贴图丢是三大坑。' },
    { type: 'component', title: '导入流程速查', items: [
      { name: '导出 FBX', desc: 'File → Export → FBX，勾应用变换，路径英文' },
      { name: 'Scale Factor', desc: 'Unity 侧整体缩放，默认 1' },
      { name: 'Z 轴朝上', desc: '模型正面朝 -Y 摆正再导，防躺平' },
      { name: '1 米方块对比', desc: 'Unity 新建 Cube 当参照检查大小' },
      { name: 'Reimport', desc: '改了模型重导覆盖后，点它就地更新' },
      { name: '贴图打包', desc: 'FBX 和贴图同目录，Principled 材质' },
    ] },
    { type: 'quiz', question: '在 Blender 建好的桌子导入 Unity 后「躺平」在地上，立不起来，最靠谱的解决办法是？', options: ['在 Unity 里把模型 Rotation 改成 (90, 0, 0) 硬掰起来', '回 Blender 把模型摆成 Z 轴朝上、正面朝 -Y 再导出，重新导入', '把场景相机换个角度看'], answer: 1, tip: '躺平是轴向没对齐——回 Blender 摆正再导出，模型本身才是正的；Unity 里拧 Rotation 是治标，换个角度遮丑更没用。' },
  ],
  'modeling-4': [
    { type: 'text', title: '模型优化与流程', body: '模型做出来了、导进去了，游戏却卡——先别怪代码，多半是模型「太重」：面数太多、碰撞体太细、高模满场。这一课讲优化与流程。\n\n一、模型为什么卡\n\n显卡渲染的三角形越多越慢。一个几万面雕像没事，一百个就卡成幻灯片。手机场景全部模型三角面总数控制在几万到十几万比较稳。细节靠贴图就够，别硬堆面数。\n\n二、减面\n\nDecimate：选模型 → 加修改器（Modifiers）→ Decimate → 调 Ratio 自动减面。快但拓扑乱，适合远景物体，减一半肉眼看不出。\n\n重拓扑：用低面数网格「包住」高模重新布线。精细但费力，适合角色等关键资产，减完结构依然规整。新手先 Decimate 解燃眉之急。\n\n三、LOD：远距离用低模\n\n同一物体准备高、中、低三套模型，按距离自动切换：加 LOD Group，高模进 LOD 0、中模 LOD 1、低模 LOD 2，设好各档生效距离——远处自动换低模，画面几乎无差。\n\n四、碰撞体：别让模型自己当碰撞\n\n给模型挂 Mesh Collider，整个模型所有面全变碰撞体，物理巨慢还卡凹凸。正确做法：\n\n· 简单形状用 Box Collider 等：树、石头、路障\n· 复杂地面：建一个面数极少的「隐形碰撞壳」，挂 Mesh Collider，材质不渲染它\n· 玩家撞上去差几毫米根本看不出，把高模全喂给物理引擎才是真浪费\n\n五、命名规范与目录组织\n\n· 目录：Assets 下按 Models、Textures、Materials、Prefabs 分类，每模型一文件夹\n· 命名：小写驼峰 + 前缀——Char_Knight（角色）、Bldg_Tower（建筑），碰撞体后缀 _col、LOD 后缀 _LOD0\n· 别用中文名、别用空格、别同名\n\n六、协作与替换流程\n\n多人做美术：一人建模一人搭场景，用 Git 管资源。建模的改好导出 FBX 覆盖，搭场景的 Reimport，所有引用自动更新。\n\n替换五步：1 改模型导出 FBX；2 点 Reimport；3 检查大小/朝向/材质；4 形状变了同步改 _col 碰撞壳；5 复查 LOD。\n\n坑：模型换了碰撞体没换——玩家撞到凸起直接穿过去。换模型必查碰撞体。\n\n一句话总结：面数多就用 Decimate/重拓扑减面、LOD 分档、简化碰撞体三招拉性能；再定好命名目录规矩，走「改模型→重导→Reimport→复查碰撞与 LOD」流程，资源工作又快又稳。' },
    { type: 'component', title: '优化流程速查', items: [
      { name: 'Decimate', desc: '快速无脑减面，适合远景物体' },
      { name: '重拓扑', desc: '精细重布面，适合角色和关键资产' },
      { name: 'LOD Group', desc: '高/中/低三档，按距离自动切换' },
      { name: '简化碰撞体', desc: '别用高模当碰撞，Box Collider 或隐形碰撞壳' },
      { name: '命名规范', desc: '前缀分类：Char_ / Bldg_，后缀 _col / _LOD0' },
      { name: '替换流程', desc: '改模型→重导→Reimport→复查碰撞与 LOD' },
    ] },
    { type: 'quiz', question: '一个公园场景摆了 50 棵高模树，每棵树一两万面，手机一跑就卡。最划算的优化顺序是？', options: ['给树加 LOD 组（远近自动换低模），树干用 Box Collider 代替 Mesh Collider', '把树全部删掉只留几棵', '给树加更多贴图让画面更精细'], answer: 0, tip: 'LOD 让远处的树自动用低模、近处的用高模，肉眼几乎无差；树的碰撞换成 Box Collider 省掉大量物理计算——两招下去性能立竿见影。删树毁场景，加贴图更卡。' },
  ],
}
