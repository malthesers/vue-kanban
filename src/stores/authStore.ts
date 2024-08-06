import getContainers from '@/api/getContainers'
import postStarterContainers from '@/api/postStarterContainers'
import { supabase } from '@/lib/supabaseClient'
import type { User } from '@supabase/supabase-js'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref<User | null>(null)

  async function signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (data.user) {
      postStarterContainers(data.user.id)
    }

    return error
  }

  async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    return error
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_OUT' || session === null) {
      user.value = null
    } else {
      user.value = session.user
      getContainers()
    }
  })

  return {
    user,
    signUp,
    signIn,
    signOut,
  }
})
