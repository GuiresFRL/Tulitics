'use client'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    children: [
      { label: 'Company', href: '/about/company' },
      { label: 'Policy', href: '/about/policy' },
      { label: 'Career', href: '/about/career' },
    ],
  },
  { label: 'Industry', href: '/industry' },
  {
    label: 'Journal',
    children: [
      { label: 'Browse Journals', href: '/journal' },
      { label: 'JAIMPH', href: '/journal/ai-medicine' },
      { label: 'Current Issue', href: '/journal/current-issue' },
      { label: 'Submit an Article', href: '/journal/submit-an-article' },
    ],
  },
  { label: 'Publish an Article', href: 'https://journal-management-system-omega.vercel.app/' },
  { label: 'Insights', href: '/insights' },
  { label: 'Support', href: '/support' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [open, setOpen] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top social bar */}
      <div className="flex items-center justify-end gap-3 px-6 py-2" style={{ background: '#0a2e2e' }}>
        {[
          { title: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
          { title: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.629 5.904-5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
          { title: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
          { title: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z' },
          { title: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
        ].map(({ title, path }) => (
          <a key={title} href="#" aria-label={title} className="text-gray-300 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={path} />
            </svg>
          </a>
        ))}
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/">
            <img src="/images/logo.png" alt="Tulitics" className="h-10" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-800 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-800 whitespace-nowrap">
                    {item.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
                {open === item.label && item.children && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded min-w-48 z-50 py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-800 whitespace-nowrap"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-1">
            {navItems.map((item) =>
              item.href ? (
                <Link key={item.label} href={item.href} className="block py-2 text-sm font-medium text-gray-700 hover:text-green-800" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <div key={item.label}>
                  <p className="py-2 text-sm font-medium text-gray-700">{item.label}</p>
                  <div className="pl-4 space-y-1">
                    {item.children?.map((child) => (
                      <Link key={child.label} href={child.href} className="block py-1.5 text-sm text-gray-500 hover:text-green-800" onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </header>
  )
}
