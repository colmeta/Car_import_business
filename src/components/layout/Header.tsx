'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Corporate', href: '/corporate' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'glass-card border-b border-white/10 backdrop-blur-xl'
                : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <img src="/images/logo.png" alt="AJ24 MOTORS" className="h-12 w-auto object-contain rounded-2xl" />
                    <div className="block">
                        <h1 className="text-xl font-bold text-white">AJ24 MOTORS</h1>
                        <p className="text-xs text-slate-400">Import Intelligence</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center space-x-8 lg:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Contact Info & CTA */}
                <div className="hidden items-center space-x-4 lg:flex">
                    <a
                        href="tel:+256xxxxxxxxx"
                        className="flex items-center space-x-2 text-sm text-slate-300 hover:text-white"
                    >
                        <Phone className="h-4 w-4" />
                        <span>+256 XXX XXX XXX</span>
                    </a>
                    <Link
                        href="/contact"
                        className="glass-button px-6 py-2 text-sm"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden"
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6 text-white" />
                    ) : (
                        <Menu className="h-6 w-6 text-white" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="glass-card border-t border-white/10 lg:hidden"
                    >
                        <div className="container mx-auto space-y-4 px-4 py-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-lg font-medium text-white hover:text-brand-400"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="space-y-3 border-t border-white/10 pt-4">
                                <a
                                    href="tel:+256xxxxxxxxx"
                                    className="flex items-center space-x-2 text-white"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>+256 XXX XXX XXX</span>
                                </a>
                                <Link
                                    href="/contact"
                                    className="glass-button block w-full text-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
