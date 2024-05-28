<template>
  <VCol class="max-h-100 h-fit pa-0 rounded-lg d-flex flex-column overflow-hidden elevation-3">
    <p :class="bgColor" class="px-4 py-2 font-weight-bold">
      {{ tasksStore.tasksContainers[status].title }}
    </p>
    <draggable
      v-model="tasksStore.tasksContainers[status].tasks"
      group="tasks"
      item-key="title"
      class="bg-primary pa-2 overflow-auto"
    >
      <template #item="{ element }">
        <KanbanCard :bgColor="bgColor" :task="element" />
      </template>
    </draggable>
    <!-- <VList class="bg-primary px-2 overflow-auto">
      <KanbanCard v-for="task in tasks" :bgColor="bgColor" :key="task.title" :task="task" />
    </VList> -->
    <VContainer class="bg-primary pt-0">
      <VBtn
        variant="elevated"
        prepend-icon="mdi-plus"
        class="text-accent font-weight-bold text-none"
      >
        Add a card
      </VBtn>
    </VContainer>
  </VCol>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasksStore'
import type { ITask } from '@/types'
import draggable from 'vuedraggable'

const tasksStore = useTasksStore()

defineProps<{
  status: 'toDo' | 'inProgress' | 'blocked' | 'done'
  // tasks: ITask[]
  bgColor: string
}>()
</script>
