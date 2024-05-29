<template>
  <VMain class="d-flex h-screen">
    <VContainer class="mt-4 max-w-none grow overflow-x-auto">
      <draggable
        :list="tasksStore.statusContainers"
        tag="v-row"
        group="containers"
        item-key="title"
        class="h-100 pa-4 ga-4 flex-nowrap flex-sm-row"
        :animation="200"
      >
        <template #item="{ element, index }">
          <StatusContainer
            :statusContainer="element"
            :containerIndex="index"
            :bgColor="element.color"
          />
        </template>
      </draggable>
    </VContainer>
  </VMain>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore()
</script>
