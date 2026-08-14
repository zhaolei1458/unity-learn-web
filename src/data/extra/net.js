export const lessons = [
  { id: 'net-4', title: '权威服务器与防作弊' },
  { id: 'net-5', title: '延迟补偿与预测' },
  { id: 'net-6', title: '大厅与匹配' },
  { id: 'net-7', title: '网络请求：调后端 API' },
]

export const cards = {
  'net-4': [
    { type: 'text', title: '权威服务器与防作弊', body: '上一节我们用 Netcode 把多人小游戏跑起来了，但「谁说了算」这个问题，藏着一场攻防战。这一节讲权威服务器（Authoritative Server）和防作弊。\n\n先说两种权威。\n\n客户端权威（Client Authoritative）：玩家在自己机器上算自己的位置、血量，再把结果告诉别人。好处是响应快——没有服务器转一道，自己动起来零延迟。坏处是——玩家在自己机器上想改什么就改什么。开个内存修改器把血量改成一万、把位置改成满地图瞬移、把伤害改成秒杀，全都防不住，因为「裁判」坐在作弊者自己家里。\n\n服务器权威（Server Authoritative）：服务器是唯一裁判，世界里所有「事实」——位置、血量、胜负——都由服务器算。客户端只做两件事：把自己的操作「意图」发给服务器，把服务器广播的结果显示出来。\n\n玩家想把自己瞬移到地图另一边？他的客户端本地确实改了画面，但服务器收到的是「他在原地」这个结果，服务器按自己的模拟跑，发现「位置没变」，广播回去——外挂玩家的画面瞬间被拉回原位，这就是防传送挂的原理。\n\n在 Unity Netcode 里的落地姿势：\n· 移动用 NetworkTransform 时，权限（Ownership）默认在服务器，客户端不直接改位置，只发 ServerRpc 表达移动意图。\n· 伤害、得分、掉落这类「结算型」逻辑，一律走 ServerRpc 到服务器，服务器判定后由服务器改数据。\n· 客户端脚本里写的判断要记得：客户端看到的只是「本地画面」，不是「权威数据」——显示给玩家看的和服务器认的，要分开。\n\n防作弊工具箱，从廉价到专业：\n1. 一切关键判定放服务器 —— 这是地基，能做到六成防作弊。\n2. 服务器校验合法性 —— 收到「一次攻击造成 99999 伤害」就直接拒绝；速度类游戏每秒校验位移上限，超了就判定异常。\n3. 不信任客户端报的数值 —— 血量、得分永远以服务器计算为准，客户端上报的只当参考。\n4. 随机性、开盒结果在服务器生成 —— 抽卡、掉落这种有利益的随机，必须在服务器 roll，客户端只收结果。\n5. 反作弊 SDK —— 商业项目上 Easy Anti-Cheat、BattlEye、Unity 也有 Game Server Hosting 配套方案，检测进程注入、内存篡改、截图取证。\n6. 日志与回放 —— 服务器记录关键事件，封号有据可查。\n\n代价要看清：服务器权威意味着服务器要跑全部模拟，主机模式（Host）下房主的电脑扛全部计算，规模一大就得租专门的服务器（Dedicated Server）；带宽和延迟也会上升——这就引出下一节的延迟补偿。\n\n一句话总结：客户端权威是把裁判放玩家家里，防不了作弊；服务器权威把裁判放服务器上，客户端只传意图、服务器只信自己算的——防外挂的根基不是加密，而是「服务器不信任任何来自客户端的数据」。' },
    { type: 'component', title: '防作弊常用手段', items: [
      { name: '服务器权威', desc: '位置/血量/胜负全由服务器算，客户端只传意图收结果' },
      { name: 'ServerRpc 校验', desc: '关键逻辑走服务器，先验证再执行' },
      { name: '位移上限检测', desc: '按时间与位移量上限揪出瞬移/加速挂' },
      { name: '反作弊 SDK', desc: 'Easy Anti-Cheat / BattlEye 等专业检测' },
      { name: '服务器日志回放', desc: '记录关键事件，封号有据可查' },
    ] },
    { type: 'quiz', question: '玩家开挂把自己的角色瞬移到地图另一边，为什么服务器权威模式能防住？', options: ['因为客户端代码被加密了，外挂改不了', '因为服务器只接受客户端的「意图」，最终位置由服务器自己的模拟计算，本地篡改会被服务器判定非法并纠正', '因为外挂程序在服务器权威模式下根本运行不了'], answer: 1, tip: '权威模式里客户端改的只是自己本地的画面，不是服务器认的数据；服务器按自己的模拟广播回去，外挂玩家的画面立刻被拉回「服务器认为他在的地方」。' },
  ],
  'net-5': [
    { type: 'text', title: '延迟补偿与预测', body: '上一节引入服务器权威后有个副作用：每次移动都要「客户端上报 → 服务器裁决 → 广播回来」，一来一回就是两倍延迟。在延迟 100ms 的网络上，你按方向键，角色要 200ms 才动，根本没法玩。这一节的三件套——客户端预测、服务器回滚、插值——就是为这事生的，它们合起来叫延迟补偿与预测（Latency Compensation & Prediction）。\n\n先认清延迟（Latency）从哪来：网络传输（光缆上的物理距离和路由器排队）、服务器处理（排队、模拟）、客户端渲染（一帧的等待）、还有跳数（Hops）。实测的 Ping / RTT（往返时间）就是这些的总和。\n\n一、客户端预测（Client-Side Prediction）。自己控制的角色，别等服务器——客户端本地先按输入把移动算出来，画面立刻响应，手感回到单机。服务器收到输入后也跑同一段模拟，再把权威结果广播回来。如果两边算法一致，结果基本吻合，玩家几乎感觉不到网络存在。\n\n二、服务器回滚 / 重放（Server Reconciliation）。客户端本地预测可能和服务器算的对不上（网络抖动、有人开了变速齿轮）。服务器端做法：保留一小段输入历史，客户端也保留自己发出过的输入。对不上时，客户端把状态「回滚」到上次对得上的时刻，用自己记录的输入重新快进一遍，画面平滑「自愈」。这招是 FPS、竞速类的手感保命符。\n\n三、插值（Interpolation）。这是给别人看的角色用的。网络传回来的永远是「过去的位置」——直接摆上去，别人在你眼里就会一卡一卡地瞬移（rubber banding）。插值做法：客户端收到位置后不立即摆放，而是存进一个「快照缓冲区」，每次都播放「一小段之前」的补间过渡。画面平滑了，代价是你看到的别人比真实慢一点点——对打类游戏通常在 50~100ms 量级，人眼基本无感。\n\n四、射击的延迟补偿（Lag Compensation / Server Rewind）。「我明明躲进墙后，还是被打死」——因为开枪那一刻，服务器判定用的是「开枪者的视角时间」。服务器记录所有实体最近一小段的位置历史；收到射击请求时，把世界「倒回」到开枪者发出子弹的那个时刻，用那时的位置判定是否命中。这样打中的是「开枪者看到的位置」，而不是「服务器现在的位置」。快节奏射击游戏标配。\n\n不同品类的主攻方向：\n· FPS —— 客户端预测 + 服务器回滚 + 插值 + 射击回滚，四件套齐全。\n· 格斗 —— 用 Rollback Netcode（回滚网代码），双方都预测，冲突时整体回滚重放，操作零延迟。\n· RTS / 策略 —— 常用锁步（Lockstep）确定性模拟：所有机器跑完全一样的模拟，只同步指令，天然同步，但一人卡全队卡。\n\n一句话总结：预测让自己不卡、回滚让错位自愈、插值让别人平滑、射击回滚让命中公平——四招合起来，高延迟下也能打出好手感。' },
    { type: 'component', title: '延迟补偿四件套', items: [
      { name: '客户端预测', desc: '本地先算移动，画面立即响应，服务器随后确认' },
      { name: '服务器回滚', desc: '存输入历史，错位时回滚重放，平滑自愈' },
      { name: '快照插值', desc: '别人的位置走「过去时」缓冲，画面不抽搐' },
      { name: '射击回滚', desc: '按开枪时刻的位置判定命中，消除「躲了还被杀」' },
      { name: 'RTT / Ping', desc: '往返延迟，一切补偿手法的对手盘' },
    ] },
    { type: 'quiz', question: '射击游戏里，敌人明明躲进了墙后，你开枪却显示命中了他，这通常是怎么回事？', options: ['敌人那边网络卡了，是他自己的问题', '服务器按「开枪者视角的时间」回退位置判定命中，你命中的是 100ms 前的他，这叫延迟补偿', '你的显示器刷新太快了'], answer: 1, tip: '为了公平，服务器对射击做「回滚判定」：把世界倒回到开枪那一帧，用那时的位置算命中。所以「躲了还被杀」不是外挂，是网络时间的正常现象。' },
  ],
  'net-6': [
    { type: 'text', title: '大厅与匹配', body: '把玩家送进同一局游戏，中间隔着「大厅（Lobby）」和「匹配（Matchmaking）」两层。这一节讲透它们，并捎上主机迁移。\n\n一、大厅（Lobby）。大厅是一间「等客人的房间」：房主开好房，等别人进来，人齐了开局。一个房间要管这些状态：\n· 房间信息 —— 房间名、房间号、密码（私房）、当前人数、满员上限。\n· 玩家信息 —— 昵称、等级、就绪状态（Ready），房主可以踢人。\n· 生命周期 —— 创建 → 等待 → 满员/全员就绪 → 开局 → 结束回收。\n\n开房/加房的流程，代码上大概是这样：\n· 房主点「创建房间」→ 向后端/大厅服务注册一个房间，拿到房间码 → 调 StartHost()。\n· 别人输房间码或从列表选 → 向服务请求加入 → 拿到地址 → 调 StartClient()。\n\n二、房间列表。经典的做法是服务器维护一个「房间列表」，客户端刷新拉取。列表里显示房间名、人数、模式、Ping，玩家挑一个进。大厂的做法是「匹配队列」——玩家点「开始匹配」，进入等待队列，系统后台按规则撮合，凑齐就自动拉进房间，玩家全程不用看列表。\n\n三、匹配规则（Matchmaking Rules）。撮合不是乱点鸳鸯谱，常见的几把尺子：\n· 段位/评分（MMR/ELO）—— 相近段位撮合，菜鸡互啄、高手过招。\n· 延迟（Ping / Region）—— 优先同区域、低延迟的玩家，不然跨洋对局没法玩。\n· 组队规模 —— 5 人队对 5 人队，不能 5 人队撞 1 人队。\n· 模式偏好 —— 想玩「排位」的别和「娱乐」的混一桌。\n· 等待时长兜底 —— 匹配太久会放宽条件（「扩大搜索范围」），防止玩家等到骂娘。\n\n四、NAT 与中继（Relay）。直接连房主，很多玩家在路由器后面（NAT 内网），UDP 打洞不一定成。Unity Relay 就是官方提供的「中继服务器」：大家的包都先送到中继，中继再转给房主，天然绕过 NAT。代价是多一跳延迟，小项目完全够用。\n\n五、主机迁移（Host Migration）。主机模式（Host）下房主既是玩家又是服务器——房主一掉线，整个房间的「世界真相」跟着没了。处理办法：\n· 被动方案 —— 房主掉线，全员回到大厅，房间解散，这一局作废。派对小游戏常用，简单。\n· 主动方案（主机迁移）—— 掉线瞬间，系统从剩余玩家中挑一个（按网络质量、房龄）把服务器「移交」给它：转移所有权、同步世界状态，其他玩家几乎无感继续玩。Unity Netcode 提供 NetworkManager 的迁移支持，或自己实现（把世界状态序列化传给新主机）。\n\n做大厅系统的落地方案：小项目用 Unity 官方 Relay + Lobby（免费额度内），中型用 Photon、Mirror，商业大作自建匹配后端。记住一条主线：大厅管「等人」，匹配管「找人」，主机迁移管「房主跑了怎么办」。\n\n一句话总结：大厅是「等人凑齐」的房间系统，匹配是按段位/延迟撮合的规则引擎，主机迁移是房主掉线后把服务器移交给他人的保命手段。' },
    { type: 'component', title: '大厅要素', items: [
      { name: '房间状态', desc: '创建→等待→满员→开局，一整套生命周期' },
      { name: '匹配规则', desc: '段位 MMR、延迟 Region、组队规模、模式偏好' },
      { name: 'Relay 中继', desc: 'Unity 官方绕 NAT 的中转服务，局域网之外也能连' },
      { name: '主机迁移', desc: '房主掉线时把服务器权移交给别的玩家' },
      { name: '就绪状态 Ready', desc: '全员就绪才开局，防挂机占房' },
    ] },
    { type: 'quiz', question: '主机模式的对局中，房主（同时也是服务器）掉线了，下面哪个描述正确？', options: ['服务器随房主消失，对局受影响——可用主机迁移把服务器权移交给其他玩家来保住对局', '对局自动继续，其他玩家丝毫感觉不到异常', '系统会立刻从云端拉起一台新服务器顶上'], answer: 0, tip: '主机模式里房主既是玩家又是服务器，他一掉，服务器就没了。主动解法是主机迁移（移交所有权），被动解法是解散回大厅；不存在「自动继续」或「云端顶上」。' },
  ],
  'net-7': [
    { type: 'text', title: '网络请求：调后端 API', body: '游戏要联网，最朴素也最常用的场景是「调后端 API」——排行榜、登录、远程配置开关，全靠它。这一节讲 Unity 里发 HTTP 请求的标准姿势。\n\n一、UnityWebRequest：发请求的官方组件\n\nUnityWebRequest 是 Unity 封装好的 HTTP 请求工具，GET 一句话：\n\nusing UnityEngine.Networking;\n\nIEnumerator GetScore()\n{\n    using var request = UnityWebRequest.Get(\'https://api.example.com/scores\');\n    yield return request.SendWebRequest();       // 等请求完成\n\n    if (request.result != UnityWebRequest.Result.Success)   // 先检查结果\n    {\n        Debug.LogError(\'请求失败：\' + request.error);\n        yield break;\n    }\n    Debug.Log(request.downloadHandler.text);     // 拿服务器返回的文本\n}\n\n三个关键点：\n· UnityWebRequest.Get(url) 构造 GET 请求\n· SendWebRequest() 真正发出，配合协程 yield 等它完成\n· result 不是 Success 就失败 —— 永远先检查再读数据\n\n二、POST：往服务器传数据\n\n传 JSON 数据给服务器（比如上传分数）：\n\nstring json = JsonUtility.ToJson(playerScore);   // 把对象转成 JSON 字符串\nusing var request = new UnityWebRequest(url, \'POST\');\nrequest.uploadHandler = new UploadHandlerRaw(System.Text.Encoding.UTF8.GetBytes(json));\nrequest.downloadHandler = new DownloadHandlerBuffer();\nrequest.SetRequestHeader(\'Content-Type\', \'application/json\');\nyield return request.SendWebRequest();\n\nPOST 的三件套：UploadHandlerRaw 装数据、DownloadHandlerBuffer 收响应、SetRequestHeader 告诉服务器发的是 JSON。\n\n三、JsonUtility：Unity 自带的 JSON 解析\n\n序列化（对象 → JSON）用 ToJson，反序列化（JSON → 对象）用 FromJson：\n\n[System.Serializable]                     // 必须标 Serializable\npublic class PlayerScore\n{\n    public string name;\n    public int score;\n}\n\nPlayerScore data = JsonUtility.FromJson<PlayerScore>(json);  // 解析 JSON\n\n两个大坑，必须记住：\n· JsonUtility 不支持 Dictionary —— 想传键值对，自己转成 List 或数组\n· 不支持顶层数组 —— 直接解析 [ {...}, {...} ] 会失败，得包一层：\n\n[System.Serializable]\npublic class ScoreList\n{\n    public PlayerScore[] scores;   // 包一层再放数组\n}\n\nvar list = JsonUtility.FromJson<ScoreList>(json);   // 就稳了\n\n四、发请求的两种姿势\n\n· 协程 + 回调：把请求包成协程，完成时调回调函数传数据（上面示例就是）\n· async/await：包一层 Task，await 等待结果，异常用 try/catch 抓（现代写法，见 prog-10）\n\n五、完整例子：排行榜\n\n拉取排行榜：GET /scores → 解析成 ScoreList → 循环塞进 UI 文本：\n\nIEnumerator LoadRanking()\n{\n    using var request = UnityWebRequest.Get(serverUrl + \'/scores\');\n    yield return request.SendWebRequest();\n    if (request.result != UnityWebRequest.Result.Success) yield break;\n\n    ScoreList list = JsonUtility.FromJson<ScoreList>(request.downloadHandler.text);\n    for (int i = 0; i < list.scores.Length; i++)\n        rankText.text += (i + 1) + \'. \' + list.scores[i].name + \' : \' + list.scores[i].score;\n}\n\n上传分数：构造 PlayerScore → ToJson → POST → 服务器入库，流程对称。\n\n六、常见坑\n· HTTPS 证书：自签名 / 测试证书会校验失败，正式项目用正规 HTTPS 证书，别用 http 明文\n· URL 别写错：多一个空格、少一个 / 都白搭 —— 先在浏览器里访问一下确认能通\n· 不检查 result：请求失败还去读 downloadHandler.text，直接炸 —— 永远先检查\n· 超时：大请求 / 网络差要设超时（request.timeout = 10），不然一直挂着\n· 本地跑没用：本地测试需要真实服务器（或本地起个假接口），Unity 编辑器里直接跑是连不上的\n\n一句话总结：UnityWebRequest 发请求、先查 result 再读数据、POST 用 UploadHandlerRaw 传 JSON、JsonUtility 记得包一层防顶层数组坑、排行榜就是「GET 拉列表 → 解析 → 刷 UI」——五步走，联网功能就通了。' },
    { type: 'component', title: '联网五件套', items: [
      { name: 'UnityWebRequest', desc: '官方 HTTP 请求组件，Get/Post 都靠它' },
      { name: 'SendWebRequest', desc: '真正发出请求，配合协程等待完成' },
      { name: 'JsonUtility', desc: '自带 JSON 解析，ToJson / FromJson' },
      { name: 'result 检查', desc: '先判断 Success 再读数据，防崩溃' },
      { name: 'POST 传 JSON', desc: 'UploadHandlerRaw + Content-Type 头' },
    ] },
    { type: 'quiz', question: '服务器返回了一串 JSON 数组 [ {..}, {..} ]，直接用 JsonUtility.FromJson<数组类型> 解析，结果会是？', options: ['一切正常，数组直接解析成 List', '解析失败或得不到数据 —— JsonUtility 不支持顶层数组，要包一层带数组字段的类再解析', 'Unity 会自动把数组转成 Dictionary'], answer: 1, tip: 'JsonUtility 的著名限制就是不支持解析顶层数组。官方推荐包一层：新建一个带数组字段的 [Serializable] 类（比如 ScoreList），FromJson 到它身上再取数组。' },
  ],
}
