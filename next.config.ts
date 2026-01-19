import type { NextConfig } from 'next';

const config: NextConfig = {
    reactStrictMode: true,

    images: {
        domains: [
            'localhost',
            // Add your Supabase project URL when ready
            // 'your-project.supabase.co',
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        minimumCacheTTL: 60,
    },

    experimental: {
        optimizePackageImports: ['lucide-react', 'recharts', 'framer-motion'],
    },

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
                ],
            },
        ];
    },
};

export default config;
