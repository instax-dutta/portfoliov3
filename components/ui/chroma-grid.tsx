import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './chroma-grid.css';

export interface ChromaGridItem {
    image?: string;
    icon?: React.ReactNode;
    title: string;
    subtitle: string;
    handle?: string;
    location?: string;
    borderColor?: string;
    gradient?: string;
    url?: string;
}

interface ChromaGridProps {
    items?: ChromaGridItem[];
    className?: string;
    radius?: number;
    columns?: number;
    rows?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}

export const ChromaGrid: React.FC<ChromaGridProps> = ({
    items,
    className = '',
    radius = 300,
    columns = 3,
    rows = 2,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const setX = useRef<((value: number) => void) | null>(null);
    const setY = useRef<((value: number) => void) | null>(null);
    const pos = useRef({ x: 0, y: 0 });

    const data = items || [];

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px') as (value: number) => void;
        setY.current = gsap.quickSetter(el, '--y', 'px') as (value: number) => void;
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        if (setX.current) setX.current(pos.current.x);
        if (setY.current) setY.current(pos.current.y);
    }, []);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                if (setX.current) setX.current(pos.current.x);
                if (setY.current) setY.current(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!rootRef.current) return;
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        if (fadeRef.current) {
            gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
        }
    };

    const handleLeave = () => {
        if (fadeRef.current) {
            gsap.to(fadeRef.current, {
                opacity: 1,
                duration: fadeOut,
                overwrite: true
            });
        }
    };

    const handleCardClick = (url?: string) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={rootRef}
            className={`chroma-grid ${className}`}
            style={{
                '--r': `${radius}px`,
                '--cols': columns,
                '--rows': rows
            } as React.CSSProperties}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
        >
            {data.map((c, i) => (
                <article
                    key={i}
                    className="chroma-card group"
                    onMouseMove={handleCardMove}
                    onClick={() => handleCardClick(c.url)}
                    style={{
                        '--card-border': c.borderColor || 'transparent',
                        '--card-gradient': c.gradient,
                        cursor: c.url ? 'pointer' : 'default'
                    } as React.CSSProperties}
                >
                    <div className="chroma-img-wrapper">
                        {c.image ? (
                            <img src={c.image} alt={c.title} loading="lazy" />
                        ) : c.icon ? (
                            <div className="w-full h-full flex items-center justify-center text-white/80 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-50">
                                {c.icon}
                            </div>
                        ) : null}
                    </div>
                    <footer className="chroma-info">
                        <div className="absolute bottom-full left-0 w-full px-4 pb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                            <div className="bg-black/90 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-xl">
                                <p className="font-medium text-white text-sm leading-relaxed">{c.title}</p>
                            </div>
                        </div>
                        <h3 className="name font-bold text-lg leading-snug truncate">{c.title}</h3>
                        {c.handle && <span className="handle text-sm">{c.handle}</span>}
                        <p className="role text-sm">{c.subtitle}</p>
                        {c.location && <span className="location text-xs">{c.location}</span>}
                    </footer>
                </article>
            ))}
            <div className="chroma-overlay" />
            <div ref={fadeRef} className="chroma-fade" />
        </div>
    );
};

export default ChromaGrid;
