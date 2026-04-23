// ─── Types ────────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: 'senator' | 'agbada' | 'suit';
  collectionSlug: string;
  description: string;
  fabric: string;
  sizes: string[];
  colors: string[];
  images: string[];
  tags: string[];
  isFeatured: boolean;
  isNew: boolean;
  inStock: boolean;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  heroLabel: string;
}

export interface LookbookEntry {
  id: string;
  label: string;
  occasion: string;
  imageLabel: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  rating: number;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}

export interface Order {
  id: string;
  customer: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const collections: Collection[] = [
  {
    id: 'col-1',
    name: 'Senators',
    slug: 'senators',
    description: 'The quintessential Nigerian men\'s native. Refined two-piece ensembles in premium Aso-oke, Ankara, and Italian-finish fabrics.',
    heroLabel: 'Traditional Mastery',
  },
  {
    id: 'col-2',
    name: 'Agbada',
    slug: 'agbada',
    description: 'Grand ceremonial robes for the occasions that define a man. Weddings, funerals, chieftaincy events — dressed with authority.',
    heroLabel: 'Ceremonial Grandeur',
  },
  {
    id: 'col-3',
    name: 'Luxury Suits',
    slug: 'luxury-suits',
    description: 'Western-cut precision with African soul. Tailored to your frame, finished in the finest wool blends and statement Kente linings.',
    heroLabel: 'Tailored Excellence',
  },
];

const products: Product[] = [
  // Senators
  {
    id: 'p-1',
    name: 'Eko Senator — Navy Aso-oke',
    slug: 'eko-senator-navy-aso-oke',
    price: 85000,
    category: 'senator',
    collectionSlug: 'senators',
    description: 'A commanding two-piece in hand-woven navy Aso-oke with gold thread detailing. The Eko Senator speaks without words.',
    fabric: 'Premium hand-woven Aso-oke with metallic gold threading. Inner lining: 100% breathable cotton.',
    sizes: ['S', 'M', 'L', 'XL', 'Custom'],
    colors: ['Navy', 'Gold-trim'],
    images: ['senator-navy-1', 'senator-navy-2', 'senator-navy-3'],
    tags: ['senator', 'aso-oke', 'traditional', 'navy'],
    isFeatured: true,
    isNew: false,
    inStock: true,
  },
  {
    id: 'p-2',
    name: 'Ibadan Classic — Ivory & Bronze',
    slug: 'ibadan-classic-ivory-bronze',
    price: 75000,
    category: 'senator',
    collectionSlug: 'senators',
    description: 'Effortlessly regal. The Ibadan Classic pairs raw ivory Aso-oke with hand-stitched bronze embroidery along the neckline and cuffs.',
    fabric: 'Raw ivory Aso-oke, hand-embroidered bronze thread, cotton inner lining.',
    sizes: ['M', 'L', 'XL', 'Custom'],
    colors: ['Ivory', 'Bronze'],
    images: ['senator-ivory-1', 'senator-ivory-2'],
    tags: ['senator', 'ivory', 'embroidered'],
    isFeatured: false,
    isNew: true,
    inStock: true,
  },
  {
    id: 'p-3',
    name: 'Abuja Edition — Burgundy Damask',
    slug: 'abuja-edition-burgundy-damask',
    price: 92000,
    category: 'senator',
    collectionSlug: 'senators',
    description: 'Reserved for the man who commands the room. Rich burgundy damask with a subtle jacquard pattern — power, bottled.',
    fabric: 'Italian-finish burgundy damask, jacquard-woven pattern, stretch-fit lining.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'],
    colors: ['Burgundy', 'Black-trim'],
    images: ['senator-burgundy-1', 'senator-burgundy-2', 'senator-burgundy-3'],
    tags: ['senator', 'damask', 'burgundy', 'power'],
    isFeatured: true,
    isNew: true,
    inStock: true,
  },
  {
    id: 'p-4',
    name: 'Lagos Night — Midnight Ankara',
    slug: 'lagos-night-midnight-ankara',
    price: 65000,
    category: 'senator',
    collectionSlug: 'senators',
    description: 'A modern senator for the culturally rooted man who moves between boardrooms and owambes. Midnight Ankara with gold piping.',
    fabric: 'High-thread-count Ankara print, structured collar, cotton-blend lining.',
    sizes: ['S', 'M', 'L', 'XL', 'Custom'],
    colors: ['Midnight Blue', 'Gold Piping'],
    images: ['senator-midnight-1', 'senator-midnight-2'],
    tags: ['senator', 'ankara', 'modern'],
    isFeatured: false,
    isNew: false,
    inStock: true,
  },
  // Agbada
  {
    id: 'p-5',
    name: 'Grand Oba — White Ceremonial',
    slug: 'grand-oba-white-ceremonial',
    price: 285000,
    category: 'agbada',
    collectionSlug: 'agbada',
    description: 'The ultimate statement of arrival. Hand-embroidered white Agbada with 14-karat gold thread along the chest — worn by men who need no introduction.',
    fabric: '4-ply Aso-oke, hand-embroidered with 14k gold thread. Includes matching inner kaftan and trousers.',
    sizes: ['M', 'L', 'XL', 'Custom'],
    colors: ['Pure White', 'Gold Embroidery'],
    images: ['agbada-white-1', 'agbada-white-2', 'agbada-white-3'],
    tags: ['agbada', 'ceremonial', 'white', 'gold', 'wedding'],
    isFeatured: true,
    isNew: false,
    inStock: true,
  },
  {
    id: 'p-6',
    name: 'Owambe Royal — Emerald Aso-oke',
    slug: 'owambe-royal-emerald-aso-oke',
    price: 245000,
    category: 'agbada',
    collectionSlug: 'agbada',
    description: 'For the owambe that becomes a memory. Emerald three-piece with silver zari detailing along the flowing outer robe.',
    fabric: 'Premium emerald Aso-oke, silver zari thread, full 3-piece set.',
    sizes: ['L', 'XL', 'Custom'],
    colors: ['Emerald', 'Silver-zari'],
    images: ['agbada-emerald-1', 'agbada-emerald-2'],
    tags: ['agbada', 'owambe', 'emerald', 'silver'],
    isFeatured: true,
    isNew: true,
    inStock: true,
  },
  {
    id: 'p-7',
    name: 'Elder\'s Mantle — Charcoal & Gold',
    slug: 'elders-mantle-charcoal-gold',
    price: 320000,
    category: 'agbada',
    collectionSlug: 'agbada',
    description: 'A distinguished Agbada for the man of standing. Deep charcoal damask with full-chest gold embroidery — the kind worn at chieftaincy installations.',
    fabric: 'Italian damask, hand-embroidered gold chest panel, 4-piece set with cap.',
    sizes: ['L', 'XL', 'Custom'],
    colors: ['Charcoal', 'Gold'],
    images: ['agbada-charcoal-1', 'agbada-charcoal-2', 'agbada-charcoal-3'],
    tags: ['agbada', 'chieftaincy', 'charcoal', 'ceremonial'],
    isFeatured: false,
    isNew: false,
    inStock: true,
  },
  {
    id: 'p-8',
    name: 'Festac Flow — Cobalt Blue',
    slug: 'festac-flow-cobalt-blue',
    price: 195000,
    category: 'agbada',
    collectionSlug: 'agbada',
    description: 'Bold cobalt blue with a flowing silhouette that photographs like a dream. Understated embroidery lets the color speak.',
    fabric: 'Cobalt blue Aso-oke blend, minimal chest embroidery, 3-piece set.',
    sizes: ['M', 'L', 'XL', 'Custom'],
    colors: ['Cobalt Blue', 'Ivory Trim'],
    images: ['agbada-cobalt-1', 'agbada-cobalt-2'],
    tags: ['agbada', 'blue', 'modern', 'bold'],
    isFeatured: false,
    isNew: true,
    inStock: false,
  },
  // Suits
  {
    id: 'p-9',
    name: 'Victoria Island — Charcoal Wool',
    slug: 'victoria-island-charcoal-wool',
    price: 185000,
    category: 'suit',
    collectionSlug: 'luxury-suits',
    description: 'The boardroom suit, Udobata-made. Charcoal Super 130s wool with a Kente-stripe lining that reveals itself only when you move.',
    fabric: 'Super 130s Italian charcoal wool, full canvas construction, Kente stripe lining.',
    sizes: ['S', 'M', 'L', 'XL', 'Custom'],
    colors: ['Charcoal', 'Kente Lining'],
    images: ['suit-charcoal-1', 'suit-charcoal-2', 'suit-charcoal-3'],
    tags: ['suit', 'wool', 'charcoal', 'kente', 'boardroom'],
    isFeatured: true,
    isNew: false,
    inStock: true,
  },
  {
    id: 'p-10',
    name: 'Eko Atlantic — Navy Pinstripe',
    slug: 'eko-atlantic-navy-pinstripe',
    price: 210000,
    category: 'suit',
    collectionSlug: 'luxury-suits',
    description: 'A modern power suit. Navy chalk-stripe on Super 120s wool with Ankara-printed lapel lining — the meeting before the meeting.',
    fabric: 'Super 120s navy wool with chalk-stripe weave, Ankara lapel lining, mother-of-pearl buttons.',
    sizes: ['M', 'L', 'XL', 'Custom'],
    colors: ['Navy', 'Chalk Stripe'],
    images: ['suit-navy-1', 'suit-navy-2'],
    tags: ['suit', 'pinstripe', 'navy', 'ankara-lining'],
    isFeatured: true,
    isNew: true,
    inStock: true,
  },
  {
    id: 'p-11',
    name: 'Ikoyi Cream — Linen-Silk Blend',
    slug: 'ikoyi-cream-linen-silk-blend',
    price: 165000,
    category: 'suit',
    collectionSlug: 'luxury-suits',
    description: 'For tropical elegance. A cream linen-silk blend that drapes beautifully in heat and photographs brilliantly. Garden parties. Weddings. Arrivals.',
    fabric: '60% linen, 40% silk blend. Cream with ivory chalk stripe. Unlined for breathability.',
    sizes: ['S', 'M', 'L', 'XL', 'Custom'],
    colors: ['Cream', 'Ivory'],
    images: ['suit-cream-1', 'suit-cream-2', 'suit-cream-3'],
    tags: ['suit', 'linen', 'cream', 'tropical', 'wedding'],
    isFeatured: false,
    isNew: false,
    inStock: true,
  },
  {
    id: 'p-12',
    name: 'Midnight Deal — Black-on-Black',
    slug: 'midnight-deal-black-on-black',
    price: 230000,
    category: 'suit',
    collectionSlug: 'luxury-suits',
    description: 'No colour needed. Black tuxedo lapel on black Super 150s wool — Udobata\'s most formal expression. For the night that becomes legendary.',
    fabric: 'Super 150s black wool, silk tuxedo lapel, Aso-oke pocket square included.',
    sizes: ['M', 'L', 'XL', 'Custom'],
    colors: ['Black', 'Silk Lapel'],
    images: ['suit-black-1', 'suit-black-2'],
    tags: ['suit', 'black', 'tuxedo', 'formal', 'gala'],
    isFeatured: false,
    isNew: true,
    inStock: true,
  },
];

