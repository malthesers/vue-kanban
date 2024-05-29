<template>
  <VCard
    variant="elevated"
    :style="{ zIndex: isEditing ? 3000 : 0 }"
    class="rounded-lg mb-4 elevation-3"
  >
    <VHover>
      <template v-slot:default="{ isHovering, props }">
        <VSheet v-bind="props">
          <TaskCardTitle
            @toggleEditing="toggleEditing"
            @enableEditing="() => toggleEditing(true)"
            @disableEditing="() => toggleEditing(false)"
            :isEditing="isEditing"
            :isHovering="isHovering"
            :task="task"
            :bgColor="bgColor"
          />
          <TaskCardDescription
            @enableEditing="() => toggleEditing(true)"
            @disableEditing="() => toggleEditing(false)"
            :isEditing="isEditing"
            :task="task"
          />
        </VSheet>
      </template>
    </VHover>
    <TaskCardEditingShadow @disableEditing="() => toggleEditing(false)" :isEditing="isEditing" />
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ITask } from '@/types'

defineProps<{
  bgColor: string
  task: ITask
}>()

const isEditing: Ref<boolean> = ref(false)

function toggleEditing(value?: boolean) {
  isEditing.value = value !== undefined ? value : !isEditing.value
}
</script>

<style scoped>
.v-card:last-of-type {
  margin-bottom: 0 !important;
}
</style>
