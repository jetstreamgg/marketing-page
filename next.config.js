/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live/ https://vercel.com https://static.cloudflareinsights.com https://*.sentry.io https://*.markfi.xyz https://*.posthog.com;
    connect-src 'self'
      https://cloudflareinsights.com
      https://cloudflare-eth.com
      https://staging-api.sky.money
      https://api.sky.money
      https://api.ipify.org
      https://vercel.live/
      https://vercel.com
      wss://ws-us3.pusher.com
      *.pusher.com
      *.pusherapp.com
      https://*.sentry.io
      https://*.ingest.sentry.io
      https://*.markfi.xyz
      https://*.posthog.com;
    style-src 'self' https://vercel.live 'unsafe-inline';
    img-src 'self' data: blob: https://vercel.live https://vercel.com;
    font-src 'self' https://vercel.live https://assets.vercel.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
    frame-src 'self'
      https://vercel.live/
      https://vercel.com
`;

const nextConfig = {
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '')
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/careers',
        destination: 'https://jobs.ashbyhq.com/skyecosystem',
        permanent: false
      }
    ];
  }
};

// Sentry configuration options
const sentryWebpackPluginOptions = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // Only upload source maps in production builds
  silent: process.env.NODE_ENV !== 'production',

  // Upload source maps for better stack traces
  // Requires SENTRY_AUTH_TOKEN environment variable
  sourcemaps: {
    deleteSourcemapsAfterUpload: true
  },

  // Automatically tree-shake Sentry logger statements
  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    treeshake: {
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      removeDebugLogging: true
    }
  },

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Route browser requests to Sentry through a Next.js rewrite to avoid ad-blockers
  tunnelRoute: '/monitoring'
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
