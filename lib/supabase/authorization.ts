import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

type AppMetadata = {
  role?: unknown
}

export function hasAdminRole(claims: Record<string, unknown> | undefined) {
  const appMetadata = claims?.app_metadata

  return (
    typeof appMetadata === 'object' &&
    appMetadata !== null &&
    (appMetadata as AppMetadata).role === 'admin'
  )
}

export async function getAdminAuthState() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getClaims()
  const claims = error ? undefined : data?.claims

  return {
    authenticated: Boolean(claims?.sub),
    admin: hasAdminRole(claims),
  }
}

export async function requireAdmin() {
  const state = await getAdminAuthState()

  if (!state.authenticated) {
    redirect('/admin/login')
  }

  if (!state.admin) {
    redirect('/admin/login?error=not-authorized')
  }
}
