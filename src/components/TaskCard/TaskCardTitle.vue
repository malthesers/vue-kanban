<template>
  <VSheet :style="{ backgroundColor: bgColor }" class="pa-2 d-flex ga-1">
    <VCardTitle
      @blur="(e) => tasksStore.updateTask(task.id, { title: e.target.innerText })"
      class="flex-grow-1 pa-0 text-body-2 font-weight-bold text-wrap"
      :contenteditable="isEditing"
      >{{ task.title }}</VCardTitle
    >
    <TaskCardEditButton :toggleEditability="toggleIsEditing" :isHovering="isHovering" />
    <TaskCardDeleteButton :taskId="task.id" :isHovering="isHovering" />
  </VSheet>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasksStore'
import type { ITask } from '@/types'

defineProps<{
  toggleIsEditing: () => void
  isEditing: boolean
  isHovering: boolean | null
  task: ITask
  bgColor: string
}>()

const tasksStore = useTasksStore()
</script>

<style scoped>
.v-sheet {
  align-items: center;
}

.v-card-title {
  min-height: 1.5rem;
}
</style>
