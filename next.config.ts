import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd && !isCustomDomain ? "/oohbutter" : "",
  assetPrefix: isProd && !isCustomDomain ? "/oohbutter" : "",
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
