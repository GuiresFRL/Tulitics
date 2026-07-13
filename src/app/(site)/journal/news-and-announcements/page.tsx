import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'News & Announcements | JAIMPH – Tulitics',
  description: 'Stay updated with the latest news and announcements from JAIMPH — including calls for papers, special issues, editorial updates, and journal milestones.',
  keywords: ['JAIMPH news', 'journal announcements', 'call for papers', 'special issues', 'journal updates', 'JAIMPH latest news'],
  alternates: { canonical: 'https://guires.info/journal/news-and-announcements' },
  openGraph: {
    title: 'News & Announcements | JAIMPH – Tulitics',
    description: 'Latest news, calls for papers, and announcements from JAIMPH.',
    url: 'https://guires.info/journal/news-and-announcements',
    type: 'website',
  },
  twitter: { card: 'summary', title: 'JAIMPH News & Announcements', description: 'Latest calls for papers and journal announcements from JAIMPH.' },
}

const items = [
  { label: 'Join as an editorial board member', href: '/journal/join-editorial-board' },
  { label: 'Partnerships & Collaborations', href: '/journal/partnerships' },
  { label: 'Join as reviewer', href: '/journal/join-reviewer' },
  { label: 'Blog', href: '/journal/blog' },
  { label: 'Call for Papers', href: '/journal/call-for-papers' },
]

export default function NewsAndAnnouncementsPage() {
  return (
    <>
      <JournalHeader subtitle="News and Announcements" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Latest Updates</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">News and Announcements</h1>
        <div className="space-y-3">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between p-5 border border-gray-200 rounded-xl bg-white hover:border-green-400 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3 text-sm font-medium text-gray-800 group-hover:text-green-800">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                {item.label}
              </div>
              <span className="text-gray-400 group-hover:text-green-600 text-sm">→</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
