'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getOrders, getProducts, type Order } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import OrderStatusBadge from '@/components/admin/OrderStatusBadge';
import DataTable from '@/components/admin/DataTable';
import { Search } from 'lucide-react';

type Status = Order['status'] | 'all';

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<Status>('all');

  useEffect(() => { getOrders().then(setOrders); }, []);

  const filtered = orders.filter((o) =>
    o.customer.toLowerCase().includes(search.toLowerCase()) &&
    (statusFilter === 'all' || o.status === statusFilter)
  );

  return (
    <div>
      <div className="mb-6">
        <p className="font-sans text-sm text-admin-text-muted">{orders.length} orders total</p>
      </div>

      <div className="bg-white border border-admin-border rounded">
        <div className="p-4 border-b border-admin-border flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-text-muted" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by customer name..."
              className="w-full pl-9 pr-4 py-2 border border-admin-border rounded font-sans text-sm text-admin-text focus:outline-none focus:border-brand-gold" />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as Status)}
            className="border border-admin-border rounded font-sans text-sm text-admin-text px-3 py-2 focus:outline-none focus:border-brand-gold cursor-pointer">
            <option value="all">All Statuses</option>
            {['pending','processing','shipped','delivered','cancelled'].map((s) => (
              <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
            ))}
          </select>
        </div>

        <DataTable
          data={filtered}
          keyFn={(o) => o.id}
          columns={[
            { key: 'id', label: 'Order ID', render: (o) => (
              <Link href={`/admin/orders/${o.id}`} className="font-medium text-brand-gold hover:underline cursor-pointer text-xs">{o.id}</Link>
            )},
            { key: 'customer', label: 'Customer', render: (o) => o.customer },
            { key: 'items', label: 'Items', render: (o) => `${o.items.length} item${o.items.length > 1 ? 's' : ''}` },
            { key: 'total', label: 'Total', render: (o) => <span className="font-medium">{formatPrice(o.total)}</span> },
            { key: 'status', label: 'Status', render: (o) => <OrderStatusBadge status={o.status} /> },
            { key: 'date', label: 'Date', render: (o) => <span className="text-admin-text-muted">{o.createdAt}</span> },
          ]}
        />
      </div>
    </div>
  );
}
