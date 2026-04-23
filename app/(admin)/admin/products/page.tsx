'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getProducts, getCollections, type Product, type Collection } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import DataTable from '@/components/admin/DataTable';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import ImagePlaceholder from '@/components/storefront/ImagePlaceholder';

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [search, setSearch] = useState('');
  const [filterCol, setFilterCol] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([getProducts(), getCollections()]).then(([p, c]) => { setProducts(p); setCollections(c); });
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterCol === '' || p.collectionSlug === filterCol)
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-sm text-admin-text-muted">{products.length} products total</p>
        <Link href="/admin/products/new" className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-sans text-xs font-medium px-5 py-2.5 rounded hover:bg-brand-gold-muted transition-colors duration-150 cursor-pointer">
          <Plus size={14} /> Add Product
        </Link>
      </div>

      <div className="bg-white border border-admin-border rounded">
        <div className="p-4 border-b border-admin-border flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-text-muted" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2 border border-admin-border rounded font-sans text-sm text-admin-text focus:outline-none focus:border-brand-gold" />
          </div>
          <select value={filterCol} onChange={(e) => setFilterCol(e.target.value)}
            className="border border-admin-border rounded font-sans text-sm text-admin-text px-3 py-2 focus:outline-none focus:border-brand-gold cursor-pointer">
            <option value="">All Collections</option>
            {collections.map((c) => <option key={c.id} value={c.slug}>{c.name}</option>)}
          </select>
        </div>

        <DataTable
          data={filtered}
          keyFn={(p) => p.id}
          columns={[
            {
              key: 'img', label: '',
              render: (p) => <div className="w-12 h-14 rounded overflow-hidden"><ImagePlaceholder label="" aspectRatio="3/4" /></div>
            },
            { key: 'name', label: 'Product', render: (p) => (
              <div>
                <p className="font-medium text-admin-text">{p.name}</p>
                <p className="text-xs text-admin-text-muted">{p.category}</p>
              </div>
            )},
            { key: 'collection', label: 'Collection', render: (p) => <span className="capitalize">{p.collectionSlug.replace('-', ' ')}</span> },
            { key: 'price', label: 'Price', render: (p) => <span className="font-medium">{formatPrice(p.price)}</span> },
            { key: 'stock', label: 'Stock', render: (p) => (
              <span className={`font-sans text-xs px-2 py-0.5 rounded-full ${p.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {p.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            )},
            { key: 'actions', label: 'Actions', render: (p) => (
              <div className="flex items-center gap-2">
                <Link href={`/admin/products/${p.slug}/edit`} className="p-2 hover:bg-admin-bg rounded cursor-pointer text-admin-text-muted hover:text-brand-gold transition-colors duration-150" aria-label="Edit">
                  <Pencil size={14} />
                </Link>
                <button onClick={() => setDeleteId(p.id)} className="p-2 hover:bg-red-50 rounded cursor-pointer text-admin-text-muted hover:text-red-600 transition-colors duration-150" aria-label="Delete">
                  <Trash2 size={14} />
                </button>
              </div>
            )},
          ]}
        />
      </div>

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete Product"
        description="Are you sure you want to delete this product? This action cannot be undone."
        onConfirm={() => { setProducts((arr) => arr.filter((p) => p.id !== deleteId)); setDeleteId(null); }}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
