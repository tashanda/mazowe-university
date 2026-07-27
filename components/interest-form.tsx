"use client"
/// <reference types="react" />

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const interests = [
  'Undergraduate study (future)',
  'Postgraduate / research (future)',
  'Partnership or collaboration',
  'Community / extension programs',
  'General updates',
]

const fieldClasses =
  'w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40'
const labelClasses = 'text-sm font-medium text-foreground'

export function InterestForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-lg border border-primary/25 bg-primary/5 p-8"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          Thank you for your interest
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Your details have been recorded for our development records. As a
          proposed institution, we are not yet accepting formal applications,
          but the team will keep registered contacts informed as plans
          progress.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Submit another response
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className={labelClasses}>
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className={fieldClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className={labelClasses}>
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClasses}>
            Phone{' '}
            <span className="font-normal text-muted-foreground">
              (optional)
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="interest" className={labelClasses}>
          I am interested in
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue=""
          className={cn(fieldClasses, 'appearance-none')}
        >
          <option value="" disabled>
            Select an option
          </option>
          {interests.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClasses}>
          Message{' '}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={cn(fieldClasses, 'resize-y')}
          placeholder="Tell us a little about your interest in the university."
        />
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        This is an expression of interest, not a formal application. The
        university is a proposed institution under development.
      </p>

      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-medium tracking-wide text-primary-foreground transition-colors outline-none hover:bg-primary-deep focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
      >
        Register Interest
      </button>
    </form>
  )
}
