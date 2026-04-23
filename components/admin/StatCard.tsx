import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  icon: LucideIcon;
}

export default function StatCard({ label, value, subtext, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-white border border-admin-border rounded p-6">
      <div className="flex items-start justify-between mb-4">
        <p className="font-sans text-xs tracking-widest uppercase text-admin-text-muted">{label}</p>
        <div className="w-8 h-8 bg-admin-bg rounded flex items-center justify-center">
          <Icon size={16} className="text-brand-gold" />
        </div>
      </div>
      <p className="font-display text-3xl font-medium text-admin-text mb-1">{value}</p>
      {subtext && <p className="font-sans text-xs text-admin-text-muted">{subtext}</p>}
    </div>
  );
}
