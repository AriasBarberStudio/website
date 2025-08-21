import Head from 'next/head';
import { SEOMetadata, generatePageTitle, generateCanonicalUrl, generateKeywords } from '@/lib/seo/helpers';
import { SITE_CONFIG } from '@/lib/seo/constants';

interface SEOHeadProps extends SEOMetadata {
  path: string;
}

export default function SEOHead({
  title,
  description = SITE_CONFIG.description,
  keywords = [],
  canonical,
  ogTitle,
  ogDescription,
  ogImage = SITE_CONFIG.ogImage,
  ogType = 'website',
  twitterTitle,
  twitterDescription,
  twitterImage,
  noindex = false,
  nofollow = false,
  path,
}: SEOHeadProps) {
  const pageTitle = generatePageTitle(title);
  const canonicalUrl = canonical || generateCanonicalUrl(path);
  const pageKeywords = generateKeywords(keywords);
  
  const finalOgTitle = ogTitle || pageTitle;
  const finalOgDescription = ogDescription || description;
  const finalOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.baseUrl}${ogImage}`;
  
  const finalTwitterTitle = twitterTitle || finalOgTitle;
  const finalTwitterDescription = twitterDescription || finalOgDescription;
  const finalTwitterImage = twitterImage || finalOgImage;

  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
  ].join(', ');

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={pageKeywords.join(', ')} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={finalTwitterImage} />
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="format-detection" content="telephone=no" />
    </Head>
  );
}