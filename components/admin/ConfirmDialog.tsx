'use client';
import { X } from 'lucide-react';

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({ open, title, description, onConfirm, onCancel }: ConfirmDialogProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded border border-admin-border max-w-md w-full p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="font-sans font-semibold text-admin-text">{title}</h2>
          <button onClick={onCancel} className="text-admin-text-muted hover:text-admin-text cursor-pointer"><X size={18} /></button>
        </div>
        <p className="font-sans text-sm text-admin-text-muted mb-6">{description}</p>
        <div className="flex justify-end gap-3">
          <button onClick={onCancel} className="font-sans text-sm px-4 py-2 border border-admin-border rounded text-admin-text hover:bg-admin-bg cursor-pointer transition-colors duration-150">Cancel</button>
          <button onClick={onConfirm} className="font-sans text-sm px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer transition-colors duration-150">Delete</button>
        </div>
      </div>
    </div>
  );
}
