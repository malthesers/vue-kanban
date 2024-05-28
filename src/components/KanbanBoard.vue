<template>
  <VMain class="d-flex h-screen">
    <VContainer class="mt-4 grow overflow-x-auto">
      <VRow class="h-100 pa-4 ga-4 flex-nowrap flex-sm-row">
        <StatusContainer
          v-for="(container, index) in tasksStore.statusContainers"
          :index="index"
          :bgColor="container.color"
        /> </VRow
    ></VContainer>
  </VMain>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore()
</script>
