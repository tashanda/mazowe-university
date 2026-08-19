'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { hasAdminRole } from '@/lib/supabase/authorization'

export async function login(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
    redirect('/admin/login?error=invalid-credentials')
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    redirect('/admin/login?error=invalid-credentials')
  }

  const { data, error: claimsError } = await supabase.auth.getClaims()

  if (claimsError || !hasAdminRole(data?.claims)) {
    await supabase.auth.signOut()
    redirect('/admin/login?error=not-authorized')
  }

  redirect('/admin')
}
