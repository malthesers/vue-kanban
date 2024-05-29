<template>
  <Teleport to="body">
    <VSheet
      v-if="showShadow"
      @click="hideShadow"
      class="position-absolute top-0 left-0 w-screen h-screen bg-black opacity-70 cursor-pointer"
    >
    </VSheet>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  showShadow: boolean
  hideShadow: () => void
}>()
</script>

<style scoped>
.v-sheet {
  z-index: 2000;
}
</style>
