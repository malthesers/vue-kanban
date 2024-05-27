<template>
  <VCard variant="elevated" class="rounded-lg mb-2 elevation-3">
    <VCardTitle :class="bgColor" class="pa-2 text-body-2 text">Title</VCardTitle>
    <VCardText class="pa-2 bg-white"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</VCardText
    >
  </VCard>
</template>

<script setup lang="ts">
defineProps<{
  bgColor: string
}>()
</script>
