'use client';

import { motion } from 'framer-motion';
import { Search, ArrowRight, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
                <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />
            </div>

            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-5xl text-center">
                    {/* Tagline Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 inline-flex items-center space-x-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-6 py-2 backdrop-blur-sm"
                    >
                        <Shield className="h-4 w-4 text-brand-400" />
                        <span className="text-sm font-medium text-white">
                            Africa's First Dual-Escrow Auto Platform
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6"
                    >
                        <span className="gradient-text block">Import Intelligence.</span>
                        <span className="block text-white">Drive Excellence.</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mx-auto mb-12 max-w-2xl text-xl text-slate-300"
                    >
                        Premium automotive marketplace for importing vehicles from Dubai.
                        Fortune 500-level platform with blockchain escrow, 3D visualization,
                        and executive portals.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-16 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                    >
                        <Link
                            href="/inventory"
                            className="glass-button group inline-flex items-center space-x-2"
                        >
                            <span>Browse Inventory</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/corporate"
                            className="glass-button inline-flex items-center space-x-2 border-accent-400/30 bg-accent-400/10 hover:bg-accent-400/20"
                        >
                            <TrendingUp className="h-4 w-4" />
                            <span>Corporate Solutions</span>
                        </Link>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass-card mx-auto max-w-3xl p-2"
                    >
                        <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search by make, model, or year..."
                                    className="premium-input pl-12"
                                />
                            </div>
                            <select className="premium-input w-full sm:w-auto">
                                <option>All Prices</option>
                                <option>Under $30K</option>
                                <option>$30K - $50K</option>
                                <option>$50K - $100K</option>
                                <option>$100K+</option>
                            </select>
                            <button
                                type="submit"
                                className="glass-button whitespace-nowrap px-8"
                            >
                                Search
                            </button>
                        </form>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-white md:text-4xl">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const stats = [
    { value: '500+', label: 'Vehicles Imported' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '3-5', label: 'Weeks Delivery' },
    { value: '$5M+', label: 'Savings Generated' },
];
