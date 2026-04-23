interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
  overlay?: boolean;
}

export default function ImagePlaceholder({ label, aspectRatio = '3/4', className = '', overlay = true }: ImagePlaceholderProps) {
  return (
    <div
      className={`img-placeholder relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
      )}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <span className="text-xs font-sans text-brand-gold/60 text-center px-4 leading-relaxed tracking-widest uppercase">
          {label}
        </span>
      </div>
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
    </div>
  );
}
