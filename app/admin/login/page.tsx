import { redirect } from 'next/navigation'
import { getAdminAuthState } from '@/lib/supabase/authorization'
import { login } from './actions'

const messages: Record<string, string> = {
  'invalid-credentials': 'The email or password is incorrect.',
  'not-authorized': 'This account is authenticated but is not authorized for admin access.',
  'logged-out': 'You have been signed out.',
}

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>
}

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const state = await getAdminAuthState()

  if (state.admin) {
    redirect('/admin')
  }

  const { error } = await searchParams
  const message = error ? messages[error] : undefined

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-16">
      <section className="w-full max-w-md rounded-xl border border-border bg-background p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Mazowe University</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Admin sign in</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in with an authorized administrator account.
        </p>

        {message && (
          <div role="alert" className="mt-6 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            {message}
          </div>
        )}

        <form action={login} className="mt-6 space-y-5">
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Sign in
          </button>
        </form>
      </section>
    </main>
  )
}
