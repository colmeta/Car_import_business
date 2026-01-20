'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { Loader2 } from 'lucide-react';
import * as THREE from 'three';

interface Vehicle3DViewerProps {
    vehicleName: string;
    color?: string;
    className?: string;
}

export default function Vehicle3DViewer({
    vehicleName,
    color = '#ffffff',
    className = ''
}: Vehicle3DViewerProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState(color);

    // Available colors for customization
    const colors = [
        { name: 'White', hex: '#FFFFFF' },
        { name: 'Black', hex: '#1A1A1A' },
        { name: 'Silver', hex: '#C0C0C0' },
        { name: 'Blue', hex: '#1E40AF' },
        { name: 'Red', hex: '#DC2626' },
    ];

    return (
        <div className={`relative ${className}`}>
            {/* 3D Canvas */}
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800">
                <Canvas
                    shadows
                    dpr={[1, 2]} // Device pixel ratio for sharp rendering
                    gl={{
                        antialias: true,
                        alpha: true,
                        powerPreference: 'high-performance' // Performance optimization
                    }}
                >
                    <Suspense fallback={null}>
                        {/* Lighting */}
                        <ambientLight intensity={0.5} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={1}
                            castShadow
                            shadow-mapSize-width={2048}
                            shadow-mapSize-height={2048}
                        />
                        <pointLight position={[-10, -10, -10]} intensity={0.5} />

                        {/* Camera */}
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

                        {/* Vehicle Model - Placeholder Box (replace with actual 3D model) */}
                        <VehicleModel color={selectedColor} />

                        {/* Environment for reflections */}
                        <Environment preset="sunset" />

                        {/* Ground shadow */}
                        <ContactShadows
                            position={[0, -1.4, 0]}
                            opacity={0.5}
                            scale={10}
                            blur={2}
                            far={4}
                        />

                        {/* Controls */}
                        <OrbitControls
                            enablePan={false}
                            enableZoom={true}
                            minDistance={3}
                            maxDistance={8}
                            minPolarAngle={Math.PI / 4}
                            maxPolarAngle={Math.PI / 2}
                            autoRotate={false}
                            autoRotateSpeed={0.5}
                        />
                    </Suspense>
                </Canvas>

                {/* Loading Overlay */}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
                        <div className="text-center">
                            <Loader2 className="mx-auto h-12 w-12 animate-spin text-brand-400" />
                            <p className="mt-4 text-white">Loading 3D Model...</p>
                        </div>
                    </div>
                )}

                {/* Controls Hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-2 text-xs text-white backdrop-blur-sm">
                    🖱️ Drag to rotate • 🔎 Scroll to zoom
                </div>
            </div>

            {/* Color Selector */}
            <div className="mt-4">
                <div className="glass-card p-4">
                    <p className="mb-3 text-sm font-semibold text-white">Select Color</p>
                    <div className="flex space-x-3">
                        {colors.map((c) => (
                            <button
                                key={c.hex}
                                onClick={() => setSelectedColor(c.hex)}
                                className={`group relative h-12 w-12 rounded-full transition-all ${selectedColor === c.hex
                                        ? 'ring-4 ring-brand-400 ring-offset-2 ring-offset-slate-900'
                                        : 'hover:scale-110'
                                    }`}
                                style={{ backgroundColor: c.hex }}
                                title={c.name}
                            >
                                {selectedColor === c.hex && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="h-3 w-3 rounded-full bg-white"></div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Hotspots (Future Enhancement) */}
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                <button className="glass-card p-3 text-left transition-all hover:bg-white/10">
                    <p className="text-xs text-slate-400">Interior</p>
                    <p className="text-sm font-semibold text-white">Premium Leather</p>
                </button>
                <button className="glass-card p-3 text-left transition-all hover:bg-white/10">
                    <p className="text-xs text-slate-400">Engine</p>
                    <p className="text-sm font-semibold text-white">2.8L Diesel</p>
                </button>
                <button className="glass-card p-3 text-left transition-all hover:bg-white/10">
                    <p className="text-xs text-slate-400">Wheels</p>
                    <p className="text-sm font-semibold text-white">18" Alloy</p>
                </button>
                <button className="glass-card p-3 text-left transition-all hover:bg-white/10">
                    <p className="text-xs text-slate-400">Tech</p>
                    <p className="text-sm font-semibold text-white">Navigation</p>
                </button>
            </div>
        </div>
    );
}

// Vehicle 3D Model Component
function VehicleModel({ color }: { color: string }) {
    // This is a placeholder - replace with actual GLB/GLTF model loader
    // For now, we create a simple car-like shape using primitives

    return (
        <group position={[0, -1, 0]}>
            {/* Car Body */}
            <mesh position={[0, 0.5, 0]} castShadow>
                <boxGeometry args={[2, 0.8, 4]} />
                <meshStandardMaterial
                    color={color}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Car Roof */}
            <mesh position={[0, 1.2, -0.3]} castShadow>
                <boxGeometry args={[1.8, 0.6, 2]} />
                <meshStandardMaterial
                    color={color}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Windows (Front) */}
            <mesh position={[0, 1.2, 0.7]} castShadow>
                <boxGeometry args={[1.7, 0.5, 0.1]} />
                <meshStandardMaterial
                    color="#1A1A1A"
                    transparent
                    opacity={0.3}
                    metalness={1}
                    roughness={0}
                />
            </mesh>

            {/* Wheels */}
            {[
                [-0.8, -0.3, 1.3],
                [0.8, -0.3, 1.3],
                [-0.8, -0.3, -1.3],
                [0.8, -0.3, -1.3],
            ].map((position, i) => (
                <group key={i} position={position as [number, number, number]}>
                    <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
                        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
                        <meshStandardMaterial color="#1A1A1A" metalness={0.5} roughness={0.5} />
                    </mesh>
                    {/* Rim */}
                    <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]}>
                        <cylinderGeometry args={[0.25, 0.25, 0.32, 32]} />
                        <meshStandardMaterial color="#C0C0C0" metalness={1} roughness={0.1} />
                    </mesh>
                </group>
            ))}

            {/* Headlights */}
            <mesh position={[-0.6, 0.4, 2]} castShadow>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={2} />
            </mesh>
            <mesh position={[0.6, 0.4, 2]} castShadow>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={2} />
            </mesh>
        </group>
    );
}

// Loading Fallback Component
export function Vehicle3DViewerSkeleton() {
    return (
        <div className="h-[500px] w-full animate-pulse rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="flex h-full items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-brand-400" />
            </div>
        </div>
    );
}
