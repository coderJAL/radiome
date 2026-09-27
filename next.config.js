/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/listen",
        destination: "https://freestream.hu:9500/radiome",
      },
    ];
  },
};

module.exports = nextConfig;