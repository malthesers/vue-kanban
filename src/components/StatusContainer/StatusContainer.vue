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
      @start="toggleGrabbingCursor"
      @end="toggleGrabbingCursor"
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

function toggleGrabbingCursor() {
  document.querySelector('html')?.classList.toggle('grabbing')
}
</script>

<style scoped>
.v-col {
  min-width: 15rem;
  max-width: 15rem;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hidden::-webkit-scrollbar {
  width: 0;
}

.top-box-shadow {
  position: relative;
}

.top-box-shadow::before {
  /* -webkit-box-shadow: inset 0px -3px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px -3px 10px 0px rgba(0, 0, 0, 0.75); */
  pointer-events: none;
  position: absolute;
  height: 100%;
  z-index: 1;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow:
    inset 0px 10px 10px -5px rgba(0, 0, 0, 0.75),
    inset 0px -10px 10px -5px rgba(0, 0, 0, 0.75);
}
</style>
