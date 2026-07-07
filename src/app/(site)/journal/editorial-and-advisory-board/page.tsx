import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Editorial and Advisory Board – JAIMPH' }

export default function EditorialBoardPage() {
  return (
    <>
      <JournalHeader subtitle="Editorial and Advisory Board" />
      <div className="max-w-5xl mx-auto px-6 py-14">

        {/* Intro */}
        <div className="mb-10 space-y-4 text-gray-700 leading-relaxed">
          <p>
            The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) is currently in
            the process of constituting its Editorial and Advisory Board. Invitations have been extended to
            distinguished academicians, researchers, clinicians, healthcare professionals, and industry
            experts from relevant disciplines worldwide.
          </p>
          <p>
            The journal is committed to establishing a strong international board that will contribute to
            maintaining high standards of academic quality, ethical publishing practices, scientific
            integrity, and a rigorous peer-review process. The confirmed list of Editorial and Advisory
            Board members will be updated on this page upon acceptance of the invitations.
          </p>
          <p>
            Researchers and subject experts with significant academic, clinical, or research experience in
            Artificial Intelligence, Medicine, Public Health, Healthcare Technologies, Biomedical Sciences
            or related interdisciplinary fields are welcome to express their interest in joining the
            Editorial or Advisory Board.
          </p>
        </div>

        {/* Board coming soon banner */}
        <div className="rounded-2xl border border-dashed border-green-200 bg-green-50 p-10 text-center mb-12">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#d1fae5' }}>
            <svg className="w-7 h-7" fill="none" stroke="#059669" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2" style={{ color: '#0a5c3c' }}>Board Members — Coming Soon</h2>
          <p className="text-gray-600 text-sm max-w-lg mx-auto">
            The confirmed list of Editorial and Advisory Board members will be published on this page
            upon acceptance of invitations. We are in the process of onboarding distinguished experts
            from across the globe.
          </p>
        </div>

        {/* Eligibility */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Eligibility and Submission Requirements
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Interested candidates are requested to submit the following:
          </p>
          <ul className="space-y-3">
            {[
              'Updated Curriculum Vitae (CV)',
              'Institutional affiliation and designation',
              'Research interests and areas of expertise',
              'List of recent publications',
              'ORCID ID / Scopus Author ID / Google Scholar profile (if available)',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="rounded-2xl p-8" style={{ background: '#ecfdf5' }}>
          <h2 className="text-lg font-bold mb-4" style={{ color: '#0a5c3c' }}>Contact Information</h2>
          <p className="text-gray-700 text-sm mb-3">
            For inquiries and expressions of interest, please contact:
          </p>
          <div className="space-y-1 text-sm text-gray-700">
            <p className="font-semibold">Editorial Office</p>
            <p>Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH)</p>
            <p>
              Email:{' '}
              <a href="mailto:editor@jaimph.com" className="font-semibold" style={{ color: '#0fb68c' }}>
                editor@jaimph.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
