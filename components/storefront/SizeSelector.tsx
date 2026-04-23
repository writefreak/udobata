'use client';
import { useState } from 'react';

interface SizeSelectorProps {
  sizes: string[];
}

export default function SizeSelector({ sizes }: SizeSelectorProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <p className="font-sans text-xs tracking-widest uppercase text-brand-ivory-dim mb-3">
        Size {selected && <span className="text-brand-gold ml-2">— {selected}</span>}
      </p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`font-sans text-xs tracking-wider uppercase px-5 py-3 border transition-all duration-200 cursor-pointer ${
              selected === size
                ? 'bg-brand-gold text-brand-black border-brand-gold'
                : 'bg-transparent text-brand-ivory-dim border-brand-border hover:border-brand-gold hover:text-brand-gold'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
