import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

const config = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

export default { ...nextConfig, ...config };
