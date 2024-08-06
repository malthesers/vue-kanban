<template>
  <VBtn
    @click="
      tasksStore.addStatusContainer({
        order: tasksStore.statusContainers.length,
        title: 'Title',
        color: '#381010',
      })
    "
    variant="tonal"
    prepend-icon="mdi-plus"
    class="pa-0 rounded-lg bg-accent px-4 py-2 font-weight-bold text-none"
    >New status list</VBtn
  >
</template>

<script setup lang="ts">
6
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore()
</script>

<style scoped>
.v-col {
  min-width: 15rem;
  max-width: 15rem;
}
</style>
