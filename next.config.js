const { withFaust, getWpHostname } = require('@faustwp/core');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["node_modules"],
  },
  images: {
    domains: [getWpHostname()],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://hxqb5793ls140qw65x8rzcoms.js.wpenginepowered.com"
      : undefined,
});
