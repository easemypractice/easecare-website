/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: { staticFolder: '/sanity.config.js',},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "easecare.sanity.studio",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
