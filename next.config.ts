import type { NextConfig } from 'next';

const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
