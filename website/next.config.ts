import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Vercel preview → www
      {
        source: "/:path*",
        has: [{ type: "host", value: "cinematicsystems.vercel.app" }],
        destination: "https://www.cinematicsystems.co.za/:path*",
        permanent: true,
      },
      // non-www → www
      {
        source: "/:path*",
        has: [{ type: "host", value: "cinematicsystems.co.za" }],
        destination: "https://www.cinematicsystems.co.za/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
