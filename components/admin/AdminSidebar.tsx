'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Package, FolderOpen, ShoppingCart, Image, Settings, ExternalLink } from 'lucide-react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/collections', label: 'Collections', icon: FolderOpen },
  { href: '/admin/orders', label: 'Orders', icon: ShoppingCart },
  { href: '/admin/lookbook', label: 'Lookbook', icon: Image },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-admin-border flex flex-col min-h-screen">
      <div className="px-6 py-6 border-b border-admin-border">
        <p className="font-display text-xl font-bold tracking-[0.15em] text-admin-text">UDOBATA</p>
        <p className="font-sans text-xs text-admin-text-muted mt-0.5">Admin Panel</p>
      </div>
      <nav className="flex-1 px-3 py-4">
        {navItems.map((item) => {
          const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded text-sm font-sans mb-1 transition-all duration-150 cursor-pointer ${
                active
                  ? 'bg-admin-bg text-admin-text font-medium border-l-2 border-brand-gold'
                  : 'text-admin-text-muted hover:bg-admin-bg hover:text-admin-text'
              }`}
            >
              <item.icon size={16} className={active ? 'text-brand-gold' : ''} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-6 py-4 border-t border-admin-border">
        <Link href="/" target="_blank" className="flex items-center gap-2 font-sans text-xs text-admin-text-muted hover:text-brand-gold transition-colors duration-150 cursor-pointer">
          <ExternalLink size={12} />
          View Storefront
        </Link>
      </div>
    </aside>
  );
}
