<template>
  <VBtn
    @click="
      tasksStore.addStatusContainer({
        id: Date.now(),
        title: 'Title',
        color: '#381010',
        tasks: []
      })
    "
    variant="tonal"
    prepend-icon="mdi-plus"
    class="pa-0 rounded-lg bg-accent px-4 py-2 font-weight-bold text-none"
    >New status list</VBtn
  >
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore()
</script>

<style scoped>
.v-col {
  min-width: 15rem;
  max-width: 15rem;
}
</style>
