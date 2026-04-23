'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-brand-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-bold tracking-[0.2em] text-brand-ivory hover:text-brand-gold transition-colors duration-200">
          UDOBATA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { href: '/collections', label: 'Collections' },
            { href: '/lookbook', label: 'Lookbook' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="font-sans text-sm tracking-widest uppercase text-brand-ivory-dim hover:text-brand-gold transition-colors duration-200">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-brand-ivory-dim hover:text-brand-gold transition-colors duration-200 cursor-pointer" aria-label="Search">
            <Search size={18} />
          </button>
          <Link href="/contact" className="bg-brand-gold text-brand-black text-xs font-sans font-600 tracking-widest uppercase px-6 py-3 hover:bg-brand-gold-muted transition-colors duration-200 cursor-pointer">
            Book a Fitting
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-brand-ivory cursor-pointer" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-brand-black/98 border-t border-brand-border px-6 pb-8 pt-4">
          {[
            { href: '/collections', label: 'Collections' },
            { href: '/lookbook', label: 'Lookbook' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
              className="block font-sans text-sm tracking-widest uppercase text-brand-ivory-dim py-4 border-b border-brand-border hover:text-brand-gold transition-colors duration-200">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            className="mt-6 block text-center bg-brand-gold text-brand-black text-xs font-sans tracking-widest uppercase px-6 py-4 cursor-pointer">
            Book a Fitting
          </Link>
        </div>
      )}
    </header>
  );
}
