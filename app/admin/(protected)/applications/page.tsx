import Link from 'next/link'
import type { Prisma } from '@/prisma/generated/prisma/client'
import { prisma } from '@/lib/prisma'
import {
  applicationPrograms,
  applicationStatuses,
  applicationStatusLabels,
  intendedIntakeLabels,
  studyLevelLabels,
  studyLevels,
} from '@/lib/admissions'

export const dynamic = 'force-dynamic'

type SearchParams = Promise<Record<string, string | string[] | undefined>>

const dateFormatter = new Intl.DateTimeFormat('en-ZW', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'Africa/Harare',
})

const statusStyles = {
  SUBMITTED: 'border-primary/25 bg-primary/10 text-primary-deep',
  UNDER_REVIEW: 'border-gold/40 bg-gold/15 text-foreground',
  MORE_INFORMATION_REQUIRED: 'border-clay/35 bg-clay/10 text-clay',
  ACCEPTED: 'border-primary/30 bg-primary/10 text-primary-deep',
  REJECTED: 'border-border bg-muted text-muted-foreground',
} as const

function valueOf(value: string | string[] | undefined) {
  return typeof value === 'string' ? value : ''
}

function memberOf<const T extends readonly string[]>(value: string, values: T): value is T[number] {
  return values.includes(value)
}

export default async function AdminApplicationsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams
  const query = valueOf(params.q).trim().slice(0, 100)
  const requestedStatus = valueOf(params.status)
  const requestedProgram = valueOf(params.program)
  const requestedLevel = valueOf(params.studyLevel)
  const sort = valueOf(params.sort) === 'oldest' ? 'oldest' : 'newest'
  const status = memberOf(requestedStatus, applicationStatuses) ? requestedStatus : ''
  const program = memberOf(requestedProgram, applicationPrograms) ? requestedProgram : ''
  const studyLevel = memberOf(requestedLevel, studyLevels) ? requestedLevel : ''
  const hasFilters = Boolean(query || status || program || studyLevel || sort === 'oldest')

  const where: Prisma.ApplicationWhereInput = {
    ...(query && {
      OR: [
        { firstName: { contains: query, mode: 'insensitive' } },
        { lastName: { contains: query, mode: 'insensitive' } },
        { email: { contains: query, mode: 'insensitive' } },
      ],
    }),
    ...(status && { status }),
    ...(program && { program }),
    ...(studyLevel && { studyLevel }),
  }

  let applications: Awaited<ReturnType<typeof loadApplications>> = []
  let failed = false
  try {
    applications = await loadApplications(where, sort)
  } catch {
    console.error('Unable to load admin applications')
    failed = true
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="border-b border-border pb-6 sm:flex sm:items-end sm:justify-between sm:gap-8">
        <div>
          <Link href="/admin" className="text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Admin home</Link>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">Mazowe University</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Applications</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">Read-only admissions queue for submitted applications.</p>
        </div>
        {!failed && <div className="mt-5 rounded-lg border border-border bg-card px-4 py-3 sm:mt-0 sm:text-right"><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Matching applications</p><p className="mt-1 text-2xl font-semibold" aria-label={`${applications.length} matching applications`}>{applications.length}</p></div>}
      </header>

      <section className="border-b border-border py-6" aria-labelledby="application-filters-heading">
        <h2 id="application-filters-heading" className="text-lg font-semibold">Search and filter</h2>
        <form method="get" className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-3"><label htmlFor="q" className="text-sm font-medium">Applicant name or email</label><input id="q" name="q" type="search" defaultValue={query} maxLength={100} placeholder="Search applications" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" /></div>
          <FilterSelect label="Status" name="status" value={status} options={applicationStatuses.map((item) => ({ value: item, label: applicationStatusLabels[item] }))} />
          <FilterSelect label="Program" name="program" value={program} options={applicationPrograms.map((item) => ({ value: item, label: item }))} />
          <FilterSelect label="Study level" name="studyLevel" value={studyLevel} options={studyLevels.map((item) => ({ value: item, label: studyLevelLabels[item] }))} />
          <FilterSelect label="Sort" name="sort" value={sort} includeAny={false} options={[{ value: 'newest', label: 'Newest first' }, { value: 'oldest', label: 'Oldest first' }]} />
          <div className="flex items-end gap-3 sm:col-span-2"><button type="submit" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary-deep">Apply filters</button><Link href="/admin/applications" className="inline-flex h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-medium hover:bg-muted">Clear</Link></div>
        </form>
      </section>

      <section className="py-8" aria-labelledby="application-list-heading">
        <h2 id="application-list-heading" className="sr-only">Application queue</h2>
        {failed ? (
          <StateCard alert title="Applications could not be loaded" description="Please try again later. No application data has been displayed." />
        ) : applications.length === 0 ? (
          <StateCard title={hasFilters ? 'No applications match these filters' : 'No applications yet'} description={hasFilters ? 'Clear or adjust the search and filters to see other applications.' : 'Submitted applications will appear here.'} />
        ) : (
          <ol className="space-y-4">
            {applications.map((application) => (
              <li key={application.id}><article className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div className="min-w-0"><h2 className="text-xl font-semibold">{application.firstName} {application.lastName}</h2><a href={`mailto:${application.email}`} className="mt-1 block break-all text-sm text-primary underline-offset-4 hover:underline">{application.email}</a></div><span className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[application.status]}`}>Status: {applicationStatusLabels[application.status]}</span></div>
                <dl className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2 lg:grid-cols-4"><QueueField label="Program" value={application.program} /><QueueField label="Study level" value={studyLevelLabels[application.studyLevel]} /><QueueField label="Intake" value={intendedIntakeLabels[application.intendedIntake]} /><div><dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Submitted</dt><dd className="mt-1 text-sm"><time dateTime={application.createdAt.toISOString()}>{dateFormatter.format(application.createdAt)}</time></dd></div></dl>
                <Link href={`/admin/applications/${application.id}`} className="mt-5 inline-flex h-10 items-center justify-center rounded-md border border-border px-4 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Open application</Link>
              </article></li>
            ))}
          </ol>
        )}
      </section>
    </main>
  )
}

async function loadApplications(where: Prisma.ApplicationWhereInput, sort: 'newest' | 'oldest') {
  return prisma.application.findMany({
    where,
    orderBy: { createdAt: sort === 'oldest' ? 'asc' : 'desc' },
    select: { id: true, firstName: true, lastName: true, email: true, program: true, studyLevel: true, intendedIntake: true, status: true, createdAt: true },
  })
}

function FilterSelect({ label, name, value, options, includeAny = true }: { label: string; name: string; value: string; options: ReadonlyArray<{ value: string; label: string }>; includeAny?: boolean }) {
  return <div><label htmlFor={name} className="text-sm font-medium">{label}</label><select id={name} name={name} defaultValue={value} className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">{includeAny && <option value="">Any {label.toLowerCase()}</option>}{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div>
}

function QueueField({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</dt><dd className="mt-1 text-sm font-medium">{value}</dd></div>
}

function StateCard({ title, description, alert = false }: { title: string; description: string; alert?: boolean }) {
  return <div role={alert ? 'alert' : undefined} className={`rounded-xl p-8 text-center sm:p-12 ${alert ? 'border border-destructive/25 bg-destructive/5' : 'border border-dashed border-border bg-card'}`}><h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 text-sm text-muted-foreground">{description}</p></div>
}
