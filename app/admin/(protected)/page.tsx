import { logout } from '../actions'

export default function AdminPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <div className="flex items-start justify-between gap-6 border-b border-border pb-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Mazowe University</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Admin</h1>
          <p className="mt-2 text-muted-foreground">Authenticated administrator access is active.</p>
        </div>
        <form action={logout}>
          <button type="submit" className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
            Sign out
          </button>
        </form>
      </div>

      <section className="py-10">
        <h2 className="text-xl font-semibold">Administration area</h2>
        <p className="mt-2 text-muted-foreground">
          The inquiry dashboard has not been implemented yet.
        </p>
      </section>
    </main>
  )
}
