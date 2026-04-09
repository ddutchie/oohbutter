import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/oohbutter",
  assetPrefix: "/oohbutter",
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
