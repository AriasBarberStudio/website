// SEO constants for Arias Barber Studio
export const SITE_CONFIG = {
  name: 'Arias Barber Studio',
  description: 'Experience precision cuts and timeless style at Arias Barber Studio. Professional barber services in Verdun, Montreal.',
  url: 'https://ariasbarberstudio.com',
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://ariasbarberstudio.com/website' : 'http://localhost:3000',
  ogImage: '/Logo/fulllogo_transparent_nobuffer.png',
  locale: 'en_CA',
  type: 'website',
} as const;

export const BUSINESS_INFO = {
  name: 'Arias Barber Studio',
  address: {
    streetAddress: '4605 Av Bannantyne',
    addressLocality: 'Verdun',
    addressRegion: 'QC',
    postalCode: 'H4G 1E4',
    addressCountry: 'CA',
  },
  email: 'info@ariasbarberstudio.com',
  priceRange: '$$',
  openingHours: [
    'Mo',
    'Tu 11:00-18:00',
    'We 11:00-18:00',
    'Th 11:00-18:00',
    'Fr 11:00-18:00',
    'Sa 10:00-17:00',
    'Su',
  ],
  services: [
    'Hair Cut',
    'Beard Trim',
    'Mustache Trim',
    'Hair Styling',
    'Hot Towel Shave',
    'Fade Cuts',
  ],
  geo: {
    latitude: '45.458626',
    longitude: '-73.578832',
  },
} as const;

export const PAGES = [
  {
    path: '/',
    name: 'Home',
    priority: 1.0,
    changefreq: 'weekly' as const,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    priority: 0.8,
    changefreq: 'monthly' as const,
  },
  {
    path: '/contact',
    name: 'Contact',
    priority: 0.7,
    changefreq: 'monthly' as const,
  },
] as const;