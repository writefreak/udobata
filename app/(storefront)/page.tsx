import HeroSection from '@/components/storefront/HeroSection';
import MarqueeBanner from '@/components/storefront/MarqueeBanner';
import CollectionCard from '@/components/storefront/CollectionCard';
import ProductGrid from '@/components/storefront/ProductGrid';
import BrandValues from '@/components/storefront/BrandValues';
import LookbookStrip from '@/components/storefront/LookbookStrip';
import TestimonialCarousel from '@/components/storefront/TestimonialCarousel';
import NewsletterSection from '@/components/storefront/NewsletterSection';
import { getCollections, getFeaturedProducts, getLookbookEntries, getTestimonials } from '@/lib/data';

export default async function HomePage() {
  const [collections, featured, lookbook, testimonials] = await Promise.all([
    getCollections(),
    getFeaturedProducts(),
    getLookbookEntries(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroSection />
      <MarqueeBanner />

      {/* Collections */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">The Collections</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-brand-ivory">
              Every Occasion,<br /><span className="italic">Covered.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {collections.map((c) => <CollectionCard key={c.id} collection={c} />)}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">Curated for You</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-brand-ivory">
                Featured<br /><span className="italic">Pieces</span>
              </h2>
            </div>
          </div>
          <ProductGrid products={featured} />
        </div>
      </section>

      <BrandValues />
      <LookbookStrip entries={lookbook} />
      <TestimonialCarousel testimonials={testimonials} />
      <NewsletterSection />
    </>
  );
}
