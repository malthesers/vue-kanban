<template>
  <VForm @submit.prevent="handleSignIn" class="w-full">
    <VTextField v-model="email" label="E-mail" type="email" name="email" hide-details="auto" class="mb-4 rounded-lg" />
    <VTextField v-model="password" label="Password" type="password" name="password" hide-details="auto" class="mb-2 rounded-lg" />
    <Transition name="fade">
      <p v-if="errorMessage" class="text-subtitle-2 text-red-accent-4">{{ errorMessage }}</p>
    </Transition>
    <VBtn type="submit" size="large" variant="tonal" class="mt-2 w-100 text-body rounded-lg bg-accent px-4 py-2 font-weight-bold text-none">Sign in</VBtn>
  </VForm>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'

const { signIn } = useAuthStore()
const errorMessage = ref('')
const email = ref('')
const password = ref('')

async function handleSignIn() {
  const error = await signIn(email.value, password.value)

  if (error) {
    errorMessage.value = error.message
  }
}
</script>

<style scoped>
p {
  max-height: 1.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
