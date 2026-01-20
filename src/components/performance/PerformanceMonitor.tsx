'use client';

import { useEffect, useState } from 'react';
import { Zap, TrendingUp, Activity } from 'lucide-react';

interface PerformanceMetrics {
    loadTime: number;
    fcp: number; // First Contentful Paint
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay
    cls: number; // Cumulative Layout Shift
}

export default function PerformanceMonitor() {
    const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
    const [showMonitor, setShowMonitor] = useState(false);

    useEffect(() => {
        // Only run in development
        if (process.env.NODE_ENV !== 'production') {
            measurePerformance();
        }
    }, []);

    const measurePerformance = () => {
        // Wait for page to load
        if (typeof window !== 'undefined' && window.performance) {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;

                setMetrics({
                    loadTime: loadTime / 1000, // Convert to seconds
                    fcp: 0, // Will be populated by PerformanceObserver
                    lcp: 0,
                    fid: 0,
                    cls: 0,
                });

                // Use PerformanceObserver for Core Web Vitals
                if ('PerformanceObserver' in window) {
                    try {
                        // Largest Contentful Paint
                        const lcpObserver = new PerformanceObserver((list) => {
                            const entries = list.getEntries();
                            const lastEntry = entries[entries.length - 1] as any;
                            setMetrics(prev => prev ? { ...prev, lcp: lastEntry.renderTime || lastEntry.loadTime } : null);
                        });
                        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

                        // First Input Delay
                        const fidObserver = new PerformanceObserver((list) => {
                            const entries = list.getEntries();
                            entries.forEach((entry: any) => {
                                setMetrics(prev => prev ? { ...prev, fid: entry.processingStart - entry.startTime } : null);
                            });
                        });
                        fidObserver.observe({ entryTypes: ['first-input'] });

                        // Cumulative Layout Shift
                        let clsValue = 0;
                        const clsObserver = new PerformanceObserver((list) => {
                            list.getEntries().forEach((entry: any) => {
                                if (!entry.hadRecentInput) {
                                    clsValue += entry.value;
                                    setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
                                }
                            });
                        });
                        clsObserver.observe({ entryTypes: ['layout-shift'] });
                    } catch (e) {
                        console.log('Performance API not fully supported');
                    }
                }
            }, 0);
        }
    };

    if (!metrics || process.env.NODE_ENV === 'production') {
        return null;
    }

    const getScoreColor = (metric: string, value: number) => {
        if (metric === 'loadTime') {
            if (value < 2) return 'text-success-400';
            if (value < 4) return 'text-accent-400';
            return 'text-red-400';
        }
        if (metric === 'lcp') {
            if (value < 2500) return 'text-success-400';
            if (value < 4000) return 'text-accent-400';
            return 'text-red-400';
        }
        if (metric === 'fid') {
            if (value < 100) return 'text-success-400';
            if (value < 300) return 'text-accent-400';
            return 'text-red-400';
        }
        if (metric === 'cls') {
            if (value < 0.1) return 'text-success-400';
            if (value < 0.25) return 'text-accent-400';
            return 'text-red-400';
        }
        return 'text-white';
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setShowMonitor(!showMonitor)}
                className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-400 text-white shadow-xl transition-all hover:scale-110"
                title="Performance Monitor"
            >
                <Activity className="h-6 w-6" />
            </button>

            {/* Performance Panel */}
            {showMonitor && (
                <div className="fixed bottom-20 right-4 z-50 glass-card w-80 p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white">Performance</h3>
                        <Zap className="h-5 w-5 text-brand-400" />
                    </div>

                    <div className="space-y-4">
                        {/* Load Time */}
                        <div>
                            <div className="mb-1 flex justify-between">
                                <span className="text-sm text-slate-400">Page Load Time</span>
                                <span className={`text-sm font-bold ${getScoreColor('loadTime', metrics.loadTime)}`}>
                                    {metrics.loadTime.toFixed(2)}s
                                </span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-slate-700">
                                <div
                                    className={`h-2 rounded-full ${metrics.loadTime < 2 ? 'bg-success-400' :
                                            metrics.loadTime < 4 ? 'bg-accent-400' : 'bg-red-400'
                                        }`}
                                    style={{ width: `${Math.min((4 - metrics.loadTime) / 4 * 100, 100)}%` }}
                                />
                            </div>
                        </div>

                        {/* LCP */}
                        {metrics.lcp > 0 && (
                            <div>
                                <div className="mb-1 flex justify-between">
                                    <span className="text-sm text-slate-400">LCP (Largest Paint)</span>
                                    <span className={`text-sm font-bold ${getScoreColor('lcp', metrics.lcp)}`}>
                                        {(metrics.lcp / 1000).toFixed(2)}s
                                    </span>
                                </div>
                                <div className="h-2 w-full rounded-full bg-slate-700">
                                    <div
                                        className={`h-2 rounded-full ${metrics.lcp < 2500 ? 'bg-success-400' :
                                                metrics.lcp < 4000 ? 'bg-accent-400' : 'bg-red-400'
                                            }`}
                                        style={{ width: `${Math.min((4000 - metrics.lcp) / 4000 * 100, 100)}%` }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* FID */}
                        {metrics.fid > 0 && (
                            <div>
                                <div className="mb-1 flex justify-between">
                                    <span className="text-sm text-slate-400">FID (Input Delay)</span>
                                    <span className={`text-sm font-bold ${getScoreColor('fid', metrics.fid)}`}>
                                        {metrics.fid.toFixed(0)}ms
                                    </span>
                                </div>
                                <div className="h-2 w-full rounded-full bg-slate-700">
                                    <div
                                        className={`h-2 rounded-full ${metrics.fid < 100 ? 'bg-success-400' :
                                                metrics.fid < 300 ? 'bg-accent-400' : 'bg-red-400'
                                            }`}
                                        style={{ width: `${Math.min((300 - metrics.fid) / 300 * 100, 100)}%` }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* CLS */}
                        {metrics.cls > 0 && (
                            <div>
                                <div className="mb-1 flex justify-between">
                                    <span className="text-sm text-slate-400">CLS (Layout Shift)</span>
                                    <span className={`text-sm font-bold ${getScoreColor('cls', metrics.cls)}`}>
                                        {metrics.cls.toFixed(3)}
                                    </span>
                                </div>
                                <div className="h-2 w-full rounded-full bg-slate-700">
                                    <div
                                        className={`h-2 rounded-full ${metrics.cls < 0.1 ? 'bg-success-400' :
                                                metrics.cls < 0.25 ? 'bg-accent-400' : 'bg-red-400'
                                            }`}
                                        style={{ width: `${Math.min((0.25 - metrics.cls) / 0.25 * 100, 100)}%` }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Target Scores */}
                        <div className="mt-6 rounded-lg bg-white/5 p-3">
                            <p className="mb-2 text-xs font-semibold text-white">Target Scores</p>
                            <div className="space-y-1 text-xs text-slate-400">
                                <div className="flex justify-between">
                                    <span>Load Time:</span>
                                    <span className="text-success-400">&lt; 2s</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>LCP:</span>
                                    <span className="text-success-400">&lt; 2.5s</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>FID:</span>
                                    <span className="text-success-400">&lt; 100ms</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>CLS:</span>
                                    <span className="text-success-400">&lt; 0.1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
