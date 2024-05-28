<template>
  <VCol class="max-h-100 h-fit pa-0 rounded-lg d-flex flex-column overflow-hidden elevation-3">
    <StatusContainerTitle :title="tasksStore.statusContainers[index].title" :bgColor="bgColor" />
    <draggable
      v-model="tasksStore.statusContainers[index].tasks"
      group="tasks"
      item-key="title"
      class="bg-primary px-2 py-4 overflow-y-auto overflow-x-hidden"
      :animation="200"
      @start="toggleGrabbingCursor"
      @end="toggleGrabbingCursor"
    >
      <template #item="{ element }">
        <KanbanCard :bgColor="bgColor" :task="element" />
      </template>
    </draggable>
    <StatusContainerAddButton />
  </VCol>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasksStore'
import draggable from 'vuedraggable'

defineProps<{
  index: number
  bgColor: string
}>()

const tasksStore = useTasksStore()

function toggleGrabbingCursor() {
  document.querySelector('html')?.classList.toggle('grabbing')
}
</script>

<style scoped>
.v-col {
  min-width: 15rem;
  max-width: 15rem;
}
</style>
