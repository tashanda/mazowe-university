'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import {
  applicationPrograms,
  intendedIntakeLabels,
  intendedIntakes,
  studyLevelLabels,
  studyLevels,
} from '@/lib/admissions'
import { ApplicationSchema } from '@/lib/validation/application'

const fieldClasses =
  'mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40'
const labelClasses = 'text-sm font-medium text-foreground'

function optional(value: FormDataEntryValue | null) {
  const text = String(value ?? '').trim()
  return text || undefined
}

export function ApplicationForm() {
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [applicationId, setApplicationId] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting) return

    setFormError(null)
    setFieldErrors({})
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      firstName: String(data.get('firstName') ?? '').trim(),
      lastName: String(data.get('lastName') ?? '').trim(),
      dateOfBirth: String(data.get('dateOfBirth') ?? ''),
      nationality: String(data.get('nationality') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      address: String(data.get('address') ?? '').trim(),
      program: String(data.get('program') ?? ''),
      studyLevel: String(data.get('studyLevel') ?? ''),
      intendedIntake: String(data.get('intendedIntake') ?? ''),
      previousSchool: String(data.get('previousSchool') ?? '').trim(),
      qualification: String(data.get('qualification') ?? '').trim(),
      completionYear: Number(data.get('completionYear')),
      academicResults: String(data.get('academicResults') ?? '').trim(),
      activities: optional(data.get('activities')),
      testScores: optional(data.get('testScores')),
      personalStatement: optional(data.get('personalStatement')),
      confirmedAccuracy: data.get('confirmedAccuracy') === 'on',
    }

    const parsed = ApplicationSchema.safeParse(payload)
    if (!parsed.success) {
      const errors: Record<string, string> = {}
      for (const issue of parsed.error.issues) {
        const field = String(issue.path[0] ?? 'form')
        errors[field] ??= issue.message
      }
      setFieldErrors(errors)
      setFormError('Please correct the highlighted fields and submit again.')
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })
      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.id) {
        setFormError(result?.error || 'Your application could not be submitted. Please try again.')
        return
      }

      setApplicationId(result.id)
      form.reset()
    } catch {
      setFormError('A network error prevented submission. Your entered information has been preserved.')
    } finally {
      setSubmitting(false)
    }
  }

  if (applicationId) {
    return (
      <div role="status" className="rounded-xl border border-primary/25 bg-primary/5 p-6 sm:p-8">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-2xl font-semibold">Application submitted</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
          Your application has been received and recorded. Keep the reference below for your records.
        </p>
        <p className="mt-5 rounded-md border border-border bg-background px-4 py-3 font-mono text-sm break-all">
          Reference: {applicationId}
        </p>
        <button type="button" onClick={() => setApplicationId(null)} className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline">
          Submit another application
        </button>
      </div>
    )
  }

  const errorFor = (field: string) =>
    fieldErrors[field] ? <p id={`${field}-error`} className="mt-1.5 text-sm text-destructive">{fieldErrors[field]}</p> : null
  const describedBy = (field: string) => (fieldErrors[field] ? `${field}-error` : undefined)

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {formError && <div role="alert" className="rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">{formError}</div>}

      <fieldset className="space-y-5">
        <legend className="text-xl font-semibold">Personal details</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First name" name="firstName" autoComplete="given-name" error={errorFor('firstName')} describedBy={describedBy('firstName')} />
          <Field label="Last name" name="lastName" autoComplete="family-name" error={errorFor('lastName')} describedBy={describedBy('lastName')} />
          <Field label="Date of birth" name="dateOfBirth" type="date" autoComplete="bday" error={errorFor('dateOfBirth')} describedBy={describedBy('dateOfBirth')} />
          <Field label="Nationality" name="nationality" autoComplete="country-name" error={errorFor('nationality')} describedBy={describedBy('nationality')} />
        </div>
      </fieldset>

      <fieldset className="space-y-5 border-t border-border pt-8">
        <legend className="text-xl font-semibold">Contact details</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email address" name="email" type="email" autoComplete="email" error={errorFor('email')} describedBy={describedBy('email')} />
          <Field label="Phone number" name="phone" type="tel" autoComplete="tel" error={errorFor('phone')} describedBy={describedBy('phone')} />
        </div>
        <TextArea label="Residential address" name="address" rows={3} autoComplete="street-address" error={errorFor('address')} describedBy={describedBy('address')} />
      </fieldset>

      <fieldset className="space-y-5 border-t border-border pt-8">
        <legend className="text-xl font-semibold">Admissions details</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Select label="Program" name="program" options={applicationPrograms.map((value) => ({ value, label: value }))} error={errorFor('program')} describedBy={describedBy('program')} />
          <Select label="Study level" name="studyLevel" options={studyLevels.map((value) => ({ value, label: studyLevelLabels[value] }))} error={errorFor('studyLevel')} describedBy={describedBy('studyLevel')} />
        </div>
        <Select label="Intended intake" name="intendedIntake" options={intendedIntakes.map((value) => ({ value, label: intendedIntakeLabels[value] }))} error={errorFor('intendedIntake')} describedBy={describedBy('intendedIntake')} />
      </fieldset>

      <fieldset className="space-y-5 border-t border-border pt-8">
        <legend className="text-xl font-semibold">Education background</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Previous school" name="previousSchool" error={errorFor('previousSchool')} describedBy={describedBy('previousSchool')} />
          <Field label="Qualification" name="qualification" error={errorFor('qualification')} describedBy={describedBy('qualification')} />
          <Field label="Completion year" name="completionYear" type="number" inputMode="numeric" min="1950" max={String(new Date().getFullYear())} error={errorFor('completionYear')} describedBy={describedBy('completionYear')} />
        </div>
        <TextArea label="Academic results summary" name="academicResults" rows={5} placeholder="List subjects, grades, classifications, or other relevant results." error={errorFor('academicResults')} describedBy={describedBy('academicResults')} />
      </fieldset>

      <fieldset className="space-y-5 border-t border-border pt-8">
        <legend className="text-xl font-semibold">Additional context <span className="text-sm font-normal text-muted-foreground">(optional)</span></legend>
        <TextArea label="Activities" name="activities" rows={3} maxLength={2000} error={errorFor('activities')} describedBy={describedBy('activities')} />
        <TextArea label="Test scores" name="testScores" rows={3} maxLength={2000} error={errorFor('testScores')} describedBy={describedBy('testScores')} />
        <TextArea label="Personal statement" name="personalStatement" rows={7} maxLength={5000} error={errorFor('personalStatement')} describedBy={describedBy('personalStatement')} />
      </fieldset>

      <fieldset className="border-t border-border pt-8">
        <legend className="text-xl font-semibold">Declaration</legend>
        <label className="mt-5 flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-4 text-sm leading-6">
          <input name="confirmedAccuracy" type="checkbox" required aria-describedby={describedBy('confirmedAccuracy')} className="mt-1 size-4 accent-primary" />
          <span>I confirm that the information in this application is accurate and complete to the best of my knowledge.</span>
        </label>
        {errorFor('confirmedAccuracy')}
      </fieldset>

      <button type="submit" disabled={submitting} className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
        {submitting ? 'Submitting application…' : 'Submit application'}
      </button>
    </form>
  )
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string; name: string; error: React.ReactNode; describedBy?: string }
function Field({ label, name, error, describedBy, ...props }: FieldProps) {
  return <div><label htmlFor={name} className={labelClasses}>{label}</label><input id={name} name={name} required aria-invalid={Boolean(error)} aria-describedby={describedBy} className={fieldClasses} {...props} />{error}</div>
}

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; name: string; error: React.ReactNode; describedBy?: string }
function TextArea({ label, name, error, describedBy, ...props }: TextAreaProps) {
  return <div><label htmlFor={name} className={labelClasses}>{label}</label><textarea id={name} name={name} required={name === 'address' || name === 'academicResults'} aria-invalid={Boolean(error)} aria-describedby={describedBy} className={`${fieldClasses} resize-y`} {...props} />{error}</div>
}

type SelectProps = { label: string; name: string; options: ReadonlyArray<{ value: string; label: string }>; error: React.ReactNode; describedBy?: string }
function Select({ label, name, options, error, describedBy }: SelectProps) {
  return <div><label htmlFor={name} className={labelClasses}>{label}</label><select id={name} name={name} required defaultValue="" aria-invalid={Boolean(error)} aria-describedby={describedBy} className={fieldClasses}><option value="" disabled>Select an option</option>{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>{error}</div>
}
