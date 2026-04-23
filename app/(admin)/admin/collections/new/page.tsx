'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { slugify } from '@/lib/utils';

export default function NewCollectionPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [heroLabel, setHeroLabel] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/admin/collections');
  };

  const inputClass = "w-full bg-white border border-admin-border rounded px-4 py-2.5 text-admin-text font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors duration-150";
  const labelClass = "block font-sans text-xs font-medium text-admin-text mb-1.5";

  return (
    <div className="max-w-xl">
      <div className="bg-white border border-admin-border rounded p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="cf-name" className={labelClass}>Collection Name <span className="text-red-500">*</span></label>
            <input id="cf-name" value={name} onChange={(e) => { setName(e.target.value); setSlug(slugify(e.target.value)); }} className={inputClass} required />
          </div>
          <div>
            <label htmlFor="cf-slug" className={labelClass}>Slug</label>
            <input id="cf-slug" value={slug} onChange={(e) => setSlug(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="cf-desc" className={labelClass}>Description</label>
            <textarea id="cf-desc" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="cf-hero" className={labelClass}>Hero Label</label>
            <input id="cf-hero" value={heroLabel} onChange={(e) => setHeroLabel(e.target.value)} placeholder="e.g. Traditional Mastery" className={inputClass} />
          </div>
          <button type="submit" className="bg-brand-gold text-brand-black font-sans text-sm font-medium px-8 py-3 rounded hover:bg-brand-gold-muted cursor-pointer">
            Save Collection
          </button>
        </form>
      </div>
    </div>
  );
}
