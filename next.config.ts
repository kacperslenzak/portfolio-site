import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "**"
      }
    ],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
