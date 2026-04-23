'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProductBySlug, getCollections, type Product, type Collection } from '@/lib/data';
import ProductForm from '@/components/admin/ProductForm';

interface Props { params: { slug: string } }

export default function EditProductPage({ params }: Props) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    Promise.all([getProductBySlug(params.slug), getCollections()]).then(([p, c]) => {
      setProduct(p); setCollections(c);
    });
  }, [params.slug]);

  if (!product) return <div className="font-sans text-admin-text-muted">Loading...</div>;

  return (
    <div>
      <p className="font-sans text-sm text-admin-text-muted mb-8">Edit the details for <strong className="text-admin-text">{product.name}</strong>.</p>
      <div className="bg-white border border-admin-border rounded p-8">
        <ProductForm collections={collections} initialData={product} onSubmit={() => router.push('/admin/products')} />
      </div>
    </div>
  );
}
