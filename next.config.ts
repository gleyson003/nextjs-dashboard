// next.config.mjs ou next.config.ts com suporte ESM

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
