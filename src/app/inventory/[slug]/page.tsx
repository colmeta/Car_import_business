import { getVehicleBySlug } from '@/lib/data/vehicles';
import { notFound } from 'next/navigation';
import VehicleDetailClient from './VehicleDetailClient';

// Server Component (Default in Next.js App Router)
// Properly handles async params in Next.js 15
export default async function VehicleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    // Await params to get slug (Next.js 15 requirement)
    const { slug } = await params;
    const vehicle = getVehicleBySlug(slug);

    if (!vehicle) {
        notFound();
    }

    // Pass data to Client Component
    return <VehicleDetailClient vehicle={vehicle} />;
}
