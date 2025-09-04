import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Remove this line - it's causing the path duplication
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),
  
  eslint: {
    // Ignore all ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    // Ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;