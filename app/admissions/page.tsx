import type { Metadata } from 'next'
import { ClipboardCheck, FileText, Send } from 'lucide-react'
import { ActionLink } from '@/components/action-link'
import { PageHeader } from '@/components/page-header'
import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { StatusBadge } from '@/components/status-badge'

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Apply for admission to Mazowe University of Agricultural Science for the August 2027 intake.',
}

const steps = [
  { icon: FileText, title: 'Prepare your information', description: 'Gather your personal, contact, education, and academic-results information before starting.' },
  { icon: Send, title: 'Submit your application', description: 'Complete the online application and confirm that the information supplied is accurate.' },
  { icon: ClipboardCheck, title: 'Application review', description: 'The admissions team will review submitted applications and communicate future requirements or decisions.' },
]

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        badge="Applications open"
        eyebrow="Admissions"
        title="Apply for the August 2027 intake"
        description="Formal applications are open for the university's approved V1 program choices at associate and bachelor's study levels."
      />
      <Section>
        <SectionHeading
          eyebrow="Application process"
          title="A clear path from application to review"
          description="Submit one complete and accurate application. Transcript and document uploads are not required in this first application phase."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-4 rounded-lg border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary"><step.icon className="size-6" aria-hidden="true" /></span>
                <span className="font-serif text-3xl font-semibold text-border">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="border-t border-border bg-secondary/30">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <StatusBadge tone="green">August 2027</StatusBadge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">Start your formal application</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              Mazowe University remains a proposed institution progressing through development and regulatory processes. Applications are being accepted for the intended August 2027 intake, subject to institutional readiness and applicable approvals.
            </p>
          </div>
          <ActionLink href="/apply" variant="primary" size="lg">Apply Now</ActionLink>
        </div>
      </Section>
    </>
  )
}
