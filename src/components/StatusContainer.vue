<template>
  <VCol :class="bgColor" class="h-100 rounded-lg d-flex flex-column">
    <p class="font-weight-bold">{{ title }}</p>
    <VList class="bg-transparent overflow-auto">
      <KanbanCard v-for="n in 5" />
    </VList>
    <VBtn variant="tonal" prepend-icon="mdi-plus" class="text-accent font-weight-bold text-none">
      Add a card
    </VBtn>
  </VCol>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  bgColor: string
}>()
</script>
