import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/((?!api|_next/static|_next/image|favicon\\.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "cinematicsystems.vercel.app" }],
        destination: "https://www.cinematicsystems.co.za/:path*",
        permanent: true,
      },
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
