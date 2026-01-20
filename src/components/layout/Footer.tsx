import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div>
                        <div className="mb-4 flex items-center space-x-3">
                            <img src="/images/logo.png" alt="AJ24 MOTORS" className="h-12 w-auto object-contain rounded-2xl" />
                            <div>
                                <h3 className="text-lg font-bold text-white">AJ24 MOTORS</h3>
                                <p className="text-xs text-slate-400">Import Intelligence</p>
                            </div>
                        </div>
                        <p className="mb-6 text-sm text-slate-400">
                            World-class automotive marketplace for importing premium vehicles from Dubai to Uganda.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-all hover:bg-brand-400/20 hover:text-brand-400"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-400 transition-colors hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-sm text-slate-400 transition-colors hover:text-white"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-brand-400" />
                                <span className="text-sm text-slate-400">
                                    Kampala, Uganda<br />
                                    [Your Address]
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 flex-shrink-0 text-brand-400" />
                                <a
                                    href="tel:+256xxxxxxxxx"
                                    className="text-sm text-slate-400 hover:text-white"
                                >
                                    +256 XXX XXX XXX
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 flex-shrink-0 text-brand-400" />
                                <a
                                    href="mailto:info@aj24motors.com"
                                    className="text-sm text-slate-400 hover:text-white"
                                >
                                    info@aj24motors.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <p className="text-sm text-slate-400">
                            © 2026 AJ24 MOTORS UG LIMITED. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-slate-400 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
];

const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

const services = [
    { name: 'Direct Import & Retail', href: '/services/retail' },
    { name: 'Pre-Order Service', href: '/services/pre-order' },
    { name: 'Corporate Fleet Solutions', href: '/services/corporate' },
    { name: 'Inspection & Documentation', href: '/services/inspection' },
    { name: 'Financing Options', href: '/services/financing' },
];

const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Escrow Agreement', href: '/escrow-terms' },
];
