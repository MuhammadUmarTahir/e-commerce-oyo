/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "thumbs.dreamstime.com",
      "images.oyoroomscdn.com",
      "media.istockphoto.com",
      "cf.bstatic.com",
      "www.symbols.com",
      "cdn.pixabay.com",
    ],
  },
};

module.exports = nextConfig;
