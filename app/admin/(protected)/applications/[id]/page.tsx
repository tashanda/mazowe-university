import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { applicationStatusLabels, intendedIntakeLabels, studyLevelLabels } from '@/lib/admissions'

export const dynamic = 'force-dynamic'

const dateFormatter = new Intl.DateTimeFormat('en-ZW', { dateStyle: 'long', timeZone: 'Africa/Harare' })
const dateTimeFormatter = new Intl.DateTimeFormat('en-ZW', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Africa/Harare' })

export default async function AdminApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  let application: Awaited<ReturnType<typeof loadApplication>> = null
  let failed = false
  try {
    application = await loadApplication(id)
  } catch {
    console.error('Unable to load admin application detail')
    failed = true
  }

  if (!failed && !application) notFound()

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="border-b border-border pb-6">
        <Link href="/admin/applications" className="text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Back to applications</Link>
        <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">Mazowe University</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Application review</h1>
        <p className="mt-2 text-sm text-muted-foreground">Read-only application information.</p>
      </header>

      {failed || !application ? (
        <div role="alert" className="mt-8 rounded-xl border border-destructive/25 bg-destructive/5 p-6"><h2 className="text-xl font-semibold">Application could not be loaded</h2><p className="mt-2 text-sm text-muted-foreground">Please return to the application queue and try again later.</p></div>
      ) : (
        <div className="space-y-6 py-8">
          <DetailSection title="Applicant">
            <DetailField label="Full name" value={`${application.firstName} ${application.lastName}`} />
            <DetailField label="Date of birth" value={dateFormatter.format(application.dateOfBirth)} />
            <DetailField label="Nationality" value={application.nationality} />
            <DetailField label="Email" value={application.email} href={`mailto:${application.email}`} />
            <DetailField label="Phone" value={application.phone} href={`tel:${application.phone}`} />
            <DetailField label="Address" value={application.address} wide />
          </DetailSection>
          <DetailSection title="Admissions">
            <DetailField label="Program" value={application.program} />
            <DetailField label="Study level" value={studyLevelLabels[application.studyLevel]} />
            <DetailField label="Intended intake" value={intendedIntakeLabels[application.intendedIntake]} />
            <DetailField label="Status" value={applicationStatusLabels[application.status]} />
            <DetailField label="Submitted" value={dateTimeFormatter.format(application.createdAt)} />
          </DetailSection>
          <DetailSection title="Academic background">
            <DetailField label="Previous school" value={application.previousSchool} />
            <DetailField label="Qualification" value={application.qualification} />
            <DetailField label="Completion year" value={String(application.completionYear)} />
            <DetailField label="Academic results" value={application.academicResults} wide long />
            {application.testScores && <DetailField label="Test scores" value={application.testScores} wide long />}
          </DetailSection>
          <DetailSection title="Additional context">
            <DetailField label="Activities" value={application.activities || 'Not provided'} wide long={Boolean(application.activities)} muted={!application.activities} />
            <DetailField label="Personal statement" value={application.personalStatement || 'Not provided'} wide long={Boolean(application.personalStatement)} muted={!application.personalStatement} />
          </DetailSection>
          <DetailSection title="Declaration">
            <DetailField label="Accuracy confirmed" value={application.confirmedAccuracy ? 'Yes — confirmed by applicant' : 'No'} wide />
          </DetailSection>
        </div>
      )}
    </main>
  )
}

async function loadApplication(id: string) {
  return prisma.application.findUnique({
    where: { id },
    select: {
      firstName: true, lastName: true, dateOfBirth: true, nationality: true,
      email: true, phone: true, address: true, program: true, studyLevel: true,
      intendedIntake: true, status: true, createdAt: true, previousSchool: true,
      qualification: true, completionYear: true, academicResults: true,
      testScores: true, activities: true, personalStatement: true, confirmedAccuracy: true,
    },
  })
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6"><h2 className="text-xl font-semibold">{title}</h2><dl className="mt-5 grid gap-5 border-t border-border pt-5 sm:grid-cols-2">{children}</dl></section>
}

function DetailField({ label, value, href, wide = false, long = false, muted = false }: { label: string; value: string; href?: string; wide?: boolean; long?: boolean; muted?: boolean }) {
  const content = href ? <a href={href} className="break-all text-primary underline-offset-4 hover:underline">{value}</a> : value
  return <div className={wide ? 'sm:col-span-2' : undefined}><dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</dt><dd className={`mt-1 break-words text-sm leading-6 ${long ? 'whitespace-pre-wrap' : ''} ${muted ? 'text-muted-foreground' : ''}`}>{content}</dd></div>
}
