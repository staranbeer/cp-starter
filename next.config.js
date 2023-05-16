const path = require("path");
// const { withSentryConfig } = require('@sentry/nextjs');
// const withPlugins = require('next-compose-plugins');

/** @type {import('next').NextConfig} */
const PRODUCTION_CONFIG = {
  output: "standalone",
  transpilePackages: ["@jengaicons/react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.boringavatars.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gitlab.com",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  swcMinify: true,
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
    removeConsole: false,
  },
  experimental: {
    isrMemoryCacheSize: 0,
  },
};

/** @type {import('next').NextConfig} */
const DEVELOPMENT_CONFIG = {
  transpilePackages: ["@jengaicons/react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.boringavatars.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gitlab.com",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  swcMinify: true,
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
    removeConsole: false,
  },
};

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return DEVELOPMENT_CONFIG;
  }

  return PRODUCTION_CONFIG;
};
