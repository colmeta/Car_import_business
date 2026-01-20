'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Eye, ArrowRight } from 'lucide-react';
import { vehicles } from '@/lib/data/vehicles';

// Get first 8 available vehicles for featured section
const featuredVehicles = vehicles.filter(v => v.status === 'available').slice(0, 8);

export default function FeaturedInventory() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <h2 className="mb-2">Featured Inventory</h2>
                        <p className="text-slate-400">
                            Hand-picked premium vehicles available now
                        </p>
                    </div>
                    <Link
                        href="/inventory"
                        className="glass-button hidden md:inline-flex"
                    >
                        View All
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                {/* Vehicle Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredVehicles.map((vehicle, index) => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center md:hidden">
                    <Link href="/inventory" className="glass-button w-full">
                        View All Inventory
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function VehicleCard({ vehicle, index }: any) {
    const [liked, setLiked] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="vehicle-card group"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-slate-800">
                {/* Placeholder - Replace with actual images */}
                {/* Placeholder Image */}
                <div className="vehicle-card-image flex h-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-slate-700 group-hover:to-slate-800 transition-colors">
                    <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="mb-2 flex justify-center">
                            <div className="rounded-full bg-white/10 p-4">
                                {/* Use a simple SVG car icon or similar here if not importing new icons, but we have Lucide */}
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="h-12 w-12 text-slate-400"
                                >
                                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                                    <circle cx="7" cy="17" r="2" />
                                    <path d="M9 17h6" />
                                    <circle cx="17" cy="17" r="2" />
                                </svg>
                            </div>
                        </div>
                        <div className="text-xl font-bold text-slate-500">
                            {vehicle.make}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute right-2 top-2 flex space-x-2">
                    <button
                        onClick={() => setLiked(!liked)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-all hover:bg-black/60"
                    >
                        <Heart
                            className={`h-5 w-5 ${liked ? 'fill-red-500 text-red-500' : 'text-white'
                                }`}
                        />
                    </button>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-2 left-2">
                    <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        📍 {vehicle.location}
                    </span>
                </div>

                {/* Status Badge */}
                {vehicle.status !== 'available' && (
                    <div className="absolute top-2 left-2">
                        <span className="rounded-full bg-accent-400 px-3 py-1 text-xs font-bold text-white uppercase">
                            {vehicle.status}
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Title */}
                <Link href={`/inventory/${vehicle.slug}`}>
                    <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-brand-400">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                    </h3>
                </Link>

                {/* Meta */}
                <div className="mb-4 flex items-center space-x-4 text-sm text-slate-400">
                    <span>{vehicle.mileage.toLocaleString()} km</span>
                    <span>•</span>
                    <span>{vehicle.transmission}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{vehicle.views}</span>
                    </div>
                </div>

                {/* Features */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {vehicle.features.slice(0, 3).map((feature: string) => (
                        <span
                            key={feature}
                            className="rounded-full bg-brand-400/10 px-2 py-1 text-xs text-brand-400"
                        >
                            {feature}
                        </span>
                    ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                        <div className="text-xs text-slate-400">Price</div>
                        <div className="text-xl font-bold text-white">
                            UGX {(vehicle.price / 1000000).toFixed(0)}M
                        </div>
                        <div className="text-xs text-slate-500">
                            ~${vehicle.priceUSD.toLocaleString()}
                        </div>
                    </div>
                    <Link
                        href={`/inventory/${vehicle.slug}`}
                        className="glass-button px-4 py-2 text-sm"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
