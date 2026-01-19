'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Eye, ArrowRight } from 'lucide-react';

// Mock data - in production, this would come from Supabase
const featuredVehicles = [
    {
        id: '1',
        slug: 'toyota-land-cruiser-2020',
        make: 'Toyota',
        model: 'Land Cruiser',
        year: 2020,
        mileage: 45000,
        price: 85000000, // UGX
        image: '/images/vehicles/land-cruiser.jpg',
        location: 'Kampala',
        features: ['4WD', 'Leather', 'Sunroof'],
    },
    {
        id: '2',
        slug: 'toyota-harrier-2019',
        make: 'Toyota',
        model: 'Harrier',
        year: 2019,
        mileage: 38000,
        price: 72000000,
        image: '/images/vehicles/harrier.jpg',
        location: 'In Transit',
        features: ['Hybrid', 'Premium Sound', 'Panoramic Roof'],
    },
    {
        id: '3',
        slug: 'nissan-xtrail-2021',
        make: 'Nissan',
        model: 'X-Trail',
        year: 2021,
        mileage: 28000,
        price: 68000000,
        image: '/images/vehicles/xtrail.jpg',
        location: 'Dubai',
        features: ['7-Seater', 'Navigation', 'Reverse Camera'],
    },
    {
        id: '4',
        slug: 'mercedes-benz-gls-2021',
        make: 'Mercedes-Benz',
        model: 'GLS 450',
        year: 2021,
        mileage: 22000,
        price: 180000000,
        image: '/images/vehicles/gls.jpg',
        location: 'Kampala',
        features: ['Air Suspension', 'Massage Seats', 'Premium Plus'],
    },
];

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
    const [views] = useState(Math.floor(Math.random() * 500) + 100);

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
                <div className="vehicle-card-image flex h-full items-center justify-center bg-gradient-to-br from-brand-900 to-slate-800">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white">
                            {vehicle.make}
                        </div>
                        <div className="text-lg text-slate-400">{vehicle.model}</div>
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
                    <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{views}</span>
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
                            UGX {(vehicle.price / 1000000).toFixed(1)}M
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
