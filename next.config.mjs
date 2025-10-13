const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "augjllolpzqqkqwxjcip.supabase.co",
      },
    ],
  },
};

export default nextConfig;