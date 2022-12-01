/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
};

module.exports = {
	nextConfig,
	images: {
		domains: [
			"images.ctfassets.net",
			"assets.ctfassets.net",
			"images.ctfassets.net",
			"akaautomotive.co.uk",
		],
	},
};
