import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Citation Manipulation Policy – JAIMPH' }

export default function CitationManipulationPolicyPage() {
  return (
    <>
      <JournalHeader subtitle="Citation Manipulation Policy" />
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Editorial Policies & Guidelines</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Citation Manipulation Policy</h1>
          <p className="text-gray-700 leading-relaxed">
            The journal maintains strict standards of integrity and ethics in scholarly publishing. Any practice intended to artificially inflate citation metrics or misrepresent the impact of research is strictly prohibited. Authors must cite their prior work only when directly relevant, and coordinated efforts to cite specific journals, editors, or groups to boost metrics are not allowed.
          </p>
        </div>

        {[
          {
            title: 'Prohibited Citation Practices',
            body: 'The following citation practices are strictly prohibited: (1) Coercive citation — where editors, reviewers, or third parties pressure authors to add citations unrelated to the manuscript\'s scientific content; (2) Excessive self-citation — where authors repeatedly cite their own work in a manner that inflates metrics rather than supporting the manuscript\'s content; (3) Coordinated citation rings — where groups of authors mutually cite each other\'s work to artificially boost impact; (4) Inclusion of citations to meet a minimum reference count without scientific justification.',
          },
          {
            title: 'Author Responsibilities',
            body: 'Authors must ensure that all citations are relevant, accurate, and directly support the content of the manuscript. Authors should not include references to sources they have not read. Authors must not add citations in response to pressure from any party, including editors or reviewers, unless the suggested reference is directly relevant to the scientific content of the work.',
          },
          {
            title: 'Reviewer Responsibilities',
            body: 'Reviewers must not request that authors add citations to the reviewer\'s own work or to specific journals unless such citations are clearly relevant and necessary to improve the quality of the manuscript. Reviewer identity should never be used to advance citation interests. Any such requests should be reported to the Editor-in-Chief.',
          },
          {
            title: 'Editorial Oversight',
            body: 'Editors are trained to detect unusual citation patterns, including disproportionate self-citation or references that appear unrelated to the manuscript\'s content. Editors must not use their position to advance their own citation counts or those of colleagues or affiliated journals. The editorial team reviews manuscripts for citation anomalies prior to acceptance.',
          },
          {
            title: 'Detection and Consequences',
            body: 'Manuscripts found to engage in citation manipulation may be rejected or retracted. Authors, reviewers, or editors found to have engaged in citation manipulation may be reported to their institutions and relevant professional bodies. Decisions are made in accordance with COPE guidelines on citation manipulation.',
          },
          {
            title: 'Reporting Concerns',
            body: 'Authors who are pressured to add inappropriate citations by reviewers or editors are encouraged to report this to the Editor-in-Chief or, if the concern involves the Editor-in-Chief, to contact the Editorial Advisory Board directly at editor@jaimph.com. All reports are handled confidentially.',
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
          <p className="text-sm font-semibold mb-1" style={{ color: '#0a5c3c' }}>COPE Compliant</p>
          <p className="text-sm text-gray-600">This policy aligns with the Committee on Publication Ethics (COPE) guidelines on citation manipulation and coercive citation practices.</p>
        </div>
      </div>
    </>
  )
}