const lookbookEntries: LookbookEntry[] = [
  { id: 'lb-1', label: 'The Arrival', occasion: 'Wedding', imageLabel: 'White Agbada, grand entrance, golden hour' },
  { id: 'lb-2', label: 'Board & Native', occasion: 'Corporate', imageLabel: 'Navy senator with leather briefcase, city backdrop' },
  { id: 'lb-3', label: 'Owambe Season', occasion: 'Party', imageLabel: 'Emerald Agbada, celebrating, full motion' },
  { id: 'lb-4', label: 'The Elder', occasion: 'Ceremony', imageLabel: 'Charcoal Agbada, seated authority, close-up embroidery' },
  { id: 'lb-5', label: 'City Man', occasion: 'Daily Luxury', imageLabel: 'Charcoal suit, Lagos skyline, editorial portrait' },
  { id: 'lb-6', label: 'Midnight Gala', occasion: 'Black Tie', imageLabel: 'Black tuxedo suit, hotel ballroom, sharp profile' },
];

const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Emeka Okafor',
    city: 'Lagos',
    quote: 'Wore the Grand Oba Agbada to my sister\'s wedding. I was stopped more times than the groom. Udobata is a different level.',
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Chukwudi Eze',
    city: 'Abuja',
    quote: 'The Victoria Island suit fits like it was poured onto me. The Kente lining — no one sees it until I take off my jacket, and then the whole room reacts.',
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Biodun Adeyemi',
    city: 'Ibadan',
    quote: 'I\'ve tried several native tailors. Udobata is the first time I\'ve received exactly what was promised — on time, impeccable quality.',
    rating: 5,
  },
  {
    id: 't-4',
    name: 'Tunde Fashola',
    city: 'Port Harcourt',
    quote: 'The Ibadan Classic Senator for my chieftaincy event. Every single person asked where I got it. I just smiled.',
    rating: 5,
  },
];

