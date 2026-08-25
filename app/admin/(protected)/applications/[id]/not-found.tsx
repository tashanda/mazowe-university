import Link from 'next/link'

export default function ApplicationNotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-16 sm:px-6">
      <div className="w-full rounded-xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
        <h1 className="text-3xl font-semibold">Application not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">The requested application does not exist or is no longer available.</p>
        <Link href="/admin/applications" className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary-deep">Return to applications</Link>
      </div>
    </main>
  )
}
