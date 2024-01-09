/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GMAIL_PASS: process.env.GMAIL_PASS,
  },
};

module.exports = nextConfig;
