import Link from 'next/link'
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

      <section className="grid gap-5 py-10 sm:grid-cols-2">
        <AdminDestination title="Applications" description="Search and review formal admissions applications." href="/admin/applications" label="View applications" />
        <AdminDestination title="Inquiries" description="Review submissions received through the public interest form." href="/admin/inquiries" label="View inquiries" />
      </section>
    </main>
  )
}

function AdminDestination({ title, description, href, label }: { title: string; description: string; href: string; label: string }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <Link href={href} className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{label}</Link>
    </article>
  )
}
