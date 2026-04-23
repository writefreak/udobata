import ImagePlaceholder from '@/components/storefront/ImagePlaceholder';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-6">Our Story</p>
            <h1 className="font-display text-6xl md:text-7xl font-light text-brand-ivory leading-tight mb-8">
              Born in<br /><span className="italic">Nigeria.</span><br />Made for<br />the World.
            </h1>
            <div className="w-16 h-px bg-brand-gold mb-8" />
            <p className="font-sans text-sm text-brand-ivory-dim leading-relaxed mb-6">
              Udobata was built on a single conviction — that the Nigerian man deserves a fashion house that understands him completely. His occasions, his culture, his standard.
            </p>
            <p className="font-sans text-sm text-brand-ivory-dim leading-relaxed">
              We began in Lagos, tailoring senators for men who moved between native gatherings and corporate boardrooms. Today, Udobata clothes men across Nigeria for the moments that matter — weddings, installations, funerals, galas, and everything in between.
            </p>
          </div>
          <div className="relative">
            <ImagePlaceholder label="Founder in workshop, measuring fabric" aspectRatio="3/4" />
            <div className="absolute -bottom-6 -left-6 bg-brand-gold p-8 w-48">
              <p className="font-display text-4xl font-bold text-brand-black">10+</p>
              <p className="font-sans text-xs text-brand-black/70 mt-1">Years of Excellence</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-brand-border pt-20 mb-24">
          {[
            { num: '2,000+', label: 'Garments Crafted' },
            { num: '36', label: 'States Served' },
            { num: '100%', label: 'Made in Nigeria' },
          ].map((stat) => (
            <div key={stat.num} className="text-center">
              <p className="font-display text-5xl font-light text-brand-gold mb-2">{stat.num}</p>
              <p className="font-sans text-xs tracking-widest uppercase text-brand-ivory-dim">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-gold text-brand-black font-sans text-xs tracking-widest uppercase px-10 py-5 hover:bg-brand-gold-muted transition-colors duration-200 cursor-pointer">
            Book a Fitting <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
