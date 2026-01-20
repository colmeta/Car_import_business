import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | AJ24 MOTORS',
    description: 'Our commitment to protecting your data.',
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
                <div className="glass-card p-8 space-y-6 text-slate-300">
                    <p>Last updated: January 2026</p>
                    <p>
                        At AJ24 MOTORS, we take your privacy seriously. This policy outlines how we collect,
                        use, and protect your personal information.
                    </p>
                    <h2 className="text-xl font-bold text-white">1. Information Collection</h2>
                    <p>
                        We collect information necessary to process your vehicle orders and inquiries, including name, contact details, and vehicle preferences.
                    </p>
                    <p className="italic text-sm text-slate-500">[Full legal text to be inserted here]</p>
                </div>
            </div>
        </main>
    );
}
