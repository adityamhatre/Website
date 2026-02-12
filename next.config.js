// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  output: "export", // ✅ Next 15 static export
  trailingSlash: true, // ✅ makes /valentine-app/ map nicely
  images: {
    unoptimized: true, // ✅ required for static export if using next/image
    domains: [
      "avatars.githubusercontent.com",
      "www.zimperium.com",
      "www.cbre.com",
    ],
  },
  reactStrictMode: false,
});
