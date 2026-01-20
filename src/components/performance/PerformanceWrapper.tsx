'use client';

import dynamic from 'next/dynamic';

// Dynamically import performance monitor with SSR disabled
// This must be done in a Client Component to use ssr: false
const PerformanceMonitor = dynamic(
    () => import('./PerformanceMonitor'),
    { ssr: false }
);

export default function PerformanceWrapper() {
    return <PerformanceMonitor />;
}
