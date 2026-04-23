import { getLookbookEntries } from '@/lib/data';
import ImagePlaceholder from '@/components/storefront/ImagePlaceholder';

export default async function LookbookPage() {
  const entries = await getLookbookEntries();

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">The Lookbook</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-brand-ivory">
            Style in<br /><span className="italic">Motion</span>
          </h1>
        </div>
        {/* Masonry-style editorial grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {entries.map((entry, i) => (
            <div key={entry.id} className="break-inside-avoid group cursor-pointer relative overflow-hidden">
              <ImagePlaceholder
                label={entry.imageLabel}
                aspectRatio={i % 3 === 0 ? '2/3' : i % 3 === 1 ? '3/4' : '1/1'}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-black/80 to-transparent">
                <p className="font-sans text-xs tracking-widest uppercase text-brand-gold">{entry.occasion}</p>
                <p className="font-display text-xl font-light text-brand-ivory">{entry.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
