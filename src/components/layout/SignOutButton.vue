<template>
  <VBtn @click="signOut" variant="tonal" class="pa-0 rounded-lg bg-accent px-4 py-2 font-weight-bold text-none">Sign out</VBtn>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'

const { signOut } = useAuthStore()
</script>
