'use client';
import { useState } from 'react';
import { slugify } from '@/lib/utils';
import type { Collection } from '@/lib/data';

interface ProductFormProps {
  collections: Collection[];
  initialData?: {
    name?: string; slug?: string; collectionSlug?: string; price?: number;
    description?: string; fabric?: string; sizes?: string[];
    colors?: string[]; tags?: string[]; isFeatured?: boolean; isNew?: boolean; inStock?: boolean;
  };
  onSubmit: (data: Record<string, unknown>) => void;
}

const SIZE_OPTIONS = ['S', 'M', 'L', 'XL', 'XXL', 'Custom'];

export default function ProductForm({ collections, initialData = {}, onSubmit }: ProductFormProps) {
  const [name, setName] = useState(initialData.name ?? '');
  const [slug, setSlug] = useState(initialData.slug ?? '');
  const [collectionSlug, setCollectionSlug] = useState(initialData.collectionSlug ?? collections[0]?.slug ?? '');
  const [price, setPrice] = useState(initialData.price?.toString() ?? '');
  const [description, setDescription] = useState(initialData.description ?? '');
  const [fabric, setFabric] = useState(initialData.fabric ?? '');
  const [sizes, setSizes] = useState<string[]>(initialData.sizes ?? []);
  const [colors, setColors] = useState<string[]>(initialData.colors ?? []);
  const [colorInput, setColorInput] = useState('');
  const [tags, setTags] = useState<string[]>(initialData.tags ?? []);
  const [tagInput, setTagInput] = useState('');
  const [isFeatured, setIsFeatured] = useState(initialData.isFeatured ?? false);
  const [isNew, setIsNew] = useState(initialData.isNew ?? false);
  const [inStock, setInStock] = useState(initialData.inStock ?? true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleNameChange = (v: string) => {
    setName(v);
    if (!initialData.slug) setSlug(slugify(v));
  };

  const addColor = () => {
    if (colorInput.trim()) { setColors((c) => [...c, colorInput.trim()]); setColorInput(''); }
  };
  const addTag = () => {
    if (tagInput.trim()) { setTags((t) => [...t, tagInput.trim()]); setTagInput(''); }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!name) errs.name = 'Name is required';
    if (!price || isNaN(Number(price))) errs.price = 'Valid price required';
    if (!description) errs.description = 'Description is required';
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSubmit({ name, slug, collectionSlug, price: Number(price), description, fabric, sizes, colors, tags, isFeatured, isNew, inStock });
  };

  const inputClass = "w-full bg-white border border-admin-border rounded px-4 py-2.5 text-admin-text font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors duration-150";
  const labelClass = "block font-sans text-xs font-medium text-admin-text mb-1.5";
  const errorClass = "font-sans text-xs text-red-600 mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="pf-name" className={labelClass}>Name <span className="text-red-500">*</span></label>
          <input id="pf-name" value={name} onChange={(e) => handleNameChange(e.target.value)} className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="pf-slug" className={labelClass}>Slug</label>
          <input id="pf-slug" value={slug} onChange={(e) => setSlug(e.target.value)} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="pf-collection" className={labelClass}>Collection <span className="text-red-500">*</span></label>
          <select id="pf-collection" value={collectionSlug} onChange={(e) => setCollectionSlug(e.target.value)} className={inputClass + ' cursor-pointer'}>
            {collections.map((c) => <option key={c.id} value={c.slug}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="pf-price" className={labelClass}>Price (₦) <span className="text-red-500">*</span></label>
          <input id="pf-price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className={inputClass} placeholder="85000" />
          {errors.price && <p className={errorClass}>{errors.price}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="pf-desc" className={labelClass}>Description <span className="text-red-500">*</span></label>
        <textarea id="pf-desc" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className={inputClass} />
        {errors.description && <p className={errorClass}>{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="pf-fabric" className={labelClass}>Fabric</label>
        <input id="pf-fabric" value={fabric} onChange={(e) => setFabric(e.target.value)} className={inputClass} />
      </div>

      <div>
        <p className={labelClass}>Sizes</p>
        <div className="flex flex-wrap gap-2">
          {SIZE_OPTIONS.map((s) => (
            <button type="button" key={s} onClick={() => setSizes((arr) => arr.includes(s) ? arr.filter((x) => x !== s) : [...arr, s])}
              className={`font-sans text-xs px-4 py-2 border rounded cursor-pointer transition-colors duration-150 ${sizes.includes(s) ? 'bg-brand-gold text-brand-black border-brand-gold' : 'border-admin-border text-admin-text hover:border-brand-gold'}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className={labelClass}>Colors</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {colors.map((c) => (
            <span key={c} className="inline-flex items-center gap-1 font-sans text-xs bg-admin-bg border border-admin-border px-3 py-1 rounded-full">
              {c}
              <button type="button" onClick={() => setColors((arr) => arr.filter((x) => x !== c))} className="text-admin-text-muted hover:text-red-600 cursor-pointer ml-1">×</button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={colorInput} onChange={(e) => setColorInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addColor(); }}}
            placeholder="Type color + Enter" className={inputClass} />
          <button type="button" onClick={addColor} className="px-4 py-2 bg-admin-bg border border-admin-border rounded font-sans text-xs text-admin-text hover:bg-gray-100 cursor-pointer">Add</button>
        </div>
      </div>

      <div>
        <p className={labelClass}>Tags</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 font-sans text-xs bg-admin-bg border border-admin-border px-3 py-1 rounded-full">
              {t}
              <button type="button" onClick={() => setTags((arr) => arr.filter((x) => x !== t))} className="text-admin-text-muted hover:text-red-600 cursor-pointer ml-1">×</button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); }}}
            placeholder="Type tag + Enter" className={inputClass} />
          <button type="button" onClick={addTag} className="px-4 py-2 bg-admin-bg border border-admin-border rounded font-sans text-xs text-admin-text hover:bg-gray-100 cursor-pointer">Add</button>
        </div>
      </div>

      {/* Image slots */}
      <div>
        <p className={labelClass}>Images (3 slots)</p>
        <div className="grid grid-cols-3 gap-3">
          {[0,1,2].map((i) => (
            <div key={i} className="aspect-square bg-admin-bg border-2 border-dashed border-admin-border rounded flex items-center justify-center cursor-pointer hover:border-brand-gold transition-colors duration-150">
              <p className="font-sans text-xs text-admin-text-muted text-center px-2">Click to upload image {i + 1}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        {[
          { id: 'isFeatured', label: 'Featured', val: isFeatured, set: setIsFeatured },
          { id: 'isNew', label: 'New Arrival', val: isNew, set: setIsNew },
          { id: 'inStock', label: 'In Stock', val: inStock, set: setInStock },
        ].map((toggle) => (
          <label key={toggle.id} htmlFor={toggle.id} className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" id={toggle.id} checked={toggle.val} onChange={(e) => toggle.set(e.target.checked)}
              className="w-4 h-4 accent-brand-gold cursor-pointer" />
            <span className="font-sans text-sm text-admin-text">{toggle.label}</span>
          </label>
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        <button type="submit" className="bg-brand-gold text-brand-black font-sans text-sm font-medium px-8 py-3 rounded hover:bg-brand-gold-muted transition-colors duration-150 cursor-pointer">
          Save Product
        </button>
      </div>
    </form>
  );
}
