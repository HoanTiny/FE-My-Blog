import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   images: {
  //     domains: ['www.google.com'],
  //   },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fansport.vn',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