const orders: Order[] = [
  { id: 'ORD-001', customer: 'Emeka Okafor', items: [{ productId: 'p-5', quantity: 1, size: 'XL', color: 'Pure White' }], total: 285000, status: 'delivered', createdAt: '2024-11-15' },
  { id: 'ORD-002', customer: 'Chukwudi Eze', items: [{ productId: 'p-9', quantity: 1, size: 'L', color: 'Charcoal' }], total: 185000, status: 'delivered', createdAt: '2024-11-20' },
  { id: 'ORD-003', customer: 'Biodun Adeyemi', items: [{ productId: 'p-2', quantity: 1, size: 'M', color: 'Ivory' }], total: 75000, status: 'shipped', createdAt: '2024-12-01' },
  { id: 'ORD-004', customer: 'Tunde Fashola', items: [{ productId: 'p-6', quantity: 1, size: 'Custom', color: 'Emerald' }], total: 245000, status: 'processing', createdAt: '2024-12-05' },
  { id: 'ORD-005', customer: 'Akin Martins', items: [{ productId: 'p-10', quantity: 1, size: 'L', color: 'Navy' }], total: 210000, status: 'processing', createdAt: '2024-12-08' },
  { id: 'ORD-006', customer: 'Seun Coker', items: [{ productId: 'p-3', quantity: 1, size: 'XL', color: 'Burgundy' }], total: 92000, status: 'pending', createdAt: '2024-12-10' },
  { id: 'ORD-007', customer: 'Folake Williams', items: [{ productId: 'p-12', quantity: 1, size: 'Custom', color: 'Black' }], total: 230000, status: 'pending', createdAt: '2024-12-11' },
  { id: 'ORD-008', customer: 'Dele Okonkwo', items: [{ productId: 'p-7', quantity: 1, size: 'Custom', color: 'Charcoal' }], total: 320000, status: 'cancelled', createdAt: '2024-12-03' },
];

// ─── Getter Functions ─────────────────────────────────────────────────────────

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return products.find((p) => p.slug === slug) ?? null;
}

export async function getProductsByCollection(collectionSlug: string): Promise<Product[]> {
  return products.filter((p) => p.collectionSlug === collectionSlug);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return products.filter((p) => p.isFeatured);
}

export async function getCollections(): Promise<Collection[]> {
  return collections;
}

export async function getCollectionBySlug(slug: string): Promise<Collection | null> {
  return collections.find((c) => c.slug === slug) ?? null;
}

export async function getLookbookEntries(): Promise<LookbookEntry[]> {
  return lookbookEntries;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getOrders(): Promise<Order[]> {
  return orders;
}

export async function getOrderById(id: string): Promise<Order | null> {
  return orders.find((o) => o.id === id) ?? null;
}
