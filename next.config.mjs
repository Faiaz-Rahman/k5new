/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: [
//             'www.mathworksheets4kids.com',
//             'ficnupxsgxoxznfksnye.supabase.co',
//         ],
//         formats: [
//             'image/png',
//             'image/jpeg',
//             'image/svg+xml',
//             'image/webp',
//         ],
//     },
// }

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['www.mathworksheets4kids.com'],
    remotePatterns: [
      {
        protocolL: 'https',
        hostname: 'ficnupxsgxoxznfksnye.supabase.co',
      },
    ],
  },
}

export default nextConfig
