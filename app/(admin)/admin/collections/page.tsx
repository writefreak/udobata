'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCollections, getProducts, type Collection } from '@/lib/data';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import DataTable from '@/components/admin/DataTable';

export default function AdminCollections() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [productCounts, setProductCounts] = useState<Record<string, number>>({});
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([getCollections(), getProducts()]).then(([cols, prods]) => {
      setCollections(cols);
      const counts: Record<string, number> = {};
      cols.forEach((c) => { counts[c.slug] = prods.filter((p) => p.collectionSlug === c.slug).length; });
      setProductCounts(counts);
    });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-sm text-admin-text-muted">{collections.length} collections</p>
        <Link href="/admin/collections/new" className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-sans text-xs font-medium px-5 py-2.5 rounded hover:bg-brand-gold-muted cursor-pointer">
          <Plus size={14} /> Add Collection
        </Link>
      </div>

      <div className="bg-white border border-admin-border rounded">
        <DataTable
          data={collections}
          keyFn={(c) => c.id}
          columns={[
            { key: 'name', label: 'Name', render: (c) => <span className="font-medium text-admin-text">{c.name}</span> },
            { key: 'slug', label: 'Slug', render: (c) => <code className="text-xs bg-admin-bg px-2 py-1 rounded">{c.slug}</code> },
            { key: 'products', label: 'Products', render: (c) => <span>{productCounts[c.slug] ?? 0} pieces</span> },
            { key: 'actions', label: 'Actions', render: (c) => (
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-admin-bg rounded cursor-pointer text-admin-text-muted hover:text-brand-gold transition-colors duration-150" aria-label="Edit"><Pencil size={14} /></button>
                <button onClick={() => setDeleteId(c.id)} className="p-2 hover:bg-red-50 rounded cursor-pointer text-admin-text-muted hover:text-red-600 transition-colors duration-150" aria-label="Delete"><Trash2 size={14} /></button>
              </div>
            )},
          ]}
        />
      </div>

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete Collection"
        description="Deleting this collection will also remove all associated products. This cannot be undone."
        onConfirm={() => { setCollections((arr) => arr.filter((c) => c.id !== deleteId)); setDeleteId(null); }}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
