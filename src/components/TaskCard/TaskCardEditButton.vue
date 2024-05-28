<template>
  <VBtn
    @click="toggleEditability"
    variant="plain"
    height="20"
    width="20"
    min-width="20"
    class="ml-auto pa-0"
    :class="[isHovering ? 'opacity-100' : 'opacity-0']"
  >
    <VIcon icon="mdi-pencil-outline" size="20" />
  </VBtn>
</template>

<script setup lang="ts">
defineProps<{
  toggleEditability: () => void
  isHovering: boolean | null
}>()
</script>
