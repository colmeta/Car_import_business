import type { Metadata } from 'next';
import { Inter, Poppins, Space_Grotesk } from 'next/font/google';
import PerformanceWrapper from '@/components/performance/PerformanceWrapper';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'AJ24 MOTORS | Import Intelligence. Drive Excellence.',
        template: '%s | AJ24 MOTORS',
    },
    description: 'Premium automotive marketplace for importing and selling vehicles from Dubai to Uganda. Fortune 500-level platform with dual escrow system, 3D vehicle visualization, and executive portals.',
    keywords: [
        'car import Uganda',
        'Dubai cars Kampala',
        'vehicle import',
        'AJ24 MOTORS',
        'premium automotive',
        'car marketplace Uganda',
        'fleet vehicles',
        'corporate vehicles Uganda',
    ],
    authors: [{ name: 'AJ24 MOTORS UG LIMITED' }],
    creator: 'AJ24 MOTORS',
    publisher: 'AJ24 MOTORS UG LIMITED',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_UG',
        url: 'https://aj24motors.com',
        title: 'AJ24 MOTORS | Import Intelligence. Drive Excellence.',
        description: 'Premium automotive marketplace for importing vehicles from Dubai to Uganda',
        siteName: 'AJ24 MOTORS',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AJ24 MOTORS',
        description: 'Import Intelligence. Drive Excellence.',
        creator: '@aj24motors',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
    verification: {
        google: 'your-google-verification-code',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-sans`}
                suppressHydrationWarning
            >
                {children}
                <PerformanceWrapper />
            </body>
        </html>
    );
}
