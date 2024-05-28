<template>
  <VMain class="d-flex h-screen">
    <VContainer class="mt-4 grow">
      <VRow class="h-100 ga-4">
        <StatusContainer status="toDo" bgColor="bg-pastelGreen" />
        <StatusContainer status="inProgress" bgColor="bg-pastelYellow" />
        <StatusContainer status="blocked" bgColor="bg-pastelRed" />
        <StatusContainer status="done" bgColor="bg-pastelBlue" /> </VRow
    ></VContainer>
  </VMain>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore()
</script>
