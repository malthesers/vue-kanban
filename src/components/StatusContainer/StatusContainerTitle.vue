<template>
  <p :class="bgColor" class="px-4 py-2 font-weight-bold">
    {{ title }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  bgColor: string
}>()
</script>
