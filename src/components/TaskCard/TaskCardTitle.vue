<template>
  <VSheet :style="{ backgroundColor: bgColor, color: textColor }" class="pa-2 d-flex ga-1">
    <VCardText
      @dblclick="emits('enableEditing')"
      @blur="(e) => tasksStore.updateTask(task.id, { title: e.target.innerText })"
      class="pa-0 text-body-2 font-weight-bold"
      :style="{ outlineColor: textColor }"
      :contenteditable="isEditing"
      >{{ taskTitle }}
    </VCardText>
    <TaskCardEditButton @toggleEditing="emits('toggleEditing')" :isHovering="isHovering" />
    <TaskCardDeleteButton :taskId="task.id" :isHovering="isHovering" />
  </VSheet>
</template>

<script setup lang="ts">
import fontColorContrast from 'font-color-contrast'
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'
import type { ITask, ITaskUpdates } from '@/types'

const emits = defineEmits(['toggleEditing', 'enableEditing', 'disableEditing'])
const props = defineProps<{
  isEditing: boolean
  isHovering: boolean | null
  task: ITask
  bgColor: string
}>()

const tasksStore = useTasksStore()
const textColor = fontColorContrast(props.bgColor)
const taskTitle = ref<string>(props.task.title)
</script>

<style scoped>
.v-card-title {
  min-height: 1.5rem;
}
</style>
