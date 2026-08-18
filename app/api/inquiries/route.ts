import { NextResponse } from 'next/server'
import { InquirySchema } from '@/lib/validation/inquiry'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'DATABASE_URL not configured' }, { status: 503 })
  }

  let body: any
  try {
    body = await request.json()
  } catch (e) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = InquirySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 422 })
  }

  try {
    const created = await prisma.inquiry.create({ data: parsed.data })
    return NextResponse.json({ ok: true, id: created.id })
  } catch (e) {
    console.error('Inquiry save failed', e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
