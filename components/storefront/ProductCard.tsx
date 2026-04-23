import Link from 'next/link';
import type { Product } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import ImagePlaceholder from './ImagePlaceholder';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block cursor-pointer">
      <div className="relative overflow-hidden mb-4">
        <ImagePlaceholder
          label={product.images[0] ?? product.name}
          aspectRatio="3/4"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-300 z-20" />
        {product.isNew && (
          <span className="absolute top-4 left-4 z-30 bg-brand-gold text-brand-black font-sans text-xs tracking-widest uppercase px-3 py-1">
            New
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-brand-black/60 z-30 flex items-center justify-center">
            <span className="font-sans text-xs tracking-widest uppercase text-brand-ivory-dim">Sold Out</span>
          </div>
        )}
      </div>
      <div>
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold/70 mb-1">{product.category}</p>
        <h3 className="font-display text-lg font-light text-brand-ivory mb-2 group-hover:text-brand-gold transition-colors duration-200">{product.name}</h3>
        <p className="font-sans text-sm text-brand-ivory-dim">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
