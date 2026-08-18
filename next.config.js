/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/case-studies',
        destination: '/insights/case-studies',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
