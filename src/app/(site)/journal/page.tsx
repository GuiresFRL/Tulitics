import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Journals – Tulitics' }

export default function JournalsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Journals</h1>
        <p className="text-gray-500 mb-10">Peer-reviewed, fully open-access publishing across medicine, AI, and public health.</p>

        {/* Active Journal */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-shrink-0">
            <img src="/images/journal-cover.jpg" alt="JAIMPH" className="w-44 rounded-lg shadow" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700 mb-3 inline-block">Open Access</span>
            <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
              Journal of Artificial Intelligence in Medicine &amp; Public Health
            </h2>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-yellow-600">Coming Soon</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Journal of Artificial Intelligence in Medicine and Public Health, the official journal of Tulitics, is an upcoming multidisciplinary, peer-reviewed, open access journal focused on the integration of medicine and artificial intelligence. The journal will publish high-quality research, reviews, and case reports covering clinical research, public health, digital health innovations, and emerging biomedical technologies.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              With a strong emphasis on accessibility and global impact, the journal will offer free submission and publication, ensuring the wide dissemination of knowledge that advances healthcare and informs policy worldwide.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-6">
              <span><strong>Frequency:</strong> Quarterly</span>
              <span><strong>Access:</strong> Fully Open Access</span>
              <span><strong>APC:</strong> No Fees</span>
              <span><strong>Review:</strong> Double-blind</span>
            </div>
            <div className="flex gap-3">
              <Link href="/journal/ai-medicine" className="px-5 py-2 text-sm font-semibold text-white rounded" style={{ background: '#0a2e2e' }}>
                Visit Journal
              </Link>
              <Link href="/journal/submit-an-article" className="px-5 py-2 text-sm font-semibold border border-gray-300 text-gray-700 rounded hover:border-green-600 hover:text-green-800 transition-colors">
                Submit Article
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Journals */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Upcoming Journals</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            We are currently developing several new peer-reviewed journals across engineering, management, and interdisciplinary research. Further details will be announced soon.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {['Journal of Management', 'Journal of Engineering'].map(title => (
              <div key={title} className="rounded-xl p-6 text-white text-center" style={{ background: '#0a5c3c' }}>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-green-200 text-sm">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
