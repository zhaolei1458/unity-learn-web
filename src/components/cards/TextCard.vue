<script setup>
defineProps({ card: Object })
</script>
<template>
  <div>
    <h3>{{ card.title }}</h3>
    <p class="body" style="white-space:pre-line">{{ card.body }}</p>
  </div>
</template>
<style scoped>
.body { line-height: 1.8; font-size: 16px; color: #333; }
</style>
