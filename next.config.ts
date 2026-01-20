import type { NextConfig } from 'next';

const config: NextConfig = {
    reactStrictMode: true,

    // Performance: Image optimization
    images: {
        domains: [
            'localhost',
            // Add your Supabase project URL when ready
            // 'your-project.supabase.co',
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Performance: Optimize package imports for faster builds
    experimental: {
        optimizePackageImports: ['lucide-react', 'recharts', 'framer-motion', '@react-three/fiber', '@react-three/drei'],
    },

    // Performance: Compression
    compress: true,

    // Performance: Reduce page data size
    poweredByHeader: false,

    env: {
        NEXT_PUBLIC_APP_NAME: 'AJ24 MOTORS',
        NEXT_PUBLIC_APP_TAGLINE: 'Import Intelligence. Drive Excellence.',
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    },

    // Security headers - Fortune 500 level
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    // Performance: Cache static assets
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                // Performance: Prefetch DNS for external resources
                source: '/',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                ],
            },
        ];
    },
};

export default config;
