'use client';
import { useState } from 'react';

interface ColorSwatchProps {
  colors: string[];
}

export default function ColorSwatch({ colors }: ColorSwatchProps) {
  const [selected, setSelected] = useState<string>(colors[0] ?? '');

  return (
    <div>
      <p className="font-sans text-xs tracking-widest uppercase text-brand-ivory-dim mb-3">
        Colour {selected && <span className="text-brand-gold ml-2">— {selected}</span>}
      </p>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelected(color)}
            className={`font-sans text-xs px-4 py-2 border transition-all duration-200 cursor-pointer ${
              selected === color
                ? 'border-brand-gold text-brand-gold'
                : 'border-brand-border text-brand-ivory-dim hover:border-brand-gold/50'
            }`}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}
