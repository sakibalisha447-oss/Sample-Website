import { Product, Testimonial, ClinicalArticle, DentalEvent, Currency, CurrencyConfig } from '../types';

export const CURRENCIES: Record<Currency, CurrencyConfig> = {
  INR: { symbol: '₹', rate: 1, label: 'INR (₹)' },
  USD: { symbol: '$', rate: 0.012, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.011, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.0094, label: 'GBP (£)' },
  SGD: { symbol: 'S$', rate: 0.016, label: 'SGD (S$)' },
  AED: { symbol: 'AED ', rate: 0.044, label: 'AED (د.إ)' },
};

export const PROCEDURES = [
  { id: 'all', name: 'All Procedures', count: 24 },
  { id: 'restorative', name: 'Restorative', burDesc: 'Crown, veneer, inlay/onlay prep', color: 'bg-emerald-50 text-emerald-700' },
  { id: 'prosthodontic', name: 'Prosthodontic', burDesc: 'Shoulder & chamfer beveling', color: 'bg-blue-50 text-blue-700' },
  { id: 'oral-surgery', name: 'Oral Surgery', burDesc: 'Bone degranulation & sectioning', color: 'bg-red-50 text-red-700' },
  { id: 'orthodontic', name: 'Orthodontic', burDesc: 'IPR strips & aligner clearance', color: 'bg-purple-50 text-purple-700' },
  { id: 'endodontic', name: 'Endodontic', burDesc: 'Canal access & non-cutting tips', color: 'bg-amber-50 text-amber-700' },
  { id: 'pediatric', name: 'Pediatric', burDesc: 'Micro-head vibration dampening', color: 'bg-teal-50 text-teal-700' },
];

