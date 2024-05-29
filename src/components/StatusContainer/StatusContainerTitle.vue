<template>
  <VHover>
    <template v-slot:default="{ isHovering, props }">
      <VSheet
        v-bind="props"
        :style="{ backgroundColor: bgColor, color: contrastColor }"
        class="px-4 py-2 d-flex ga-1"
      >
        <VCardText class="pa-0 text-body-1 font-weight-bold">{{ statusContainer.title }}</VCardText>
        <StatusContainerColourButton
          :statusContainer="statusContainer"
          :isHovering="isHovering"
        /> </VSheet
    ></template>
  </VHover>
</template>

<script setup lang="ts">
import type { IStatusContainer } from '@/types'
import fontColorContrast from 'font-color-contrast'

const props = defineProps<{
  statusContainer: IStatusContainer
  bgColor: string
}>()

const contrastColor: ComputedRef<string> = computed(() => fontColorContrast(props.bgColor))
</script>

<style scoped>
.v-sheet {
  min-height: 2.5rem;
}
</style>
