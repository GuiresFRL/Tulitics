import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-poppins' })

export const metadata: Metadata = {
  metadataBase: new URL('https://guires.info'),
  title: {
    default: 'Tulitics – Scholarly Publishing | Open Access Journals',
    template: '%s | Tulitics',
  },
  description: 'Tulitics is a scholarly publishing organisation committed to advancing high-quality, peer-reviewed open-access research in medicine, public health, and artificial intelligence.',
  keywords: ['scholarly publishing', 'open access journals', 'peer review', 'academic research', 'medical journals', 'AI in medicine', 'public health research', 'Tulitics'],
  authors: [{ name: 'Tulitics Publisher', url: 'https://guires.info' }],
  creator: 'Tulitics',
  publisher: 'Tulitics',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://guires.info',
    siteName: 'Tulitics',
    title: 'Tulitics – Scholarly Publishing | Open Access Journals',
    description: 'Tulitics is a scholarly publishing organisation advancing high-quality, peer-reviewed open-access research in medicine, public health, and AI.',
    images: [{ url: '/images/logo.png', width: 400, height: 400, alt: 'Tulitics Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tulitics',
    creator: '@tulitics',
    title: 'Tulitics – Scholarly Publishing | Open Access Journals',
    description: 'Advancing high-quality, peer-reviewed open-access research in medicine, public health, and AI.',
    images: ['/images/logo.png'],
  },
  alternates: {
    canonical: 'https://guires.info',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Tulitics',
              alternateName: 'Tulitics Publisher',
              url: 'https://guires.info',
              logo: 'https://guires.info/images/logo.png',
              description: 'Tulitics is a scholarly publishing organisation committed to advancing high-quality, peer-reviewed open-access research.',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'contact@tulitics.com',
                contactType: 'customer service',
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
