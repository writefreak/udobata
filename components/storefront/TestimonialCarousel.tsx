'use client';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/lib/data';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="py-24 bg-brand-surface border-y border-brand-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-12">What They Say</p>
        <div className="flex justify-center gap-1 mb-8">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
          ))}
        </div>
        <blockquote className="font-display text-2xl md:text-3xl font-light italic text-brand-ivory leading-relaxed mb-10">
          "{t.quote}"
        </blockquote>
        <p className="font-sans text-sm tracking-widest uppercase text-brand-gold">{t.name}</p>
        <p className="font-sans text-xs text-brand-ivory-dim mt-1">{t.city}</p>

        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 border border-brand-border flex items-center justify-center text-brand-ivory-dim hover:border-brand-gold hover:text-brand-gold transition-all duration-200 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Testimonial ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 cursor-pointer ${i === idx ? 'bg-brand-gold w-6' : 'bg-brand-border'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
            className="w-10 h-10 border border-brand-border flex items-center justify-center text-brand-ivory-dim hover:border-brand-gold hover:text-brand-gold transition-all duration-200 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
