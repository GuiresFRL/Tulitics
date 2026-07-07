import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Plagiarism Policy – JAIMPH' }

export default function PlagiarismPolicyPage() {
  return (
    <>
      <JournalHeader subtitle="Plagiarism Policy" />
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Editorial Policies & Guidelines</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Plagiarism Policy</h1>
          <p className="text-gray-700 leading-relaxed">
            The journal maintains a strict policy against plagiarism. All submitted manuscripts must be original work and properly cite previously published sources. Manuscripts may be screened using plagiarism detection tools. Submissions found to contain plagiarism, data fabrication, or duplicate publication will be rejected or retracted. The journal follows ethical standards recommended by the Committee on Publication Ethics (COPE).
          </p>
        </div>

        {[
          {
            title: 'Definition of Plagiarism',
            body: 'Plagiarism is the use of another person\'s ideas, words, data, or other intellectual property without proper acknowledgment. This includes verbatim copying, paraphrasing without attribution, self-plagiarism (re-using one\'s own previously published work without disclosure), and duplicate submission of the same manuscript to multiple journals.',
          },
          {
            title: 'Screening Process',
            body: 'All manuscripts submitted to JAIMPH are screened for plagiarism using industry-standard detection software prior to peer review. A similarity index above 15% (excluding references, quotations, and common phrases) will result in the manuscript being returned to the authors for revision or outright rejection depending on the severity of the overlap.',
          },
          {
            title: 'Self-Plagiarism',
            body: 'Authors must not submit work that has been previously published, either in full or in substantial part, in another journal or publication. Reuse of one\'s own previously published text, figures, or data without proper attribution and disclosure constitutes self-plagiarism and is subject to the same consequences as other forms of plagiarism.',
          },
          {
            title: 'Duplicate and Redundant Publication',
            body: 'Submitting the same manuscript simultaneously to more than one journal is strictly prohibited. Authors must confirm at the time of submission that the manuscript is not under consideration elsewhere. Redundant publication — publishing substantially similar findings in multiple journals — is also prohibited and may result in retraction.',
          },
          {
            title: 'Consequences of Plagiarism',
            body: 'Manuscripts found to contain plagiarism at any stage — before or after publication — will be rejected or retracted. The authors\' institution and funding bodies may be notified. In severe cases, authors may be banned from submitting to the journal for a defined period. All decisions are made in accordance with COPE guidelines.',
          },
          {
            title: 'Reporting Suspected Plagiarism',
            body: 'Readers, reviewers, or editors who suspect plagiarism in a published article are encouraged to contact the Editorial Office at editor@jaimph.com with supporting evidence. All reports are handled confidentially and investigated thoroughly before any action is taken.',
          },
        ].map(s => (
          <section key={s.title}>
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
              {s.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm pl-5">{s.body}</p>
          </section>
        ))}

        <div className="rounded-2xl p-6" style={{ background: '#ecfdf5' }}>
          <p className="text-sm font-semibold mb-1" style={{ color: '#0a5c3c' }}>Governed by COPE Guidelines</p>
          <p className="text-sm text-gray-600">This policy follows the Best Practice Guidelines for Journal Editors established by the Committee on Publication Ethics (COPE).</p>
        </div>
      </div>
    </>
  )
}
