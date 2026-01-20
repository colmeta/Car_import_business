import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Escrow Agreement | AJ24 MOTORS',
    description: 'Details of our dual-escrow protection system.',
};

export default function EscrowTermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8 text-white">Escrow Agreement</h1>
                <div className="glass-card p-8 space-y-6 text-slate-300">
                    <p>Last updated: January 2026</p>
                    <p>
                        Our Dual-Escrow system is designed to protect both the buyer and the seller during the transaction process.
                    </p>
                    <h2 className="text-xl font-bold text-white">1. Fund Holding</h2>
                    <p>
                        Funds are held in a secure, neutral account until all specified inspection and shipping conditions are met.
                    </p>
                    <p className="italic text-sm text-slate-500">[Full legal text to be inserted here]</p>
                </div>
            </div>
        </main>
    );
}
