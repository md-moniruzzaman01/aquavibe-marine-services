import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aquavibemarineservices.com', // Replace with your image provider's domain
        port: '',
        pathname: '/**', // Allows all paths from this domain
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Common example
      },
    ],
  },
};

export default nextConfig;
