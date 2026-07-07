import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Authorship Policy – JAIMPH' }

export default function AuthorshipPolicyPage() {
  return (
    <>
      <JournalHeader subtitle="Authorship Policy" />
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Editorial Policies & Guidelines</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Authorship Policy</h1>
          <p className="text-gray-700 leading-relaxed">
            Authorship should be limited to individuals who have made substantial intellectual contributions to the research and the preparation of the manuscript. All listed authors must have participated sufficiently to take public responsibility for the content of the article. The journal follows the authorship criteria established by the International Committee of Medical Journal Editors (ICMJE).
          </p>
        </div>

        {[
          {
            title: 'ICMJE Authorship Criteria',
            body: 'To qualify as an author, each individual must meet all four of the following criteria: (1) Substantial contributions to the conception or design of the work, or the acquisition, analysis, or interpretation of data; (2) Drafting the work or revising it critically for important intellectual content; (3) Final approval of the version to be published; and (4) Agreement to be accountable for all aspects of the work, ensuring that questions related to accuracy or integrity are appropriately investigated and resolved.',
          },
          {
            title: 'Author Contributions Statement',
            body: 'All manuscripts must include an Author Contributions Statement specifying the role of each author using the CRediT (Contributor Roles Taxonomy) framework. Roles include: Conceptualization, Methodology, Software, Validation, Formal Analysis, Investigation, Resources, Data Curation, Writing – Original Draft, Writing – Review & Editing, Visualization, Supervision, Project Administration, Funding Acquisition.',
          },
          {
            title: 'Corresponding Author',
            body: 'One author must be designated as the corresponding author and is responsible for all communication with the journal, including submission, peer review correspondence, and post-publication queries. The corresponding author must ensure that all co-authors have reviewed and approved the final manuscript prior to submission.',
          },
          {
            title: 'Changes to Authorship',
            body: 'Any changes to the authorship list after submission — including the addition, removal, or reordering of authors — must be approved by all authors and the Editor-in-Chief. A written explanation of the reason for the change and written confirmation from all authors (including any being removed) must be provided to the Editorial Office.',
          },
          {
            title: 'Acknowledgements',
            body: 'Individuals who contributed to the work but do not meet all four ICMJE authorship criteria should be acknowledged in the Acknowledgements section. Examples include those who provided technical assistance, writing support, or departmental oversight. All acknowledged individuals must have given their consent to be named.',
          },
          {
            title: 'Ghost and Guest Authorship',
            body: 'Ghost authorship (where a person who made substantial contributions is not listed as an author) and guest/honorary authorship (where a person who did not meet authorship criteria is listed as an author) are both forms of misconduct and are strictly prohibited. The journal may investigate and reject manuscripts where such practices are suspected.',
          },
          {
            title: 'AI and Authorship',
            body: 'Artificial intelligence (AI) tools cannot be listed as authors. Authorship requires the ability to take responsibility for the work, give informed consent, and be accountable for errors — responsibilities that AI cannot fulfil. Authors must disclose the use of AI tools in the preparation of the manuscript in the designated section of the Title Page.',
          },
          {
            title: 'Maximum Number of Authors',
            body: 'Each manuscript type has a recommended maximum number of authors: Research Articles, Review Articles, Short Communications, and Case Reports may each have up to six authors. Exceptions for large collaborative studies must be justified in the covering letter and are subject to editorial approval.',
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
          <p className="text-sm font-semibold mb-1" style={{ color: '#0a5c3c' }}>Guided by ICMJE Recommendations</p>
          <p className="text-sm text-gray-600">This policy is based on the Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals published by the International Committee of Medical Journal Editors (ICMJE).</p>
        </div>
      </div>
    </>
  )
}
