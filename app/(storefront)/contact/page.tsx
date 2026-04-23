'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'fitting', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">Get in Touch</p>
          <h1 className="font-display text-6xl font-light text-brand-ivory">
            Book a<br /><span className="italic">Fitting</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            {sent ? (
              <div className="flex flex-col items-start gap-6 py-12">
                <CheckCircle size={48} className="text-brand-gold" />
                <h2 className="font-display text-3xl font-light text-brand-ivory">We've received your request.</h2>
                <p className="font-sans text-sm text-brand-ivory-dim">Our team will reach out within 24 hours to confirm your fitting appointment. Thank you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Emeka Okafor' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'emeka@example.com' },
                  { id: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: '+234 801 234 5678' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block font-sans text-xs tracking-widest uppercase text-brand-ivory-dim mb-2">{field.label} <span className="text-brand-gold">*</span></label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                      className="w-full bg-brand-surface border border-brand-border text-brand-ivory font-sans text-sm px-5 py-4 placeholder:text-brand-ivory-dim/30 focus:outline-none focus:border-brand-gold transition-colors duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="type" className="block font-sans text-xs tracking-widest uppercase text-brand-ivory-dim mb-2">Request Type <span className="text-brand-gold">*</span></label>
                  <select
                    id="type"
                    value={form.type}
                    onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                    className="w-full bg-brand-surface border border-brand-border text-brand-ivory font-sans text-sm px-5 py-4 focus:outline-none focus:border-brand-gold transition-colors duration-200 cursor-pointer"
                  >
                    <option value="fitting">Book a Fitting</option>
                    <option value="order">Place a Custom Order</option>
                    <option value="enquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-xs tracking-widest uppercase text-brand-ivory-dim mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about the occasion, your size, preferred fabric, or any special requirements..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full bg-brand-surface border border-brand-border text-brand-ivory font-sans text-sm px-5 py-4 placeholder:text-brand-ivory-dim/30 focus:outline-none focus:border-brand-gold transition-colors duration-200 resize-none"
                  />
                </div>

                <button type="submit" className="w-full bg-brand-gold text-brand-black font-sans text-xs tracking-widest uppercase py-5 hover:bg-brand-gold-muted transition-colors duration-200 cursor-pointer">
                  Send Request
                </button>
              </form>
            )}
          </div>

          <div className="space-y-10 lg:pt-4">
            {[
              { icon: Phone, label: 'WhatsApp', value: '+234 801 234 5678' },
              { icon: Mail, label: 'Email', value: 'hello@udobata.com' },
              { icon: MapPin, label: 'Studio', value: 'Victoria Island, Lagos. By appointment only.' },
            ].map((item) => (
              <div key={item.label} className="flex gap-5">
                <div className="w-10 h-10 border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <item.icon size={16} className="text-brand-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-brand-ivory-dim mb-1">{item.label}</p>
                  <p className="font-sans text-sm text-brand-ivory">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
