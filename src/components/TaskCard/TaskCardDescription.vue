<template>
  <VSheet class="pa-2 bg-white rounded-b-lg">
    <VCardText
      @blur="(e) => tasksStore.updateTask(task.id, { description: e.target.innerText })"
      class="pa-0"
      :contenteditable="isEditing"
    >
      {{ task.description }}
    </VCardText>
  </VSheet>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasksStore'
import type { ITask } from '@/types'

const tasksStore = useTasksStore()

defineProps<{
  isEditing: boolean
  task: ITask
}>()
</script>

<style scoped>
.v-card-text {
  min-height: 1.5rem;
}
</style>
