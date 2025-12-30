import { Sidebar } from './components/Sidebar';
import { MarketIntelligence } from './components/MarketIntelligence';
import { CostReduction } from './components/CostReduction';
import { SoftwareTiers } from './components/SoftwareTiers';
import { StrategicWarRoom } from './components/StrategicWarRoom';
import { ParticleField } from './components/ParticleField';
import { useState, useEffect } from 'react';
import './styles/globals.css';

export default function App() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#05070A] text-white relative overflow-hidden">
            {/* Particle background */}
            <ParticleField />

            {/* Animated grid background */}
            <div className="fixed inset-0 grid-background opacity-30 pointer-events-none" />

            {/* Scanline effect */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7dbff8]/5 to-transparent h-32 animate-scanline" />
            </div>

            {/* Vignette effect */}
            <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-[#05070A] pointer-events-none" />

            <Sidebar />

            <main className="ml-20 p-8 relative z-10">

                {/* Header stays same */}





                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-[#7FB2D5] mb-2 tracking-tight relative inline-block">
                                ATHER ENERGY
                                <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#7FB2D5] via-[#7FB2D5]/50 to-transparent" />
                            </h1>
                            <p className="text-[#7FB2D5]/60 text-sm tracking-widest flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-[#7FB2D5] rounded-full animate-pulse" />
                                FinanceEnthusiasts
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="text-right group">
                                <div className="text-xs text-[#7FB2D5]/60 mb-1 tracking-widest">SYSTEM STATUS</div>
                                <div className="flex items-center gap-2 bg-[#7FB2D5]/5 border border-[#7FB2D5]/20 rounded-lg px-3 py-2 group-hover:border-[#7FB2D5]/40 transition-all duration-300">
                                    <div className="relative">
                                        <div className="w-2 h-2 bg-[#7FB2D5] rounded-full" />
                                        <div className="absolute inset-0 w-2 h-2 bg-[#7FB2D5] rounded-full animate-ping" />
                                    </div>
                                    <span className="text-sm text-[#7FB2D5]">OPERATIONAL</span>
                                </div>
                            </div>

                            <div className="text-right group">
                                <div className="text-xs text-[#7FB2D5]/60 mb-1 tracking-widest">TIMESTAMP</div>
                                <div className="bg-[#7FB2D5]/5 border border-[#7FB2D5]/20 rounded-lg px-3 py-2 group-hover:border-[#7FB2D5]/40 transition-all duration-300">
                                    <div className="text-sm text-white tabular-nums font-mono">
                                        {currentTime.toLocaleTimeString('en-US', {
                                            hour12: false,
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit'
                                        })} IST
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 h-px bg-gradient-to-r from-[#7FB2D5]/0 via-[#7FB2D5]/20 to-[#7FB2D5]/0 relative">
                        <div className="absolute top-0 left-0 h-px w-1/3 bg-gradient-to-r from-[#7FB2D5] to-transparent animate-pulse" />
                    </div>
                </header>

                <section id="market">
                    <MarketIntelligence />
                </section>

                <section id="capital">
                    <CostReduction />
                </section>

                <section id="industrial">
                    <SoftwareTiers />
                </section>

                <section id="data">
                    <StrategicWarRoom />
                </section>

                {/* Footer */}
                <footer className="mt-12 pt-6 border-t border-[#7FB2D5]/10 relative">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7FB2D5]/20 to-transparent" />
                    <div className="flex items-center justify-between text-xs text-[#7FB2D5]/40">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-[#7FB2D5] rounded-full" />
                            <span>© 2025 ATHER ENERGY</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-[#7FB2D5] rounded-full animate-pulse" />
                                <span>SECURE CONNECTION</span>
                            </div>
                            <span>•</span>
                            <span>ENCRYPTED TELEMETRY</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-[#7FB2D5] rounded-full animate-pulse" style={{ animationDelay: '0.25s' }} />
                                <span>REAL-TIME SYNC</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div >
    );
}
