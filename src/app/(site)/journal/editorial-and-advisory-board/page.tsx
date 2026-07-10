import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Editorial and Advisory Board – JAIMPH' }

const requirements = [
  'Updated Curriculum Vitae (CV)',
  'Institutional affiliation and designation',
  'Research interests and areas of expertise',
  'List of recent publications',
  'ORCID ID / Scopus Author ID / Google Scholar profile (if available)',
]

export default function EditorialBoardPage() {
  return (
    <>
      <JournalHeader subtitle="Editorial and Advisory Board" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Leadership</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Editorial and Advisory Board</h1>

        <div className="space-y-5 mb-10">
          <p className="text-gray-600 text-sm leading-relaxed">
            The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) is currently in the process of constituting its Editorial and Advisory Board. Invitations have been extended to distinguished academicians, researchers, clinicians, healthcare professionals, and industry experts from relevant disciplines worldwide.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            The journal is committed to establishing a strong international board that will contribute to maintaining high standards of academic quality, ethical publishing practices, scientific integrity, and a rigorous peer-review process. The confirmed list of Editorial and Advisory Board members will be updated on this page upon acceptance of the invitations.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Researchers and subject experts with significant academic, clinical, or research experience in Artificial Intelligence, Medicine, Public Health, Healthcare Technologies, Biomedical Sciences or related interdisciplinary fields are welcome to express their interest in joining the Editorial or Advisory Board.
          </p>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-gray-900 text-base mb-4">Eligibility and Submission Requirements</h2>
          <p className="text-gray-600 text-sm mb-4">Interested candidates are requested to submit the following:</p>
          <ul className="space-y-2">
            {requirements.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl p-6" style={{ background: '#f0fdf4' }}>
          <h2 className="font-bold text-base mb-3" style={{ color: '#0a5c3c' }}>Contact Information</h2>
          <p className="text-sm mb-3" style={{ color: '#065f46' }}>For inquiries and expressions of interest, please contact:</p>
          <p className="text-sm font-semibold" style={{ color: '#0a5c3c' }}>Editorial Office</p>
          <p className="text-sm" style={{ color: '#065f46' }}>Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH)</p>
          <a href="mailto:editor@jaimph.com" className="text-sm font-semibold" style={{ color: '#0fb68c' }}>editor@jaimph.com</a>
        </div>
      </div>
    </>
  )
}
