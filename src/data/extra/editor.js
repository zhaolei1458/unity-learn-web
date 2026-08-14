export const lessons = [
  { id: 'editor-5', title: '自定义属性绘制器' },
  { id: 'editor-6', title: '编辑器自动化' },
  { id: 'editor-7', title: '资产导入处理' },
  { id: 'editor-8', title: 'Package Manager 与资源生态' },
]

export const cards = {
  'editor-5': [
    { type: 'text', title: '自定义属性绘制器', body: '前面我们用 [CustomEditor] 接管了「整个组件」的检查器。这一节讲更精细的工具——PropertyDrawer（属性绘制器）：它只管「一个序列化字段」怎么画。\n\n区别先分清：\n· CustomEditor —— 管整个组件：重画整个面板、加按钮、加标题。\n· PropertyDrawer —— 管一个字段：比如把一个 int 画成滑块、把一个结构体画成一排联动控件。多个脚本共用同一个自定义类型时，PropertyDrawer 的复用价值最高。\n\n经典场景：做一个 RangedFloat（带最小/最大的范围值），想让它显示成一根「能拖两端的范围滑块」。\n\n第一步，定义数据结构（普通脚本）：\n\n[System.Serializable]\npublic class RangedFloat\n{\n    public float min = 0f;\n    public float max = 1f;\n}\n\n第二步，写属性绘制器（必须放 Editor 文件夹）：\n\nusing UnityEditor;\nusing UnityEngine;\n\n[CustomPropertyDrawer(typeof(RangedFloat))]\npublic class RangedFloatDrawer : PropertyDrawer\n{\n    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)\n    {\n        SerializedProperty minProp = property.FindPropertyRelative(\"min\");\n        SerializedProperty maxProp = property.FindPropertyRelative(\"max\");\n        float min = minProp.floatValue;\n        float max = maxProp.floatValue;\n        Rect r = EditorGUI.PrefixLabel(position, label);\n        EditorGUI.MinMaxSlider(r, ref min, ref max, 0f, 100f);\n        minProp.floatValue = min;\n        maxProp.floatValue = max;\n    }\n}\n\n逐块拆解：\n· [CustomPropertyDrawer(typeof(RangedFloat))] —— 声明「我这个绘制器负责 RangedFloat 类型」。\n· OnGUI(Rect position, SerializedProperty property, GUIContent label) —— 每个该类型的字段被画时都会调它。\n· FindPropertyRelative(\"min\") —— 拿到结构体里叫 min 的子字段。\n· EditorGUI.MinMaxSlider —— 现成的双端滑块，直接改 min/max。\n\n给字段贴 [Tooltip]、[Range]、[Header] 等特性，PropertyDrawer 也能读到——你还能自定义「特性 + 绘制器」组合，比如 [HealthColor] 让血量字段按数值变色。\n\n几个必须避开的坑：\n· OnGUI 每帧都会跑，别在里面 Instantiate、别做耗时操作。\n· 结构体里的字段要加 [System.Serializable]，或者直接 public，否则序列化不进去，drawer 根本不会被调用。\n· 改完属性记得 ApplyModifiedProperties()，否则改动可能不被记录。\n· 想画成两行甚至自适应高度，重写 GetPropertyHeight() 并处理 position.height。\n\n一句话总结：PropertyDrawer 只画一个字段，配 [CustomPropertyDrawer] 声明负责谁，配合 FindPropertyRelative 读写子字段——自定义类型配个专属绘制器，所有用到它的脚本全都变好看。' },
    { type: 'component', title: 'PropertyDrawer 常用 API', items: [
      { name: 'CustomPropertyDrawer', desc: '声明此绘制器负责哪个类型' },
      { name: 'OnGUI', desc: '每帧绘制该字段的入口，参数带 Rect 和 SerializedProperty' },
      { name: 'FindPropertyRelative', desc: '拿到结构体里的子字段继续读写' },
      { name: 'GetPropertyHeight', desc: '需要异形高度时重写，控制占用空间' },
      { name: 'ApplyModifiedProperties', desc: '把修改写回序列化对象，忘了改会丢' },
    ] },
    { type: 'quiz', question: '想让一个自定义的序列化类型 RangedFloat（min/max 两个 float）显示成一根双端范围滑块，最合适的做法？', options: ['用 CustomEditor 接管整个组件重画', '写一个 PropertyDrawer 加 [CustomPropertyDrawer(typeof(RangedFloat))]，重画这个字段', '写一个 MenuItem 菜单手动处理'], answer: 1, tip: 'PropertyDrawer 正是「专画某一种字段」的工具：CustomPropertyDrawer 声明负责的类型，OnGUI 里用 FindPropertyRelative 拿到 min/max，MinMaxSlider 一画就成，所有脚本用到这个类型都自动变好看。' },
  ],
  'editor-6': [
    { type: 'text', title: '编辑器自动化', body: '编辑器的重复劳动——批量改名字、批量设参数、打包三平台——都该交给「自动化」：菜单点一下，全自动干完。这一节讲编辑器自动化的三板斧。\n\n一、MenuItem 自动化命令。凡是「固定步骤的重复操作」都能做成菜单。常见范式：\n· 批量重命名 —— 选一批物体，脚本统一改名字（加前缀、编号）。\n· 批量设属性 —— 一键把场景里所有 Light 的强度统一、把所有材质改成某个 Shader。\n· 批量生成 —— 从配置表批量建预制体、批量创建资产（第 4 节学过 ScriptableObject 工厂）。\n\n[MenuItem(\"Tools/批量为选中物体加序号\")]\nstatic void RenameSelected()\n{\n    for (int i = 0; i < Selection.gameObjects.Length; i++)\n        Selection.gameObjects[i].name = \"Obj_\" + i;\n}\n\n注意 [MenuItem] 的第三个参数还能控制「菜单优先级」（决定菜单位置），Validate 方法（同名 + 前缀 Validate）能控制菜单可用状态。\n\n二、命令行批处理（Batch Mode）。给自动化装上「无人值守」——不开 Unity 界面直接跑：\n\nUnity.exe -batchmode -projectPath D:/Game -executeMethod BuildScript.PerformBuild -quit -logFile build.log\n\n要点：\n· -batchmode 无界面模式，-quit 跑完退出，-executeMethod 执行静态方法。\n· 批处理里不能弹对话框、不能依赖编辑器窗口，代码要写成纯逻辑。\n· 结果看 -logFile 的日志和进程退出码。\n· 打包脚本里用 BuildPipeline.BuildPlayer 指定场景列表、平台、输出路径。\n\nstatic void PerformBuild()\n{\n    string[] scenes = { \"Assets/Scenes/Main.unity\" };\n    BuildPlayerOptions opt = new BuildPlayerOptions\n    {\n        scenes = scenes,\n        locationPathName = \"Build/win/Game.exe\",\n        target = BuildTarget.StandaloneWindows64,\n        options = BuildOptions.None\n    };\n    BuildReport report = BuildPipeline.BuildPlayer(opt);\n    if (report.summary.result == BuildResult.Succeeded)\n        UnityEngine.Debug.Log(\"打包成功\");\n}\n\n这就是 CI/CD（持续集成）的接缝：GitHub Actions、Jenkins、GitLab CI 都能起一个带 Unity 的环境，定时/推代码触发这个命令，自动打包上传。\n\n三、Editor 脚本常用模式。\n· EditorApplication.update —— 编辑器每帧回调，适合做「实时预览」工具（编辑器模式下实时改场景）。\n· EditorApplication.delayCall —— 当前帧末尾执行一次，适合「菜单点了再等一帧」的稳妥操作。\n· Undo.RecordObject —— 改场景前先记录，Ctrl+Z 能撤销，专业工具必备。\n· AssetDatabase 全家 —— 建文件夹、建资产、刷新、定位。\n\n一句话总结：菜单化重复操作、Batch Mode 无人值守、BuildPipeline 打包、EditorApplication 做实时工具——编辑器自动化就是把这些模式拼起来，让机器替你干体力活。' },
    { type: 'component', title: 'Editor 脚本常用模式', items: [
      { name: 'MenuItem', desc: '菜单命令入口，+Validate 控制可用状态' },
      { name: 'BuildPipeline.BuildPlayer', desc: '代码里打包的入口，指定场景/平台/输出' },
      { name: 'Batch Mode 批处理', desc: '-batchmode -executeMethod 无人值守跑脚本' },
      { name: 'EditorApplication.update', desc: '编辑器每帧回调，做实时预览' },
      { name: 'Undo.RecordObject', desc: '改场景前记录，撤销有救' },
    ] },
    { type: 'quiz', question: '想在不开 Unity 界面的情况下，由 CI 机器自动执行打包 Windows 版本，入口应该是什么？', options: ['写一个静态方法，用 Unity.exe 的 -batchmode -executeMethod 参数在命令行调用它', '让 CI 机器打开 Unity 编辑器手动点 Build', '写一个 DllImport 调用显卡驱动'], answer: 0, tip: '-batchmode -quit -executeMethod 方法名 是 Unity 命令行批处理的标配：无界面运行、执行静态方法、跑完退出——CI 打包全靠这个接缝。' },
  ],
  'editor-7': [
    { type: 'text', title: '资产导入处理', body: '资源导入是 Unity 里「最偷偷摸摸」的一道工序：你往 Assets 里丢一张图，Unity 自动导入、生成 meta 文件、给你一堆默认导入设置。默认设置未必适合你的项目——UI 图要 Sprite、移动端贴图要压缩、模型要生成碰撞体。手动一张张调？几百张贴图能调疯。AssetPostprocessor 就是为这生的：导入时自动处理。\n\n一、AssetPostprocessor 是什么。一个编辑器类，你重写它的回调，Unity 在每次导入资产的前后自动调用。最常用的回调：\n· OnPreprocessTexture —— 贴图导入前，改导入设置。\n· OnPreprocessModel —— 模型导入前，改模型设置。\n· OnPostprocessAllAssets —— 一批导入完成后，做批量操作。\n\n二、按命名规则自动设置。经典玩法：路径里带什么关键字，就套什么设置。\n\npublic class AutoImportSetting : AssetPostprocessor\n{\n    void OnPreprocessTexture()\n    {\n        TextureImporter importer = assetImporter as TextureImporter;\n        string path = importer.assetPath;\n\n        if (path.Contains(\"UI_\"))\n        {\n            importer.textureType = TextureImporterType.Sprite;\n            importer.mipmapEnabled = false;\n            importer.spriteImportMode = SpriteImportMode.Single;\n        }\n        else if (path.Contains(\"Lightmap_\"))\n        {\n            importer.textureType = TextureImporterType.Lightmap;\n        }\n        else\n        {\n            importer.maxTextureSize = 1024;\n            importer.compressionQuality = 50;\n        }\n    }\n}\n\n从此「UI_开头的图 = Sprite + 关 Mipmap、Lightmap_开头 = 光照贴图」就成了团队铁律，谁丢进 Assets 都会被自动套上，肉眼可见地省掉一批人工。\n\n三、模型导入的常用自动化：\n· 名字含 _col 的模型自动生成碰撞体（importer.addCollider = true）。\n· 动画模型的动画导入设置统一（AnimationType、Avatar）。\n· 自动压缩到目标平台格式，移动端打包时免去手工压一遍。\n\n四、OnPostprocessAllAssets 的批量场景：\n· 导入完成自动校验：非法命名直接报错提醒。\n· 自动生成 AssetBundle 变体清单、自动打图集（Sprite Atlas）。\n· 根据导入的新资源自动刷新某个配置表。\n\n必须注意的三个坑：\n· 回调里改动要「轻」——导入本身就很慢，回调再重会雪上加霜；OnPostprocessAllAssets 每次导入都会跑，别做重活。\n· 别在回调里触发「改 → 再导入 → 再回调」的死循环，改设置后不要再动会触发重新导入的资源。\n· 判路径、判类型用 assetImporter.assetPath，别写死绝对路径（项目换位置就废了）。\n\n一句话总结：AssetPostprocessor 是导入管线的「钩子」——OnPreprocessTexture/Model 改设置、OnPostprocessAllAssets 做批量，按命名规则自动套参数，导入规范从此不用靠自觉。' },
    { type: 'component', title: 'AssetPostprocessor 常用回调', items: [
      { name: 'OnPreprocessTexture', desc: '贴图导入前改设置：类型/压缩/Mipmap' },
      { name: 'OnPreprocessModel', desc: '模型导入前：碰撞体/动画/缩放' },
      { name: 'OnPostprocessAllAssets', desc: '整批导入完成后批量处理' },
      { name: 'assetImporter.assetPath', desc: '当前导入资源的路径，判断规则的依据' },
      { name: 'TextureImporter', desc: '改贴图设置的总入口' },
    ] },
    { type: 'quiz', question: '想让所有名字以 UI_ 开头的贴图，导入时自动变成 Sprite 且关掉 Mipmap，用什么最省事？', options: ['写个工具一张张手动处理', '在 AssetPostprocessor 的 OnPreprocessTexture 里按路径判断自动设置', '在 Project Settings 里加一条全局规则'], answer: 1, tip: 'AssetPostprocessor 的 OnPreprocessTexture 在贴图导入前执行，用 assetPath.Contains 判断命名规则，改 TextureImporter 的类型和 Mipmap，从此导入即规范。' },
  ],
  'editor-8': [
    { type: 'text', title: 'Package Manager 与资源生态', body: '这一节讲 Unity 的「软件商店」Package Manager，以及外面的 Asset Store 资源生态——怎么装官方功能、怎么找第三方资源。\n\n一、Package Manager 是什么。\nUnity 把「功能扩展」做成了包（Package）的形式，Package Manager（Window → Package Manager）是统一的管理窗口：装、卸、更新、查版本全在这。类比手机的 App Store——想装个新功能，进去搜、点安装，完事。\n\n二、怎么装官方功能包。\n1. 打开 Window → Package Manager。\n2. 左上角包来源下拉框，切到 Unity Registry（官方注册表）——官方包都在这里。\n3. 搜索框输入包名（比如 Input System），选中，右下角点 Install。\n4. 装完看提示：有的包要重启编辑器，有的会弹「启用新输入系统」的确认，照做即可。\n装完去哪找它：Project 视图右键 Create 菜单里多了新选项（比如 2D Animation 装完有骨架相关菜单）、Window 菜单多了新窗口、组件的 Add Component 搜索框能搜到新组件。\n\n三、常用的官方包（装上即用）。\n· Input System —— 新一代输入系统，替代旧的 Input Manager，手柄、多设备统一管理\n· Cinemachine —— 智能相机：跟随、过场、防抖全自动\n· Timeline —— 过场动画、关卡演出，像剪辑软件一样拖时间轴\n· UI Toolkit —— 新一代 UI 系统，比旧 UGUI 更现代\n· TextMeshPro —— 高质量文字渲染，做 UI 文字首选\n· 2D Animation / 2D IK —— 2D 骨骼动画（d2d-6 提过）\n· Multiplayer / Netcode —— 联机框架\n\n四、内置包 vs 第三方包。\n· 内置模块（Built-in）：跟着编辑器走的功能模块，一般不用装。\n· Unity Registry：官方维护、UPM（Unity Package Manager）分发的包，能一键更新。\n· 第三方包：从 Git URL 装（Package Manager → Add package from git URL）、从本地路径装，或从 Asset Store 导入。各有各的渠道，装完都要小心版本兼容。\n· 版本管理：每个包有自己的版本号。升级包是「改炸弹」——大版本升级可能改 API、破坏已有代码。团队项目务必所有人装同一个版本，升级前先看官方 changelog（更新日志）。\n\n五、Asset Store 商店怎么逛怎么装。\nAsset Store（Window → Asset Store，或浏览器 assetstore.unity.com）是第三方资源商店：模型、贴图、插件、完整模板，免费付费都有。\n流程：\n1. 搜索/筛选想要的资源，点 Download（免费）或购买。\n2. 下载后回到 Unity 编辑器，Package Manager 里切到 My Assets 标签，能看到已拥有的资源，点 Import。\n3. Import 时弹窗让你勾「导入哪些资源」，不用的取消勾选，点 Import。\n也可以直接下载 .unitypackage 文件，用 Assets → Import Package → Custom Package 选择导入。\n导入后注意：Console 里飘红是常态——先看报错（多半是版本不兼容），解决不了查资源文档或回退版本。\n\n六、装包后常用在哪（快速自查）。\n· Create 菜单 / Window 菜单 / Add Component 能搜到新东西 → 装成功了\n· 菜单里没出现 → 包可能装错来源（装到别的项目了）或需要重启编辑器\n· 团队统一包版本：Package Manager 里所有人装同一版本，混着用必出问题\n\n一句话总结：官方功能走 Package Manager 的 Unity Registry 一键装，第三方资源走 Asset Store 导入，装包先看版本兼容、升级先看 changelog——资源生态的门道就这三条。' },
    { type: 'component', title: '常用官方功能包', items: [
      { name: 'Input System', desc: '新一代输入系统，替代旧 Input Manager' },
      { name: 'Cinemachine', desc: '智能相机：跟随、过场、防抖' },
      { name: 'Timeline', desc: '过场动画与关卡演出，时间轴剪辑' },
      { name: 'UI Toolkit', desc: '新一代 UI 系统，比 UGUI 更现代' },
      { name: 'TextMeshPro', desc: '高质量文字渲染，UI 文字首选' },
      { name: '2D Animation', desc: '2D 骨骼动画（d2d-6 提过）' },
    ] },
    { type: 'quiz', question: '想在 Unity 里装官方的 Input System 新输入系统包，正确的入口是？', options: ['浏览器去 Asset Store 搜 Input System 下载', 'Window → Package Manager，包来源切到 Unity Registry，搜索并 Install', '从 GitHub 下载源码手动拷进 Assets 文件夹'], answer: 1, tip: '官方功能包都在 Package Manager 的 Unity Registry 里，搜索安装一键完成、还能后续更新；Asset Store 是第三方资源商店，手动拷源码则丢掉版本管理和依赖解析。' },
  ],
}
