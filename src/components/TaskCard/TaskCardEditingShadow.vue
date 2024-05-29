<template>
  <Teleport to="body">
    <!-- <Transition name="fade"> -->
    <VSheet
      v-if="isEditing"
      @click="emits('disableEditing')"
      class="position-absolute top-0 left-0 w-screen h-screen bg-black opacity-70 cursor-pointer"
    >
    </VSheet>
    <!-- </Transition> -->
  </Teleport>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
