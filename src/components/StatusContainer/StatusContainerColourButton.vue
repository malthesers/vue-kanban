<template>
  <VSheet class="bg-transparent">
    <VBtn
      @click="showColorPicker = !showColorPicker"
      variant="tonal"
      height="24"
      width="24"
      min-width="24"
      class="pa-0"
      :class="[isHovering ? 'opacity-100' : 'opacity-0']"
    >
      <VIcon icon="mdi-palette-outline" size="24" />
    </VBtn>
    <VColorPicker
      @update:modelValue="
        (e: string) => tasksStore.updateStatusContainer(statusContainer.id, { color: e })
      "
      v-if="showColorPicker"
      v-model="color"
      class="position-fixed"
    />
  </VSheet>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasksStore'
import type { IStatusContainer } from '@/types'

const props = defineProps<{
  statusContainer: IStatusContainer
  isHovering: boolean | null
}>()

const tasksStore = useTasksStore()
const showColorPicker: Ref<boolean> = ref(false)
const color: Ref<string> = ref(props.statusContainer.color)
</script>

<style scoped>
.v-sheet {
  min-height: 0 !important;
}

.v-color-picker {
  z-index: 1;
}
</style>
