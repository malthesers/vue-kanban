<template>
  <EditingShadow :showShadow="showColorPicker" :hideShadow="() => emits('hideColorPicker')" />
</template>

<script setup lang="ts">
const emits = defineEmits(['hideColorPicker'])
defineProps<{
  showColorPicker: boolean
}>()
</script>
