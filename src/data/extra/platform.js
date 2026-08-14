export const lessons = [
  { id: 'platform-5', title: 'IL2CPP 与代码裁剪' },
  { id: 'platform-6', title: '资源热更新' },
  { id: 'platform-7', title: '构建自动化与 CI' },
  { id: 'platform-8', title: '版本控制与团队协作' },
  { id: 'platform-9', title: 'Unity 云服务：广告/云存档/分析' },
]

export const cards = {
  'platform-5': [
    { type: 'text', title: 'IL2CPP 与代码裁剪', body: '打包那一步，Unity 有个绕不开的选择：Mono 还是 IL2CPP。两个词别被吓住，一句话分清：Mono 是「边跑边翻译」，IL2CPP 是「先翻成 C++ 再编译成机器码」。\n\nMono（桌面默认）：\n· 运行时用 JIT（Just-In-Time）——代码第一次执行时才编译成机器码，所以打包快、启动也快。\n· 反射（Reflection）支持完整——运行时按名字找类型、动态调用，很灵活。\n· 代价：性能有运行时开销、反编译容易（看着像源码）、而且 iOS 明令禁止 JIT，Mono 上不了 iOS。\n\nIL2CPP（移动端、主机默认）：\n· AOT（Ahead-Of-Time）——把 C# 的 IL 先转成 C++ 源码，再用各平台的原生编译器编成机器码。\n· 好处一串：运行更快更稳、包体可裁剪更小、代码难逆向（外挂难改）、iOS 合法。\n· 代价：打包时间大幅拉长（编译 C++ 那步很费时）、需要各平台的 C++ 工具链、反射能力受限。\n\n重点讲 IL2CPP 的代码裁剪（Strip）。裁剪就是把「没被用到的代码」从包里剪掉，包更小、更难破解。Unity 的 Managed Stripping Level 分四档：Disabled（不裁）、Low（保守）、Medium、High（激进）。档位越高，包越小，但「被误伤」的风险越大。\n\n最常见的翻车现场：打包完一启动就报 MissingMethodException / 找不到类型。原因几乎都是——某些代码在「运行时」才用反射去找类型和方法，裁剪器在「打包时」看不到这种用法，就把它们当没用到剪掉了。典型的重灾区：\n· 用字符串名字调用的 API：JsonUtility 序列化带私有字段的类、SendMessage、FindObjectsOfType(\"名字\")。\n· 依赖注入 / 热重载 / 插件（有的插件运行时反射找你的类）。\n· 你代码里写死字符串的 Type.GetType。\n\n解法就一个字：留。项目里放一个 link.xml 文件，声明这些类型必须保留：\n\n<linker>\n  <assembly fullname=\"MyGame\">\n    <type fullname=\"MyGame.PlayerSave\" preserve=\"all\" />\n  </assembly>\n</linker>\n\n哪类类型要留？打包前先跑一遍游戏全流程、把所有功能点过一遍，报错缺什么补什么；插件文档里提到的必须保留的也提前加进去。\n\n另外给 IL2CPP 打包时间减负：\n· 勾 Player Settings → IL2CPP 的 Incremental Build（增量构建）——只有改过的代码才重新编。\n· IL2CPP 编 C++ 是多线程的，机器核越多越快；首次打包慢是常态，之后会快很多。\n· 构建时用 Build Cache，避免每次都全量重编。\n\n一句话总结：Mono 打包快、反射全、上不了 iOS；IL2CPP 跑得快、包可剪、必须配裁剪防线——切到 IL2CPP 后记得用 link.xml 把反射要用的类型「保」下来，再按增量构建加速。' },
    { type: 'component', title: 'Mono vs IL2CPP 对比', items: [
      { name: 'JIT vs AOT', desc: 'Mono 边跑边编译；IL2CPP 提前编译成机器码' },
      { name: 'Managed Stripping', desc: '代码裁剪档位：Disabled→High，越高越小也越危险' },
      { name: 'link.xml', desc: '保留被裁剪的反射类型，裁剪误伤的救星' },
      { name: '增量构建', desc: 'IL2CPP 只重编改动部分，大幅缩短打包时间' },
      { name: 'iOS 强制 IL2CPP', desc: 'iOS 禁止 JIT，Mono 无法上架' },
    ] },
    { type: 'quiz', question: '从 Mono 切到 IL2CPP 打包后，游戏启动即报「找不到某类型」。最可能的原因和正确解法？', options: ['IL2CPP 不支持 C#，要把代码重写成 C++', 'IL2CPP 的 AOT 编译没有做代码裁剪，类型太多被挤掉了', '代码裁剪（Stripping）把运行时才用反射找的类型剪掉了，用 link.xml 把这些类型保留下来'], answer: 2, tip: '裁剪器打包时看不到「运行时反射」的用法，会把这类类型当没用到剪掉。link.xml 声明保留，启动缺什么补什么，是 IL2CPP 裁剪的标配配套。' },
  ],
  'platform-6': [
    { type: 'text', title: '资源热更新', body: '游戏上线后要改 bug、加内容，难道每次都发版重新过审？安卓还行，iOS 审核等一周，玩家早跑了。资源热更新（Hot Update）就是答案：只把「改动的资源包」通过网络下载替换，不动 App 本体。\n\n先说底层家底：AssetBundle（AB）。它是 Unity 的资源打包格式——把一批资源（贴图、模型、音频、场景）打成二进制包。打包用 BuildPipeline.BuildAssetBundles，运行时加载用：\n\nAssetBundle bundle = AssetBundle.LoadFromFile(path);\nGameObject go = bundle.LoadAsset<GameObject>(\"Coin\");\nInstantiate(go);\nbundle.Unload(false);\n\n裸 AB 很原始：\n· 依赖要自己管——A 包引用了 B 包的资源，加载 A 前得先加载 B，漏了就是一片紫红。\n· 引用计数、内存释放全靠自觉——忘了 Unload 就泄漏。\n· 清单（Manifest）自己比对版本，麻烦。\n\n所以官方推出了 Addressables（Addressable Asset System），在 AB 之上盖了一层「管理壳」：\n· 按地址加载 —— 不记路径、不记包名，一句 Addressables.LoadAssetAsync<Sprite>(\"UI/Coin\") 就行。\n· 自动引用计数 —— LoadAsset 计数 +1，Release 计数 -1，归零自动卸载，内存泄漏率直线下降。\n· 自动打包分组 —— 你只管把资源分进 Group，打包、清单、哈希 Addressables 全自动。\n· 本地/远程分组 —— 一个 Group 放本地（随包走），一个 Group 放远程（服务器下载），切一下就行。\n\n热更新方案的标准四步（以 Addressables 为例）：\n1. 服务器放一份「目录清单」（catalog）——记录每个资源包的名字和内容哈希。\n2. 客户端启动时先下载目录，对比本地哈希。\n3. 有差异的包，从远程 Group 的 URL（配了 HTTP/CDN）下载，替换本地缓存。\n4. 用 Addressables.CheckForCatalogUpdates + UpdateCatalogs 完成更新，新资源进游戏即用。\n\n版本管理是热更新的命门，几个关键概念：\n· 内容哈希（Content Hash）——包内容的指纹，内容变了哈希就变，靠它判断「要不要下」。\n· 目录（Catalog）——版本号和包的清单，更新目录是「知道有新内容」的第一步。\n· 远程分组地址（Remote Load Path）——可以带版本号，如 .../Content_v1/，发新版本时换新目录，回滚也方便（指回旧版）。\n· 首包策略——首包放「必须的资源」，其余全远程，首包小、后续全走更新。\n\n两个坑：\n· 内存管理还是要的——Addressables 释放靠引用计数，忘记 Release 照样泄漏；用 Auto Release Handle 等写法省心。\n· 热更新是「资源」的更新，改 C# 逻辑是「代码」的更新——iOS 禁止下载可执行代码，纯资源更新没问题，但代码热更（Hot Reload 脚本）在 iOS 上属违规，正经做法是把逻辑尽量做成数据/配置。\n\n一句话总结：AssetBundle 是资源打包的底层格式，Addressables 是它上面带「按地址加载 + 自动释放 + 版本管理」的省心壳；热更新 = 比哈希目录 + 下载差异包 + 更新目录，首包做小、远程分组、版本留可回滚。' },
    { type: 'component', title: '热更新方案要素', items: [
      { name: 'AssetBundle', desc: '资源打包底层格式，手动管依赖和释放' },
      { name: 'Addressables', desc: 'AB 上的管理壳：按地址加载+自动引用计数+自动打包' },
      { name: 'Catalog 目录', desc: '记录版本和包哈希，热更新判断差异的依据' },
      { name: 'Content Hash', desc: '包内容指纹，内容变哈希变' },
      { name: 'Remote Group', desc: '放远程服务器的分组，配 HTTP/CDN 下载' },
    ] },
    { type: 'quiz', question: 'Addressables 相比裸 AssetBundle，最大的改进是什么？', options: ['Addressables 不需要打 AB 包，直接加载原始资源', 'Addressables 在 AB 之上提供「按地址加载 + 自动引用计数释放 + 自动清单与版本管理」，省心很多', 'Addressables 只能用于 PC，不能用于移动端'], answer: 1, tip: '裸 AB 要手动管依赖、管释放、管清单；Addressables 把这三样全包了，还能自动建本地/远程分组、自动比对哈希做热更新。' },
  ],
  'platform-7': [
    { type: 'text', title: '构建自动化与 CI', body: '「每次发版都靠人肉在编辑器里点 Build」——项目一上规模，这句话就是定时炸弹：忘了勾场景、版本号写错、打包漏平台。构建自动化（Build Automation）就是把这件重复事变成「一条命令 / 一次提交自动完成」。\n\n第一步：构建脚本。把「打包」从手工操作变成代码。用 BuildPipeline.BuildPlayer 写一个静态方法（放 Editor 文件夹）：\n\nusing UnityEditor;\nusing UnityEditor.Build.Reporting;\n\npublic static class BuildScript\n{\n    [MenuItem(\"Build/打包 Windows\")]\n    public static void BuildWindows()\n    {\n        BuildPlayerOptions opt = new BuildPlayerOptions\n        {\n            scenes = new[] { \"Assets/Scenes/Main.unity\" },\n            locationPathName = \"Build/Windows/Game.exe\",\n            target = BuildTarget.StandaloneWindows64,\n            options = BuildOptions.None\n        };\n        BuildReport report = BuildPipeline.BuildPlayer(opt);\n        if (report.summary.result == BuildResult.Succeeded)\n            UnityEngine.Debug.Log(\"打包成功\");\n    }\n}\n\n关键点：\n· 场景列表写成代码 —— 从不再担心「忘了勾场景」。\n· BuildReport 拿结果 —— 成功失败、包大小，代码里都能拿到。\n· 多平台就多写几个方法 —— 一个 BuildWindows，一个 BuildAndroid，参数化。\n\n第二步：命令行调用。让 CI（持续集成）能用：\n\nUnity.exe -batchmode -quit -projectPath D:/Game -executeMethod BuildScript.BuildWindows -logFile build_win.log\n\nexit code 非 0 就代表失败，CI 会抓这个。\n\n第三步：接进 CI/CD。GitHub Actions / Jenkins / GitLab CI 的通用玩法：\n· 起一个装了 Unity 的构建机（官方 Docker 镜像或自建服务器 + Unity License）。\n· 触发器任选：推了 main 分支 → 自动打正式包；每晚定时 → 打「夜版」给团队测；提了 tag → 打上架包。\n· 打包产物自动上传（制品库、对象存储、钉钉/飞书群通知）。\n· 一次构建可以并行打多平台：Windows、Android、WebGL 各跑一个 Job。\n\n构建机（Build Machine）的讲究：\n· 专机专用 —— 别在开发机打包，环境不一致会出「我这边能打你那边不能打」。\n· 干净环境 —— CI 每次用全新工作区，包更可靠。\n· Unity License —— 云上构建机要用命令行激活 Unity，这是 CI 最常见的坑。\n\n几个必踩的坑，提前绕：\n· batchmode 不能弹对话框 —— 有 UI 交互的代码会卡死，脚本要写成纯逻辑。\n· 版本号自动递增 —— 用日期/Git 提交号当 build version，别手填。\n· 清理旧 Build 目录 —— 每次构建前删掉旧的，避免「包其实没更新」的假象。\n\n一句话总结：BuildPipeline 写打包逻辑、-executeMethod 让命令行可调、CI 定时或提交触发——发版从「人肉点 Build」升级成「一键自动」。' },
    { type: 'component', title: '构建脚本关键 API', items: [
      { name: 'BuildPipeline.BuildPlayer', desc: '代码打包入口，指定场景/平台/输出' },
      { name: '-batchmode -executeMethod', desc: '命令行无人值守执行构建脚本' },
      { name: 'CI/CD 触发器', desc: '推分支/定时/打 tag 自动触发构建' },
      { name: '构建机', desc: '专机+干净环境+Unity License，结果可复现' },
      { name: 'BuildReport', desc: '打包结果：成功失败、大小、耗时' },
    ] },
    { type: 'quiz', question: '想让「每天凌晨自动打一版最新 Windows 包并上传给团队测试」，最合适的方案？', options: ['搭 CI/CD（如 GitHub Actions），用 Unity 命令行在构建机上定时执行构建脚本，产物自动上传', '让开发每天下班前手动在编辑器里点 Build 再传到群里', '写个批处理双击运行就算自动化了'], answer: 0, tip: '定时构建=CI 的定时触发器；无人值守=-batchmode -executeMethod 调用构建脚本；产物自动上传=CI 的制品发布。手动点 Build 既不定时也不可复现。' },
  ],
  'platform-8': [
    { type: 'text', title: '版本控制与团队协作', body: 'Git 是什么、Unity 项目为什么必须用 Git、怎么用、Unity 专属的坑，这一节一次讲透。\n\n一、Git 是什么。\nGit 是分布式版本控制工具：记录项目每一次改动（像游戏存档），想回滚随时回；多人各改各的，最后合并到一起；每次改动留痕，出了 bug 能查是谁、哪次改的。团队做 Unity 项目，脚本、场景、配置天天在变，没有版本控制就是裸奔——两个人同时改一个场景，后保存的会盖掉先保存的。\n\n二、为什么 Unity 项目特别需要 Git。\nUnity 项目是「一堆文件」的集合：.cs 脚本、.unity 场景、.prefab、贴图模型音频，还有大量配置。Git 把「并行开发 + 随时回退 + 变更留痕」一次补齐：谁都能开自己的分支干活，主干永远是能跑的版本，出了问题一键回到上一个稳定点。\n\n三、最常用的命令（记住这几个就够干活）。\n    git init                # 把当前目录变成 Git 仓库（每个项目一次）\n    git add .               # 把改动放进暂存区（.gitignore 排除的不算）\n    git commit -m \"改了什么\" # 提交一次快照，写清楚这次干了啥\n    git push                # 把本地提交推到远程仓库（GitHub 等）\n    git pull                # 拉取队友推上来的改动\n    git status              # 看现在有哪些改动没提交\n    git log                 # 看提交历史\n配合顺序：改代码 → git add . → git commit → git push；开始干活前先 git pull。日常就这么四板斧。\n\n四、分支（Branch）。\n主干 main 保持稳定可打包，新功能在分支上开发，做完再合并回来：\n    git checkout -b feature/敌人AI   # 新建并切换到分支\n    git add . && git commit -m \"敌人的巡逻\"\n    git checkout main                # 切回主干\n    git merge feature/敌人AI         # 把分支合并进主干\n好处：每个功能互不干扰，主干永远能跑。\n\n五、Unity 专属坑（重点）。\n1. .gitignore 该忽略什么。Unity 项目里一堆「生成物」不该提交：Library（导入缓存，几 GB）、Temp、Obj、Build、Logs。这些本地重建就行，提交了只会撑大仓库、制造冲突。Assets 下的源文件（脚本/场景/贴图）必须提交。官方有现成的 Unity.gitignore，拷来直接用，关键几行：\n    /Library/\n    /Temp/\n    /Obj/\n    /Build/\n    /Logs/\n2. .meta 必须提交。Unity 用每个资源旁边的 .meta 文件里的 GUID 记录引用关系（贴图被哪些材质引用、预制体引用了哪些资源）。不提交 .meta，别人拉下代码后 Unity 会重新生成，GUID 变了，贴图材质全乱、引用全断。所以 .meta 是必交项，而且一旦提交就别再动它。\n3. 场景文件多人改会冲突。.unity 场景本质是文本（YAML），但结构复杂，两个人同时改同一场景大概率 merge 冲突、且很难手工解。实用解法三选一：\n   · 锁定：用 Unity 官方版本控制（Plastic SCM / GitHub for Unity）的「锁文件」功能，一个人锁了场景，别人只能只读。\n   · 拆 Prefab：把场景里经常动的部分（建筑、敌人、UI）抽成独立 Prefab，场景文件尽量小、改动频率低，冲突面就小。\n   · 约定：一个场景同一时间只让一个人改，改完马上提交。\n大型项目的主流做法是「场景做薄 + 内容进 Prefab」。\n4. 二进制资源（模型/贴图/音频）Git 无法 diff，冲突解不了。惯例是「一个资源归一个人管」+ 锁定，避免两个人同时改同一个模型。\n\n六、GitHub 协作流程（团队标配）。\n克隆 → 开分支 → 干活提交 → 推分支 → 开 Pull Request → 队友 review → 合进主干。PR 让代码改动集中在一处审查，问题在 PR 里讨论，合进去前就能拦下大部分 bug，是团队协作最常用的一条链。\n\n一句话总结：Git 管「谁改了什么、能不能回退」；Unity 项目照「Library/Temp/Obj 等生成物进 .gitignore、.meta 必提交、场景做薄内容进 Prefab、二进制资源一人一管」四句口诀走，团队协作就不翻车。' },
    { type: 'component', title: 'Git 常用命令', items: [
      { name: 'init / add / commit', desc: '初始化仓库、暂存改动、提交快照' },
      { name: 'push / pull', desc: '推送到远程仓库 / 拉取队友改动' },
      { name: 'status / log', desc: '看未提交改动 / 看提交历史' },
      { name: 'branch / merge', desc: '开功能分支 / 合并回主干' },
      { name: '.gitignore', desc: '忽略 Library/Temp/Obj/Build 等生成物' },
    ] },
    { type: 'quiz', question: 'Unity 项目里的 .meta 文件要不要提交到 Git？', options: ['不用提交，Git 会自动忽略它', '必须提交，丢了对不上 GUID，贴图材质的引用全断', '只有多人项目才提交，单机项目无所谓'], answer: 1, tip: 'Unity 靠 .meta 里的 GUID 建立资源引用。不提交 .meta，别人拉下来会重新生成新 GUID，所有引用断裂，资源显示成「丢失」。' },
    { type: 'quiz', question: '下面哪一组最该写进 .gitignore、不该提交进仓库？', options: ['Assets 下的场景和 C# 脚本', 'Library 缓存、Temp、Obj、Build 产物', '所有 .meta 文件'], answer: 1, tip: 'Library/Temp/Obj/Build 是生成物，可随时重建，提交了只会撑大仓库、制造冲突；Assets 源文件必须提交，.meta 也必须提交。' },
  ],
  'platform-9': [
    { type: 'text', title: 'Unity 云服务：广告/云存档/分析', body: '游戏做到商业化那一步，就要接 Unity 官方的一站式云服务：Unity Gaming Services（UGS）。广告、云存档、数据统计，全在 Dashboard 后台管理。\n\n一、Unity 云服务是什么\n\nUnity 官方提供的线上服务全家桶，统一在 Unity Dashboard（dashboard.unity3d.com）里建项目、开服务、看数据。不用自建服务器就能上广告、存存档、做分析。\n\n二、主要几样，各管各的\n\n· Unity Ads —— 广告变现。Interstitial（插屏）和 Rewarded（激励视频，看广告领奖励）两类最常见，激励视频是休闲游戏的主力收入\n· Cloud Save —— 云存档。玩家数据存到云端，换设备进度不丢，还能跨平台共享\n· Analytics —— 数据分析。埋点记录玩家行为：登录、关卡通过率、留存、付费漏斗，看数据调游戏\n· Cloud Content Delivery（CCD）—— 云资源分发。把资源/补丁放 CDN，配合 Addressables 做热更新、发活动内容\n· Multiplay —— 多人服务器托管。联机游戏的服务端开服、扩容、匹配，交给官方\n· 同生态还有 Economy（虚拟经济）、Remote Config（远程配置）等\n\n三、怎么接入（通用三步）\n\n1. Dashboard 建项目：登录 Unity Dashboard，Organization 下建项目，打开要用的服务（Ads / Cloud Save / Analytics）\n2. 装包：Window → Package Manager 安装对应包（Unity Ads / Cloud Save / Analytics 等），或菜单 Assets → Services 打开服务窗口一键启用\n3. 代码初始化 → 调 API\n\n给个最简代码示例（Analytics 埋点 + 看激励视频）：\n\n// 初始化（游戏启动时调用一次，先 await 完成再调别的 API）\nawait UnityServices.InitializeAsync();\n\n// 记录一个自定义事件（比如「通关第 3 关」）\nAnalyticsService.Instance.CustomData(\"level_complete\",\n    new Dictionary<string, object> { { \"level\", 3 }, { \"time\", 65 } });\n\n// 激励视频广告：预加载 → 播放 → 完成回调发奖励\nvar ad = new RewardedAd();\nad.LoadAd();\nad.OnAdShowComplete += (args) => {\n    if (args.Completed) GiveReward();\n};\nad.Show();\n\n四、收费和限制\n\n· 免费额度：各服务都有免费档（Analytics 有每月事件量限额、Cloud Save 有存储限额），小项目够用\n· 个人版限制：Unity 个人版（Personal）在收入上限内免费使用，但广告收益分成、部分服务功能按档位不同\n· 上线前读一遍对应服务文档的 Pricing 页，别上线了才被账单吓到\n\n五、什么时候接\n\n「快上线了再接」——正确时机是玩法接近完成、准备测试商业化时。开发早期接云服务纯属添乱：还没内容可统计、广告没人看、存档逻辑天天变。先本地做好（PlayerPrefs 先顶着），商业化定型了再切云服务。\n\n六、常见坑\n\n· 忘初始化就调 API——UnityServices.InitializeAsync() 没跑完就调广告/分析，直接报错；调任何 API 前先确认初始化完成\n· 没联网测试——云服务全走网络，关网环境空转超时、报错，测试机注意网络和 region 配置\n· 免费版功能受限——免费额度不够、某个功能要付费档，提前看文档\n· 真机 vs 编辑器——很多云服务在编辑器里行为不同（没真机环境、没广告 ID），该上真机测就上真机\n\n一句话总结：Unity 云服务 = 官方一站式线上服务（Ads 变现 / Cloud Save 云存档 / Analytics 分析 / CCD 发资源 / Multiplay 托管服务器）；Dashboard 建项目 → 装包 → 初始化 → 调 API 三步接入，免费额度够小项目用；最佳接入时机是「接近上线」，开发早期别碰。' },
    { type: 'component', title: 'Unity 云服务全家桶', items: [
      { name: 'Unity Ads', desc: '插屏/激励视频广告变现' },
      { name: 'Cloud Save', desc: '云存档，跨设备不丢进度' },
      { name: 'Analytics', desc: '埋点分析，留存/漏斗' },
      { name: 'Cloud Content Delivery', desc: '云资源分发，配合热更新' },
      { name: 'Multiplay', desc: '多人服务器托管' },
      { name: 'Unity Dashboard', desc: '服务后台，建项目开服务' },
    ] },
    { type: 'quiz', question: '玩家换了台手机，想让他登录后直接接着上次的进度继续玩。这属于哪项服务的活？', options: ['Unity Ads，用广告拉回老玩家', 'Cloud Save，把存档存到云端，换设备后拉回来', 'Analytics，记录这次登录行为'], answer: 1, tip: 'Cloud Save 就是管云存档的——玩家数据存云端，换设备登录后拉回进度。Ads 是广告、Analytics 是数据分析，都不管存档。' },
  ],
}
