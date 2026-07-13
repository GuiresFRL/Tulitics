import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries We Serve | Healthcare & Medical Research – Tulitics',
  description: 'Tulitics provides scholarly publishing and research services across healthcare, public health, pharma, biotechnology, digital health, medical devices, clinical trials, medical imaging, health informatics, and healthcare policy sectors.',
  keywords: ['healthcare research services', 'pharmaceutical research', 'biotechnology publishing', 'digital health research', 'medical devices research', 'clinical trials', 'health informatics', 'public health epidemiology', 'Tulitics industries'],
  alternates: { canonical: 'https://guires.info/industry' },
  openGraph: {
    title: 'Industries We Serve | Healthcare & Medical Research – Tulitics',
    description: 'Scientific research and publishing solutions across healthcare, pharma, biotech, digital health, medical devices, clinical trials, and more.',
    url: 'https://guires.info/industry',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Tulitics',
    description: 'Research and publishing solutions across healthcare, pharma, biotech, and medical sectors.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
