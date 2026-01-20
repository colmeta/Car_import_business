'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formState);
        alert('Thank you for your message. We will get back to you shortly.');
    };

    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="gradient-text">Get in Touch</span>
                    </h1>
                    <p className="text-xl text-slate-300">
                        Have questions about importing your dream car? We're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 rounded-xl bg-brand-400/10 flex items-center justify-center text-brand-400 flex-shrink-0">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                                        <p className="text-slate-400">
                                            Kampala, Uganda<br />
                                            [Your Physical Address]
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 rounded-xl bg-brand-400/10 flex items-center justify-center text-brand-400 flex-shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Call Us</h4>
                                        <p className="text-slate-400">+256 XXX XXX XXX</p>
                                        <p className="text-slate-500 text-sm">Mon - Sat, 8am - 6pm</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 rounded-xl bg-brand-400/10 flex items-center justify-center text-brand-400 flex-shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Email Us</h4>
                                        <p className="text-slate-400">info@aj24motors.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="premium-input w-full"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="premium-input w-full"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Subject</label>
                                <input
                                    type="text"
                                    required
                                    className="premium-input w-full"
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    className="premium-input w-full"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    placeholder="Tell us more about your inquiry..."
                                />
                            </div>
                            <button type="submit" className="glass-button w-full flex items-center justify-center space-x-2">
                                <Send className="h-4 w-4" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
