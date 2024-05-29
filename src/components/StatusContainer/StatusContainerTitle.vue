<template>
  <VHover>
    <template v-slot:default="{ isHovering, props }">
      <VSheet
        v-bind="props"
        :style="{
          zIndex: showColorPicker ? 3000 : 0,
          backgroundColor: bgColor,
          color: contrastColor
        }"
        class="px-4 py-2 d-flex ga-1"
      >
        <VCardText class="pa-0 text-body-1 font-weight-bold">{{ statusContainer.title }}</VCardText>
        <StatusContainerColourButton
          :statusContainer="statusContainer"
          :showColorPicker="showColorPicker"
          :toggleColorPicker="() => toggleColorPicker()"
          :isHovering="isHovering"
        /> </VSheet
    ></template>
  </VHover>
  <StatusContainerEditingShadow
    @hideColorPicker="() => toggleColorPicker(false)"
    :showColorPicker="showColorPicker"
  />
</template>

<script setup lang="ts">
import type { Ref, ComputedRef } from 'vue'
import type { IStatusContainer } from '@/types'
import fontColorContrast from 'font-color-contrast'

const emits = defineEmits(['hideColorPicker'])
const props = defineProps<{
  statusContainer: IStatusContainer
  bgColor: string
}>()

const showColorPicker: Ref<boolean> = ref(false)
const contrastColor: ComputedRef<string> = computed(() => fontColorContrast(props.bgColor))

function toggleColorPicker(value?: boolean) {
  showColorPicker.value = value !== undefined ? value : !showColorPicker.value
}
</script>

<style scoped>
.v-sheet {
  min-height: 2.5rem;
}
</style>
