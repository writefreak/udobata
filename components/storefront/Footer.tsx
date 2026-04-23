import Link from 'next/link';
import { Globe, Hash, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="font-display text-3xl font-bold tracking-[0.2em] text-brand-ivory mb-4">UDOBATA</p>
            <p className="font-sans text-sm text-brand-ivory-dim leading-relaxed max-w-xs">
              Premium Nigerian menswear for the man who understands the power of presence. Tailored for every occasion that defines you.
            </p>
            <div className="flex gap-5 mt-8">
              <a href="#" aria-label="Instagram" className="text-brand-ivory-dim hover:text-brand-gold transition-colors duration-200 cursor-pointer"><Globe size={20} /></a>
              <a href="#" aria-label="TikTok" className="text-brand-ivory-dim hover:text-brand-gold transition-colors duration-200 cursor-pointer"><Hash size={20} /></a>
              <a href="#" aria-label="WhatsApp" className="text-brand-ivory-dim hover:text-brand-gold transition-colors duration-200 cursor-pointer"><MessageCircle size={20} /></a>
            </div>
          </div>
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-6">Collections</p>
            {['Senators', 'Agbada', 'Luxury Suits'].map((c) => (
              <Link key={c} href={`/collections/${c.toLowerCase().replace(' ', '-')}`}
                className="block font-sans text-sm text-brand-ivory-dim hover:text-brand-ivory py-2 transition-colors duration-200">
                {c}
              </Link>
            ))}
          </div>
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-6">Company</p>
            {[
              { label: 'Lookbook', href: '/lookbook' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
              { label: 'Book a Fitting', href: '/contact' },
            ].map((item) => (
              <Link key={item.label} href={item.href}
                className="block font-sans text-sm text-brand-ivory-dim hover:text-brand-ivory py-2 transition-colors duration-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-brand-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-brand-ivory-dim/60">© {new Date().getFullYear()} Udobata. All rights reserved.</p>
          <p className="font-sans text-xs text-brand-ivory-dim/60">Crafted in Nigeria. For the Nigerian Man.</p>
        </div>
      </div>
    </footer>
  );
}
