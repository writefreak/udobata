'use client';
import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 bg-brand-charcoal">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">Stay Connected</p>
        <h2 className="font-display text-4xl font-light text-brand-ivory mb-4">The Inner Circle</h2>
        <p className="font-sans text-sm text-brand-ivory-dim mb-10 leading-relaxed">
          New collections, exclusive fittings, and behind-the-scenes access. For the man who wants to know first.
        </p>
        {submitted ? (
          <p className="font-display text-xl italic text-brand-gold">Welcome to the circle.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-brand-black border border-brand-border text-brand-ivory font-sans text-sm px-5 py-4 placeholder:text-brand-ivory-dim/40 focus:outline-none focus:border-brand-gold transition-colors duration-200"
            />
            <button type="submit" className="bg-brand-gold text-brand-black font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-brand-gold-muted transition-colors duration-200 cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
