export const lessons = [
  { id: 'ecs-4', title: 'System 与分组' },
  { id: 'ecs-5', title: 'Jobs 并行实战' },
  { id: 'ecs-6', title: 'ECS 性能实测' },
]

export const cards = {
  'ecs-4': [
    { type: 'text', title: 'System 与分组', body: '前面三节把 ECS 的骨架搭起来了：实体是编号、组件是数据、系统是逻辑。这一节钻进 System 的内部——系统是怎么被调度、怎么排序、怎么批量处理数据的。\n\n一、System 是什么。System 是一段「每帧跑一遍的逻辑」，只处理「匹配特定组件组合」的实体。比如 MovementSystem 更新所有带 Position 和 Velocity 实体的位置（Entities 包写法）：\n\nusing Unity.Entities;\n\npublic partial struct MoveSystem : ISystem\n{\n    public void OnUpdate(ref SystemState state)\n    {\n        float dt = SystemAPI.Time.DeltaTime;\n        foreach (var (pos, vel) in\n                 SystemAPI.Query<RefRW<Position>, RefRO<Velocity>>())\n        {\n            pos.ValueRW.Value += vel.ValueRO.Value * dt;\n        }\n    }\n}\n\nSystemAPI.Query 是「声明我要哪组组件」的地方——匹配到的实体全都会进这个循环。RefRW 表示读写，RefRO 表示只读（只读的才能并行）。\n\n二、SystemGroup（系统组）。世界里的系统一多，顺序就成了大问题——碰撞系统必须等移动系统算完。SystemGroup 就是把一批系统「装进一个盒子」排顺序。Unity 默认三个大组：\n· InitializationSystemGroup —— 初始化：读输入、设置、外部事件。\n· SimulationSystemGroup —— 模拟：游戏逻辑的默认家，移动、战斗、AI 都在这。\n· PresentationSystemGroup —— 呈现：和渲染同步的收尾活。\n\n自定义顺序用特性声明，编译器自动拓扑排序：\n\n[UpdateInGroup(typeof(SimulationSystemGroup))]\n[UpdateBefore(typeof(CollisionSystem))]\npublic partial struct MoveSystem : ISystem { }\n\n声明 [UpdateBefore]/[UpdateAfter] 就能保证前后关系，哪怕系统散在几十个文件里也不会乱。\n\n三、系统怎么调度。每个系统每帧会被 World 调度一次，多数能并行跑。但有两条红线：\n· 结构性变更（Structural Change）—— 创建/销毁实体、加/减组件。这类操作会「动内存布局」，循环里不能直接做，要攒起来用 EntityCommandBuffer（ECB）：\n\nvar ecb = SystemAPI.GetSingleton<BeginSimulationEntityCommandBufferSystem.Singleton>()\n                    .CreateCommandBuffer(state);\nforeach (var (hp, _) in SystemAPI.Query<RefRW<Health>, RefRO<Dead>>())\n    if (hp.ValueRO.Value <= 0f)\n        ecb.DestroyEntity(SystemAPI.GetEntity(hp));\n\n· 安全问题（Safety System）—— 一个线程在写数据时，别的线程不能同时读。Job 依赖链（Dependency）就是干这个的。\n\n四、三种查询方式：\n· SystemAPI.Query —— 声明式 ForEach，最常用。\n· IJobEntity —— 把整段逻辑变成 Job，配合 Burst 榨性能。\n· IJobChunk —— 按「块（Chunk）」批量处理，最底层的性能玩法。\n\n一句话总结：System 每帧处理「匹配组件组合」的实体；SystemGroup 配 [UpdateBefore/After] 定顺序；结构性变更走 EntityCommandBuffer——记牢这三样，调度就不迷路。' },
    { type: 'component', title: 'System 分组三件套', items: [
      { name: 'SystemAPI.Query', desc: '声明要哪组组件，匹配实体批量进循环' },
      { name: 'SystemGroup', desc: 'Initialization / Simulation / Presentation 三大组' },
      { name: 'UpdateBefore/After', desc: '声明系统前后顺序，自动拓扑排序' },
      { name: 'EntityCommandBuffer', desc: '结构性变更（建/删实体）的唯一正确通道' },
      { name: 'RefRW / RefRO', desc: '读写 vs 只读，决定能否并行' },
    ] },
    { type: 'quiz', question: '要保证「移动系统」一定在「碰撞系统」之前执行，正确做法是什么？', options: ['在代码文件里把移动系统写在碰撞系统前面，靠位置决定', '给移动系统加 [UpdateBefore(typeof(CollisionSystem))] 特性，让 Unity 按声明调度', '让碰撞系统每帧循环等待移动系统'], answer: 1, tip: 'ECS 里系统顺序靠特性声明：[UpdateBefore]/[UpdateAfter] 声明依赖，Unity 自动拓扑排序。文件位置、代码先后都不算数。' },
  ],
  'ecs-5': [
    { type: 'text', title: 'Jobs 并行实战', body: '这一节把 ecs-3 的 Job System 从「认识」推进到「会用」，拿真实的 IJobParallelFor 跑一遍，讲清数据安全和 Burst 的正确姿势。\n\n一、IJobParallelFor 是主力。当你要对「一大堆同类数据」做同样处理，它就是并行版 for 循环：\n\nstruct MoveParticleJob : IJobParallelFor\n{\n    [ReadOnly] public NativeArray<Vector3> velocities;\n    public NativeArray<Vector3> positions;\n    public float dt;\n\n    public void Execute(int i)\n    {\n        positions[i] += velocities[i] * dt;\n    }\n}\n\n调度：\n\nNativeArray<Vector3> positions = new NativeArray<Vector3>(count, Allocator.Temp);\nNativeArray<Vector3> velocities = new NativeArray<Vector3>(count, Allocator.Temp);\nMoveParticleJob job = new MoveParticleJob { velocities = velocities, positions = positions, dt = 0.01f };\nJobHandle handle = job.Schedule(count, 64);  // batchSize：每批多少数据\nhandle.Complete();                            // 等它算完\npositions.Dispose();\nvelocities.Dispose();\n\nSchedule(count, 64) 会把数据切成 N 批，每个线程认领一批并行处理。batchSize 调小粒度细但调度开销大；调大则相反，64 是不错的起点。\n\n二、数据依赖（Dependency）。把上一个 Job 的 handle 传给下一个，下一个就等它算完再开始：\n\nJobHandle moveHandle = moveJob.Schedule(count, 64);\nJobHandle collideHandle = collideJob.Schedule(count, 64, moveHandle);  // 等 move 算完\ncollideHandle.Complete();\n\n这就是 Job 依赖链，并行安全的地基。\n\n三、安全红线（踩了必炸）。\n· 并发写同一位置 —— 两个线程同时写 positions[5]，结果未定义。\n· 别碰主线程的东西 —— GameObject、GetComponent 一律不行，数据得先进 NativeArray 这类原生容器。\n· 忘调 Complete() 就读结果 —— 会直接报安全错误。\n· NativeArray 用完要 Dispose —— 占的是非托管内存，不释放就是泄漏。\n\n四、[ReadOnly] 是性能开关。标了 [ReadOnly] 的容器，多个 Job 能同时读、放心并行；没标的默认可写、会排队。能只读的都标上，并行度立刻上来。\n\n五、Burst 编译。给 Job 加 [BurstCompile]，Unity 把它编成高度优化的机器码（自动 SIMD 向量化），同一段代码常常快一个数量级。注意：Burst 不能碰托管分配、不能用 List/Dictionary，要用 Native 容器 + 纯数学写法。\n\n六、和 ECS 的搭配。Entities 里的 System 大多写成 IJobEntity / IJobChunk，JobHandle 由框架自动管理，比手动 Schedule 省心——这才是 DOTS 全餐的正确吃法。\n\n一句话总结：IJobParallelFor 就是并行版 for，Schedule(count, batch) 切块分线程，依赖链靠 JobHandle，安全靠「不写同一位置、记得 Complete 和 Dispose」，性能靠 [ReadOnly] + [BurstCompile]。' },
    { type: 'component', title: 'Job 关键 API', items: [
      { name: 'IJobParallelFor', desc: '并行 for 循环，Execute(i) 处理第 i 份数据' },
      { name: 'Schedule(count, batch)', desc: '切块调度，batch 控制并行粒度' },
      { name: 'JobHandle 依赖链', desc: '前一个 handle 传给后一个，按顺序执行' },
      { name: 'NativeArray 等原生容器', desc: 'Job 能访问的原生内存容器，Job 与主线程的桥梁' },
      { name: 'BurstCompile', desc: '把 Job 编成机器码+SIMD，速度翻倍起步' },
    ] },
    { type: 'quiz', question: '用 IJobParallelFor 并行更新 10 万颗粒子位置，结果时而正确时而错误，偶尔还崩溃，最可能的原因？', options: ['粒子数量太多，超出了 Job 的容量上限', '多个线程并发写了同一份共享数据（竞态条件）——并行任务禁止多个线程写同一个位置', 'Burst 编译器把代码编译错了'], answer: 1, tip: '并行 Job 的安全红线第一条就是「不写同一位置」。如果两个线程同时写同一下标，结果是未定义的——加锁不行，要重新设计数据划分，让每个元素只归一个线程写。' },
  ],
  'ecs-6': [
    { type: 'text', title: 'ECS 性能实测', body: '前面讲了一大堆 ECS 的优越性，这一节上硬数据、讲真话：它到底快多少、什么时候该用、什么时候别碰。\n\n一、一万实体，传统 OOP 有多慢。经典场景：1 万个敌人（MonoBehaviour），每帧要做位置更新 + 简单 AI 判断。\n· 传统写法：1 万个对象，每帧触发 1 万次 Update 方法调用；每个对象的 Transform、脚本、字段散落在内存各处，CPU 读数据时到处「搬家」（缓存不命中）；逻辑单线程串行。帧耗时轻松来到几十毫秒量级，甚至上三位数——还没算 GC。\n· ECS + Jobs + Burst：实体数据按「组件」紧凑排成连续块（Archetype Chunk），系统顺序读取、命中缓存；Job 多线程并行；Burst 编译 + SIMD。同样 1 万实体，帧耗时常常是 0.x 毫秒——快一到两个数量级（10~100 倍）并不稀奇。\n\n这个差距的来源，要分清：\n· 数据布局（缓存友好）是最大头 —— 数据紧凑连续，CPU 不用搬家。\n· 多线程并行 —— N 个核同时算。\n· Burst/SIMD —— 一条指令算多个数。\n三者叠加，才有数量级差距；单拿任何一样，差距都有限。\n\n二、什么时候该用 ECS。\n· 大量同质实体 —— 成千上万的粒子、弹幕、蜂群、羊群、士兵群。\n· 数据密集型模拟 —— 寻路、流体、群体行为、大量单位的状态更新。\n· 需要多核压榨 —— 帧预算吃紧、主线程已经顶满，想把活分到其他核。\n· 未来可预测的大规模 —— 上线要跑 5 万单位，趁早用 ECS 架构。\n\n三、什么时候别用 ECS。\n· 小项目、原型、休闲小游戏 —— 几百个物体，传统 MonoBehaviour 完全够用，ECS 的收益填不平学习成本。\n· 大量继承和多态的业务逻辑 —— 主角技能树、装备系统这类「对象关系复杂」的活，ECS 组件式写法很别扭。\n· 深度依赖传统 API —— 大量 GetComponent、SendMessage、UGUI 操作，强行塞进 ECS 是自找麻烦。\n· 团队没有 DOTS 经验 —— 上手曲线陡，工具链（调试、可视化）比传统路数粗糙。\n\n四、评估的正确姿势。别拍脑袋，先测量：\n1. 用 Profiler 找出真正的热点 —— 是不是真的卡在「大量实体的逻辑」上？还是渲染、物理、UI？\n2. 小范围试点 —— 先拿一两个系统（比如粒子、群体）用 ECS 重写，对比帧耗时。\n3. 看收益 vs 成本 —— 快了多少、代价多大（重构工作量、维护成本、团队学习）。\n4. 混合是常态 —— 一个项目里 ECS 跑数量大的，MonoBehaviour 跑交互复杂的，共存完全没问题（Entities 提供互操作）。\n\n一句话总结：ECS + Jobs + Burst 在「万级同质实体」上可以快一到两个数量级，但它是给特定场景的专用武器——大规模、数据密集、多核可压榨时上它，小项目和复杂业务逻辑别硬套，先测量、再试点、按场景选工具。' },
    { type: 'component', title: '选型判断清单', items: [
      { name: '适合：万级同质实体', desc: '粒子/弹幕/蜂群/士兵群，量越大越划算' },
      { name: '不适合：复杂继承逻辑', desc: '技能树、装备这类对象关系复杂的业务，别硬套' },
      { name: '先 Profiler 测量', desc: '先确认热点在「实体逻辑」而不是渲染/物理/UI' },
      { name: '小范围试点', desc: '先重写一两个系统对比帧耗时，再决定铺开' },
      { name: '混合共存', desc: 'ECS 管数量大的，MonoBehaviour 管交互复杂的，互操作没问题' },
    ] },
    { type: 'quiz', question: '项目里既要跑「1 万只蜜蜂的群体运动」，又有「主角的对话 UI 系统」，该怎么选技术？', options: ['全部用 ECS，统一架构最省心', '蜜蜂群用 ECS+Jobs+Burst 榨性能，对话 UI 用传统 MonoBehaviour——按场景选工具，二者可共存', '全部用传统 MonoBehaviour，ECS 只用于服务器端'], answer: 1, tip: 'ECS 是给「大量同质数据」的专用武器，蜜蜂群是它的主场；UI 和复杂交互逻辑用传统方式更顺。Unity 的 Entities 提供互操作，两者共存是生产项目的常态。' },
  ],
}
