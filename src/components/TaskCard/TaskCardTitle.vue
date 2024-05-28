<template>
  <VSheet :style="{ backgroundColor: bgColor }" class="pa-2 d-flex ga-1">
    <VCardText
      @blur="(e) => updateTaskAndDisableEditing(task.id, { title: e.target.innerText })"
      class="pa-0 text-body-2 font-weight-bold"
      :contenteditable="isEditing"
      >{{ taskTitle }}
    </VCardText>
    <TaskCardEditButton @toggleEditing="emits('toggleEditing')" :isHovering="isHovering" />
    <TaskCardDeleteButton :taskId="task.id" :isHovering="isHovering" />
  </VSheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'
import type { ITask, ITaskUpdates } from '@/types'

const emits = defineEmits(['toggleEditing', 'disableEditing'])
const props = defineProps<{
  isEditing: boolean
  isHovering: boolean | null
  task: ITask
  bgColor: string
}>()

const tasksStore = useTasksStore()
const taskTitle = ref<string>(props.task.title)

function updateTaskAndDisableEditing(taskId: number, updatedTask: ITaskUpdates) {
  tasksStore.updateTask(taskId, updatedTask)
  emits('disableEditing')
}
</script>

<style scoped>
.v-card-title {
  min-height: 1.5rem;
}
</style>
