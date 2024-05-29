<template>
  <EditingShadow :showShadow="isEditing" :hideShadow="() => emits('disableEditing')" />
</template>

<script setup lang="ts">
const emits = defineEmits(['disableEditing'])
defineProps<{
  isEditing: boolean
}>()
</script>

<style scoped>
.v-sheet {
  z-index: 2000;
}
</style>
