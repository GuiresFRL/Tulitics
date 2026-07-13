import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = {
  title: 'Article Processing Charges (APC) | JAIMPH – Tulitics',
  description: 'JAIMPH charges no article processing fees. Publishing in the Journal of Artificial Intelligence in Medicine and Public Health is completely free — no submission fees, no publication charges, no APC.',
  keywords: ['article processing charges', 'APC', 'no publication fees', 'free to publish', 'JAIMPH APC', 'open access no fees', 'waived APC medical journal'],
  alternates: { canonical: 'https://guires.info/journal/article-processing-charges' },
  openGraph: {
    title: 'Article Processing Charges (APC) | JAIMPH – Tulitics',
    description: 'No article processing charges — publishing in JAIMPH is completely free for all authors.',
    url: 'https://guires.info/journal/article-processing-charges',
    type: 'article',
  },
  twitter: { card: 'summary', title: 'No APC | JAIMPH', description: 'JAIMPH charges zero article processing fees. Publish for free.' },
}

export default function APCPage() {
  return (
    <>
      <JournalHeader subtitle="Article Processing Charges (APC)" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Open Access</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Article Processing Charges (APC)</h1>

        <div className="rounded-2xl p-10 text-center mb-8 border border-gray-200" style={{ background: '#f0fdf4' }}>
          <div className="text-5xl font-extrabold mb-3" style={{ color: '#0a5c3c' }}>$0</div>
          <p className="text-base font-semibold text-gray-900 mb-4">No Fees. Ever.</p>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">
            The journal does not charge any submission fees, article processing charges, publication fees, subscription fees, or any other charges to authors or readers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            'No submission fees',
            'No article processing charges',
            'No publication fees',
            'No subscription fees',
            'No charges to authors',
            'No charges to readers',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl bg-white">
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#0fb68c' }}>
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
