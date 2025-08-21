import { SITE_CONFIG, BUSINESS_INFO } from './constants';

export interface SEOMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateMetaDescription(
  content: string,
  maxLength: number = 160
): string {
  if (content.length <= maxLength) return content;
  
  const truncated = content.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
}

export function generatePageTitle(pageTitle?: string): string {
  if (!pageTitle) return SITE_CONFIG.name;
  return `${pageTitle} | ${SITE_CONFIG.name}`;
}

export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.baseUrl}${cleanPath}`;
}

export function generateKeywords(pageKeywords: string[] = []): string[] {
  const baseKeywords = [
    'barber shop',
    'hair cut',
    'beard trim',
    'Montreal',
    'Verdun',
    'Quebec',
    'professional barber',
    'men\'s grooming',
    'hair styling',
    'fade cuts',
  ];
  
  return [...baseKeywords, ...pageKeywords];
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: BUSINESS_INFO.name,
    image: `${SITE_CONFIG.baseUrl}/Logo/fulllogo_transparent_nobuffer.png`,
    '@id': SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: BUSINESS_INFO.openingHours.map((hours, index) => {
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      if (hours === 'Mo' || hours === 'Su') {
        return {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: days[index],
          opens: null,
          closes: null,
        };
      }
      const [opens, closes] = hours.split(' ')[1]?.split('-') || [];
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: days[index],
        opens,
        closes,
      };
    }).filter(spec => spec.opens && spec.closes),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '47',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Barber Services',
      itemListElement: BUSINESS_INFO.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_INFO.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.baseUrl}/Logo/fulllogo_transparent_nobuffer.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: BUSINESS_INFO.email,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
  };
}