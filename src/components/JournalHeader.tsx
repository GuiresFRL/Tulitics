'use client'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  {
    label: 'About',
    children: [
      { label: 'Aim & Scope', href: '/journal/aim-and-scope' },
      { label: 'Editorial & Advisory Board', href: '/journal/editorial-and-advisory-board' },
      { label: 'Journal Information', href: '/journal/journal-information' },
      { label: 'Article Processing Charge', href: '/journal/article-processing-charges' },
    ],
  },
  {
    label: 'Article / Issues',
    children: [
      { label: 'Current', href: '/journal/current-issue' },
      { label: 'Inpress', href: '/journal/inpress' },
      { label: 'Archives / All Issues', href: '/journal/all-issues' },
    ],
  },
  {
    label: 'Editorial Policies & Guidelines',
    children: [
      { label: 'Editorial Policies', href: '/journal/editorial-policies' },
      { label: 'Plagiarism Policies', href: '/journal/editorial-policies#plagiarism' },
      { label: 'Peer Review Policies', href: '/journal/editorial-policies#peer-review' },
      { label: 'Ethics Approval Policy', href: '/journal/editorial-policies#ethics' },
      { label: 'Authorship Policy', href: '/journal/editorial-policies#authorship' },
      { label: 'Conflict of Interest', href: '/journal/editorial-policies#conflict' },
      { label: 'Citation Manipulation Policy', href: '/journal/editorial-policies#citation' },
      { label: 'Corrections and Retractions Policy', href: '/journal/editorial-policies#corrections' },
      { label: 'Open Access Policy', href: '/journal/editorial-policies#open-access' },
      { label: 'Article Processing Charges Policy', href: '/journal/article-processing-charges' },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <div className="flex-shrink-0 bg-white rounded-lg p-2 shadow-lg self-center sm:self-auto">
            <img
              src="/images/journal-cover.jpg"
              alt="Journal of Artificial Intelligence in Medicine & Public Health"
              className="w-28 sm:w-44 h-auto rounded"
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-2 sm:mb-3">
              {subtitle || 'Journal of Artificial Intelligence in Medicine & Public Health'}
            </h1>
            {!subtitle && (
              <div className="space-y-0.5 text-xs sm:text-sm text-white">
                <p><span className="font-semibold">Frequency</span>: Quarterly</p>
                <p><span className="font-semibold">Access</span>: Subscription / Fully Open Access</p>
                <p><span className="font-semibold">APC</span>: No Fees</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Journal Sub-Nav */}
      <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky z-40" style={{ top: '95px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Scrollable tabs on mobile */}
          <div className="flex items-center overflow-x-auto scrollbar-hide flex-1 min-w-0 pb-48 -mb-48">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative flex-shrink-0"
                onMouseEnter={() => item.children && setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="inline-block px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-700 hover:text-green-800 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="inline-flex items-center gap-1 px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-700 hover:text-green-800 whitespace-nowrap"
                    onClick={() => setOpen(open === item.label ? null : item.label)}
                    aria-expanded={open === item.label}
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 flex-shrink-0 transition-transform ${open === item.label ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
                {/* Dropdown — outside the button, inside the wrapper div */}
                {open === item.label && item.children && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-lg min-w-56 z-50 py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(null)}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-800 whitespace-nowrap"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-2 flex-shrink-0">
            <Link href="https://journal-management-system-omega.vercel.app/" className="hidden sm:inline-flex px-4 py-2 text-xs sm:text-sm font-semibold text-white rounded whitespace-nowrap" style={{ background: '#0a2e2e' }}>
              Submit a Manuscript
            </Link>
            <Link href="https://journal-management-system-omega.vercel.app/" className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white rounded whitespace-nowrap" style={{ background: '#0a2e2e' }}>
              Submit
            </Link>
            <button aria-label="Search" className="p-2 text-gray-500 hover:text-gray-900 transition-colors flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
