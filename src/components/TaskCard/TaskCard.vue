<template>
  <VCard variant="elevated" class="rounded-lg mb-4 elevation-3">
    <VHover>
      <template v-slot:default="{ isHovering, props }">
        <VSheet v-bind="props">
          <TaskCardTitle
            :toggleIsEditing="() => (isEditing = !isEditing)"
            :isEditing="isEditing"
            :isHovering="isHovering"
            :task="task"
            :bgColor="bgColor"
          />
          <TaskCardDescription :isEditing="isEditing" :task="task" />
        </VSheet>
      </template>
    </VHover>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ITask } from '@/types'

defineProps<{
  bgColor: string
  task: ITask
}>()

const isEditing = ref<boolean>(false)
</script>
