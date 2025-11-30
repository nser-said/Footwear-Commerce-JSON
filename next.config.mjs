
import NextPWA from 'next-pwa';

const withPWA = NextPWA({
  dest: 'public',
});

const config = {
  reactStrictMode: true,
  // other settings
  turbopack: {}, // Enable Turbopack with default settings
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withPWA(config);
