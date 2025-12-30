import { ArrowDown, Factory } from 'lucide-react';
import { HolographicCard } from './HolographicCard';
import { useState } from 'react';

const waterfallData = [
    { label: 'LFP Battery Localization', min: 5000, max: 7000, color: '#7FB2D5' },
    { label: 'BTO Logistics', min: 3000, max: 4000, color: '#7FB2D5' },
    { label: 'SKU Rationalization', min: 2000, max: 3000, color: '#7FB2D5' },
    { label: 'Feature unbundling', min: 1500, max: 2000, color: '#7FB2D5' },
    { label: 'Warranty Optimisation', min: 1000, max: 1500, color: '#7FB2D5' },
    { label: 'Manufacturing Scale', min: 2000, max: 3000, color: '#7FB2D5' },
];

export function CostReduction() {
    // Calculate total ranges
    const totalMin = waterfallData.reduce((sum, item) => sum + item.min, 0);
    const totalMax = waterfallData.reduce((sum, item) => sum + item.max, 0);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="mb-8">
            <h2 className="text-[#7FB2D5] mb-6 tracking-wider flex items-center gap-3">
                <span className="text-2xl font-bold">COST REDUCTION ROADMAP</span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#7FB2D5]/20 to-transparent" />
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <HolographicCard glowEffect className="lg:col-span-2 group">
                    <div className="bg-[#7FB2D5]/5 backdrop-blur-xl border border-[#7FB2D5]/10 rounded-lg p-6 relative overflow-hidden hover:border-[#7FB2D5]/30 transition-all duration-300 h-full">
                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#7FB2D5]/30 rounded-tl-lg" />
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#7FB2D5]/30 rounded-tr-lg" />
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#7FB2D5]/30 rounded-bl-lg" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#7FB2D5]/30 rounded-br-lg" />

                        <div className="relative z-10">
                            <div className="mb-6">
                                <div className="text-xs text-[#7FB2D5]/60 tracking-widest mb-2">TOTAL REDUCTION TARGET</div>
                                <div className="text-3xl font-bold text-[#7FB2D5] tabular-nums">
                                    ₹{totalMin.toLocaleString()} – ₹{totalMax.toLocaleString()}
                                </div>
                                <div className="mt-2 flex gap-2">
                                    <div className="w-2 h-2 bg-[#7FB2D5] rounded-full animate-pulse" />
                                    <div className="w-2 h-2 bg-[#7FB2D5] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                                    <div className="w-2 h-2 bg-[#7FB2D5] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                                </div>
                            </div>

                            <div className="space-y-3">
                                {waterfallData.map((item, index) => {
                                    // Use the average of the range to determine bar width relative to the total max
                                    const avgValue = (item.min + item.max) / 2;
                                    const percentage = (avgValue / totalMax) * 100;

                                    return (
                                        <div
                                            key={index}
                                            className="relative"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm text-white">{item.label}</span>
                                                <div className="flex items-center gap-2">
                                                    <ArrowDown className="w-3 h-3 text-[#7FB2D5]" />
                                                    <span className="text-sm font-bold text-[#7FB2D5] tabular-nums">
                                                        ₹{item.min.toLocaleString()} – {item.max.toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="relative w-full h-8 bg-[#05070A] rounded border border-[#7FB2D5]/20 overflow-hidden group/bar">
                                                <div
                                                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#7FB2D5] to-[#22B67F] transition-all duration-1000 ease-out"
                                                    style={{
                                                        width: `${percentage}%`,
                                                        boxShadow: hoveredIndex === index ? '0 0 20px rgba(54, 225, 160, 0.6)' : 'none'
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/bar:translate-x-full transition-transform duration-1000" />
                                                <div className="absolute inset-0 flex items-center justify-end pr-3">
                                                    <span className="text-xs text-white/80 tabular-nums">
                                                        {((item.max / totalMax) * 100).toFixed(1)}%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </HolographicCard>

                {/* Factory 3.0 Widget */}
                <HolographicCard glowEffect className="lg:col-span-1 group">
                    <div className="bg-[#7FB2D5]/5 backdrop-blur-xl border border-[#7FB2D5]/10 rounded-lg p-6 relative overflow-hidden hover:border-[#7FB2D5]/30 transition-all duration-300 h-full">
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#7FB2D5]/30 rounded-tl-lg" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#7FB2D5]/30 rounded-br-lg" />

                        {/* Circuit pattern decoration */}
                        <div className="absolute top-1/2 right-0 w-32 h-32 opacity-5">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <circle cx="20" cy="20" r="3" fill="#7FB2D5" />
                                <circle cx="80" cy="20" r="3" fill="#7FB2D5" />
                                <circle cx="20" cy="80" r="3" fill="#7FB2D5" />
                                <circle cx="80" cy="80" r="3" fill="#7FB2D5" />
                                <line x1="20" y1="20" x2="80" y2="20" stroke="#7FB2D5" strokeWidth="1" />
                                <line x1="20" y1="80" x2="80" y2="80" stroke="#7FB2D5" strokeWidth="1" />
                                <line x1="20" y1="20" x2="20" y2="80" stroke="#7FB2D5" strokeWidth="1" />
                                <line x1="80" y1="20" x2="80" y2="80" stroke="#7FB2D5" strokeWidth="1" />
                            </svg>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-[#7FB2D5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-[#7FB2D5]/10 border border-[#7FB2D5]/20 flex items-center justify-center animate-pulse-glow">
                                    <Factory className="w-6 h-6 text-[#7FB2D5]" />
                                </div>
                                <span className="text-xs text-[#7FB2D5]/60 tracking-widest">VERTICAL INTEGRATION</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">Factory 3.0</h3>
                            <p className="text-sm text-[#7FB2D5]/80 mb-6">Backward Integration Strategy</p>

                            <div className="space-y-3">
                                {[
                                    { module: '01', name: 'Electronics Manufacturing', status: 'ACTIVE' },
                                    { module: '02', name: 'Painting & Finishing', status: 'ACTIVE' },
                                    { module: '03', name: 'Battery Assembly', status: 'DEPLOYING' }
                                ].map((item, idx) => (
                                    <div key={idx} className="border-l-2 border-[#7FB2D5] pl-4 py-2 relative group/module hover:border-[#7FB2D5]/60 transition-colors">
                                        <div className="absolute left-0 top-0 w-2 h-2 bg-[#7FB2D5] rounded-full -translate-x-1/2" />
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-xs text-[#7FB2D5]/60 mb-1">MODULE {item.module}</div>
                                                <div className="text-sm text-white">{item.name}</div>
                                            </div>
                                            <div className="text-xs text-[#7FB2D5] bg-[#7FB2D5]/10 px-2 py-1 rounded">
                                                {item.status}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-[#7FB2D5]/20">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-[#7FB2D5] tabular-nums">85%</span>
                                    <span className="text-xs text-[#7FB2D5]/60">In-house Production</span>
                                </div>
                                <div className="mt-2 w-full h-1 bg-[#05070A] rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-[#7FB2D5] to-[#22B67F] rounded-full" style={{ width: '85%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </HolographicCard>
            </div>
        </section>
    );
}