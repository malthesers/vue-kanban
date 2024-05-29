<template>
  <VCol class="max-h-100 h-fit pa-0 rounded-lg d-flex flex-column overflow-hidden elevation-3">
    <StatusContainerTitle
      :title="tasksStore.statusContainers[containerIndex].title"
      :bgColor="bgColor"
    />
    <draggable
      v-model="tasksStore.statusContainers[containerIndex].tasks"
      group="tasks"
      item-key="id"
      class="scrollbar-hidden bg-primary px-2 py-4 overflow-y-auto overflow-x-hidden"
      :animation="200"
    >
      <template #item="{ element }">
        <TaskCard :bgColor="bgColor" :task="element" />
      </template>
    </draggable>
    <StatusContainerAddButton :containerIndex="containerIndex" />
  </VCol>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasksStore'
import draggable from 'vuedraggable'

defineProps<{
  containerIndex: number
  bgColor: string
}>()

const tasksStore = useTasksStore()
</script>

<style scoped>
.v-col {
  min-width: 17.5rem;
  max-width: 17.5rem;
}
</style>
