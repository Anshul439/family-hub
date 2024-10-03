/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['northbristolcc.org.uk', 'scontent-fra5-2.xx.fbcdn.net'],
  },
  async rewrites() {
    return [
      {
        source: "/api/hello",
        destination: "http://localhost:8000/api/hello",
      },
    ];
  },
};

export default nextConfig;
