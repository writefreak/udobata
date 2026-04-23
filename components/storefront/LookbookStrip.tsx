import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { LookbookEntry } from '@/lib/data';
import ImagePlaceholder from './ImagePlaceholder';

interface LookbookStripProps {
  entries: LookbookEntry[];
}

export default function LookbookStrip({ entries }: LookbookStripProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-3">The Lookbook</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-brand-ivory">
              Style in<br /><span className="italic">Motion</span>
            </h2>
          </div>
          <Link href="/lookbook" className="hidden md:inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-brand-ivory-dim hover:text-brand-gold transition-colors duration-200 cursor-pointer">
            View Full Lookbook <ArrowRight size={12} />
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
          {entries.map((entry) => (
            <div key={entry.id} className="shrink-0 w-64 md:w-72 group cursor-pointer">
              <div className="relative overflow-hidden mb-3">
                <ImagePlaceholder label={entry.imageLabel} aspectRatio="3/4" />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-300 z-20" />
              </div>
              <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-1">{entry.occasion}</p>
              <p className="font-display text-lg font-light text-brand-ivory">{entry.label}</p>
            </div>
          ))}
        </div>

        <Link href="/lookbook" className="md:hidden mt-8 inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-brand-ivory-dim hover:text-brand-gold transition-colors duration-200 cursor-pointer">
          View Full Lookbook <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
}
