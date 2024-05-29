<template>
  <VCol class="max-h-100 h-fit pa-0 rounded-lg d-flex flex-column overflow-hidden elevation-3">
    <StatusContainerTitle :statusContainer="statusContainer" :bgColor="bgColor" />
    <draggable
      :list="statusContainer.tasks"
      group="tasks"
      item-key="id"
      class="scrollbar-hidden bg-primary px-2 py-4 overflow-y-auto overflow-x-hidden"
      :animation="200"
    >
      <template #item="{ element }">
        <TaskCard :bgColor="bgColor" :task="element" />
      </template>
    </draggable>
    <StatusContainerAddTaskButton :containerIndex="containerIndex" />
  </VCol>
</template>

<script setup lang="ts">
import type { IStatusContainer } from '@/types'
import draggable from 'vuedraggable'

defineProps<{
  statusContainer: IStatusContainer
  containerIndex: number
  bgColor: string
}>()
</script>

<style scoped>
.v-col {
  min-width: 15rem;
  max-width: 15rem;
}
</style>
