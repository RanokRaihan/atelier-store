import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Sample catalog imagery is served from Unsplash until products live in the DB.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
  },
};

export default nextConfig;
