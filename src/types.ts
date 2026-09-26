export type Currency = 'INR' | 'USD' | 'EUR' | 'GBP' | 'SGD' | 'AED';

export interface CurrencyConfig {
  symbol: string;
  rate: number; // relative to INR (base in screenshot)
  label: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  procedure: string;
  headShape: string;
  priceINR: number;
  originalPriceINR?: number;
  discountBadge?: string;
  rating: number;
  reviewCount: number;
  imageType: 'ipr-kit' | 'diamond-polisher' | 'degranulation' | 'gingivectomy' | 'zirconia-prep' | 'carbide-set' | 'endo-access' | 'pediatric';
  specs: {
    shank: string; // e.g. "FG High Speed (1.6mm)"
    grit: string; // e.g. "Fine (Red Band) / Super Fine (Yellow)"
    material: string; // e.g. "Medical Grade Stainless Steel & Natural Diamond"
    rpm: string; // e.g. "120,000 - 160,000 RPM"
    autoclavable: string; // e.g. "134°C / 273°F (Autoclavable)"
    isoCert: string; // e.g. "ISO 13485:2016 / CE 0197"
    pieces: string;
  };
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  clinic?: string;
  location?: string;
  avatarText?: string;
  avatarImg?: string;
  rating: number;
  quote: string;
  verified: boolean;
}

export interface ClinicalArticle {
  id: string;
  title: string;
  tag: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  category: string;
  imageType: 'zirconia-prep' | 'denture-polish' | 'carbide-flutes';
}

export interface DentalEvent {
  id: string;
  title: string;
  date: string;
  eventDateDetails?: string;
  location: string;
  tag: string;
  summary: string;
  imageType: 'bangkok-sol' | 'invisalign-study' | 'education-symposium';
}
