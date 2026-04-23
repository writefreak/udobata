import { notFound } from 'next/navigation';
import { getCollectionBySlug, getProductsByCollection } from '@/lib/data';
import ProductGrid from '@/components/storefront/ProductGrid';
import ImagePlaceholder from '@/components/storefront/ImagePlaceholder';

interface Props { params: { slug: string } }

export default async function CollectionPage({ params }: Props) {
  const [collection, products] = await Promise.all([
    getCollectionBySlug(params.slug),
    getProductsByCollection(params.slug),
  ]);

  if (!collection) notFound();

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-end overflow-hidden">
        <ImagePlaceholder
          label={`${collection.name} Collection — ${collection.heroLabel}`}
          aspectRatio="auto"
          className="absolute inset-0 h-full w-full"
          overlay={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-3">{collection.heroLabel}</p>
          <h1 className="font-display text-6xl md:text-7xl font-light text-brand-ivory">{collection.name}</h1>
          <p className="font-sans text-sm text-brand-ivory-dim mt-4 max-w-md leading-relaxed">{collection.description}</p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <p className="font-sans text-xs text-brand-ivory-dim">{products.length} pieces</p>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
