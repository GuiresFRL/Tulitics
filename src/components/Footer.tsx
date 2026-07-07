import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-white pt-12 pb-6" style={{ background: '#0d2b2b' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-3">Tulitics</h3>
            <p className="text-green-200 text-sm leading-relaxed">
              Advancing research through open-access publishing in medicine, public health, and AI.
            </p>
            <div className="flex gap-2 mt-4">
              {[
                { label: 'F', title: 'Facebook' },
                { label: 'X', title: 'X/Twitter' },
                { label: 'Y', title: 'YouTube' },
                { label: 'I', title: 'Instagram' },
                { label: 'in', title: 'LinkedIn' },
              ].map((s) => (
                <a key={s.title} href="#" aria-label={s.title} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-xs font-bold transition-colors">
                  {s.label}
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
                ['Publication Fees', '/journal/open-access-policy'],
                ['Track Manuscript', '/publish'],
                ['Reviewer Guidelines', '/journal/instruction-for-reviewer'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-sm text-green-100 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-green-400">Resources</h4>
            <ul className="space-y-2">
              {[
                ['Browse Journal', '/journal'],
                ['Browse Articles', '/journal/ai-medicine'],
                ['Research Topics', '/insights'],
                ['Special Issues', '/journal/current-issue'],
                ['Conference Papers', '/insights'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-sm text-green-100 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-green-400">Contact</h4>
            <ul className="space-y-3 text-sm text-green-100">
              <li className="flex gap-2 items-start"><span>📞</span><span>+91-98745 61230</span></li>
              <li className="flex gap-2 items-start"><span>✉️</span><a href="mailto:contact@tulitics.com" className="hover:text-white transition-colors">contact@tulitics.com</a></li>
              <li className="flex gap-2 items-start"><span>📍</span><span>123 Research Road, Chennai, 600034</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-green-300">
          <p>© {new Date().getFullYear()} Tulitics Publishing. All rights reserved.</p>
          <div className="flex gap-4">
            {[['Privacy Policy', '/privacy'], ['Terms of Use', '/terms'], ['Cookie Policy', '/cookies'], ['Accessibility', '/accessibility']].map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-white transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
