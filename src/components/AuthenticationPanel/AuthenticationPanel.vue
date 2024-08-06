<template>
  <VMain class="h-screen d-flex px-4 py-4">
    <Transition name="fade" mode="out-in">
      <VSheet v-if="showSignIn" class="w-100 mx-auto my-auto h-fit px-4 py-4 rounded-lg" max-width="400">
        <SignInForm />
        <p @click="showSignIn = !showSignIn" class="text-subtitle-2 text-brown-lighten-1 text-center mt-2 cursor-pointer">No account? Sign up here</p>
      </VSheet>
      <VSheet v-else class="w-100 mx-auto my-auto h-fit px-4 py-4 rounded-lg" max-width="400">
        <SignUpForm />
        <p @click="showSignIn = !showSignIn" class="text-subtitle-2 text-brown-lighten-1 text-center mt-2 cursor-pointer">Return to sign in</p>
      </VSheet>
    </Transition>
  </VMain>
</template>

<script lang="ts" setup>
const showSignIn = ref(true)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
