/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Add these settings to handle server rendering issues
  output: 'export',  // Use static export instead of SSR
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 