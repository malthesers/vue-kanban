<template>
  <VCol class="max-h-100 h-fit pa-0 rounded-lg d-flex flex-column overflow-hidden elevation-3">
    <VBtn
      variant="tonal"
      prepend-icon="mdi-plus"
      class="bg-accent px-4 py-2 font-weight-bold text-none"
      >Add new status list</VBtn
    >
  </VCol>
</template>

<script setup lang="ts">
// import { useTasksStore } from '@/stores/tasksStore'

// const tasksStore = useTasksStore()
</script>

<style scoped>
.v-col {
  min-width: 15rem;
  max-width: 15rem;
}
</style>
