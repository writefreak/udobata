'use client';
import { useEffect, useState } from 'react';
import { getLookbookEntries, type LookbookEntry } from '@/lib/data';
import ImagePlaceholder from '@/components/storefront/ImagePlaceholder';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import ConfirmDialog from '@/components/admin/ConfirmDialog';

export default function AdminLookbook() {
  const [entries, setEntries] = useState<LookbookEntry[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ label: '', occasion: '' });

  useEffect(() => { getLookbookEntries().then(setEntries); }, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: LookbookEntry = {
      id: `lb-${Date.now()}`, label: form.label, occasion: form.occasion, imageLabel: `${form.label} — ${form.occasion}`,
    };
    setEntries((arr) => [...arr, newEntry]);
    setForm({ label: '', occasion: '' });
    setModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-sm text-admin-text-muted">{entries.length} entries</p>
        <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-sans text-xs font-medium px-5 py-2.5 rounded hover:bg-brand-gold-muted cursor-pointer">
          <Plus size={14} /> Add Entry
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-white border border-admin-border rounded overflow-hidden group">
            <ImagePlaceholder label={entry.imageLabel} aspectRatio="3/4" />
            <div className="p-3">
              <p className="font-sans text-xs text-admin-text-muted mb-0.5">{entry.occasion}</p>
              <p className="font-sans text-sm font-medium text-admin-text">{entry.label}</p>
              <div className="flex gap-2 mt-3">
                <button className="p-1.5 hover:bg-admin-bg rounded cursor-pointer text-admin-text-muted hover:text-brand-gold transition-colors" aria-label="Edit"><Pencil size={13} /></button>
                <button onClick={() => setDeleteId(entry.id)} className="p-1.5 hover:bg-red-50 rounded cursor-pointer text-admin-text-muted hover:text-red-600 transition-colors" aria-label="Delete"><Trash2 size={13} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded border border-admin-border max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-sans font-semibold text-admin-text">Add Lookbook Entry</h2>
              <button onClick={() => setModalOpen(false)} className="text-admin-text-muted hover:text-admin-text cursor-pointer"><X size={18} /></button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label htmlFor="lb-label" className="block font-sans text-xs font-medium text-admin-text mb-1.5">Label <span className="text-red-500">*</span></label>
                <input id="lb-label" value={form.label} onChange={(e) => setForm((f) => ({ ...f, label: e.target.value }))} required
                  className="w-full bg-white border border-admin-border rounded px-4 py-2.5 text-admin-text font-sans text-sm focus:outline-none focus:border-brand-gold" />
              </div>
              <div>
                <label htmlFor="lb-occ" className="block font-sans text-xs font-medium text-admin-text mb-1.5">Occasion</label>
                <input id="lb-occ" value={form.occasion} onChange={(e) => setForm((f) => ({ ...f, occasion: e.target.value }))}
                  className="w-full bg-white border border-admin-border rounded px-4 py-2.5 text-admin-text font-sans text-sm focus:outline-none focus:border-brand-gold" />
              </div>
              <div className="border-2 border-dashed border-admin-border rounded p-6 text-center cursor-pointer hover:border-brand-gold transition-colors">
                <p className="font-sans text-xs text-admin-text-muted">Click to upload image (UI only)</p>
              </div>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setModalOpen(false)} className="font-sans text-sm px-4 py-2 border border-admin-border rounded text-admin-text hover:bg-admin-bg cursor-pointer">Cancel</button>
                <button type="submit" className="font-sans text-sm px-6 py-2 bg-brand-gold text-brand-black rounded hover:bg-brand-gold-muted cursor-pointer">Add Entry</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete Entry"
        description="Remove this lookbook entry? This cannot be undone."
        onConfirm={() => { setEntries((arr) => arr.filter((e) => e.id !== deleteId)); setDeleteId(null); }}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
