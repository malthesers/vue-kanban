<template>
  <VBtn
    @click="() => tasksStore.removeTask(taskId)"
    variant="tonal"
    height="20"
    width="20"
    min-width="20"
    class="pa-0"
    :class="[isHovering ? 'opacity-100' : 'opacity-0']"
  >
    <VIcon icon="mdi-close" size="20" />
  </VBtn>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasksStore'

defineProps<{
  isHovering: boolean | null
  taskId: number
}>()

const tasksStore = useTasksStore()
</script>
