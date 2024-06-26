/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['cms.timurmakarov.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.timurmakarov.com',
        port: '443',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/uploads/**',
      },
    ],
  },
}
