'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
    ArrowLeft, Heart, Share2, Phone, Mail, MapPin,
    Gauge, Fuel, Settings, Calendar, Eye, CheckCircle
} from 'lucide-react';
import { vehicles } from '@/lib/data/vehicles';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Dynamically import 3D viewer for better performance
const Vehicle3DViewer = dynamic(
    () => import('@/components/3d/Vehicle3DViewer'),
    {
        ssr: false,
        loading: () => (
            <div className="h-[500px] w-full animate-pulse rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <p className="text-white">Loading 3D Viewer...</p>
            </div>
        )
    }
);

interface VehicleDetailClientProps {
    vehicle: any; // Using any for simplicity as per existing data structure, ideally strict type
}

export default function VehicleDetailClient({ vehicle }: VehicleDetailClientProps) {
    const [liked, setLiked] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    // Get similar vehicles
    const similarVehicles = vehicles
        .filter(v => v.make === vehicle.make && v.id !== vehicle.id || v.bodyType === vehicle.bodyType && v.id !== vehicle.id)
        .slice(0, 4);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Header />

            <div className="container mx-auto px-4 pt-32 pb-24">
                {/* Breadcrumb */}
                <div className="mb-8 flex items-center space-x-2 text-sm">
                    <Link href="/" className="text-slate-400 hover:text-white">Home</Link>
                    <span className="text-slate-600">/</span>
                    <Link href="/inventory" className="text-slate-400 hover:text-white">Inventory</Link>
                    <span className="text-slate-600">/</span>
                    <span className="text-white">{vehicle.make} {vehicle.model}</span>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Left Column - 3D Viewer & Details */}
                    <div className="lg:col-span-2">
                        {/* 3D Vehicle Viewer */}
                        <div className="mb-6">
                            <Suspense fallback={
                                <div className="h-[500px] w-full animate-pulse rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900" />
                            }>
                                <Vehicle3DViewer
                                    vehicleName={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                                    color={vehicle.color === 'Pearl White' ? '#FFFFFF' : vehicle.color === 'Obsidian Black' ? '#1A1A1A' : '#C0C0C0'}
                                />
                            </Suspense>
                        </div>

                        {/* Vehicle Info Tabs */}
                        <div className="glass-card p-8">
                            <h2 className="mb-6 text-3xl font-bold text-white">
                                {vehicle.year} {vehicle.make} {vehicle.model}
                            </h2>

                            {/* Quick Stats */}
                            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                                <div className="rounded-xl bg-white/5 p-4">
                                    <div className="mb-2 flex items-center space-x-2">
                                        <Gauge className="h-5 w-5 text-brand-400" />
                                        <span className="text-sm text-slate-400">Mileage</span>
                                    </div>
                                    <div className="text-lg font-bold text-white">
                                        {vehicle.mileage.toLocaleString()} km
                                    </div>
                                </div>

                                <div className="rounded-xl bg-white/5 p-4">
                                    <div className="mb-2 flex items-center space-x-2">
                                        <Fuel className="h-5 w-5 text-brand-400" />
                                        <span className="text-sm text-slate-400">Fuel</span>
                                    </div>
                                    <div className="text-lg font-bold text-white">
                                        {vehicle.fuelType}
                                    </div>
                                </div>

                                <div className="rounded-xl bg-white/5 p-4">
                                    <div className="mb-2 flex items-center space-x-2">
                                        <Settings className="h-5 w-5 text-brand-400" />
                                        <span className="text-sm text-slate-400">Trans.</span>
                                    </div>
                                    <div className="text-lg font-bold text-white">
                                        {vehicle.transmission}
                                    </div>
                                </div>

                                <div className="rounded-xl bg-white/5 p-4">
                                    <div className="mb-2 flex items-center space-x-2">
                                        <Calendar className="h-5 w-5 text-brand-400" />
                                        <span className="text-sm text-slate-400">Year</span>
                                    </div>
                                    <div className="text-lg font-bold text-white">{vehicle.year}</div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="mb-4 text-xl font-bold text-white">Description</h3>
                                <p className="leading-relaxed text-slate-300">{vehicle.description}</p>
                            </div>

                            {/* Features */}
                            <div className="mb-8">
                                <h3 className="mb-4 text-xl font-bold text-white">Features & Equipment</h3>
                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {vehicle.features.map((feature: string) => (
                                        <div key={feature} className="flex items-center space-x-2">
                                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-success-400" />
                                            <span className="text-sm text-slate-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Specifications */}
                            <div>
                                <h3 className="mb-4 text-xl font-bold text-white">Specifications</h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <SpecRow label="Make" value={vehicle.make} />
                                    <SpecRow label="Model" value={vehicle.model} />
                                    <SpecRow label="Year" value={vehicle.year.toString()} />
                                    <SpecRow label="Body Type" value={vehicle.bodyType} />
                                    <SpecRow label="Engine Size" value={`${vehicle.engineSize}L`} />
                                    <SpecRow label="Fuel Type" value={vehicle.fuelType} />
                                    <SpecRow label="Transmission" value={vehicle.transmission} />
                                    <SpecRow label="Seats" value={vehicle.seats.toString()} />
                                    <SpecRow label="Color" value={vehicle.color} />
                                    <SpecRow label="Location" value={vehicle.location} />
                                </div>
                            </div>
                        </div>

                        {/* Cost Breakdown */}
                        <div className="glass-card mt-6 p-8">
                            <h3 className="mb-6 text-xl font-bold text-white">💎 Full Cost Transparency</h3>
                            <div className="space-y-4">
                                <CostRow label="Dubai Price" amount={vehicle.dubaiPrice} />
                                <CostRow label="Shipping Cost" amount={vehicle.shippingCost} />
                                <CostRow label="Customs Duty" amount={vehicle.customsDuty} />
                                <div className="my-4 border-t-2 border-success-400/30"></div>
                                <CostRow
                                    label="Total Landed Cost"
                                    amount={vehicle.dubaiPrice + vehicle.shippingCost + vehicle.customsDuty}
                                    highlight
                                />
                                <div className="my-4 border-t border-white/10"></div>
                                <CostRow
                                    label="AJ24 Selling Price"
                                    amount={vehicle.priceUSD}
                                    highlight
                                    ugx={vehicle.price}
                                />
                            </div>

                            <div className="mt-6 rounded-xl bg-success-400/10 p-4">
                                <p className="text-sm text-success-400">
                                    ✓ Full transparency - See exactly where your money goes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Price Card */}
                        <div className="glass-card sticky top-24 p-8">
                            <div className="mb-6">
                                <div className="mb-2 text-sm text-slate-400">Total Price</div>
                                <div className="text-4xl font-bold text-white">
                                    UGX {(vehicle.price / 1000000).toFixed(0)}M
                                </div>
                                <div className="mt-1 text-lg text-slate-400">
                                    ~${vehicle.priceUSD.toLocaleString()}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button className="glass-button w-full justify-center bg-brand-400/20 py-4 text-lg font-semibold">
                                    Reserve Now (40% Deposit)
                                </button>

                                <button className="glass-button w-full justify-center border-success-400/30 bg-success-400/10 py-3 hover:bg-success-400/20">
                                    Request Inspection Report
                                </button>

                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setLiked(!liked)}
                                        className="glass-button justify-center"
                                    >
                                        <Heart className={liked ? 'fill-red-500 text-red-500' : ''} />
                                    </button>
                                    <button className="glass-button justify-center">
                                        <Share2 />
                                    </button>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
                                <h4 className="font-semibold text-white">Contact Us</h4>

                                <a
                                    href="tel:+256xxxxxxxxx"
                                    className="flex items-center space-x-3 text-slate-300 hover:text-white"
                                >
                                    <Phone className="h-5 w-5 text-brand-400" />
                                    <span>+256 XXX XXX XXX</span>
                                </a>

                                <a
                                    href="mailto:info@aj24motors.com"
                                    className="flex items-center space-x-3 text-slate-300 hover:text-white"
                                >
                                    <Mail className="h-5 w-5 text-brand-400" />
                                    <span>info@aj24motors.com</span>
                                </a>

                                <div className="flex items-start space-x-3 text-slate-300">
                                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-brand-400" />
                                    <span>Kampala, Uganda</span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">{vehicle.views}</div>
                                    <div className="text-xs text-slate-400">Views</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">{vehicle.likes}</div>
                                    <div className="text-xs text-slate-400">Likes</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">12</div>
                                    <div className="text-xs text-slate-400">Inquiries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Vehicles */}
                {similarVehicles.length > 0 && (
                    <div className="mt-16">
                        <h2 className="mb-8 text-3xl font-bold text-white">Similar Vehicles</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {similarVehicles.map(v => (
                                <Link key={v.id} href={`/inventory/${v.slug}`} className="glass-card p-4 transition-all hover:scale-105">
                                    <h3 className="mb-2 font-bold text-white">
                                        {v.year} {v.make} {v.model}
                                    </h3>
                                    <p className="text-sm text-slate-400">{v.mileage.toLocaleString()} km</p>
                                    <p className="mt-2 text-xl font-bold text-white">
                                        UGX {(v.price / 1000000).toFixed(0)}M
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

function SpecRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between rounded-lg bg-white/5 p-3">
            <span className="text-sm text-slate-400">{label}</span>
            <span className="text-sm font-semibold text-white">{value}</span>
        </div>
    );
}

function CostRow({ label, amount, highlight, ugx }: { label: string; amount: number; highlight?: boolean; ugx?: number }) {
    return (
        <div className="flex justify-between">
            <span className={`${highlight ? 'font-semibold text-white' : 'text-slate-400'}`}>
                {label}
            </span>
            <div className="text-right">
                <span className={`${highlight ? 'text-xl font-bold text-white' : 'text-slate-300'}`}>
                    ${amount.toLocaleString()}
                </span>
                {ugx && (
                    <div className="text-sm text-slate-500">
                        UGX {(ugx / 1000000).toFixed(0)}M
                    </div>
                )}
            </div>
        </div>
    );
}
