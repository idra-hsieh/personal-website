import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**", // covers both top-level and inline Sanity images
      },
    ],
  },

  typescript: {
    // Skip type errors during production build
    ignoreBuildErrors: true,
  },

  eslint: {
    // Optional: silence ESLint warnings during Vercel builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
