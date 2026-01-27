import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arias Barber Studio | Premium Barbershop in Verdun, Montreal',
  description: 'Experience precision cuts and timeless style at Arias Barber Studio in Verdun, Montreal. Expert barbers offering classic and modern haircuts, beard trims, and grooming services.',
  keywords: ['barber', 'barbershop', 'Verdun', 'Montreal', 'haircut', 'mens haircut', 'beard trim', 'grooming', 'Arias Barber Studio'],
  authors: [{ name: 'Arias Barber Studio' }],
  openGraph: {
    title: 'Arias Barber Studio | Premium Barbershop in Verdun, Montreal',
    description: 'Experience precision cuts and timeless style at Arias Barber Studio in Verdun, Montreal.',
    url: 'https://ariasbarberstudio.com',
    siteName: 'Arias Barber Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arias Barber Studio | Premium Barbershop in Verdun, Montreal',
    description: 'Experience precision cuts and timeless style at Arias Barber Studio.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Arias Barber Studio",
    "image": "https://ariasbarberstudio.com/Logo/logo.png",
    "description": "Premium barbershop offering precision cuts and timeless style in Verdun, Montreal.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4605 Av Bannantyne",
      "addressLocality": "Verdun",
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "11:00",
        "closes": "18:00"
      }
    ],
    "telephone": "+1-XXX-XXX-XXXX",
    "priceRange": "$$",
    "url": "https://ariasbarberstudio.com"
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
