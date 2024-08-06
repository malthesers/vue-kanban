<template>
  <VLayout>
    <AppHeader />
    <AuthenticationPanel v-if="!authStore.user" />
    <KanbanBoard v-if="authStore.user" />
  </VLayout>
</template>

<script setup lang="ts">
import { useAuthStore } from './stores/authStore'

const authStore = useAuthStore()
</script>

<style scoped></style>
