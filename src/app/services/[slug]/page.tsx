import { Car, Shield, CircleDollarSign, FileCheck } from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return {
        title: `${title} | AJ24 MOTORS`,
        description: `Premium ${title} services by AJ24 MOTORS.`,
    };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    // Simple mapping for demo purposes
    const serviceDetails: Record<string, any> = {
        'retail': {
            title: 'Direct Import & Retail',
            description: 'Choose from our curated selection of high-quality vehicles already in transit or available locally.',
            icon: Car
        },
        'pre-order': {
            title: 'Pre-Order Service',
            description: 'Specify your exact requirements and let us source the perfect vehicle for you from our global network.',
            icon: FileCheck
        },
        'corporate': {
            title: 'Corporate Fleet Solutions',
            description: 'Comprehensive fleet management and acquisition services for businesses of all sizes.',
            icon: Shield
        },
        'inspection': {
            title: 'Inspection & Documentation',
            description: ' rigorous 100+ point inspection process and complete handling of all import documentation.',
            icon: Shield
        },
        'financing': {
            title: 'Financing Options',
            description: 'Flexible payment plans and financing partnerships to make your dream car a reality.',
            icon: CircleDollarSign
        }
    };

    const service = serviceDetails[slug] || {
        title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        description: 'Premium automotive service.',
        icon: Car
    };

    const Icon = service.icon;

    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <div className="inline-flex items-center justify-center p-4 bg-brand-400/10 rounded-2xl mb-6 text-brand-400">
                        <Icon className="h-10 w-10" />
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="gradient-text">{service.title}</span>
                    </h1>
                    <p className="text-xl text-slate-300">
                        {service.description}
                    </p>
                </div>

                <div className="glass-card p-8 max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Interested in this service?</h2>
                    <p className="text-slate-400 mb-8">
                        Contact our team today to discuss your specific needs and get a personalized quote.
                    </p>
                    <a href="/contact" className="glass-button inline-flex items-center space-x-2">
                        <span>Contact Us</span>
                    </a>
                </div>
            </div>
        </main>
    );
}
