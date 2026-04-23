import { getProducts, getCollections, getOrders } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import StatCard from '@/components/admin/StatCard';
import OrderStatusBadge from '@/components/admin/OrderStatusBadge';
import { Package, FolderOpen, ShoppingCart, TrendingUp, Plus } from 'lucide-react';
import Link from 'next/link';

export default async function AdminDashboard() {
  const [products, collections, orders] = await Promise.all([getProducts(), getCollections(), getOrders()]);
  const revenue = orders.filter((o) => o.status === 'delivered').reduce((sum, o) => sum + o.total, 0);
  const recentOrders = orders.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Products" value={products.length.toString()} subtext={`${products.filter((p) => p.isNew).length} new arrivals`} icon={Package} />
        <StatCard label="Collections" value={collections.length.toString()} icon={FolderOpen} />
        <StatCard label="Total Orders" value={orders.length.toString()} subtext={`${orders.filter((o) => o.status === 'pending').length} pending`} icon={ShoppingCart} />
        <StatCard label="Revenue" value={formatPrice(revenue)} subtext="From delivered orders" icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white border border-admin-border rounded p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-sans font-semibold text-admin-text">Recent Orders</h2>
            <Link href="/admin/orders" className="font-sans text-xs text-brand-gold hover:underline cursor-pointer">View all</Link>
          </div>
          <table className="w-full font-sans text-sm">
            <thead>
              <tr className="border-b border-admin-border">
                {['Order', 'Customer', 'Total', 'Status', 'Date'].map((h) => (
                  <th key={h} className="py-2 text-left text-xs font-medium text-admin-text-muted pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id} className="border-b border-admin-border last:border-0">
                  <td className="py-3 pr-4"><Link href={`/admin/orders/${o.id}`} className="text-brand-gold hover:underline cursor-pointer text-xs font-medium">{o.id}</Link></td>
                  <td className="py-3 pr-4 text-admin-text text-xs">{o.customer}</td>
                  <td className="py-3 pr-4 text-admin-text text-xs font-medium">{formatPrice(o.total)}</td>
                  <td className="py-3 pr-4"><OrderStatusBadge status={o.status} /></td>
                  <td className="py-3 text-admin-text-muted text-xs">{o.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-admin-border rounded p-6">
          <h2 className="font-sans font-semibold text-admin-text mb-6">Quick Actions</h2>
          <div className="space-y-3">
            {[
              { href: '/admin/products/new', label: 'Add Product', icon: Package },
              { href: '/admin/collections/new', label: 'Add Collection', icon: FolderOpen },
              { href: '/admin/orders', label: 'View All Orders', icon: ShoppingCart },
            ].map((action) => (
              <Link key={action.href} href={action.href}
                className="flex items-center gap-3 p-3 border border-admin-border rounded hover:bg-admin-bg hover:border-brand-gold transition-all duration-150 cursor-pointer group">
                <div className="w-8 h-8 bg-admin-bg rounded flex items-center justify-center group-hover:bg-brand-gold/10">
                  <action.icon size={14} className="text-brand-gold" />
                </div>
                <span className="font-sans text-sm text-admin-text">{action.label}</span>
                <Plus size={12} className="ml-auto text-admin-text-muted" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white border border-admin-border rounded p-6">
        <h2 className="font-sans font-semibold text-admin-text mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.filter((p) => p.isFeatured).slice(0, 3).map((p) => (
            <div key={p.id} className="border border-admin-border rounded p-4 hover:border-brand-gold transition-colors duration-150">
              <p className="font-sans text-xs text-admin-text-muted mb-1">{p.category}</p>
              <p className="font-sans text-sm font-medium text-admin-text mb-1">{p.name}</p>
              <p className="font-sans text-sm text-brand-gold">{formatPrice(p.price)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
