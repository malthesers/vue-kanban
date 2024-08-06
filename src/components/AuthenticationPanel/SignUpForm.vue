<template>
  <VForm @submit.prevent="handleSignUp" class="w-full">
    <VTextField v-model="email" label="E-mail" type="email" name="email" hide-details="auto" class="mb-4 rounded-lg" />
    <VTextField v-model="password" label="Password" type="password" name="password" hide-details="auto" class="mb-4 rounded-lg" />
    <VTextField v-model="confirmPassword" label="Confirm password" type="password" name="confirm-password" hide-details="auto" class="mb-2 rounded-lg" />
    <Transition name="fade">
      <p v-if="isDifferentPasswords" class="text-subtitle-2 text-red-accent-4">Passwords do not match.</p>
    </Transition>
    <Transition name="fade">
      <p v-if="errorMessage" class="text-subtitle-2 text-red-accent-4">{{ errorMessage }}</p>
    </Transition>
    <VBtn type="submit" size="large" variant="tonal" class="mt-2 w-100 text-body rounded-lg bg-accent px-4 py-2 font-weight-bold text-none">Sign up</VBtn>
  </VForm>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'

const { signUp } = useAuthStore()
const errorMessage = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isDifferentPasswords = computed(() => {
  return password.value.length !== 0 && confirmPassword.value.length !== 0 && password.value !== confirmPassword.value
})

async function handleSignUp() {
  const error = await signUp(email.value, password.value)

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
