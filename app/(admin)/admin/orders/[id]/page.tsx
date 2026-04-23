import { notFound } from 'next/navigation';
import { getOrderById, getProducts } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import OrderStatusBadge from '@/components/admin/OrderStatusBadge';

interface Props { params: { id: string } }

export default async function OrderDetailPage({ params }: Props) {
  const [order, products] = await Promise.all([getOrderById(params.id), getProducts()]);
  if (!order) notFound();

  return (
    <div className="max-w-3xl space-y-6">
      <div className="bg-white border border-admin-border rounded p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-sans font-semibold text-admin-text">{order.id}</h2>
            <p className="font-sans text-xs text-admin-text-muted mt-1">{order.createdAt}</p>
          </div>
          <OrderStatusBadge status={order.status} />
        </div>
        <div className="border-t border-admin-border pt-4">
          <p className="font-sans text-xs font-medium text-admin-text-muted mb-1">Customer</p>
          <p className="font-sans text-sm text-admin-text">{order.customer}</p>
        </div>
      </div>

      <div className="bg-white border border-admin-border rounded p-6">
        <h3 className="font-sans font-semibold text-admin-text mb-4">Order Items</h3>
        <div className="space-y-3">
          {order.items.map((item, i) => {
            const product = products.find((p) => p.id === item.productId);
            return (
              <div key={i} className="flex items-center justify-between py-3 border-b border-admin-border last:border-0">
                <div>
                  <p className="font-sans text-sm font-medium text-admin-text">{product?.name ?? item.productId}</p>
                  <p className="font-sans text-xs text-admin-text-muted mt-0.5">Size: {item.size} · Color: {item.color} · Qty: {item.quantity}</p>
                </div>
                <p className="font-sans text-sm font-medium text-admin-text">{product ? formatPrice(product.price * item.quantity) : '—'}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center pt-4 mt-2 border-t border-admin-border">
          <p className="font-sans font-semibold text-admin-text">Total</p>
          <p className="font-sans font-semibold text-brand-gold">{formatPrice(order.total)}</p>
        </div>
      </div>

      <div className="bg-white border border-admin-border rounded p-6">
        <h3 className="font-sans font-semibold text-admin-text mb-4">Update Status</h3>
        <select defaultValue={order.status} className="border border-admin-border rounded font-sans text-sm text-admin-text px-4 py-2 focus:outline-none focus:border-brand-gold cursor-pointer">
          {['pending','processing','shipped','delivered','cancelled'].map((s) => (
            <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
          ))}
        </select>
        <p className="font-sans text-xs text-admin-text-muted mt-2">Status update is UI-only in this build.</p>
      </div>
    </div>
  );
}
