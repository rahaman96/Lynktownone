/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "api.persue.lesoft.io", "api.cdcs.lesoft.io"],
    loader: "akamai",
    path: "",
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      tls: false,
      net: false,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
