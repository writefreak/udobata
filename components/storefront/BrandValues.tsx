import { Scissors, Gem, CalendarCheck, Package } from 'lucide-react';

const values = [
  { icon: Scissors, title: 'Bespoke Tailoring', description: 'Every piece is cut and constructed to your exact measurements. No shortcuts, no shortcuts.' },
  { icon: Gem, title: 'Premium Fabrics', description: 'Aso-oke, Italian damask, Super 150s wool. We source only what deserves to touch your skin.' },
  { icon: CalendarCheck, title: 'Occasion-Ready', description: 'Weddings. Boardrooms. Owambees. Chieftaincy events. We dress you for the moments that define you.' },
  { icon: Package, title: 'Nationwide Delivery', description: 'From Lagos to Kano. Your order is packaged with care and delivered to your door.' },
];

export default function BrandValues() {
  return (
    <section className="py-24 bg-brand-charcoal border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, i) => (
            <div key={i} className="group">
              <div className="w-10 h-10 border border-brand-gold/30 flex items-center justify-center mb-6 group-hover:border-brand-gold transition-colors duration-300">
                <value.icon size={18} className="text-brand-gold" />
              </div>
              <h3 className="font-display text-xl font-medium text-brand-ivory mb-3">{value.title}</h3>
              <p className="font-sans text-sm text-brand-ivory-dim leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
