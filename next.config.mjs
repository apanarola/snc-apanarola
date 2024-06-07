/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains: ['https://unsplash.com', "https://squarespace-cdn.com"],
    // hostname : "images.squarespace-cdn.com"
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',       
      },
    ]

  }
};


export default nextConfig;
