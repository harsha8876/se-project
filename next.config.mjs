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
  output: 'standalone',
};

export default nextConfig;