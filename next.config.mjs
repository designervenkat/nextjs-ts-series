/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(self "https://www.megabyte.mu"), microphone=(self "https://www.megabyte.mu"), geolocation=(self "https://www.megabyte.mu"), microphone=(self "https://www.megabyte.mu")',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.megabyte.mu',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: '',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
