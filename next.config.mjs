/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    // Use an absolute path for turbopack.root to ensure Turbopack compiles the correct project directory
    root: resolve(__dirname),
  },
}

export default nextConfig
