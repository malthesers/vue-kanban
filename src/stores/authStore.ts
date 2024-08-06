import { supabase } from '@/lib/supabaseClient'
import type { User } from '@supabase/supabase-js'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref<User | null>(null)

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
      user.value = null
    } else {
      user.value = session.user
    }
  })

  return {
    user,
    signUp,
    signIn,
    signOut,
  }
})
