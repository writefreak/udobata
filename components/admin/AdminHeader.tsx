'use client';
import { usePathname } from 'next/navigation';
import { Bell } from 'lucide-react';

const titles: Record<string, string> = {
  '/admin': 'Dashboard',
  '/admin/products': 'Products',
  '/admin/products/new': 'Add Product',
  '/admin/collections': 'Collections',
  '/admin/collections/new': 'Add Collection',
  '/admin/orders': 'Orders',
  '/admin/lookbook': 'Lookbook',
  '/admin/settings': 'Settings',
};

export default function AdminHeader() {
  const pathname = usePathname();
  const title = titles[pathname] ?? 'Admin';

  return (
    <header className="h-16 bg-white border-b border-admin-border flex items-center justify-between px-8">
      <h1 className="font-sans text-lg font-medium text-admin-text">{title}</h1>
      <div className="flex items-center gap-4">
        <button className="relative text-admin-text-muted hover:text-admin-text cursor-pointer" aria-label="Notifications">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-gold rounded-full" />
        </button>
        <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
          <span className="font-sans text-xs font-medium text-brand-black">U</span>
        </div>
      </div>
    </header>
  );
}
