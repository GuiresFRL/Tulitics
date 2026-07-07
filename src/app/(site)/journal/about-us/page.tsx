import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'About Us – JAIMPH' }

export default function AboutUsPage() {
  return (
    <>
      <JournalHeader subtitle="About us" />
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">About the Journal</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) is an international peer-reviewed
            open-access journal dedicated to publishing high-quality research in Artificial Intelligence, Medicine,
            Healthcare Technologies, Public Health, Biomedical Informatics, and related interdisciplinary fields.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The journal aims to bridge the gap between AI research and clinical/public health practice, fostering
            innovation that improves healthcare outcomes globally.
          </p>
        </section>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { label: 'Publication Frequency', value: 'Quarterly — The journal publishes four issues per year.' },
            { label: 'Peer Review Process', value: 'All submitted manuscripts undergo a double-blind peer-review process conducted by qualified experts.' },
            { label: 'Article Processing Charge', value: 'The journal is fully open access with no fees for submission, review, or publication.' },
            { label: 'ISSN', value: 'Application in process.' },
          ].map(item => (
            <div key={item.label} className="bg-gray-50 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-1">{item.label}</p>
              <p className="text-gray-600 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
