import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-white pt-12 pb-6" style={{ background: '#0d2b2b' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <img src="/images/logo.png" alt="Tulitics" className="h-10 mb-3 bg-white rounded px-2 py-1" />
            <p className="text-green-200 text-sm leading-relaxed">
              Advancing research through open-access publishing in medicine, public health, and AI.
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { title: 'Facebook',  d: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { title: 'X',        d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.629 5.904-5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { title: 'YouTube',  d: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
                { title: 'Instagram', d: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z' },
                { title: 'LinkedIn', d: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
              ].map(({ title, d }) => (
                <a key={title} href="#" aria-label={title} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-green-400">For Authors</h4>
            <ul className="space-y-2">
              {[
                ['Submit Manuscript', '/publish'],
                ['Author Guidelines', '/journal/instruction-for-author'],
                ['Track Manuscript', '/publish'],
                ['Reviewer Guidelines', '/journal/instruction-for-reviewer'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-sm text-green-100 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ['Journals', '/journal'],
                ['News & Announcements', '/journal/ai-medicine'],
                ['Publish an article', '/publish'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-sm text-green-100 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-green-400">Contact</h4>
            <ul className="space-y-3 text-sm text-green-100">
              <li className="flex gap-2 items-start"><span>📞</span><a href="tel:+919884350006" className="hover:text-white transition-colors">+91 9884350006</a></li>
              <li className="flex gap-2 items-start"><span>✉️</span><a href="mailto:contact@tulitics.com" className="hover:text-white transition-colors">contact@tulitics.com</a></li>
              <li className="flex gap-2 items-start"><span>📍</span><span>10, Kutty Street, Nungambakkam, Chennai – 600 034</span></li>
            </ul>
          </div>
        </div>
        {/* Trust Badges */}
        <div className="border-t border-white/10 pt-6 pb-6 flex flex-wrap justify-start gap-3">
          {/* TrustedSite */}
          <div className="flex items-center gap-1.5 bg-white rounded px-2 py-1">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <rect width="20" height="20" rx="3" fill="#4CAF50"/>
              <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] font-bold text-gray-800">TrustedSite</span>
          </div>

          {/* GoDaddy Verified & Secured */}
          <div className="flex items-center gap-1.5 rounded px-2 py-1" style={{ background: '#2d2d2d' }}>
            <svg width="18" height="22" viewBox="0 0 28 32" fill="none">
              <path d="M14 0L2 5v10c0 8.5 5.2 16.4 12 19 6.8-2.6 12-10.5 12-19V5L14 0z" fill="#4CAF50"/>
              <path d="M10 12v-2a2 2 0 014 0v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <rect x="8" y="12" width="8" height="6" rx="1" fill="white" opacity="0.9"/>
              <rect x="11" y="14" width="2" height="2" rx="0.5" fill="#4CAF50"/>
            </svg>
            <div>
              <p className="text-gray-400 text-[7px] font-semibold tracking-widest uppercase">GODADDY.COM®</p>
              <p className="text-white text-[9px] font-black leading-tight">VERIFIED &amp; SECURED</p>
              <p className="text-gray-400 text-[7px] tracking-wider uppercase">VERIFY SECURITY</p>
            </div>
          </div>

          {/* McAfee SECURE */}
          <div className="flex items-center gap-1.5 bg-white rounded px-2 py-1">
            <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" fill="#CC0000"/>
              <circle cx="14" cy="14" r="13" stroke="#990000" strokeWidth="1"/>
              <text x="14" y="18" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="Arial">M</text>
            </svg>
            <div>
              <p className="text-gray-800 text-[10px] font-black leading-tight">McAfee</p>
              <p className="text-gray-600 text-[9px] font-semibold">SECURE™</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-green-300">
          <p>© {new Date().getFullYear()} – Tulitics is a trading name of Guires, a company registered.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center sm:justify-end">
            {[['Privacy Policy', '/privacy'], ['Terms of Use', '/terms'], ['Cookie Policy', '/cookies'], ['Accessibility', '/accessibility']].map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-white transition-colors whitespace-nowrap">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
