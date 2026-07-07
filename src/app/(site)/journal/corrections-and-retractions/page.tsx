import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Corrections and Retractions Policy – JAIMPH' }

export default function CorrectionsRetractionsPage() {
  return (
    <>
      <JournalHeader subtitle="Corrections and Retractions Policy" />
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Editorial Policies & Guidelines</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Corrections and Retractions Policy</h1>
          <p className="text-gray-700 leading-relaxed">
            The journal is committed to preserving the integrity, accuracy, and transparency of the scientific record. Authors are expected to ensure that all data, analyses, and interpretations in their submissions are accurate and complete. If any errors, omissions, or ethical concerns are discovered after publication, authors must immediately notify the editorial office.
          </p>
        </div>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">Corrections and Errata</h2>
          <p className="text-gray-700 leading-relaxed text-sm mb-4">
            Minor errors that do not affect the overall conclusions of a paper — such as typographical mistakes, errors in author affiliations, minor data inaccuracies, or formatting issues — will be corrected through formal corrections or errata. Corrections are permanently linked to the original article, clearly describe the nature of the changes, and are indexed alongside the article in databases to maintain clarity for readers. Authors are responsible for reporting these errors promptly and providing the corrected information.
          </p>
          <div className="space-y-3 pl-2">
            {[
              'Typographical errors in the article text or tables',
              'Incorrect author name, affiliation, or contact details',
              'Minor numerical errors that do not affect the conclusions',
              'Incorrect figure labels or legend text',
              'Missing or incorrect funding acknowledgement',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">Retractions</h2>
          <p className="text-gray-700 leading-relaxed text-sm mb-4">
            Retractions are issued for major errors, research misconduct, plagiarism, data fabrication, ethical violations, or other breaches that compromise the reliability of the research. Retractions are clearly labelled, permanently linked to the original article, and provide a transparent explanation of the reason. All co-authors must cooperate fully with the journal's investigation. Retractions may also include updates to references, citations, or related datasets to maintain the integrity of the scientific record.
          </p>
          <div className="space-y-3 pl-2">
            {[
              'Data fabrication, falsification, or manipulation',
              'Plagiarism or duplicate publication',
              'Failure to obtain required ethical approval',
              'Undisclosed conflicts of interest that materially affect the conclusions',
              'Major errors that invalidate the conclusions of the article',
              'Research conducted without proper consent',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#ef4444' }} />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">Author Responsibilities</h2>
          <div className="space-y-3">
            {[
              'Promptly report errors or ethical concerns discovered post-publication.',
              'Cooperate with editors during investigations of suspected misconduct or inaccuracies.',
              'Ensure all co-authors are informed of corrections or retractions and approve submitted corrections.',
              'Provide supporting documentation if requested by the editorial office.',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Transparency and Accessibility</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            All corrections and retractions are publicly accessible, clearly indicated, and permanently linked to the original article. This ensures that readers are fully informed and that the integrity of the scientific record is maintained.
          </p>
        </section>

        <div className="rounded-2xl p-6" style={{ background: '#ecfdf5' }}>
          <p className="text-sm font-semibold mb-1" style={{ color: '#0a5c3c' }}>Report a concern</p>
          <p className="text-sm text-gray-600 mb-3">To report an error, concern, or request a correction or retraction, contact the Editorial Office.</p>
          <a href="mailto:editor@jaimph.com" className="text-sm font-semibold" style={{ color: '#0fb68c' }}>editor@jaimph.com →</a>
        </div>
      </div>
    </>
  )
}
