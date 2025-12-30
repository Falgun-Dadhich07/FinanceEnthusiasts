import { Check, Zap, Shield } from 'lucide-react';
import { HolographicCard } from './HolographicCard';

const tiers = [
    {
        name: 'Pro+',
        icon: Zap,
        price: '₹5,500-7,000',
        period: '/year',
        features: [
            'Advanced Dashboard & Ride Controls',
            'SkidControl Advanced',
            'Google Maps Integration',
            'Real-time Diagnostics',
            'Premium OTA Updates',
            'Priority Support',
        ],
        highlight: true,
    },
    {
        name: 'Pro',
        icon: Check,
        price: '₹3,500-6,000',
        period: '/year',
        features: [
            'Live Vehicle Tracking',
            'Standard OTA Updates',
            'Basic Health Alerts',
            'App Control',
            'Ride Statistics',
        ],
        highlight: false,
    },
    {
        name: 'Lite',
        icon: Shield,
        price: '₹1,500-2,500',
        period: '/year',
        features: [
            'Safety Compliance',
            'Theft Alerts',
            'Essential OTA',
            'Standard Features',
        ],
        highlight: false,
    },
];

export function SoftwareTiers() {
    return (
        <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-[#7FB2D5] tracking-wider flex items-center gap-3">
                    <span className="text-2xl">ATHERSTACK SOFTWARE TIERS</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#7FB2D5]/20 to-transparent ml-3" />
                </h2>
                <div className="flex items-center gap-2 bg-[#7FB2D5]/10 border border-[#7FB2D5]/20 rounded-lg px-4 py-2 animate-pulse-glow">
                    <span className="text-xs text-[#7FB2D5]/60">EBITDA MARGIN</span>
                    <span className="text-xl font-bold text-[#7FB2D5] tabular-nums">56%</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tiers.map((tier, index) => (
                    <HolographicCard key={index} glowEffect className="group">
                        <div
                            className={`bg-[#7FB2D5]/5 backdrop-blur-xl border rounded-lg p-6 relative overflow-hidden hover:border-[#7FB2D5]/30 transition-all duration-300 h-full ${tier.highlight
                                ? 'border-[#7FB2D5]/30 shadow-[0_0_30px_rgba(54,225,160,0.2)]'
                                : 'border-[#7FB2D5]/10'
                                }`}
                        >
                            {tier.highlight && (
                                <>
                                    <div className="absolute top-0 right-0 bg-[#7FB2D5] text-[#05070A] text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        PREMIUM
                                    </div>
                                    {/* Animated border pulse for premium */}
                                    <div className="absolute -inset-[2px] bg-gradient-to-r from-[#7FB2D5] via-[#033f63] to-[#7FB2D5] rounded-lg opacity-20 blur-sm animate-pulse" />
                                </>
                            )}

                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#7FB2D5]/30 rounded-tl-lg" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#7FB2D5]/30 rounded-br-lg" />

                            <div className="absolute inset-0 bg-gradient-to-br from-[#7FB2D5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${tier.highlight ? 'bg-[#7FB2D5] animate-pulse-glow' : 'bg-[#7FB2D5]/20 group-hover:bg-[#7FB2D5]/30'
                                        }`}>
                                        <tier.icon className={`w-5 h-5 ${tier.highlight ? 'text-[#05070A]' : 'text-[#7FB2D5]'}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-[#7FB2D5] tabular-nums">{tier.price}</span>
                                        <span className="text-sm text-[#7FB2D5]/60">{tier.period}</span>
                                    </div>
                                    {tier.highlight && (
                                        <div className="mt-2 text-xs text-[#7FB2D5]/60 flex items-center gap-1">
                                            <div className="w-1 h-1 bg-[#7FB2D5] rounded-full animate-pulse" />
                                            <span>Most Popular Choice</span>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    {tier.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start gap-2 group/feature">
                                            <div className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-300 ${tier.highlight
                                                ? 'bg-[#7FB2D5]/30 group-hover/feature:bg-[#7FB2D5]/50'
                                                : 'bg-[#7FB2D5]/20 group-hover/feature:bg-[#7FB2D5]/30'
                                                }`}>
                                                <Check className="w-3 h-3 text-[#7FB2D5]" />
                                            </div>
                                            <span className="text-sm text-white/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* <button className={`w-full mt-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 relative overflow-hidden group/btn ${tier.highlight
                                    ? 'bg-[#7FB2D5] text-[#050A30] hover:bg-[#033f63]'
                                    : 'bg-[#7FB2D5]/10 text-[#7FB2D5] border border-[#7FB2D5]/20 hover:bg-[#7FB2D5]/20'
                                    }`}>
                                    {/* Shine effect on button */}
                                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                                <span className="relative z-10">SELECT PLAN</span> */}
                                {/* </button> */}
                            </div>
                        </div>
                    </HolographicCard>
                ))}
            </div>
        </section>
    );
}