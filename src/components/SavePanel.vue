<script setup>
import { ref } from 'vue'
import { getSlots, getActiveSlot, createSlot, deleteSlot, renameSlot, switchSlot, resetSlot } from '../store/progress'

const emit = defineEmits(['close', 'changed'])
const slots = ref(getSlots())
const activeId = ref(getActiveSlot()?.id || '')
const renaming = ref(null)
const newName = ref('')

function refresh() {
  slots.value = getSlots()
  activeId.value = getActiveSlot()?.id || ''
}
function pick(id) {
  if (id === activeId.value) return
  switchSlot(id)
  refresh()
  emit('changed')
}
function add() {
  createSlot()
  refresh()
  emit('changed')
}
function startRename(id) {
  renaming.value = id
  newName.value = slots.value.find(s => s.id === id)?.name || ''
}
function doRename(id) {
  renameSlot(id, newName.value)
  renaming.value = null
  refresh()
  emit('changed')
}
function wipe(id) {
  if (!confirm('确定清空「' + (slots.value.find(s => s.id === id)?.name || '') + '」的全部进度？')) return
  switchSlot(id)
  resetSlot()
  refresh()
  emit('changed')
}
function remove(id) {
  if (!confirm('确定删除这个存档？删除后进度不可恢复。')) return
  deleteSlot(id)
  refresh()
  emit('changed')
}
</script>

<template>
  <div class="mask" @click.self="emit('close')">
    <div class="panel">
      <div class="head">
        <h3>💾 存档管理</h3>
        <button class="close" @click="emit('close')">✕</button>
      </div>
      <p class="sub">多档位独立保存学习进度，可切换、改名、清空、删除。</p>
      <div class="slots">
        <div v-for="s in slots" :key="s.id" class="slot" :class="{ active: s.id === activeId }">
          <div class="slot-main" @click="pick(s.id)">
            <span class="flag">{{ s.id === activeId ? '▶ 当前' : '' }}</span>
            <input
              v-if="renaming === s.id"
              v-model="newName"
              class="rename"
              maxlength="20"
              @keyup.enter="doRename(s.id)"
              @blur="doRename(s.id)"
            />
            <template v-else>
              <span class="name">{{ s.name }}</span>
              <span class="meta">{{ s.learned }} 节已学</span>
            </template>
          </div>
          <div class="slot-ops" @click.stop>
            <button v-if="renaming === s.id" @click="doRename(s.id)">存</button>
            <template v-else>
              <button @click="startRename(s.id)">改名</button>
              <button @click="wipe(s.id)">清空</button>
              <button class="danger" @click="remove(s.id)">删除</button>
            </template>
          </div>
        </div>
      </div>
      <button class="add" @click="add">＋ 新建存档</button>
    </div>
  </div>
</template>

<style scoped>
.mask {
  position: fixed;
  inset: 0;
  background: rgba(20, 22, 34, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 16px;
}
.panel {
  width: 100%;
  max-width: 460px;
  background: #fff;
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.22);
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head h3 { margin: 0; font-size: 18px; }
.close { border: none; background: none; font-size: 16px; color: #888; cursor: pointer; padding: 4px; }
.sub { color: #888; font-size: 13px; margin: 8px 0 16px; }
.slots { display: flex; flex-direction: column; gap: 10px; max-height: 300px; overflow: auto; }
.slot {
  border: 1px solid #e2e6ec;
  border-radius: 10px;
  padding: 12px 14px;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.slot:hover { border-color: #4a9eff; }
.slot.active { border-color: #4a9eff; background: #eef5ff; }
.slot-main { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0; }
.flag { color: #4a9eff; font-size: 12px; font-weight: 700; flex-shrink: 0; }
.name { font-weight: 600; }
.meta { color: #888; font-size: 12px; }
.rename { border: 1px solid #4a9eff; border-radius: 6px; padding: 4px 8px; font-size: 14px; width: 140px; }
.slot-ops { display: flex; gap: 6px; flex-shrink: 0; }
.slot-ops button, .add {
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid #4a9eff;
  background: #fff;
  color: #4a9eff;
  cursor: pointer;
  font-size: 12px;
}
.slot-ops button:hover { background: #eef5ff; }
.slot-ops .danger { border-color: #e74c3c; color: #e74c3c; }
.slot-ops .danger:hover { background: #fdecea; }
.add {
  width: 100%;
  margin-top: 14px;
  padding: 10px;
  font-size: 14px;
  background: #4a9eff;
  color: #fff;
  border-color: #4a9eff;
}
.add:hover { background: #3d8ce0; }
</style>
