<template>
  <VSheet class="pa-2 bg-white rounded-b-lg">
    <VCardText
      @dblclick="emits('enableEditing')"
      @blur="(e) => tasksStore.updateTask(task.id, { description: e.target.innerText })"
      class="pa-0"
      :contenteditable="isEditing"
      >{{ taskDescription }}
    </VCardText>
  </VSheet>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'
import type { ITask } from '@/types'

const emits = defineEmits(['enableEditing', 'disableEditing'])
const props = defineProps<{
  isEditing: boolean
  task: ITask
}>()

const tasksStore = useTasksStore()
const taskDescription: Ref<string> = ref(props.task.description)
</script>

<style scoped>
.v-card-text {
  min-height: 1.5rem;
}
</style>
