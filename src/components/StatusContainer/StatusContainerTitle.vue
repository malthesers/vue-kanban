<template>
  <VHover>
    <template v-slot:default="{ isHovering, props }">
      <VSheet
        v-bind="props"
        :style="{ backgroundColor: bgColor, color: textColor }"
        class="px-4 py-2 d-flex ga-1"
      >
        <VCardText class="pa-0 text-body-1 font-weight-bold">{{ title }}</VCardText>
        <StatusContainerColourButton :isHovering="isHovering" /> </VSheet
    ></template>
  </VHover>
</template>

<script setup lang="ts">
import fontColorContrast from 'font-color-contrast'

const props = defineProps<{
  title: string
  bgColor: string
}>()

const textColor = fontColorContrast(props.bgColor)
</script>

<style scoped>
.v-sheet {
  min-height: 2.5rem;
}
</style>
