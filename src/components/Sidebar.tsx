import {
    TrendingUp,
    Zap,
    DollarSign,
    Database,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { id: "market", icon: TrendingUp, label: "MARKET INTELLIGENCE" },
    { id: "capital", icon: DollarSign, label: "COST REDUCTION ROADMAP" },
    { id: "industrial", icon: Zap, label: "ATHERSTACK SOFTWARE TIERS" },
    { id: "data", icon: Database, label: "STRATEGIC WAR-ROOM" },
];

export function Sidebar() {
    const [activeId, setActiveId] = useState("market");

    /* =========================
       CLICK → SCROLL
    ========================= */
    const handleNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveId(id);
        }
    };

    /* =========================
       SCROLL → ACTIVE (SCROLL SPY)
    ========================= */
    useEffect(() => {
        const sections = navItems
            .map(item => document.getElementById(item.id))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Pick the entry closest to viewport center
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            Math.abs(a.boundingClientRect.top) -
                            Math.abs(b.boundingClientRect.top)
                    );

                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                root: null,
                // 🔥 THIS IS THE KEY
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);


    return (
        <aside className="fixed left-0 top-0 h-screen w-20 bg-[#05070A] border-r border-[#7FB2D5]/10 flex flex-col items-center py-8 z-50 backdrop-blur-xl">

            {/* Border energy rail */}
            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-[#7FB2D5]/25 to-transparent" />

            {/* BRAND NODE */}
            <div className="mb-10 relative group">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#7FB2D5] to-[#7cabd4] flex items-center justify-center shadow-[0_0_25px_rgba(127,178,213,0.45)]">
                    <span className="text-[#05070A] font-bold text-sm tracking-wide">
                        AE
                    </span>
                </div>
                <div className="absolute inset-0 rounded-lg blur-md bg-[#7FB2D5]/30 opacity-60 group-hover:opacity-90 transition-opacity" />
            </div>

            {/* NAV */}
            <nav className="flex-1 flex flex-col gap-5 relative">

                {/* Active vertical tracker */}
                <div
                    className="absolute left-full ml-[7px] w-0.5 rounded-full bg-[#7FB2D5] transition-all duration-500"
                    style={{
                        top: `${navItems.findIndex(n => n.id === activeId) * 68 + 6}px`,
                        height: "28px",
                    }}
                />

                {navItems.map((item) => {
                    const isActive = activeId === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`relative w-12 h-12 rounded-lg border flex items-center justify-center transition-all duration-300 group
                                ${isActive
                                    ? "bg-[#7FB2D5]/20 border-[#7FB2D5]/40"
                                    : "bg-[#7FB2D5]/5 border-[#7FB2D5]/10 hover:bg-[#7FB2D5]/10 hover:border-[#7FB2D5]/30"
                                }`}
                        >
                            {isActive && (
                                <div className="absolute inset-0 rounded-lg bg-[#7FB2D5]/10 blur-sm" />
                            )}

                            <item.icon
                                className={`w-5 h-5 relative z-10 transition-all duration-300
                                    ${isActive
                                        ? "text-[#7FB2D5] scale-110"
                                        : "text-[#7FB2D5]/80 group-hover:scale-110"
                                    }`}
                            />

                            <span className="absolute left-full ml-4 px-3 py-2 bg-[#05070A]/90 border border-[#7FB2D5]/20 rounded-md text-[11px] tracking-widest text-[#7FB2D5] whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all pointer-events-none backdrop-blur-xl">
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>

            {/* STATUS NODE */}
            <div className="mt-10 relative">
                <div className="w-12 h-12 rounded-lg bg-[#7FB2D5]/5 border border-[#7FB2D5]/15 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#7FB2D5] rounded-full animate-pulse" />
                </div>
                <div className="absolute inset-0 rounded-lg border border-[#7FB2D5]/30 opacity-30" />
            </div>
        </aside>
    );
}
