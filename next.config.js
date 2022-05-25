/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GIPHY_API_KEY: "eFzHxVq9eJcaJvqPrPGFSSQIDh33ZvZx",
  },
  images: {
    domains: [
      "media4.giphy.com",
      "media1.giphy.com",
      "media2.giphy.com",
      "media3.giphy.com",
      "media0.giphy.com",
    ],
  },
};

module.exports = nextConfig;
