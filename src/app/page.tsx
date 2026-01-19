import { Suspense } from 'react';
import Hero from '@/components/home/Hero';
import FeaturedInventory from '@/components/home/FeaturedInventory';
import DualEscrowSection from '@/components/home/DualEscrowSection';
import { HowItWorks, ExecutivePortal, Testimonials, CTASection } from '@/components/home/PlaceholderSections';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Header />

            {/* Hero Section */}
            <Suspense fallback={<HeroSkeleton />}>
                <Hero />
            </Suspense>

            {/* Featured Vehicles */}
            <Suspense fallback={<InventorySkeleton />}>
                <FeaturedInventory />
            </Suspense>

            {/* How It Works */}
            <HowItWorks />

            {/* Dual Escrow System (USP) */}
            <DualEscrowSection />

            {/* Executive/Corporate Portal Preview */}
            <ExecutivePortal />

            {/* Social Proof */}
            <Suspense fallback={<TestimonialsSkeleton />}>
                <Testimonials />
            </Suspense>

            {/* CTA */}
            <CTASection />

            <Footer />
        </main>
    );
}

// Loading Skeletons
function HeroSkeleton() {
    return (
        <div className="container mx-auto px-4 py-32">
            <div className="skeleton mx-auto h-96 w-full max-w-6xl rounded-2xl" />
        </div>
    );
}

function InventorySkeleton() {
    return (
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="skeleton h-96 rounded-2xl" />
            ))}
        </div>
    );
}

function TestimonialsSkeleton() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="skeleton mx-auto h-64 w-full max-w-4xl rounded-2xl" />
        </div>
    );
}
