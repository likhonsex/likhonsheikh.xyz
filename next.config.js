/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
  // Disable x-powered-by header for security
  xpoweredByHeader: false,
  // Asset prefix for better caching (optional for CDN)
  // assetPrefix: 'https://cdn.yourdomain.com',
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|ico|ttf|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
