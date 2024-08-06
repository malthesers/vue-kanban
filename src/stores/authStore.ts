import { supabase } from '@/lib/supabaseClient'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const isLoggedIn = ref<boolean>(false)

  async function signUp(email: string, password: string) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    return error
  }

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    return error
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT' || session === null) {
      isLoggedIn.value = false
    } else {
      isLoggedIn.value = true
    }
  })

  return {
    isLoggedIn,
    signUp,
    signIn,
    signOut,
  }
})
