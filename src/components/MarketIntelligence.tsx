import { TrendingUp, MapPin } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { HolographicCard } from './HolographicCard';
import { useState, useEffect } from 'react';

const sparklineData = [
    { value: 17500 },
    { value: 18200 },
    { value: 18900 },
    { value: 19800 },
    { value: 20500 },
    { value: 21200 },
    { value: 22550 },
];

export function MarketIntelligence() {
    const [animatedRevenue, setAnimatedRevenue] = useState(0);
    const targetRevenue = 22550;

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = targetRevenue / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current += increment;
            if (step >= steps) {
                setAnimatedRevenue(targetRevenue);
                clearInterval(timer);
            } else {
                setAnimatedRevenue(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="mb-8">
            <h2 className="text-[#7FB2D5] mb-6 tracking-wider flex items-center gap-3">
                <span className="text-2xl">MARKET INTELLIGENCE</span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#7FB2D5]/20 to-transparent" />
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Revenue Card */}
                <HolographicCard glowEffect className="lg:col-span-1 group">
                    <div className="bg-[#7FB2D5]/5 backdrop-blur-xl border border-[#7FB2D5]/10 rounded-lg p-6 relative overflow-hidden hover:border-[#7FB2D5]/30 transition-all duration-300 h-full">
                        {/* Animated corner accents */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#7FB2D5]/30 rounded-tl-lg" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#7FB2D5]/30 rounded-br-lg" />

                        {/* Scanline effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7FB2D5]/5 to-transparent h-20 animate-scanline opacity-30" />

                        <div className="absolute inset-0 bg-gradient-to-br from-[#7FB2D5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs text-[#7FB2D5]/60 tracking-widest">REVENUE</span>
                                <div className="flex items-center gap-1 text-[#3cdaea] text-xs animate-pulse-glow px-2 py-1 rounded bg-[#3cdaea]/10">
                                    <TrendingUp className="w-3 h-3" />
                                    <span>+29%</span>
                                </div>
                            </div>
                            <div className="text-4xl font-bold text-[#7FB2D5] mb-4 tabular-nums">
                                ₹{animatedRevenue.toLocaleString()}M
                            </div>
                            <div className="h-16">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={sparklineData}>
                                        <Line
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#7FB2D5"
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Data points indicator */}
                            <div className="flex gap-1 mt-2">
                                {sparklineData.map((_, i) => (
                                    <div key={i} className="flex-1 h-1 bg-[#7FB2D5]/20 rounded" style={{ animationDelay: `${i * 100}ms` }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </HolographicCard>

                {/* South India Dominance Map */}
                <HolographicCard glowEffect className="lg:col-span-1 group">
                    <div className="bg-[#7FB2D5]/5 backdrop-blur-xl border border-[#7FB2D5]/10 rounded-lg p-6 relative overflow-hidden hover:border-[#7FB2D5]/30 transition-all duration-300 h-full">
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#7FB2D5]/30 rounded-tl-lg" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#7FB2D5]/30 rounded-br-lg" />

                        <div className="absolute inset-0 bg-gradient-to-br from-[#7FB2D5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs text-[#7FB2D5]/60 tracking-widest">GEOGRAPHIC DOMINANCE</span>
                                <MapPin className="w-4 h-4 text-[#7FB2D5] animate-float" />
                            </div>
                            <div className="text-2xl font-bold text-white mb-2">South India</div>
                            <div className="text-sm text-[#7FB2D5]/80 mb-6">Primary Market Concentration</div>

                            <div className="relative w-full h-32 mb-4">
                                {/* Holographic map effect */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg viewBox="0 0 200 240" className="w-full h-full opacity-20">
                                        <path
                                            d="M100 10 L150 60 L180 100 L170 150 L150 190 L120 220 L80 220 L50 190 L30 150 L20 100 L50 60 Z"
                                            fill="#7FB2D5"
                                            stroke="#7FB2D5"
                                            strokeWidth="1"
                                        />
                                    </svg>
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                                        <div className="w-20 h-20 bg-[#7FB2D5]/30 rounded-full animate-pulse" />
                                        <div className="absolute inset-0 w-20 h-20 bg-[#7FB2D5]/20 rounded-full animate-ping" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-[#7FB2D5] tabular-nums">22%</span>
                                <span className="text-sm text-[#7FB2D5]/60">Market Share</span>
                            </div>

                            {/* Hexagon grid decoration */}
                            <div className="absolute top-4 right-4 w-8 h-8 opacity-10">
                                <svg viewBox="0 0 100 100">
                                    <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="#36E1A0" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </HolographicCard>

                {/* B2C vs Fleet Comparison */}
                <HolographicCard glowEffect className="lg:col-span-1 group">
                    <div className="bg-[#7FB2D5]/5 backdrop-blur-xl border border-[#7FB2D5]/10 rounded-lg p-6 relative overflow-hidden hover:border-[#7FB2D5]/30 transition-all duration-300 h-full">
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#7FB2D5]/30 rounded-tl-lg" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#7FB2D5]/30 rounded-br-lg" />

                        <div className="absolute inset-0 bg-gradient-to-br from-[#7FB2D5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs text-[#7FB2D5]/60 tracking-widest">MARGIN ANALYSIS</span>
                                <div className="w-2 h-2 bg-[#7FB2D5] rounded-full animate-pulse" />
                            </div>
                            <div className="text-lg text-white mb-6">B2C Premium vs. Fleet Trap</div>

                            <div className="space-y-4">
                                <div className="border border-[#7FB2D5]/20 rounded-lg p-4 bg-[#7FB2D5]/5 relative overflow-hidden group/item">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#7FB2D5]/0 via-[#7FB2D5]/10 to-[#7FB2D5]/0 -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000" />
                                    <div className="flex items-center justify-between mb-2 relative z-10">
                                        <span className="text-sm text-[#7FB2D5]">B2C Premium</span>
                                        <span className="text-2xl font-bold text-[#7FB2D5] tabular-nums">30%</span>
                                    </div>
                                    <div className="w-full h-2 bg-[#05070A] rounded-full overflow-hidden relative">
                                        <div className="h-full bg-gradient-to-r from-[#7FB2D5] to-[#22B67F] rounded-full transition-all duration-1000 ease-out" style={{ width: '30%' }} />
                                    </div>
                                </div>

                                <div className="border border-[#FF6B6B]/20 rounded-lg p-4 bg-[#FF6B6B]/5 relative overflow-hidden group/item">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/0 via-[#FF6B6B]/10 to-[#FF6B6B]/0 -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000" />
                                    <div className="flex items-center justify-between mb-2 relative z-10">
                                        <span className="text-sm text-[#FF6B6B]">Fleet Trap</span>
                                        <span className="text-2xl font-bold text-[#FF6B6B] tabular-nums">8%</span>
                                    </div>
                                    <div className="w-full h-2 bg-[#05070A] rounded-full overflow-hidden relative">
                                        <div className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#CC5555] rounded-full transition-all duration-1000 ease-out" style={{ width: '8%' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Delta indicator */}
                            <div className="mt-4 pt-4 border-t border-[#7FB2D5]/10 flex items-center justify-between text-xs">
                                <span className="text-[#7FB2D5]/60">DELTA</span>
                                <span className="text-[#7FB2D5] font-bold">+22% ADVANTAGE</span>
                            </div>
                        </div>
                    </div>
                </HolographicCard>
            </div>
        </section>
    );
}