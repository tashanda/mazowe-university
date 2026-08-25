import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

const statusStyles = {
  NEW: 'border-primary/25 bg-primary/10 text-primary-deep',
  CONTACTED: 'border-gold/40 bg-gold/15 text-foreground',
  QUALIFIED: 'border-clay/30 bg-clay/10 text-clay',
  CLOSED: 'border-border bg-muted text-muted-foreground',
} as const

const statusLabels = {
  NEW: 'New',
  CONTACTED: 'Contacted',
  QUALIFIED: 'Qualified',
  CLOSED: 'Closed',
} as const

const dateFormatter = new Intl.DateTimeFormat('en-ZW', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'Africa/Harare',
})

async function getInquiries() {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        interest: true,
        message: true,
        status: true,
        createdAt: true,
      },
    })

    return { inquiries, failed: false as const }
  } catch {
    console.error('Unable to load admin inquiries')
    return { inquiries: [], failed: true as const }
  }
}

export default async function AdminInquiriesPage() {
  const { inquiries, failed } = await getInquiries()

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="border-b border-border pb-6 sm:flex sm:items-end sm:justify-between sm:gap-8">
        <div>
          <Link
            href="/admin"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Admin home
          </Link>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Mazowe University
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Inquiries</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Read-only submissions received through the public interest form.
          </p>
        </div>

        {!failed && (
          <div className="mt-5 rounded-lg border border-border bg-card px-4 py-3 sm:mt-0 sm:text-right">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Total inquiries</p>
            <p className="mt-1 text-2xl font-semibold" aria-label={`${inquiries.length} total inquiries`}>
              {inquiries.length}
            </p>
          </div>
        )}
      </header>

      <section className="py-8" aria-labelledby="inquiry-list-heading">
        <h2 id="inquiry-list-heading" className="sr-only">Submitted inquiries</h2>

        {failed ? (
          <div role="alert" className="rounded-xl border border-destructive/25 bg-destructive/5 p-6">
            <h2 className="text-lg font-semibold">Inquiries could not be loaded</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Please try again later. No inquiry data has been displayed.
            </p>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center sm:p-12">
            <h2 className="text-xl font-semibold">No inquiries yet</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              New interest-form submissions will appear here.
            </p>
          </div>
        ) : (
          <ol className="space-y-4">
            {inquiries.map((inquiry) => (
              <li key={inquiry.id} className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
                <article>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h2 className="text-xl font-semibold">
                        {inquiry.firstName} {inquiry.lastName}
                      </h2>
                      <div className="mt-2 flex flex-col gap-1 text-sm sm:flex-row sm:flex-wrap sm:gap-x-4">
                        <a className="break-all text-primary underline-offset-4 hover:underline" href={`mailto:${inquiry.email}`}>
                          {inquiry.email}
                        </a>
                        {inquiry.phone && (
                          <a className="text-muted-foreground underline-offset-4 hover:underline" href={`tel:${inquiry.phone}`}>
                            {inquiry.phone}
                          </a>
                        )}
                      </div>
                    </div>

                    <span
                      className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[inquiry.status]}`}
                    >
                      Status: {statusLabels[inquiry.status]}
                    </span>
                  </div>

                  <dl className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Interest</dt>
                      <dd className="mt-1 text-sm font-medium">{inquiry.interest}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Submitted</dt>
                      <dd className="mt-1 text-sm">
                        <time dateTime={inquiry.createdAt.toISOString()}>{dateFormatter.format(inquiry.createdAt)}</time>
                      </dd>
                    </div>
                  </dl>

                  {inquiry.message && (
                    <details className="mt-5 rounded-lg bg-muted/60 px-4 py-3">
                      <summary className="cursor-pointer text-sm font-medium focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        View message
                      </summary>
                      <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-6 text-muted-foreground">
                        {inquiry.message}
                      </p>
                    </details>
                  )}
                </article>
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  )
}
