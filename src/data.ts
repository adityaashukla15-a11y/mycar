import { BlogPost, PricingPlan, ProcessStep, ServiceFeature } from './types';

export const serviceFeatures: ServiceFeature[] = [
  {
    id: 'touchless',
    title: 'Touchless Wash',
    description: 'Uses high-pressure water and detergents automatic.',
    iconName: 'touchless',
  },
  {
    id: 'interior',
    title: 'Interior Cleaning',
    description: 'Use an interior cleaner for dashboard and door panels.',
    iconName: 'interior',
  },
  {
    id: 'automatic',
    title: 'Automatic Wash',
    description: 'Quick and convenient, ideal for regular washes.',
    iconName: 'automatic',
  },
  {
    id: 'waxing',
    title: 'Waxing & Sealing',
    description: 'Consider ceramic coatings for longer-lasting protection.',
    iconName: 'waxing',
  },
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: '01.',
    title: 'Booking',
    description: 'Some platforms may offer online booking functionality.',
    iconName: 'booking',
  },
  {
    stepNumber: '02.',
    title: 'Inspection',
    description: 'Choose a car wash that is conveniently located for you.',
    iconName: 'inspection',
  },
  {
    stepNumber: '03.',
    title: 'Washing',
    description: 'Compare prices from different providers to find the best value.',
    iconName: 'washing',
  },
  {
    stepNumber: '04.',
    title: 'Completion',
    description: 'Check customer reviews and ratings to gauge the quality of service.',
    iconName: 'completion',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'express',
    name: 'Standard Wash',
    price: '₹999',
    duration: '30MIN',
    features: [
      { name: 'Drive-Thru Wash', included: true },
      { name: 'Wheel Cleaning', included: true },
      { name: 'High-Pressure Rinse', included: true },
      { name: 'Microfiber Hand Dry', included: true },
      { name: 'Interior Vacuum', included: false },
      { name: 'Ceramic Coating', included: false },
    ],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Polish',
    price: '₹1,999',
    duration: '45MIN',
    recommended: true,
    features: [
      { name: 'Drive-Thru Wash', included: true },
      { name: 'Wheel Cleaning & Tire Dressing', included: true },
      { name: 'High-Pressure Rinse & Triple Foam', included: true },
      { name: 'Microfiber Hand Dry', included: true },
      { name: 'Interior Vacuum & Dash Wipe', included: true },
      { name: 'Ceramic Spray Wax', included: false },
    ],
  },
  {
    id: 'ultimate',
    name: 'Ultimate Spa Detail',
    price: '₹4,499',
    duration: '60MIN',
    features: [
      { name: 'Drive-Thru Wash & Foam Bath', included: true },
      { name: 'Deep Wheel Cleaning & Caliper Polish', included: true },
      { name: 'Underbody Rust Inhibitor', included: true },
      { name: 'Microfiber Hand Dry & Blower Dry', included: true },
      { name: 'Deep Interior Clean & Leather Condition', included: true },
      { name: 'Hydrophobic Ceramic Shield', included: true },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Protect Your Car Paint From Harsh Sun & Salt',
    category: 'EXTERIOR CARE',
    date: 'Sep 02, 2026',
    author: 'Mark Jenkins',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop',
    summary: 'Essential techniques to preserve your vehicle clear coat against UV rays, acid rain, and oxidation using modern polymers.',
  },
  {
    id: '2',
    title: 'Top 5 Interior Detailing Secrets Used By Professionals',
    category: 'INTERIOR DETAILING',
    date: 'Aug 28, 2026',
    author: 'Sarah Lin',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop',
    summary: 'Discover how pros deep-clean dashboard panels, eliminate micro-dust from AC vents, and condition leather seats.',
  },
  {
    id: '3',
    title: 'Why Ceramic Coating Is The Ultimate Investment For New Cars',
    category: 'CERAMIC COATING',
    date: 'Aug 20, 2026',
    author: 'David Vance',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop',
    summary: 'Learn the difference between traditional carnauba wax and 9H nanoceramic sealants that provide years of hydrophobic shine.',
  },
];
