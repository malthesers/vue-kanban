<template>
  <VAppBar :elevation="3" class="py-2 px-4">
    <VAppBarTitle class="font-weight-bold">{{ appTitle }}</VAppBarTitle>
    <VSheet v-if="authStore.user" class="d-flex ga-4">
      <AddStatusContainerButton />
      <SignOutButton />
    </VSheet>
  </VAppBar>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import getUsernameFromEmail from '@/utils/getUsernameFromEmail'

const authStore = useAuthStore()
const appTitle = computed(() => {
  if (authStore.user?.email) {
    return getUsernameFromEmail(authStore.user.email) + `'s board`
  } else {
    return 'Kanban board'
  }
})
</script>
