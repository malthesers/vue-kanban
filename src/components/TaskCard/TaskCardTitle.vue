<template>
  <VSheet :style="{ backgroundColor: bgColor }" class="pa-2 d-flex">
    <VCardTitle
      @blur="(e) => tasksStore.updateTask(task.id, { title: e.target.innerText })"
      class="flex-grow-1 mr-2 pa-0 text-body-2 font-weight-bold text-wrap"
      :contenteditable="isEditing"
      >{{ task.title }}</VCardTitle
    >
    <TaskCardEditButton :toggleEditability="toggleIsEditing" :isHovering="isHovering" />
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
