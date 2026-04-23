type Status = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

interface OrderStatusBadgeProps {
  status: Status;
}

const config: Record<Status, { bg: string; text: string; label: string }> = {
  pending: { bg: 'bg-amber-100', text: 'text-amber-800', label: 'Pending' },
  processing: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Processing' },
  shipped: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Shipped' },
  delivered: { bg: 'bg-green-100', text: 'text-green-800', label: 'Delivered' },
  cancelled: { bg: 'bg-red-100', text: 'text-red-800', label: 'Cancelled' },
};

export default function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const { bg, text, label } = config[status];
  return (
    <span className={`inline-block font-sans text-xs font-medium px-2.5 py-1 rounded-full ${bg} ${text}`}>
      {label}
    </span>
  );
}
