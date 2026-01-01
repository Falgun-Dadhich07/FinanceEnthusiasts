import { useEffect, useState } from 'react';
import { Zap, TrendingUp } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { HolographicCard } from './HolographicCard';
import { ShieldCheck, Layers, Info } from 'lucide-react';


/* =========================
   TRUST LADDER CONFIG [cite: 596-599]
========================= */
const trustLadderSteps = [
    {
        label: 'Innovation',
        icon: '💡',
        insight: 'Vertical integration of battery, powertrain, and software (AtherStack) to maintain a premium hardware-software moat. ',
    },
    {
        label: 'Scale',
        icon: '📈',
        insight: 'Moving from early adopters to mass convenience (Rizta represents 52% of volume), but scaling must not precede unit economic stability. ',
    },
    {
        label: 'Utilisation',
        icon: '⚡',
        insight: 'The assembly utilization at the Hosur factory is only ~39%. Scale without utilization increases losses rather than reducing them. ',
    },
    {
        label: 'Cash Flow',
        icon: '💰',
        insight: 'Shift to high-margin recurring revenue (>60% GM) from software and accessories to offset hardware manufacturing constraints.',
    },
    {
        label: 'Trust',
        icon: '🤝',
        insight: 'Post-IPO reliability. Shifting from "growth optics" to "return on capital" to ensure long-term shareholder survival.',
    },
];



/* =========================
   SUPPRESSED DEMAND DATA [cite: 183, 184]
========================= */
const demandData = [
    { name: 'Mon', recorded: 45, suppressed: 40 },
    { name: 'Tue', recorded: 52, suppressed: 38 },
    { name: 'Wed', recorded: 48, suppressed: 40 },
    { name: 'Thu', recorded: 65, suppressed: 30 },
    { name: 'Fri', recorded: 70, suppressed: 28 },
    { name: 'Sat', recorded: 55, suppressed: 37 },
    { name: 'Sun', recorded: 40, suppressed: 40 },
];

export function StrategicWarRoom() {
    const [activeStep, setActiveStep] = useState(0);
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const focusedStep = hoveredStep ?? activeStep;

    useEffect(() => {
        if (hoveredStep !== null) return;
        const t = setInterval(() => setActiveStep((p) => (p + 1) % trustLadderSteps.length), 3000);
        return () => clearInterval(t);
    }, [hoveredStep]);

    return (
        <section className="mb-16">
            <h2 className="text-[#7FB2D5] mb-8 tracking-wider flex items-center gap-3">
                <span className="text-2xl font-bold uppercase tracking-widest">Strategic War-Room</span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#7FB2D5]/30 to-transparent" />
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">

                {/* TRUST LADDER PILLAR */}
                <HolographicCard glowEffect className="group">
                    <div className="bg-[#7FB2D5]/5 backdrop-blur-xl border border-[#7FB2D5]/10 rounded-lg p-6 relative overflow-hidden hover:border-[#7FB2D5]/30 transition-all duration-300 h-full">

                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#7FB2D5]/30 rounded-tl-lg" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#7FB2D5]/30 rounded-br-lg" />

                        <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <h3 className="text-2xl font-black text-white mb-1 uppercase italic">The Trust Ladder</h3>
                                <p className="text-[10px] text-[#7FB2D5]/60 uppercase tracking-[0.2em] font-bold">Operational Maturation Path</p>
                            </div>

                        </div>

                        <div className="grid grid-cols-[160px_1fr] gap-12">
                            <div className="space-y-6 relative">
                                <div className="absolute left-[19px] top-4 bottom-4 w-px bg-[#7FB2D5]/20" />
                                {trustLadderSteps.map((step, i) => (
                                    <div
                                        key={i}
                                        onMouseEnter={() => setHoveredStep(i)}
                                        onMouseLeave={() => setHoveredStep(null)}
                                        className={`flex items-center gap-4 cursor-pointer transition-all duration-500 ${focusedStep === i ? 'translate-x-2' : 'opacity-30'}`}
                                    >
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center border-2 z-10 ${focusedStep === i ? 'bg-[#7FB2D5] border-[#7FB2D5] text-black shadow-[0_0_20px_rgba(127,178,213,0.4)]' : 'bg-black border-[#7FB2D5]/20 text-[#7FB2D5]'}`}>
                                            {step.icon}
                                        </div>
                                        <span className={`text-[11px] font-black uppercase tracking-wider ${focusedStep === i ? 'text-white' : 'text-[#7FB2D5]/40'}`}>{step.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-[#7FB2D5]/10 to-transparent border border-[#7FB2D5]/20 rounded-2xl p-8 relative min-h-[220px] flex flex-col justify-center">
                                <div className="absolute -top-3 left-6 bg-[#7FB2D5] text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                                    Current Phase Analysis
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4 italic">"{trustLadderSteps[focusedStep].label} Strategy"</h4>
                                <p className="text-sm text-[#7FB2D5]/80 leading-relaxed font-medium">
                                    {trustLadderSteps[focusedStep].insight}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-[10px] text-[#7FB2D5]/40 font-bold uppercase tracking-widest">
                                    <Zap className="w-3 h-3" />
                                    <span>Focus: Return on Invested Capital</span>
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
                                        <Bar dataKey="suppressed" radius={[4, 4, 0, 0]}>
                                            {demandData.map((_, i) => (
                                                <Cell key={i} fill="#FF6B6B" opacity={0.6} />
                                            ))}
                                        </Bar>

                                        <Bar dataKey="recorded" radius={[4, 4, 0, 0]}>
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
                                            Fixed-Cost Absorption
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-[#FF6B6B]">AT RISK</div>
                                    <div className="text-xs text-[#FF6B6B]/60">
                                        Utilization {"<"} 50%
                                    </div>
                                </div>

                                <div className="border border-[#7FB2D5]/20 rounded-lg p-4 bg-[#7FB2D5]/5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-3 h-3 bg-[#7FB2D5] rounded animate-pulse" />
                                        <span className="text-xs text-[#7FB2D5]/60">
                                            Assembly Utilisation
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-[#7FB2D5]">~39%</div>
                                    <div className="text-xs text-[#7FB2D5]/60">
                                        9M FY25
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </HolographicCard>

            </div>
        </section>
    );
}
