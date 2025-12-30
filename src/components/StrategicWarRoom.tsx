import { useEffect, useState } from 'react';
import { Zap, TrendingUp } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { HolographicCard } from './HolographicCard';

/* =========================
   TRUST LADDER CONFIG
========================= */
const trustLadderSteps = [
    {
        label: 'Innovation',
        icon: '💡',
        insight: 'Demand exists, but access is constrained by early capability limits.',
    },
    {
        label: 'Scale',
        icon: '📈',
        insight: 'Demand unlocks rapidly, stressing capacity and infrastructure.',
    },
    {
        label: 'Utilisation',
        icon: '⚡',
        insight: 'Supply meets demand efficiently — operating leverage emerges.',
    },
    {
        label: 'Cash Flow',
        icon: '💰',
        insight: 'Demand converts predictably into stable cash generation.',
    },
    {
        label: 'Trust',
        icon: '🤝',
        insight: 'Market pull exceeds supply — pricing power and loyalty appear.',
    },
];

/* =========================
   STATIC DEMAND DATA
========================= */
const demandData = [
    { name: 'Mon', congestion: 45, demand: 85 },
    { name: 'Tue', congestion: 52, demand: 90 },
    { name: 'Wed', congestion: 48, demand: 88 },
    { name: 'Thu', congestion: 65, demand: 95 },
    { name: 'Fri', congestion: 70, demand: 98 },
    { name: 'Sat', congestion: 55, demand: 92 },
    { name: 'Sun', congestion: 40, demand: 80 },
];

export function StrategicWarRoom() {
    const [activeStep, setActiveStep] = useState(0);
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const focusedStep = hoveredStep ?? activeStep;

    useEffect(() => {
        if (hoveredStep !== null) return;
        const t = setInterval(
            () => setActiveStep((p) => (p + 1) % trustLadderSteps.length),
            2400
        );
        return () => clearInterval(t);
    }, [hoveredStep]);

    return (
        <section className="mb-16">
            <h2 className="text-[#7FB2D5] mb-8 tracking-wider flex items-center gap-3">
                <span className="text-2xl">STRATEGIC WAR-ROOM</span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#7FB2D5]/30 to-transparent" />
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4">


                {/* =========================
                    TRUST LADDER (UNCHANGED)
                ========================= */}
                <HolographicCard glowEffect className="group">
                    <div className="bg-[#7FB2D5]/5 backdrop-blur-xl border border-[#7FB2D5]/10 rounded-lg p-6 relative overflow-hidden hover:border-[#7FB2D5]/30 transition-all duration-300 h-full">
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#7FB2D5]/30 rounded-tl-lg" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#7FB2D5]/30 rounded-br-lg" />

                        <div className="absolute inset-0 bg-gradient-to-br from-[#7FB2D5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute left-10 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#7FB2D5]/40 to-transparent" />

                        <div
                            className="absolute left-[38px] w-[4px] h-14 bg-[#7FB2D5] rounded-full blur-sm transition-all duration-700"
                            style={{ top: `${70 + focusedStep * 70}px` }}
                        />

                        <div className="grid grid-cols-[150px_1fr] gap-14 relative z-10">

                            <div className="space-y-8 pt-4">
                                {trustLadderSteps.map((step, i) => {
                                    const active = focusedStep === i;
                                    return (
                                        <div
                                            key={i}
                                            onMouseEnter={() => setHoveredStep(i)}
                                            onMouseLeave={() => setHoveredStep(null)}
                                            className={`flex items-center gap-4 cursor-pointer transition-all duration-500
                                                ${active
                                                    ? 'opacity-100 scale-[1.04]'
                                                    : 'opacity-40 hover:opacity-70'}
                                            `}
                                        >
                                            <div
                                                className={`w-12 h-12 rounded-lg border flex items-center justify-center text-xl
                                                    ${active
                                                        ? 'bg-[#7FB2D5]/30 border-[#7FB2D5]/70 shadow-[0_0_30px_rgba(127,178,213,0.6)]'
                                                        : 'bg-[#7FB2D5]/10 border-[#7FB2D5]/20'}
                                                `}
                                            >
                                                {step.icon}
                                            </div>
                                            <span className="text-sm font-semibold text-white tracking-wide">
                                                {step.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="relative rounded-xl border border-[#7FB2D5]/20 bg-gradient-to-br from-[#7FB2D5]/10 to-transparent p-8">
                                <div className="text-xs tracking-widest text-[#7FB2D5]/60 mb-2">
                                    STRATEGIC INSIGHT
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {trustLadderSteps[focusedStep].label}
                                </h3>
                                <p className="text-sm text-[#7FB2D5]/80 leading-relaxed max-w-md">
                                    {trustLadderSteps[focusedStep].insight}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-xs text-[#7FB2D5]/60">
                                    <Zap className="w-4 h-4" />
                                    <span>Breakdown here weakens the entire chain.</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </HolographicCard>

                {/* =========================
                    SUPPRESSED DEMAND (STATIC, EXACT)
                ========================= */}
                <HolographicCard glowEffect className="group">
                    <div className="bg-[#7FB2D5]/5 backdrop-blur-xl border border-[#7FB2D5]/10 rounded-lg p-6 relative overflow-hidden hover:border-[#7FB2D5]/30 transition-all duration-300 h-full">

                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#7FB2D5]/30 rounded-tl-lg" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#7FB2D5]/30 rounded-br-lg" />

                        <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="mb-6">
                                <div className="text-xs text-[#7FB2D5]/60 tracking-widest mb-2">
                                    CAPACITY VS DEMAND
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    Suppressed Demand Analysis
                                </h3>
                            </div>

                            <div className="h-48 mb-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={demandData}>
                                        <Bar dataKey="congestion" radius={[4, 4, 0, 0]}>
                                            {demandData.map((_, i) => (
                                                <Cell key={i} fill="#FF6B6B" opacity={0.6} />
                                            ))}
                                        </Bar>
                                        <Bar dataKey="demand" radius={[4, 4, 0, 0]}>
                                            {demandData.map((_, i) => (
                                                <Cell key={i} fill="#7FB2D5" opacity={0.8} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="border border-[#FF6B6B]/20 rounded-lg p-4 bg-[#FF6B6B]/5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-3 h-3 bg-[#FF6B6B] rounded" />
                                        <span className="text-xs text-[#FF6B6B]/60">
                                            Grid Congestion
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-[#FF6B6B]">54%</div>
                                    <div className="text-xs text-[#FF6B6B]/60">
                                        Avg. Utilization
                                    </div>
                                </div>

                                <div className="border border-[#7FB2D5]/20 rounded-lg p-4 bg-[#7FB2D5]/5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-3 h-3 bg-[#7FB2D5] rounded animate-pulse" />
                                        <span className="text-xs text-[#7FB2D5]/60">
                                            Latent Demand
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-[#7FB2D5]">89%</div>
                                    <div className="text-xs text-[#7FB2D5]/60">
                                        Peak Potential
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-[#7FB2D5]/20 flex items-center gap-2 text-xs text-[#7FB2D5]/60">
                                <TrendingUp className="w-4 h-4" />
                                <span>35% gap indicates untapped market opportunity</span>
                            </div>
                        </div>
                    </div>
                </HolographicCard>

            </div>
        </section>
    );
}
