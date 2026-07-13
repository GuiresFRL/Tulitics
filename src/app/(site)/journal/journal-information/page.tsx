import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = {
  title: 'Journal Information | JAIMPH – Tulitics',
  description: 'Key information about the Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) — publication frequency, ISSN, open access policy, article processing charges, and indexing details.',
  keywords: ['JAIMPH journal information', 'journal details', 'ISSN', 'publication frequency', 'open access journal', 'journal indexing', 'APC fees JAIMPH'],
  alternates: { canonical: 'https://guires.info/journal/journal-information' },
  openGraph: {
    title: 'Journal Information | JAIMPH – Tulitics',
    description: 'Key details about JAIMPH — frequency, ISSN, open access policy, and indexing.',
    url: 'https://guires.info/journal/journal-information',
    type: 'article',
  },
  twitter: { card: 'summary', title: 'Journal Information | JAIMPH', description: 'Publication details, ISSN, and indexing information for JAIMPH.' },
}

const infoRows = [
  { label: 'Publication Frequency', value: 'Quarterly – The journal publishes four issues per year.' },
  { label: 'Peer Review Process', value: 'All submitted manuscripts undergo a double-blind peer-review process conducted by qualified experts in the relevant field to ensure academic quality, originality, and scientific integrity.' },
  { label: 'Open Access Policy', value: 'JAIMPH follows a fully open-access publishing model, providing immediate and unrestricted access to published content.' },
  { label: 'Language', value: 'The journal publishes manuscripts in English.' },
  { label: 'ISSN Information', value: 'The ISSN application for the journal is currently under process.' },
]

const timeline = [
  { stage: 'Initial decision', duration: '1–2 weeks' },
  { stage: 'Peer review', duration: '3–4 weeks' },
  { stage: 'Online publication', duration: '1–2 weeks' },
]

export default function JournalInformationPage() {
  return (
    <>
      <JournalHeader subtitle="Journal Information" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>About</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">About the Journal</h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-10">
          Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) is an international peer-reviewed open-access journal dedicated to publishing high-quality research in Artificial Intelligence, Medicine, Healthcare Technologies, Public Health, Biomedical Informatics, and related interdisciplinary fields.
        </p>

        <div className="space-y-5 mb-10">
          {infoRows.map((row) => (
            <div key={row.label} className="border border-gray-200 rounded-xl p-5">
              <h2 className="font-bold text-gray-900 text-sm mb-1">{row.label}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{row.value}</p>
            </div>
          ))}
        </div>

        <div className="border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-gray-900 text-base mb-5">Publication Timeline</h2>
          <div className="grid grid-cols-3 gap-4">
            {timeline.map((t) => (
              <div key={t.stage} className="text-center rounded-lg p-4" style={{ background: '#f0fdf4' }}>
                <p className="text-lg font-extrabold mb-1" style={{ color: '#0a5c3c' }}>{t.duration}</p>
                <p className="text-xs text-gray-500">{t.stage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
