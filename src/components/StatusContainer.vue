<template>
  <VCol class="max-h-100 h-fit pa-0 rounded-lg d-flex flex-column overflow-hidden elevation-3">
    <p :class="bgColor" class="px-4 py-2 font-weight-bold">{{ title }}</p>
    <VList class="bg-primary px-2 overflow-auto">
      <KanbanCard v-for="n in 5" :bgColor="bgColor" />
    </VList>
    <VContainer class="bg-primary pt-0">
      <VBtn
        variant="elevated"
        prepend-icon="mdi-plus"
        class="text-accent font-weight-bold text-none"
      >
        Add a card
      </VBtn>
    </VContainer>
  </VCol>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  bgColor: string
}>()
</script>
