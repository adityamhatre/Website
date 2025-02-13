const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
	output: 'export',
	reactStrictMode: false,
	images: {
		domains: ["avatars.githubusercontent.com", "www.zimperium.com", "www.cbre.com"],
	}
});