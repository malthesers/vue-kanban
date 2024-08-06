import { supabase } from '@/lib/supabaseClient'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const isLoggedIn = ref<boolean>(false)

  async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (data) {
      isLoggedIn.value = true
    }
  }

  return {
    isLoggedIn,
    signIn,
  }
})
