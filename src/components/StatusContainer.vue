<template>
  <VCol :class="bgColor" class="rounded-lg">
    <p class="font-weight-bold">{{ title }}</p>
    <VList class="bg-transparent">
      <KanbanCard />
    </VList>
    <VBtn variant="tonal" prepend-icon="mdi-plus" class="font-weight-bold">
      <p>Add a card</p>
    </VBtn>
  </VCol>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  bgColor: string
}>()
</script>
