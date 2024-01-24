/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
    },
    env: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
   // output: "export",
    swcMinify: true,
  };

export default nextConfig;
