import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instructions for Reviewers | JAIMPH – Tulitics',
  description: 'Peer review guidelines for reviewers at the Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH). Understand your role, confidentiality obligations, review structure, and ethical responsibilities.',
  keywords: ['instructions for reviewers', 'peer review guidelines', 'JAIMPH reviewer', 'reviewer responsibilities', 'academic peer review', 'review report structure', 'reviewer confidentiality'],
  alternates: { canonical: 'https://guires.info/journal/instruction-for-reviewer' },
  openGraph: {
    title: 'Instructions for Reviewers | JAIMPH – Tulitics',
    description: 'Peer review guidelines for JAIMPH reviewers — covering responsibilities, confidentiality, assessment criteria, and report structure.',
    url: 'https://guires.info/journal/instruction-for-reviewer',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Instructions for Reviewers | JAIMPH',
    description: 'Complete reviewer guidelines for JAIMPH — roles, confidentiality, ethics, and review report structure.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
