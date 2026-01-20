import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | AJ24 MOTORS',
    description: 'Terms and conditions for using our platform.',
};

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
                <div className="glass-card p-8 space-y-6 text-slate-300">
                    <p>Last updated: January 2026</p>
                    <p>
                        By accessing AJ24 MOTORS, you agree to be bound by these terms of service.
                    </p>
                    <h2 className="text-xl font-bold text-white">1. Use of Service</h2>
                    <p>
                        Our platform is designed to facilitate the importation of vehicles. Users must provide accurate information.
                    </p>
                    <p className="italic text-sm text-slate-500">[Full legal text to be inserted here]</p>
                </div>
            </div>
        </main>
    );
}
