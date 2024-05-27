<template>
  <VLayout>
    <AppHeader />
    <KanbanBoard />
  </VLayout>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log('mounted')
})
</script>

<style scoped></style>
