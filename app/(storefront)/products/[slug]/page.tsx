import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, getProductsByCollection, getCollectionBySlug } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import ImagePlaceholder from '@/components/storefront/ImagePlaceholder';
import SizeSelector from '@/components/storefront/SizeSelector';
import ColorSwatch from '@/components/storefront/ColorSwatch';
import ProductCard from '@/components/storefront/ProductCard';
import { ShoppingBag, CalendarCheck, Truck, ChevronRight } from 'lucide-react';

interface Props { params: { slug: string } }

export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const [collection, relatedRaw] = await Promise.all([
    getCollectionBySlug(product.collectionSlug),
    getProductsByCollection(product.collectionSlug),
  ]);
  const related = relatedRaw.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-black pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-12" aria-label="Breadcrumb">
          {[
            { label: 'Collections', href: '/collections' },
            { label: collection?.name ?? 'Collection', href: `/collections/${product.collectionSlug}` },
            { label: product.name, href: '#' },
          ].map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <ChevronRight size={12} className="text-brand-border" />}
              {crumb.href === '#' ? (
                <span className="font-sans text-xs text-brand-ivory-dim truncate max-w-xs">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="font-sans text-xs text-brand-ivory-dim/60 hover:text-brand-gold transition-colors duration-200">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="space-y-4">
            <ImagePlaceholder label={product.images[0] ?? product.name} aspectRatio="3/4" />
            <div className="grid grid-cols-3 gap-4">
              {(product.images[1] ? product.images.slice(1, 4) : [product.images[0], product.images[0]]).map((img, i) => (
                <ImagePlaceholder key={i} label={img ?? product.name} aspectRatio="3/4" className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-200" />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-24 space-y-8">
            <div>
              <span className="inline-block font-sans text-xs tracking-widest uppercase text-brand-gold border border-brand-gold/30 px-3 py-1 mb-4">
                {product.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-light text-brand-ivory mb-4">{product.name}</h1>
              <p className="font-display text-3xl font-light text-brand-gold">{formatPrice(product.price)}</p>
            </div>

            <p className="font-sans text-sm text-brand-ivory-dim leading-relaxed">{product.description}</p>

            <SizeSelector sizes={product.sizes} />
            <ColorSwatch colors={product.colors} />

            <div className="flex flex-col gap-3 pt-2">
              <button className="flex items-center justify-center gap-3 bg-brand-gold text-brand-black font-sans text-xs tracking-widest uppercase py-5 hover:bg-brand-gold-muted transition-colors duration-200 cursor-pointer w-full">
                <ShoppingBag size={15} />
                Add to Cart
              </button>
              <Link href="/contact" className="flex items-center justify-center gap-3 border border-brand-border text-brand-ivory font-sans text-xs tracking-widest uppercase py-5 hover:border-brand-gold hover:text-brand-gold transition-all duration-200 cursor-pointer w-full">
                <CalendarCheck size={15} />
                Book a Fitting
              </Link>
            </div>

            <div className="flex items-center gap-3 text-brand-ivory-dim border-t border-brand-border pt-6">
              <Truck size={14} className="text-brand-gold shrink-0" />
              <p className="font-sans text-xs leading-relaxed">Free delivery on orders above ₦100,000. Nationwide shipping in 5–10 business days.</p>
            </div>

            {/* Fabric & Care accordion */}
            <details className="border-t border-brand-border pt-6">
              <summary className="font-sans text-xs tracking-widest uppercase text-brand-ivory cursor-pointer hover:text-brand-gold transition-colors duration-200 list-none flex items-center justify-between">
                Fabric & Care
                <ChevronRight size={14} className="text-brand-gold" />
              </summary>
              <p className="font-sans text-sm text-brand-ivory-dim leading-relaxed mt-4">{product.fabric}</p>
              <p className="font-sans text-sm text-brand-ivory-dim leading-relaxed mt-2">Dry clean only. Store in the garment bag provided.</p>
            </details>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24 border-t border-brand-border pt-20">
            <h2 className="font-display text-3xl font-light text-brand-ivory mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
