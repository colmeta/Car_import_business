import { Shield, Truck, Calendar, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How It Works | AJ24 MOTORS',
    description: 'Learn about our transparent, dual-escrow vehicle import process.',
};

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="gradient-text">Importing Made Simple</span>
                    </h1>
                    <p className="text-xl text-slate-300">
                        Our streamlined process ensures you get your dream car safely and efficiently.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="glass-card p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-brand-400">
                                {index + 1}
                            </div>
                            <div className="h-12 w-12 rounded-xl bg-brand-400/10 flex items-center justify-center text-brand-400 mb-6">
                                <step.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-slate-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

const steps = [
    {
        title: 'Select Your Vehicle',
        description: 'Browse our curated inventory or request a specific vehicle sourcing order.',
        icon: CheckCircle,
    },
    {
        title: 'Secure Payment',
        description: 'Funds are held in a secure dual-escrow account until terms are met.',
        icon: Shield,
    },
    {
        title: 'Shipping & Logistics',
        description: 'We handle all documentation, shipping, and customs clearance.',
        icon: Truck,
    },
    {
        title: 'Delivery & Handover',
        description: 'Receive your vehicle in Kampala within 3-5 weeks, fully inspected.',
        icon: Calendar,
    },
];
