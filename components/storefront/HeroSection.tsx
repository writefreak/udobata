'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-brand-black">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 20% 80%, rgba(139,115,53,0.06) 0%, transparent 50%)'
        }} />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-1/3 top-0 bottom-0 w-px bg-brand-gold/10" />
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-brand-gold/5" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-brand-gold mb-8 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            Nigerian Premium Menswear
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-light leading-none text-brand-ivory mb-8 animate-fade-up opacity-0 animation-delay-100" style={{ animationFillMode: 'forwards' }}>
            Dressed<br />
            <span className="italic text-brand-gold">for the</span><br />
            Occasion.
          </h1>
          <p className="font-sans text-base text-brand-ivory-dim leading-relaxed max-w-md mb-12 animate-fade-up opacity-0 animation-delay-200" style={{ animationFillMode: 'forwards' }}>
            Senators, Agbada, and Luxury Suits — Udobata is for the Nigerian man who knows that how you appear is the first thing you say.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animation-delay-300" style={{ animationFillMode: 'forwards' }}>
            <Link href="/collections" className="inline-flex items-center gap-3 bg-brand-gold text-brand-black font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-brand-gold-muted transition-colors duration-200 cursor-pointer group">
              Shop Collections
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 border border-brand-border text-brand-ivory font-sans text-xs tracking-widest uppercase px-8 py-4 hover:border-brand-gold hover:text-brand-gold transition-all duration-200 cursor-pointer">
              Book a Fitting
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-up opacity-0 animation-delay-400" style={{ animationFillMode: 'forwards' }}>
        <div className="w-px h-16 bg-gradient-to-b from-brand-gold/60 to-transparent" />
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold/60">Scroll</p>
      </div>
    </section>
  );
}
