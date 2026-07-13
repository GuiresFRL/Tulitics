import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instructions for Authors | JAIMPH – Tulitics',
  description: 'Complete author guidelines for submitting manuscripts to the Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH). Learn about manuscript types, formatting, ethical requirements, and submission checklist.',
  keywords: ['instructions for authors', 'manuscript submission', 'author guidelines', 'JAIMPH', 'research article', 'review article', 'case report', 'Vancouver referencing', 'open access submission'],
  alternates: { canonical: 'https://guires.info/journal/instruction-for-author' },
  openGraph: {
    title: 'Instructions for Authors | JAIMPH – Tulitics',
    description: 'Complete author guidelines for submitting manuscripts to JAIMPH — covering manuscript types, formatting, ethics, and the submission checklist.',
    url: 'https://guires.info/journal/instruction-for-author',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Instructions for Authors | JAIMPH',
    description: 'Full author submission guidelines for JAIMPH — manuscript types, formatting, ethics, and checklist.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
