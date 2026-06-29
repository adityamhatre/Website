// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  buildExcludes: [/dynamic-css-manifest\.json$/],
  publicExcludes: [
    "!street-fight/**/*",
    "!office-dvd/**/*",
    "!solar-system/**/*",
    "!audio-visualizer/**/*",
    "!pb/**/*",
    "!qr/**/*",
    "!valentine-app/**/*",
  ],
});

module.exports = withPWA({
  output: "export", // ✅ Next 15 static export
  trailingSlash: true, // ✅ makes /valentine-app/ map nicely
  images: {
    unoptimized: true, // ✅ required for static export if using next/image
  },
  reactStrictMode: false,
});
