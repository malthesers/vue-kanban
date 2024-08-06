<template>
  <VForm class="w-full">
    <VTextField v-model="email" label="E-mail" type="email" placeholder="E-mail" class="rounded-lg" />
    <VTextField v-model="password" label="Password" type="password" placeholder="Password" class="rounded-lg" />
    <VBtn
      @click="authStore.signIn(email, password)"
      size="large"
      variant="tonal"
      class="pa-0 w-100 text-body rounded-lg bg-accent px-4 py-2 font-weight-bold text-none"
      >Sign in</VBtn
    >
  </VForm>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')
</script>

<style></style>
