'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Zap, CheckCircle } from 'lucide-react';

export default function DualEscrowSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <div className="mb-4 inline-flex items-center space-x-2 rounded-full border border-success-400/30 bg-success-400/10 px-6 py-2">
                            <Shield className="h-4 w-4 text-success-400" />
                            <span className="text-sm font-medium text-white">
                                Industry-First Innovation
                            </span>
                        </div>
                        <h2 className="mb-4">
                            <span className="gradient-text">Dual Escrow System</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-slate-300">
                            Choose your comfort level. Traditional lawyer-held escrow for
                            senior executives, or cutting-edge blockchain smart contracts
                            for tech-savvy buyers.
                        </p>
                    </motion.div>

                    {/* Two Columns */}
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Traditional Escrow */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8"
                        >
                            <div className="mb-6 flex items-center space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-400/20">
                                    <Lock className="h-6 w-6 text-brand-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        Traditional Escrow
                                    </h3>
                                    <p className="text-sm text-slate-400">
                                        For C-Suite Executives
                                    </p>
                                </div>
                            </div>

                            <p className="mb-6 text-slate-300">
                                Funds held by licensed Ugandan lawyers in regulated bank
                                accounts. Perfect for corporate buyers, board members, and
                                those who prefer established financial systems.
                            </p>

                            <ul className="space-y-3">
                                {traditionalFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-400" />
                                        <span className="text-sm text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="glass-button mt-8 w-full">
                                Learn More About Traditional Escrow
                            </button>
                        </motion.div>

                        {/* Blockchain Escrow */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card relative overflow-hidden p-8"
                        >
                            {/* Premium Badge */}
                            <div className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-br from-accent-400 to-accent-600 px-4 py-2">
                                <span className="text-xs font-bold text-white">INNOVATIVE</span>
                            </div>

                            <div className="mb-6 flex items-center space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/20">
                                    <Zap className="h-6 w-6 text-accent-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        Blockchain Escrow
                                    </h3>
                                    <p className="text-sm text-slate-400">
                                        For Tech-Forward Buyers
                                    </p>
                                </div>
                            </div>

                            <p className="mb-6 text-slate-300">
                                Smart contract-powered escrow on verified blockchain.
                                Automatic release, instant settlements, and immutable
                                transaction records. Zero trust required.
                            </p>

                            <ul className="space-y-3">
                                {blockchainFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                                        <span className="text-sm text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="mt-8 w-full rounded-xl border border-accent-400/30 bg-accent-400/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-accent-400/20">
                                Explore Blockchain Escrow
                            </button>
                        </motion.div>
                    </div>

                    {/* Trust Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card mt-12 p-8 text-center"
                    >
                        <h4 className="mb-4 text-2xl font-bold text-white">
                            Your Choice. Your Comfort. Your Security.
                        </h4>
                        <p className="mx-auto max-w-3xl text-slate-300">
                            We understand that Fortune 500 executives and board members have
                            different preferences. That's why AJ24 MOTORS offers both
                            time-tested traditional escrow and innovative blockchain
                            solutions. Choose what works for you.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const traditionalFeatures = [
    'Lawyer verification by Uganda Law Society',
    'Regulated bank account holding',
    'Multi-party approval workflow',
    'Physical documentation & signatures',
    'Familiar process for corporate procurement',
    'Dispute resolution through legal channels',
];

const blockchainFeatures = [
    'Smart contract automation (zero manual errors)',
    'Instant fund release upon conditions met',
    'Immutable transaction history',
    'Lower fees (no intermediary commissions)',
    'Real-time status tracking 24/7',
    'Cryptographically secure & transparent',
];
