import { getCollections, getProducts } from '@/lib/data';
import CollectionCard from '@/components/storefront/CollectionCard';

export default async function CollectionsPage() {
  const [collections, products] = await Promise.all([getCollections(), getProducts()]);

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">Our Collections</p>
          <h1 className="font-display text-6xl md:text-7xl font-light text-brand-ivory">
            The Full<br /><span className="italic">Range</span>
          </h1>
          <div className="w-16 h-px bg-brand-gold mt-8" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((c) => (
            <div key={c.id}>
              <CollectionCard collection={c} />
              <p className="font-sans text-xs text-brand-ivory-dim/60 mt-3">
                {products.filter((p) => p.collectionSlug === c.slug).length} pieces
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
