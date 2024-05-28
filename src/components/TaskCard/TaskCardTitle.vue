<template>
  <VSheet :style="{ backgroundColor: bgColor }" class="pa-2 d-flex ga-1">
    <VCardText
      @blur="(e) => tasksStore.updateTask(task.id, { title: e.target.innerText })"
      class="pa-0 text-body-2 font-weight-bold"
      :contenteditable="isEditing"
      >{{ taskTitle }}
    </VCardText>
    <TaskCardEditButton :toggleEditability="toggleIsEditing" :isHovering="isHovering" />
    <TaskCardDeleteButton :taskId="task.id" :isHovering="isHovering" />
  </VSheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'
import type { ITask } from '@/types'

const props = defineProps<{
  toggleIsEditing: () => void
  isEditing: boolean
  isHovering: boolean | null
  task: ITask
  bgColor: string
}>()

const tasksStore = useTasksStore()
const taskTitle = ref<string>(props.task.title)
</script>

<style scoped>
.v-card-title {
  min-height: 1.5rem;
}
</style>
