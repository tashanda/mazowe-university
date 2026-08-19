# Mazowe University Technology Platform

A full-stack university technology platform built for Mazowe University of Agricultural Science in Zimbabwe.

The platform combines a public-facing university website with an evolving admissions and administrative system. The current version supports persistent prospective-student inquiries through a validated Next.js API and PostgreSQL database, with future development focused on admissions operations, automation, analytics, and AI-assisted workflows.

## Current Features

### Public University Website
- Responsive university website built with Next.js and React
- Academic programs, research, admissions, community, and institutional pages
- Reusable component-based UI
- Responsive navigation and mobile layouts

### Inquiry Management System
- Prospective-student interest form
- Client-side and server-side validation with Zod
- Next.js API endpoint for inquiry submissions
- Persistent PostgreSQL storage
- Prisma ORM for database access
- Inquiry workflow statuses:
  - NEW
  - CONTACTED
  - QUALIFIED
  - CLOSED
- Loading, validation, success, and error states
- Protection against invalid submissions reaching the database

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js App Router / Route Handlers
- Zod

### Database
- PostgreSQL
- Supabase
- Prisma ORM

### Development
- pnpm
- ESLint
- Git / GitHub

## Architecture

The inquiry system currently follows this request flow:

Prospective Student
        ↓
Interest Form
        ↓
Client Validation (Zod)
        ↓
POST /api/inquiries
        ↓
Server Validation (Zod)
        ↓
Prisma ORM
        ↓
PostgreSQL
        ↓
Persistent Inquiry Record
        ↓
API Response
        ↓
Success / Error UI

The application intentionally validates submissions on both the client and server. Client validation improves user experience, while server validation protects data integrity because client-side validation can be bypassed.

## Database Model

The current `Inquiry` model stores:

- Unique inquiry ID
- First name
- Last name
- Email
- Optional phone number
- Area of interest
- Optional message
- Workflow status
- Creation timestamp
- Last-updated timestamp

Database schema changes are managed through Prisma migrations.

## Current Development

The platform is under active development.

Current engineering focus:

- Administrative inquiry management
- Protected administrative routes
- Inquiry status workflows
- Production deployment and hardening

## Planned Development

Future versions are planned to expand the platform with:

- Admissions workflow management
- Automated applicant follow-up
- Scheduling and CRM integrations
- Document intelligence
- AI-assisted inquiry routing and student support
- Operational analytics
- Enrollment and student-success machine learning systems

These capabilities will be introduced incrementally as operational requirements are validated rather than as disconnected AI features.

## Local Development

Clone the repository and install dependencies:

    pnpm install

Create a local environment file with the required database configuration.

Example:

    DATABASE_URL="postgresql://..."

Never commit production credentials or local `.env` files.

Generate the Prisma client:

    pnpm exec prisma generate

Run the development server:

    pnpm run dev

Then open the local development URL shown by Next.js.

## Quality Checks

Before changes are merged, the project can be verified with:

    pnpm run lint
    pnpm exec tsc --noEmit
    pnpm run build

## Project Status

Active development.

The current version includes a functioning end-to-end persistent inquiry workflow:

    Browser → API → Validation → ORM → PostgreSQL → Response → UI

Additional administrative and admissions capabilities are being developed incrementally.
