/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      "images.ctfassets.net",
      "assets.ctfassets.net",
      "images.ctfassets.net",
    ],
  },
};
