import { z } from 'zod'
import { applicationPrograms, intendedIntakes, studyLevels } from '@/lib/admissions'

const currentYear = new Date().getFullYear()
const requiredText = (label: string, maximum = 500) =>
  z.string().trim().min(1, `${label} is required`).max(maximum, `${label} is too long`)

const optionalText = (maximum: number) =>
  z
    .string()
    .trim()
    .max(maximum, `Must be ${maximum} characters or fewer`)
    .optional()
    .transform((value) => value || undefined)

export const ApplicationSchema = z.object({
  firstName: requiredText('First name', 100),
  lastName: requiredText('Last name', 100),
  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Enter a valid date of birth')
    .refine((value) => {
      const date = new Date(`${value}T00:00:00.000Z`)
      return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
    }, 'Enter a valid date of birth')
    .refine((value) => new Date(`${value}T00:00:00.000Z`) <= new Date(), 'Date of birth cannot be in the future'),
  nationality: requiredText('Nationality', 100),
  email: z.string().trim().email('Enter a valid email address').max(320),
  phone: requiredText('Phone', 50),
  address: requiredText('Address', 1000),
  program: z.enum(applicationPrograms, { message: 'Select a supported program' }),
  studyLevel: z.enum(studyLevels, { message: 'Select a supported study level' }),
  intendedIntake: z.enum(intendedIntakes, { message: 'Select a supported intake' }),
  previousSchool: requiredText('Previous school', 300),
  qualification: requiredText('Qualification', 300),
  completionYear: z
    .number({ message: 'Enter a valid completion year' })
    .int('Completion year must be a whole year')
    .min(1950, 'Completion year is too early')
    .max(currentYear, `Completion year cannot be later than ${currentYear}`),
  academicResults: requiredText('Academic results', 4000),
  activities: optionalText(2000),
  testScores: optionalText(2000),
  personalStatement: optionalText(5000),
  confirmedAccuracy: z.literal(true, { message: 'You must confirm that the application is accurate' }),
})

export type ApplicationInput = z.input<typeof ApplicationSchema>
export type ValidatedApplication = z.output<typeof ApplicationSchema>
