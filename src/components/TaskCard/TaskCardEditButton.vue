<template>
  <VBtn
    @click="emits('toggleEditing')"
    variant="tonal"
    height="20"
    width="20"
    min-width="20"
    class="pa-0"
    :class="[isHovering ? 'opacity-100' : 'opacity-0']"
  >
    <VIcon icon="mdi-pencil-outline" size="20" />
  </VBtn>
</template>

<script setup lang="ts">
defineProps<{
  isHovering: boolean | null
}>()

const emits = defineEmits(['toggleEditing'])
</script>
