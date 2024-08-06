<template>
  <VLayout>
    <AppHeader />
    <AuthenticationPanel v-if="!authStore.isLoggedIn" />
    <KanbanBoard v-if="authStore.isLoggedIn" />
  </VLayout>
</template>

<script setup lang="ts">
import { useAuthStore } from './stores/authStore'

const authStore = useAuthStore()
</script>

<style scoped></style>
