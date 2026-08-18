import 'dotenv/config'
import { defineConfig } from 'prisma/config'

// Use process.env here so `prisma generate` can run without DATABASE_URL
// being set. Do NOT commit real credentials; developers should set
// DATABASE_URL in their local `.env` or environment prior to running
// migration commands.
export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL ?? '',
  },
})
