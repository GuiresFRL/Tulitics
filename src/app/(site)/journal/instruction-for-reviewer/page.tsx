import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Instruction for Reviewers – JAIMPH' }

const toc = [
  { label: 'Role and Responsibility', id: 'role-responsibility' },
  { label: 'Objectivity and Review Quality', id: 'objectivity' },
  { label: 'Assessment Criteria', id: 'assessment-criteria' },
  { label: 'Ethical Considerations', id: 'ethical-considerations' },
  { label: 'Competing Interests', id: 'competing-interests' },
  { label: 'Timeliness', id: 'timeliness' },
  { label: 'Review Report Structure', id: 'review-report' },
  { label: 'Use of Artificial Intelligence Tools', id: 'ai-tools' },
  { label: 'Post-Review Responsibilities', id: 'post-review' },
  { label: 'Professional Conduct', id: 'professional-conduct' },
  { label: 'Reviewer Recognition', id: 'reviewer-recognition' },
]

const sections = [
  {
    id: 'role-responsibility',
    title: 'Role and Responsibility',
    body: 'Reviewers are expected to contribute to the integrity and quality of the journal by providing independent, critical, and unbiased assessments of submitted manuscripts. Their evaluation should focus on the scientific merit, originality, and relevance of the work, while offering constructive suggestions to improve clarity and impact.',
  },
  {
    id: 'objectivity',
    title: 'Objectivity and Review Quality',
    body: 'Reviews should be objective, evidence-based, and free from personal bias. Comments must be clearly articulated, constructive, and aimed at enhancing the scientific quality of the manuscript. Criticism should be directed at the work, not the authors.',
  },
  {
    id: 'assessment-criteria',
    title: 'Assessment Criteria',
    body: 'Reviewers should evaluate manuscripts with respect to methodological rigor, validity of results, clarity of presentation, and relevance to the journal\'s scope. Conclusions should be assessed for consistency with the data and analyses provided.',
  },
  {
    id: 'ethical-considerations',
    title: 'Ethical Considerations',
    body: 'Reviewers should alert the editor to any concerns regarding ethical issues, including plagiarism, redundant publication, or data irregularities. Research involving human participants must comply with the Declaration of Helsinki, and animal studies should adhere to recognized ethical standards. Appropriate ethical approvals and consent statements should be confirmed where applicable.',
  },
  {
    id: 'competing-interests',
    title: 'Competing Interests',
    body: 'Any potential conflicts of interest that may influence the reviewer\'s assessment must be disclosed to the editor. Reviewers should decline the review if such conflicts compromise their ability to provide an impartial evaluation.',
  },
  {
    id: 'timeliness',
    title: 'Timeliness',
    body: 'Reviewers are expected to submit their reports within the agreed timeframe. If unable to meet the deadline, they should promptly notify the editorial office to facilitate timely editorial decisions.',
  },
  {
    id: 'review-report',
    title: 'Review Report Structure',
    body: 'Review reports should provide a concise summary of the manuscript, followed by major comments addressing substantive scientific issues and minor comments related to presentation or clarity. A clear recommendation (accept, minor revision, major revision, or reject) should be provided and supported by appropriate justification.',
  },
  {
    id: 'ai-tools',
    title: 'Use of Artificial Intelligence Tools',
    body: 'The use of AI or automated tools in the peer-review process must not compromise confidentiality. Reviewers must not upload manuscript content to external platforms that store or reuse data. The reviewer retains full responsibility for the accuracy and integrity of the review.',
  },
  {
    id: 'post-review',
    title: 'Post-Review Responsibilities',
    body: 'Reviewers must not disclose or discuss the manuscript after completing the review. Any additional concerns identified post-submission should be communicated directly to the editor.',
  },
  {
    id: 'professional-conduct',
    title: 'Professional Conduct',
    body: 'Reviewers should accept assignments only within their area of expertise and decline invitations where appropriate. All interactions with the editorial office should be conducted in a professional and respectful manner.',
  },
  {
    id: 'reviewer-recognition',
    title: 'Reviewer Recognition',
    body: 'The journal acknowledges the contribution of reviewers in maintaining publication standards. Recognition may include formal acknowledgment, certificates, or other professional development opportunities. Reviewers are encouraged to follow best practices outlined by organizations such as the COPE and the ICMJE.',
  },
]

export default function InstructionForReviewerPage() {
  return (
    <>
      <JournalHeader subtitle="Instruction for Reviewers" />
      <div className="max-w-6xl mx-auto px-6 py-12 flex gap-10">

        {/* Sidebar TOC */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky" style={{ top: '155px' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-2">Contents</p>
            <nav className="space-y-0.5">
              {toc.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-gray-600 hover:text-green-800 py-1.5 pl-3 border-l-2 border-transparent hover:border-green-600 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-10">
          <h2 className="text-2xl font-bold text-gray-900">Instruction for Reviewers</h2>

          {sections.map(s => (
            <section key={s.id} id={s.id} style={{ scrollMarginTop: '155px' }}>
              <div className="bg-white border border-gray-100 rounded-xl p-6 hover:border-green-100 hover:shadow-sm transition-all">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  {s.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{s.body}</p>
              </div>
            </section>
          ))}

          {/* CTA */}
          <div className="rounded-2xl p-8 text-center" style={{ background: '#ecfdf5' }}>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#0a5c3c' }}>Interested in joining our reviewer network?</h3>
            <p className="text-sm mb-4" style={{ color: '#065f46' }}>
              We welcome subject experts with significant academic, clinical, or research experience to apply as reviewers.
            </p>
            <a
              href="mailto:editor@jaimph.com?subject=Reviewer Application"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-sm text-white"
              style={{ background: '#0fb68c' }}
            >
              Apply as Reviewer →
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
