<template>
  <VCard variant="elevated" class="rounded-lg mb-2 elevation-3">
    <VCardTitle :class="bgColor" class="pa-2 text-body-2">{{ task.title }}</VCardTitle>
    <VCardText class="pa-2 bg-white">{{ task.description }}</VCardText>
  </VCard>
</template>

<script setup lang="ts">
import type { ITask } from '@/types'

defineProps<{
  bgColor: string
  task: ITask
}>()
</script>

<style></style>
