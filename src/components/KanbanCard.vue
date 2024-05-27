<template>
  <VCard variant="elevated" class="rounded-lg mb-2">
    <VCardTitle class="pa-2 text-body-1">Title</VCardTitle>
    <VCardText class="pa-2 bg-white"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</VCardText
    >
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
</script>
