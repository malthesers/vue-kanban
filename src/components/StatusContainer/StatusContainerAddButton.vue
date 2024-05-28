<template>
  <VContainer class="bg-primary pt-0">
    <VBtn
      @click="
        () =>
          tasksStore.addTask(containerIndex, {
            id: Date.now(),
            title: '',
            description: ''
          })
      "
      variant="elevated"
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
