const { redirect } = require("next/dist/server/api-utils");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "workoutlabs.com",
      "cdn-xi3mbccdkztvoept8hl.netdna-ssl.com",
      "fitnessstars.weebly.com",
      "www.belson.com",
    ],
  },
};

// paste under the images bracket should redirect to login page if user is not automatically taken to /application/username via router.push (in theory)

// async redirects() {
//   return [
//     {
//       source: "/app",
//       destination: "/login",
//       permanent: true,
//     },
//   ];
// },
