import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Collection } from '@/lib/data';
import ImagePlaceholder from './ImagePlaceholder';

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link href={`/collections/${collection.slug}`} className="group block relative overflow-hidden cursor-pointer">
      <ImagePlaceholder
        label={`${collection.name} — ${collection.heroLabel}`}
        aspectRatio="2/3"
        className="transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:from-brand-black/80" />
      <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-3">{collection.heroLabel}</p>
        <h3 className="font-display text-3xl font-light text-brand-ivory mb-3">{collection.name}</h3>
        <p className="font-sans text-sm text-brand-ivory-dim leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-5">
          {collection.description}
        </p>
        <span className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-brand-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Explore <ArrowRight size={12} />
        </span>
      </div>
      <div className="absolute top-6 right-6 z-20 w-px h-12 bg-brand-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}
