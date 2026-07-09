'use client'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  {
    label: 'About',
    children: [
      { label: 'About Us', href: '/journal/about-us' },
      { label: 'Aim and Scope', href: '/journal/aim-and-scope' },
      { label: 'Editorial and Advisory Board', href: '/journal/editorial-and-advisory-board' },
    ],
  },
  {
    label: 'Article / Issues',
    children: [
      { label: 'Current Issue', href: '/journal/current-issue' },
      { label: 'All Issues', href: '/journal/all-issues' },
    ],
  },
  {
    label: 'Editorial Policies & Guidelines',
    children: [
      { label: 'Editorial Policies', href: '/journal/editorial-policies' },
      { label: 'Plagiarism Policies', href: '/journal/plagiarism-policy' },
      { label: 'Peer Review Policies', href: '/journal/peer-review-policies' },
      { label: 'Ethics Approval Policy', href: '/journal/ethics-approval-policy' },
      { label: 'Authorship Policy', href: '/journal/authorship-policy' },
      { label: 'Conflict of Interest', href: '/journal/conflict-of-interest' },
      { label: 'Citation Manipulation Policy', href: '/journal/citation-manipulation-policy' },
      { label: 'Corrections and Retractions Policy', href: '/journal/corrections-and-retractions' },
      { label: 'Open Access Policy', href: '/journal/open-access-policy' },
      { label: 'Article Processing Charges (APC) Policy', href: '/journal/article-processing-charges' },
    ],
  },
  {
    label: 'Information For',
    children: [
      { label: 'Instruction for Author', href: '/journal/instruction-for-author' },
      { label: 'Instruction for Reviewer', href: '/journal/instruction-for-reviewer' },
    ],
  },
  { label: 'Contact us', href: '/journal/contact-us' },
]

export default function JournalHeader({ subtitle }: { subtitle?: string }) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <>
      {/* Journal Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0a2e2e 0%, #0d4a3a 50%, #0a3d2e 100%)' }} className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src="/images/journal-cover.jpg"
              alt="Journal of Artificial Intelligence in Medicine & Public Health"
              className="w-44 h-auto rounded shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
              {subtitle || 'Journal of Artificial Intelligence in Medicine & Public Health'}
            </h1>
            {!subtitle && (
              <div className="space-y-1 text-sm text-white">
                <p><span className="font-semibold">Frequency</span>: Quarterly</p>
                <p><span className="font-semibold">Access</span>: Fully Open Access</p>
                <p><span className="font-semibold">APC</span>: No Fees</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Journal Sub-Nav */}
      <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky z-40" style={{ top: '95px' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.href ? (
                  <Link href={item.href} className="inline-block px-4 py-4 text-sm font-medium text-gray-700 hover:text-green-800 whitespace-nowrap">
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="inline-flex items-center gap-1 px-4 py-4 text-sm font-medium text-gray-700 hover:text-green-800 whitespace-nowrap"
                    onMouseEnter={() => setOpen(item.label)}
                    onMouseLeave={() => setOpen(null)}
                  >
                    {item.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {open === item.label && item.children && (
                      <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded min-w-48 z-50">
                        {item.children.map((child) => (
                          <Link key={child.label} href={child.href} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-800 whitespace-nowrap">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-4">
            <Link href="/journal/guide-for-authors" className="px-5 py-2 text-sm font-semibold text-white rounded" style={{ background: '#0a2e2e' }}>
              Guide for Author
            </Link>
            <button aria-label="Search" className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
