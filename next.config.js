/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Portfolio demo: keep every response out of search engines.
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

module.exports = nextConfig;
