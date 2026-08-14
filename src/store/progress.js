// 学习进度存储：多档位 + 轻量加密
// 数据结构（v2）：
//   { v: 2, active: 'slot-1', slots: { 'slot-1': { name: '我的存档', data: { lessonId: [cardIndex] } } } }
// 旧版（v1 明文 { lessonId: [cardIndex] }）读到会自动迁移到 slot-1。
//
// 关于「加密」：这里做的是轻量混淆（XOR + Base64 + 版本前缀），
// 防的是手滑误改 / 浏览器里直接编辑 localStorage，不是强加密。
// 前端代码对玩家完全可见，真正的防篡改要靠服务器校验——纯前端项目没这层。

const KEY = 'unity-learn-progress'
const SECRET = 'learnkit#2026'
const PREFIX = 'ULK2:'
const DEFAULT_NAME = '我的存档'

function encrypt(obj) {
  const bytes = new TextEncoder().encode(JSON.stringify(obj))
  const key = new TextEncoder().encode(SECRET)
  for (let i = 0; i < bytes.length; i++) bytes[i] ^= key[i % key.length]
  let bin = ''
  bytes.forEach(b => (bin += String.fromCharCode(b)))
  return PREFIX + btoa(bin)
}

function decrypt(raw) {
  if (typeof raw !== 'string' || !raw.startsWith(PREFIX)) return null
  try {
    const bin = atob(raw.slice(PREFIX.length))
    const bytes = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
    const key = new TextEncoder().encode(SECRET)
    for (let i = 0; i < bytes.length; i++) bytes[i] ^= key[i % key.length]
    const json = new TextDecoder().decode(bytes)
    return JSON.parse(json)
  } catch {
    return null
  }
}

function createBase() {
  return { v: 2, active: 'slot-1', slots: { 'slot-1': { name: DEFAULT_NAME, data: {} } } }
}

// 旧版明文 { lessonId:[idx] } → 包进 slot-1
function migrateOld(old) {
  return { v: 2, active: 'slot-1', slots: { 'slot-1': { name: DEFAULT_NAME, data: old } } }
}

function getState() {
  const raw = localStorage.getItem(KEY)
  if (raw == null) return null
  const dec = decrypt(raw)
  if (dec) return dec
  try {
    const old = JSON.parse(raw)
    if (old && !old.slots) return migrateOld(old)
    return old
  } catch {
    return null
  }
}

function setState(s) {
  localStorage.setItem(KEY, encrypt(s))
}

// —— 槽位管理 ——

export function getSlots() {
  const s = getState()
  if (!s || !s.slots) return []
  return Object.keys(s.slots).map(id => ({
    id,
    name: s.slots[id].name,
    learned: Object.keys(s.slots[id].data || {}).length,
  }))
}

export function getActiveSlot() {
  const s = getState()
  if (!s || !s.slots) return null
  return { id: s.active, name: s.slots[s.active]?.name || '' }
}

export function createSlot(name = '') {
  const s = getState() || createBase()
  const n = Object.keys(s.slots).length + 1
  const id = 'slot-' + n
  s.slots[id] = { name: name || `存档 ${n}`, data: {} }
  s.active = id
  setState(s)
  return id
}

export function deleteSlot(id) {
  const s = getState()
  if (!s || !s.slots || !s.slots[id]) return
  delete s.slots[id]
  if (s.active === id) {
    const keys = Object.keys(s.slots)
    s.active = keys.length ? keys[0] : 'slot-1'
  }
  if (!Object.keys(s.slots).length) {
    s.slots['slot-1'] = { name: DEFAULT_NAME, data: {} }
    s.active = 'slot-1'
  }
  setState(s)
}

export function renameSlot(id, name) {
  const s = getState()
  if (!s || !s.slots || !s.slots[id]) return
  s.slots[id].name = (name && name.trim()) || s.slots[id].name
  setState(s)
}

export function switchSlot(id) {
  const s = getState()
  if (!s || !s.slots || !s.slots[id]) return
  s.active = id
  setState(s)
}

export function resetSlot() {
  const s = getState() || createBase()
  s.slots[s.active].data = {}
  setState(s)
}

// —— 进度读写（作用于当前激活槽）——

export function getProgress() {
  const s = getState()
  if (!s || !s.slots) return {}
  return s.slots[s.active]?.data || {}
}

export function markCardDone(lessonId, cardIndex) {
  const s = getState() || createBase()
  const data = s.slots[s.active].data
  if (!data[lessonId]) data[lessonId] = []
  if (!data[lessonId].includes(cardIndex)) data[lessonId].push(cardIndex)
  setState(s)
}

export function isCardDone(lessonId, cardIndex) {
  const p = getProgress()
  return !!(p[lessonId] && p[lessonId].includes(cardIndex))
}

// 清掉当前槽位的全部进度
export function resetProgress() {
  resetSlot()
}

// 单独重置某一小节的进度（不影响其他课）
export function resetLesson(lessonId) {
  const s = getState()
  if (!s || !s.slots) return
  delete s.slots[s.active].data[lessonId]
  setState(s)
}
