import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Tulitics',
  description: 'Tulitics is committed to making its websites and journal platforms accessible to all users, including individuals with disabilities. Read our accessibility statement and WCAG compliance efforts.',
  keywords: ['Tulitics accessibility', 'WCAG compliance', 'website accessibility', 'accessible publishing', 'disability access'],
  alternates: { canonical: 'https://guires.info/accessibility' },
  openGraph: { title: 'Accessibility Statement | Tulitics', url: 'https://guires.info/accessibility', type: 'website' },
  robots: { index: true, follow: false },
}

const paras = [
  'Tulitics Publisher is committed to ensuring that its websites and journal platforms are accessible to all users, including individuals with disabilities. We strive to provide a user-friendly experience that allows equal access to scholarly content, submission systems, and publication resources.',
  'We are continuously working to improve the accessibility and usability of our websites in accordance with recognized accessibility standards, including the Web Content Accessibility Guidelines (WCAG) where applicable.',
  'Our ongoing efforts include enhancing navigation, improving readability, supporting assistive technologies, and ensuring compatibility with modern browsers and devices.',
  'If you experience any difficulty accessing content on our website or have suggestions for improving accessibility, please contact us. We will make every reasonable effort to address your concerns promptly.',
]

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Legal</p>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-10">Accessibility Statement</h1>

      <div className="space-y-5">
        {paras.map((p, i) => (
          <p key={i} className="text-gray-600 text-sm leading-relaxed">{p}</p>
        ))}
      </div>

      <div className="mt-10 rounded-xl p-6" style={{ background: '#f0fdf4' }}>
        <p className="text-sm font-semibold mb-2" style={{ color: '#0a5c3c' }}>Contact for Accessibility Support:</p>
        <p className="text-sm" style={{ color: '#065f46' }}>Tulitics</p>
        <a href="mailto:editorial@tulitics.com" className="text-sm font-semibold" style={{ color: '#0fb68c' }}>editorial@tulitics.com</a>
      </div>
    </div>
  )
}
