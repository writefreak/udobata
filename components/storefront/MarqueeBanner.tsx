export default function MarqueeBanner() {
  const items = ['Senators', 'Agbada', 'Luxury Suits', 'Made for the Occasion', 'Udobata'];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-brand-gold overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="font-display text-base font-medium tracking-widest text-brand-black mx-8 shrink-0">
            {item} <span className="mx-4 opacity-50">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