export const CATEGORIES_HEAD = [
  { id: 'specialty-kits', name: 'Specialty Bur Kits', desc: 'Autoclavable aluminum block sets' },
  { id: 'diamond-burs', name: 'Diamond Burs', desc: 'Electroplated multi-layer natural diamond' },
  { id: 'carbide-burs', name: 'Carbide Burs', desc: 'Fine tungsten blade geometry' },
  { id: 'gold-burs', name: 'Gold Burs', desc: 'Titanium nitride friction-reducing coat' },
  { id: 'tungsten-carbide', name: 'Tungsten Carbide Burs', desc: 'High-speed surgical trimming & finishing' },
  { id: 'ipr-burs', name: 'IPR Burs', desc: 'Calibrated safe-contact enamel reduction' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-ipr-one-slice',
    name: 'One Slice IPR Kit: Interproximal Reduction Bur for aligner and invisalign',
    subtitle: 'Includes 23 precision burs + autoclavable anodized aluminum bur block',
    category: 'specialty-kits',
    procedure: 'orthodontic',
    headShape: 'ipr-burs',
    priceINR: 16781,
    originalPriceINR: 19178,
    discountBadge: '17% OFF',
    rating: 4.9,
    reviewCount: 148,
    imageType: 'ipr-kit',
    specs: {
      shank: 'FG Friction Grip 1.60mm (High Speed)',
      grit: 'Color Coded (0.1mm - 0.5mm Thicknesses)',
      material: 'Surgical Grade SS316 with De Beers Diamond Grit',
      rpm: '100,000 - 160,000 RPM (Optimal: 120k)',
      autoclavable: 'Fully Autoclavable at 134°C / 273°F (Box + Burs)',
      isoCert: 'ISO 13485:2016 / CE 0197 / FDA 510(k)',
      pieces: '23 Pieces + 1 Autoclavable Block'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'prod-composite-polisher',
    name: 'Composite Polishing Diamond Polisher (6pcs/set)',
    subtitle: 'Multi-step pre-polishing to mirror high-shine glaze for hybrid ceramics',
    category: 'specialty-kits',
    procedure: 'restorative',
    headShape: 'diamond-burs',
    priceINR: 7374,
    originalPriceINR: 9580,
    discountBadge: '23% OFF',
    rating: 4.8,
    reviewCount: 92,
    imageType: 'diamond-polisher',
    specs: {
      shank: 'RA Right Angle Latch 2.35mm (Slow Speed)',
      grit: 'Coarse (Blue) -> Medium (Red) -> Ultra-Fine (Yellow)',
      material: 'Synthetic Diamond Particle Embedded Silicone Matrix',
      rpm: '8,000 - 12,000 RPM (No Paste Required)',
      autoclavable: 'Autoclavable at 134°C for up to 30 cycles',
      isoCert: 'ISO 13485 / CE Certified',
      pieces: '6 Pieces Set (Spiral Discs + Cups + Points)'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'prod-degranulation-kit',
    name: 'Degranulation Kit for Implant Site Preparation & Bone Debridement',
    subtitle: 'Cleans granulation tissue without damaging bone morphology or adjacent root',
    category: 'specialty-kits',
    procedure: 'oral-surgery',
    headShape: 'tungsten-carbide',
    priceINR: 47560,
    originalPriceINR: 57436,
    discountBadge: '17% OFF',
    rating: 5.0,
    reviewCount: 64,
    imageType: 'degranulation',
    specs: {
      shank: 'Contra-angle Latch Type 2.35mm (with depth stoppers)',
      grit: 'Diamond-Free Micro-Blade Edge Flutes',
      material: 'Titanium-Cobalt Tungsten Alloy',
      rpm: '1,200 - 2,500 RPM with saline irrigation',
      autoclavable: 'Autoclavable at 134°C for infinite recycles',
      isoCert: 'ISO 13485 Medical Device Class IIa',
      pieces: '4 Sized Degranulators (1.0mm, 2.5mm, 3.0mm, 3.5mm)'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'prod-gingivectomy-bur-kit',
    name: 'Gingivectomy Bur Kit: Ceramic Soft Tissue Trimmer Set',
    subtitle: 'Biocompatible ceramic cutter for bloodless gingival margin contouring',
    category: 'specialty-kits',
    procedure: 'prosthodontic',
    headShape: 'specialty-kits',
    priceINR: 13415,
    originalPriceINR: 15333,
    discountBadge: '13% OFF',
    rating: 4.9,
    reviewCount: 81,
    imageType: 'gingivectomy',
    specs: {
      shank: 'FG High Speed 1.6mm',
      grit: 'Yttria-Stabilized Zirconia Ceramic Tip',
      material: 'Pure Zirconia Ceramic & Surgical Steel Shank',
      rpm: '300,000 - 450,000 RPM (Dry cut generates tissue coagulation)',
      autoclavable: 'Autoclavable at 134°C',
      isoCert: 'ISO 13485:2016 Certified',
      pieces: '3 Ceramic Trimmer Burs + Sterilization Stand'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'prod-zirconia-prep-kit',
    name: 'Zirconia Crown Prep Kit: Deep Chamfer & Shoulder Flute Set',
    subtitle: 'Optimized diamond grit concentration preventing micro-fractures in ceramic crowns',
    category: 'diamond-burs',
    procedure: 'prosthodontic',
    headShape: 'diamond-burs',
    priceINR: 18900,
    originalPriceINR: 22500,
    discountBadge: '16% OFF',
    rating: 4.9,
    reviewCount: 116,
    imageType: 'zirconia-prep',
    specs: {
      shank: 'FG Friction Grip 1.60mm',
      grit: 'Coarse 125μm (Green) & Extra Fine 30μm (Yellow)',
      material: 'Triple Layer Micro-Crystalline Diamond',
      rpm: '160,000 - 200,000 RPM',
      autoclavable: 'Autoclavable at 134°C',
      isoCert: 'ISO 13485 / CE 0197',
      pieces: '12 Pieces in Magnetic Autoclave Cassette'
    },
    inStock: true,
    featured: false
  },
  {
    id: 'prod-carbide-flutes-set',
    name: 'Tungsten Carbide 12-Blade & 30-Blade Fine Trimming Flutes',
    subtitle: 'Single-piece concentric construction ensuring zero runout vibration',
    category: 'carbide-burs',
    procedure: 'restorative',
    headShape: 'carbide-burs',
    priceINR: 6200,
    originalPriceINR: 7500,
    discountBadge: '17% OFF',
    rating: 4.8,
    reviewCount: 77,
    imageType: 'carbide-set',
    specs: {
      shank: 'FG Standard 19mm Length',
      grit: '12-Blade (Trimming) & 30-Blade (Ultra-Fine Polish)',
      material: 'Fine-Grain Hot Isostatic Pressed Tungsten Carbide',
      rpm: '100,000 - 300,000 RPM',
      autoclavable: 'Autoclavable at 134°C',
      isoCert: 'ISO 13485 / CE Certified',
      pieces: '10 Pieces Pack'
    },
    inStock: true,
    featured: false
  },
  {
    id: 'prod-endo-access-diamond',
    name: 'Endodontic Canal Access Bur with Non-Cutting Safety Tip',
    subtitle: 'Hemispherical non-active tip prevents pulp chamber floor perforation',
    category: 'diamond-burs',
    procedure: 'endodontic',
    headShape: 'diamond-burs',
    priceINR: 4850,
    originalPriceINR: 5800,
    discountBadge: '16% OFF',
    rating: 4.9,
    reviewCount: 94,
    imageType: 'endo-access',
    specs: {
      shank: 'FG-XL Extended Shank 25mm',
      grit: 'Medium 100μm Diamond Body + Smooth Radiused Tip',
      material: 'Electroformed Diamond over Surgical Stainless Core',
      rpm: '120,000 - 180,000 RPM',
      autoclavable: 'Autoclavable at 134°C',
      isoCert: 'ISO 13485:2016 Certified',
      pieces: '5 Pieces Pack'
    },
    inStock: true,
    featured: false
  },
  {
    id: 'prod-pediatric-micro-bur',
    name: 'Pediatric Short-Shank Friction Grip Bur Kit',
    subtitle: 'Miniature head geometry suited for restricted pediatric oral access',
    category: 'specialty-kits',
    procedure: 'pediatric',
    headShape: 'gold-burs',
    priceINR: 8450,
    originalPriceINR: 9900,
    discountBadge: '15% OFF',
    rating: 4.7,
    reviewCount: 53,
    imageType: 'pediatric',
    specs: {
      shank: 'FG-SS Short Shank 16mm',
      grit: 'Fast-Cutting Diamond Grit',
      material: 'Gold Titanium Nitride Coated Shank',
      rpm: '150,000 - 200,000 RPM',
      autoclavable: 'Autoclavable at 134°C',
      isoCert: 'ISO 13485 / CE Certified',
      pieces: '8 Pieces Assorted Kit'
    },
    inStock: true,
    featured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Doctor Name',
    role: 'Speciality',
    clinic: 'Dental Clinic',
    location: 'United Arab Emirates',
    avatarText: 'D',
    rating: 5,
    quote: 'The ultra flex disc and IPR kit are amazing! The tactile feedback during enamel recontouring gives me absolute confidence without fear of over-stripping or gouging.',
    verified: true
  },
  {
    id: 't-2',
    name: 'Doctor Name',
    role: 'Speciality',
    clinic: 'Dental Clinic',
    location: 'United Arab Emirates',
    avatarText: 'D',
    rating: 5,
    quote: 'I would like to compliment the team for their professionalism and efficiency. My bad for always ordering last minute when I need it urgently yet they never disappoint. Good Job to the team!',
    verified: true
  },
  {
    id: 't-3',
    name: 'Doctor Name',
    role: 'Speciality',
    clinic: 'Dental Clinic',
    location: 'United Arab Emirates',
    avatarText: 'D',
    rating: 5,
    quote: 'Surprisingly their IPR Bur stands out for its exceptional sharpness and cutting precision, and I must say it exceeded my expectations in several aspects compared to traditional German brands.',
    verified: true
  },
  {
    id: 't-4',
    name: 'Doctor Name',
    role: 'Speciality',
    clinic: 'Dental Clinic',
    location: 'United Arab Emirates',
    avatarText: 'D',
    rating: 5,
    quote: 'The degranulation burs run remarkably cool under saline cooling. We have cut implant revision time by nearly 40% while preserving precious cortical bone plates.',
    verified: true
  }
];

export const CLINICAL_ARTICLES: ClinicalArticle[] = [
  {
    id: 'art-1',
    title: 'Zirconia Crown Prep for Bridge Abutments: Parallelism, Path of Insertion and Bur Selection',
    tag: 'Restorative Insight',
    date: 'Sep 25, 2026',
    author: 'Dr. Brandon Yeap, Clinical Advisor',
    readTime: '6 min read',
    summary: 'A clinical protocol on achieving uniform 6-degree convergence angles and defined rounded chamfers to prevent zirconia chipping and microleakage.',
    category: 'Restorative',
    imageType: 'zirconia-prep'
  },
  {
    id: 'art-2',
    title: 'Denture Polishing After Adjustment: A 4-Step Workflow for a Smoother, High-Shine Finish',
    tag: 'Prosthodontics',
    date: 'Sep 23, 2026',
    author: 'Master Dental Technician Lin',
    readTime: '4 min read',
    summary: 'Mastering the 4-step silicone & diamond abrasive workflow that reduces surface roughness below 0.2 microns to inhibit Candida albicans biofilm colonization.',
    category: 'Prosthetic',
    imageType: 'denture-polish'
  },
  {
    id: 'art-3',
    title: 'Carbide Bur Flutes: From Cutting to Fine Finishing',
    tag: 'Metallurgy & Clinical Engineering',
    date: 'Sep 21, 2026',
    author: 'MR. BUR Precision Lab',
    readTime: '5 min read',
    summary: 'Explaining the clinical differences between 8-blade excisive cross-cuts, 12-blade trimming flutes, and 30-blade ultra-smooth finishing geometries.',
    category: 'Clinical Engineering',
    imageType: 'carbide-flutes'
  }
];

export const DENTAL_EVENTS: DentalEvent[] = [
  {
    id: 'evt-1',
    title: 'Your Path to Peace of Mind: Discover A New Standard of Care in Bangkok SOL Dental',
    date: 'Aug 20, 2026',
    eventDateDetails: 'Symposium & Live Clinical Demo',
    location: 'SOL Dental Center, Bangkok',
    tag: 'Clinical Partnership',
    summary: 'Live clinical demonstration showcasing minimal-intervention tooth preparation with high-concentricity diamond burs.',
    imageType: 'bangkok-sol'
  },
  {
    id: 'evt-2',
    title: 'INVISALIGN STUDY WITH DR.TOON 2026 | MR.BUR MASTERCLASS',
    date: 'Nov 14, 2026',
    eventDateDetails: '26-27 Nov 2026 & 29-30 Jan 2027',
    location: 'Grand Hyatt Convention Hall',
    tag: 'Orthodontic Workshop',
    summary: 'Intensive hands-on workshop covering calibrated safe-contact IPR slicing, interproximal reduction mechanics, and aligner tracking.',
    imageType: 'invisalign-study'
  },
  {
    id: 'evt-3',
    title: 'Top 4 Ways Mr. Bur Is Supporting Dental Education & University Clinics',
    date: 'Jul 17, 2026',
    eventDateDetails: 'Global Academic Initiative',
    location: 'Singapore & International Faculties',
    tag: 'Education Initiative',
    summary: 'Partnering with over 28 dental schools across Asia-Pacific to provide calibrated student kits and tactile ergonomics research grants.',
    imageType: 'education-symposium'
  }
];
