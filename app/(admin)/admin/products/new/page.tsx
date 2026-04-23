'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCollections, type Collection } from '@/lib/data';
import ProductForm from '@/components/admin/ProductForm';

export default function NewProductPage() {
  const router = useRouter();
  const [collections, setCollections] = useState<Collection[]>([]);
  useEffect(() => { getCollections().then(setCollections); }, []);

  return (
    <div>
      <p className="font-sans text-sm text-admin-text-muted mb-8">Fill in the details below to add a new product to the catalogue.</p>
      <div className="bg-white border border-admin-border rounded p-8">
        <ProductForm collections={collections} onSubmit={() => router.push('/admin/products')} />
      </div>
    </div>
  );
}
