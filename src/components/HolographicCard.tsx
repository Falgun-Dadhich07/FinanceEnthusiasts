import { ReactNode, useRef, useState } from 'react';

interface HolographicCardProps {
    children: ReactNode;
    className?: string;
    glowEffect?: boolean;
}

export function HolographicCard({ children, className = '', glowEffect = false }: HolographicCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -5;
        const rotateYValue = ((x - centerX) / centerX) * 5;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative transition-transform duration-200 ease-out ${className}`}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
            }}
        >
            {glowEffect && (
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#7FB2D5] via-[#7FB2D5] to-[#7FB2D5] rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
            )}
            {children}
        </div>
    );
}
