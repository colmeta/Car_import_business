'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { vehicles, filterVehicles } from '@/lib/data/vehicles';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeaturedInventory from '@/components/home/FeaturedInventory';

export default function InventoryPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        make: '',
        bodyType: '',
        minPrice: 0,
        maxPrice: 500000000,
        fuelType: '',
        transmission: '',
    });

    const filteredVehicles = filterVehicles({
        ...filters,
        minPrice: filters.minPrice || undefined,
        maxPrice: filters.maxPrice === 500000000 ? undefined : filters.maxPrice,
    }).filter(v =>
        v.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.model.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
                </div>

                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-4">
                            <span className="gradient-text">Complete Inventory</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            {filteredVehicles.length} premium vehicles available
                        </p>
                    </div>
                </div>
            </section>

            {/* Search & Filters */}
            <section className="pb-8">
                <div className="container mx-auto px-4">
                    <div className="glass-card mx-auto max-w-6xl p-4">
                        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                            {/* Search */}
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search make or model..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="premium-input pl-12"
                                />
                            </div>

                            {/* Filter Toggle */}
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="glass-button flex items-center justify-center space-x-2 px-6"
                            >
                                <SlidersHorizontal className="h-5 w-5" />
                                <span>Filters</span>
                            </button>
                        </div>

                        {/* Filter Panel */}
                        {showFilters && (
                            <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3 lg:grid-cols-6">
                                {/* Make */}
                                <select
                                    value={filters.make}
                                    onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                                    className="premium-input"
                                >
                                    <option value="">All Makes</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Land Rover">Land Rover</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Audi">Audi</option>
                                </select>

                                {/* Body Type */}
                                <select
                                    value={filters.bodyType}
                                    onChange={(e) => setFilters({ ...filters, bodyType: e.target.value })}
                                    className="premium-input"
                                >
                                    <option value="">All Types</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Hatchback">Hatchback</option>
                                    <option value="Pickup">Pickup</option>
                                </select>

                                {/* Fuel Type */}
                                <select
                                    value={filters.fuelType}
                                    onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
                                    className="premium-input"
                                >
                                    <option value="">All Fuel</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Electric">Electric</option>
                                </select>

                                {/* Transmission */}
                                <select
                                    value={filters.transmission}
                                    onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
                                    className="premium-input"
                                >
                                    <option value="">All Trans.</option>
                                    <option value="Automatic">Automatic</option>
                                    <option value="Manual">Manual</option>
                                </select>

                                {/* Price Range */}
                                <select
                                    value={filters.maxPrice}
                                    onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value) })}
                                    className="premium-input"
                                >
                                    <option value={500000000}>All Prices</option>
                                    <option value={50000000}>Under 50M</option>
                                    <option value={100000000}>Under 100M</option>
                                    <option value={200000000}>Under 200M</option>
                                    <option value={300000000}>Under 300M</option>
                                </select>

                                {/* Clear Filters */}
                                <button
                                    onClick={() => {
                                        setFilters({
                                            make: '',
                                            bodyType: '',
                                            minPrice: 0,
                                            maxPrice: 500000000,
                                            fuelType: '',
                                            transmission: '',
                                        });
                                        setSearchQuery('');
                                    }}
                                    className="glass-button flex items-center justify-center space-x-2 border-red-400/30 bg-red-400/10 hover:bg-red-400/20"
                                >
                                    <X className="h-4 w-4" />
                                    <span>Clear</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Vehicle Grid */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    {filteredVehicles.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredVehicles.map((vehicle, index) => (
                                <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="glass-card mx-auto max-w-2xl p-12 text-center">
                            <h3 className="mb-2 text-2xl font-bold text-white">No vehicles found</h3>
                            <p className="text-slate-400">Try adjusting your search or filters</p>
                            <button
                                onClick={() => {
                                    setFilters({
                                        make: '',
                                        bodyType: '',
                                        minPrice: 0,
                                        maxPrice: 500000000,
                                        fuelType: '',
                                        transmission: '',
                                    });
                                    setSearchQuery('');
                                }}
                                className="glass-button mt-6"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}

// Reuse VehicleCard component
import VehicleCardComponent from '@/components/home/FeaturedInventory';

function VehicleCard({ vehicle, index }: any) {
    const [liked, setLiked] = useState(false);

    // Same implementation as in FeaturedInventory
    return <div className="glass-card p-4">
        {/* Simplified version - full version same as FeaturedInventory */}
        <Link href={`/inventory/${vehicle.slug}`}>
            <h3 className="font-bold text-white hover:text-brand-400">
                {vehicle.year} {vehicle.make} {vehicle.model}
            </h3>
            <p className="text-slate-400">{vehicle.mileage.toLocaleString()} km</p>
            <p className="text-xl font-bold text-white">UGX {(vehicle.price / 1000000).toFixed(0)}M</p>
        </Link>
    </div>;
}
