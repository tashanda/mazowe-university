import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { ApplicationSchema } from '@/lib/validation/application'

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'Application service unavailable' }, { status: 503 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = ApplicationSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 422 },
    )
  }

  try {
    const application = await prisma.application.create({
      data: {
        ...parsed.data,
        dateOfBirth: new Date(`${parsed.data.dateOfBirth}T00:00:00.000Z`),
      },
      select: { id: true },
    })

    return NextResponse.json({ ok: true, id: application.id }, { status: 201 })
  } catch {
    console.error('Application submission could not be saved')
    return NextResponse.json({ error: 'Application could not be submitted' }, { status: 500 })
  }
}
