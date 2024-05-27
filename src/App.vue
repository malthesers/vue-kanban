<template>
  <VLayout>
    <AppHeader />
    <VMain> <KanbanCard /></VMain>
  </VLayout>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log('mounted')
})
</script>

<style scoped></style>
