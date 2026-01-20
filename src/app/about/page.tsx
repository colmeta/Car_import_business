import { Shield, Clock, Globe, Award } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | AJ24 MOTORS',
    description: 'The premier automotive import intelligence platform in East Africa.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="gradient-text">About AJ24 MOTORS</span>
                    </h1>
                    <p className="text-xl text-slate-300">
                        Redefining the automotive import experience for Uganda and East Africa.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="glass-card p-8 mb-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            To bridge the gap between discerning buyers in East Africa and the global automotive market.
                            We provide a seamless, transparent, and secure platform for importing premium vehicles,
                            leveraging technology to eliminate risks and ensure quality.
                        </p>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {values.map((value, index) => (
                        <div key={index} className="glass-card p-6 text-center">
                            <div className="h-12 w-12 mx-auto rounded-xl bg-brand-400/10 flex items-center justify-center text-brand-400 mb-4">
                                <value.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                            <p className="text-slate-400 text-sm">{value.description}</p>
                        </div>
                    ))}
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Import Intelligence</h2>
                        <p className="text-slate-300">
                            Founded on the principles of integrity and innovation, AJ24 MOTORS has quickly become
                            the trusted partner for individuals and corporations seeking high-quality vehicles
                            from Dubai, Japan, and Europe.
                        </p>
                        <p className="text-slate-300">
                            Our unique dual-escrow system ensures your funds are protected until your vehicle
                            is delivered and verified. We handle every step of the process, from sourcing and
                            inspection to shipping, clearing, and registration.
                        </p>
                    </div>
                    <div className="relative h-80 rounded-2xl overflow-hidden glass-card flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 to-slate-900/50 z-0" />
                        <span className="relative z-10 text-slate-500 font-mono text-sm">[Use Generate Image to add an Office or Team photo here]</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

const values = [
    {
        title: 'Transparency',
        description: 'Full visibility into costs, vehicle condition, and shipping status.',
        icon: Globe,
    },
    {
        title: 'Security',
        description: 'Bank-grade escrow protection for all financial transactions.',
        icon: Shield,
    },
    {
        title: 'Efficiency',
        description: 'Streamlined logistics reducing delivery times by up to 30%.',
        icon: Clock,
    },
    {
        title: 'Quality',
        description: 'Rigorous 100+ point inspection for every imported vehicle.',
        icon: Award,
    },
];
