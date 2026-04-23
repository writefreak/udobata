'use client';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function AdminSettings() {
  const [saved, setSaved] = useState(false);

  const inputClass = "w-full bg-white border border-admin-border rounded px-4 py-2.5 text-admin-text font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors duration-150";
  const labelClass = "block font-sans text-xs font-medium text-admin-text mb-1.5";

  return (
    <div className="max-w-2xl space-y-6">
      <div className="bg-white border border-admin-border rounded p-8">
        <h2 className="font-sans font-semibold text-admin-text mb-6">Store Settings</h2>
        <form onSubmit={(e) => { e.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 3000); }} className="space-y-5">
          {[
            { id: 's-name', label: 'Store Name', placeholder: 'Udobata', defaultValue: 'Udobata' },
            { id: 's-tagline', label: 'Tagline', placeholder: 'Premium Nigerian Menswear', defaultValue: 'Crafted in Nigeria. For the Nigerian Man.' },
            { id: 's-email', label: 'Contact Email', placeholder: 'hello@udobata.com', defaultValue: 'hello@udobata.com' },
            { id: 's-wa', label: 'WhatsApp Number', placeholder: '+234 801 234 5678', defaultValue: '+234 801 234 5678' },
            { id: 's-ig', label: 'Instagram Handle', placeholder: '@udobata', defaultValue: '@udobata' },
            { id: 's-tt', label: 'TikTok Handle', placeholder: '@udobata', defaultValue: '@udobataofficial' },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className={labelClass}>{field.label}</label>
              <input id={field.id} defaultValue={field.defaultValue} placeholder={field.placeholder} className={inputClass} />
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="s-fee" className={labelClass}>Delivery Fee (₦)</label>
              <input id="s-fee" type="number" defaultValue="5000" className={inputClass} />
            </div>
            <div>
              <label htmlFor="s-curr" className={labelClass}>Currency Display</label>
              <select id="s-curr" defaultValue="NGN" className={inputClass + ' cursor-pointer'}>
                <option value="NGN">₦ Nigerian Naira (NGN)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button type="submit" className="bg-brand-gold text-brand-black font-sans text-sm font-medium px-8 py-3 rounded hover:bg-brand-gold-muted cursor-pointer transition-colors duration-150">
              Save Settings
            </button>
            {saved && (
              <span className="flex items-center gap-2 font-sans text-xs text-green-700">
                <CheckCircle size={14} /> Saved successfully
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
