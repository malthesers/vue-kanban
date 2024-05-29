<template>
  <p :style="{ backgroundColor: bgColor, color: textColor }" class="px-4 py-2 font-weight-bold">
    {{ title }}
  </p>
</template>

<script setup lang="ts">
import fontColorContrast from 'font-color-contrast'

const props = defineProps<{
  title: string
  bgColor: string
}>()

const textColor = fontColorContrast(props.bgColor)
</script>
