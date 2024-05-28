<template>
  <VSheet class="pa-2 bg-white rounded-b-lg">
    <VCardText
      @blur="(e) => updateTaskAndDisableEditing(task.id, { description: e.target.innerText })"
      class="pa-0"
      :contenteditable="isEditing"
      >{{ taskDescription }}
    </VCardText>
  </VSheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'
import type { ITask, ITaskUpdates } from '@/types'

const emits = defineEmits(['disableEditing'])
const props = defineProps<{
  isEditing: boolean
  task: ITask
}>()

const tasksStore = useTasksStore()
const taskDescription = ref<string>(props.task.description)

function updateTaskAndDisableEditing(taskId: number, updatedTask: ITaskUpdates) {
  tasksStore.updateTask(taskId, updatedTask)
  emits('disableEditing')
}
</script>

<style scoped>
.v-card-text {
  min-height: 1.5rem;
}
</style>
