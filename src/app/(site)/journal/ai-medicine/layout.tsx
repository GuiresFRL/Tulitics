import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal of Artificial Intelligence in Medicine & Public Health (JAIMPH) | Tulitics',
  description: 'JAIMPH is a peer-reviewed, fully open-access quarterly journal publishing original research at the intersection of artificial intelligence, medicine, and public health. No submission or publication fees.',
  keywords: ['JAIMPH', 'Journal of Artificial Intelligence in Medicine', 'AI medicine journal', 'public health journal', 'open access medical journal', 'peer reviewed AI research', 'healthcare AI journal', 'Tulitics journal'],
  alternates: { canonical: 'https://guires.info/journal/ai-medicine' },
  openGraph: {
    title: 'JAIMPH | Journal of Artificial Intelligence in Medicine & Public Health',
    description: 'Peer-reviewed open-access journal publishing research at the intersection of AI, medicine, and public health. Free to submit, free to read.',
    url: 'https://guires.info/journal/ai-medicine',
    type: 'website',
    images: [{ url: '/images/journal-cover.jpg', width: 800, height: 600, alt: 'JAIMPH Journal Cover' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JAIMPH | AI in Medicine & Public Health Journal',
    description: 'Open-access peer-reviewed journal on AI, medicine, and public health — no fees, quarterly publication.',
    images: ['/images/journal-cover.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Periodical',
            name: 'Journal of Artificial Intelligence in Medicine and Public Health',
            alternateName: 'JAIMPH',
            url: 'https://guires.info/journal/ai-medicine',
            issn: '',
            publisher: {
              '@type': 'Organization',
              name: 'Tulitics',
              url: 'https://guires.info',
            },
            about: 'Artificial intelligence in medicine and public health',
            inLanguage: 'en',
            isAccessibleForFree: true,
            license: 'https://creativecommons.org/licenses/by/4.0/',
          }),
        }}
      />
      {children}
    </>
  )
}
