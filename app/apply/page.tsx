import type { Metadata } from 'next'
import { ApplicationForm } from '@/components/application-form'
import { PageHeader } from '@/components/page-header'
import { Section } from '@/components/section'

export const metadata: Metadata = {
  title: 'Apply',
  description: 'Submit a formal application for admission to Mazowe University of Agricultural Science.',
}

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        badge="Applications open"
        eyebrow="Admissions"
        title="Apply to Mazowe University"
        description="Complete the formal application below for the August 2027 intake. Review your information carefully before submitting."
      />
      <Section>
        <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-10">
          <ApplicationForm />
        </div>
      </Section>
    </>
  )
}
