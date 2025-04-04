/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  // Add this configuration to add nonce to the script tags
  experimental: {
    strictNextHead: true
  }
};

module.exports = nextConfig;
