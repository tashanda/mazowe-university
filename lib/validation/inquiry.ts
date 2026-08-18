import { z } from 'zod'

export const interests = [
  'Undergraduate study (future)',
  'Postgraduate / research (future)',
  'Partnership or collaboration',
  'Community / extension programs',
  'General updates',
] as const

export const InquirySchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional().nullable(),
  interest: z.enum([...interests] as any),
  message: z.string().max(2000).optional().nullable(),
})

export type InquiryInput = z.infer<typeof InquirySchema>
