<template>
  <VContainer class="bg-primary pa-2">
    <VBtn
      @click="
        () => tasksStore.addTask(containerIndex, { id: Date.now(), title: '', description: '' })
      "
      variant="tonal"
      prepend-icon="mdi-plus"
      class="text-accent font-weight-bold text-none"
    >
      Add a card
    </VBtn>
  </VContainer>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasksStore'

defineProps<{
  containerIndex: number
}>()

const tasksStore = useTasksStore()
</script>
