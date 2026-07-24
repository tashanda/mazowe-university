import type { Metadata } from 'next'
import { CalendarClock, ClipboardList, Mail } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { StatusBadge } from '@/components/status-badge'
import { InterestForm } from '@/components/interest-form'

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Register your interest in Mazowe University of Agricultural Science. The university is under development and not yet accepting formal applications, but future admissions pathways are being planned.',
}

const steps = [
  {
    icon: ClipboardList,
    title: 'Register your interest',
    description:
      'Share your details so we can keep you informed as academic plans and admissions pathways develop.',
  },
  {
    icon: Mail,
    title: 'Receive updates',
    description:
      'We will contact registered individuals with news on programs, approvals, and future application windows.',
  },
  {
    icon: CalendarClock,
    title: 'Apply in future',
    description:
      'Formal applications will open once programs are approved and the university is ready to welcome students.',
  },
]

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        badge="Applications not yet open"
        eyebrow="Admissions"
        title="Register your interest in a future intake"
        description="Mazowe University is a proposed institution and is not yet accepting formal applications. You can register your interest today to be kept informed as our plans progress."
      />

      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="A transparent path to future admissions"
          description="We want to be clear about where we are. Here is what registering interest means at this stage of development."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <step.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="font-serif text-3xl font-semibold text-border">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-border bg-secondary/30">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <StatusBadge tone="gold">Expression of interest</StatusBadge>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground">
              Tell us you&apos;re interested
            </h2>
            <p className="text-base leading-relaxed text-pretty text-muted-foreground">
              Complete the form to join our list of interested students,
              parents, partners, and community members. There is no obligation,
              and this does not constitute an application.
            </p>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                Please note
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Entry requirements, fees, program structures, and start dates
                have not yet been finalised. All such details are planned and
                subject to approval.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <InterestForm />
          </div>
        </div>
      </Section>
    </>
  )
}
