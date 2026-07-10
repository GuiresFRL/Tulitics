import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Instruction for Reviewer – JAIMPH' }

const sections = [
  {
    title: 'Role and Responsibility',
    body: 'Reviewers are expected to contribute to the integrity and quality of the journal by providing independent, critical, and unbiased assessments of submitted manuscripts. Their evaluation should focus on the scientific merit, originality, and relevance of the work, while offering constructive suggestions to improve clarity and impact.',
  },
  {
    title: 'Confidentiality',
    body: 'Manuscripts under review are confidential documents. Reviewers must not disclose, share, or use any part of the manuscript for personal or professional purposes. All correspondence regarding the manuscript should be conducted through the editorial office only.',
  },
  {
    title: 'Objectivity and Review Quality',
    body: 'Reviews should be objective, evidence-based, and free from personal bias. Comments must be clearly articulated, constructive, and aimed at enhancing the scientific quality of the manuscript. Criticism should be directed at the work, not the authors.',
  },
  {
    title: 'Assessment Criteria',
    body: 'Reviewers should evaluate manuscripts with respect to methodological rigor, validity of results, clarity of presentation, and relevance to the journal\'s scope. Conclusions should be assessed for consistency with the data and analyses provided.',
  },
  {
    title: 'Ethical Considerations',
    body: 'Reviewers should alert the editor to any concerns regarding ethical issues, including plagiarism, redundant publication, or data irregularities. Research involving human participants must comply with the Declaration of Helsinki, and animal studies should adhere to recognized ethical standards. Appropriate ethical approvals and consent statements should be confirmed where applicable.',
  },
  {
    title: 'Competing Interests',
    body: 'Any potential conflicts of interest that may influence the reviewer\'s assessment must be disclosed to the editor. Reviewers should decline the review if such conflicts compromise their ability to provide an impartial evaluation.',
  },
  {
    title: 'Timeliness',
    body: 'Reviewers are expected to submit their reports within the agreed timeframe. If unable to meet the deadline, they should promptly notify the editorial office to facilitate timely editorial decisions.',
  },
  {
    title: 'Review Report Structure',
    body: 'Review reports should provide a concise summary of the manuscript, followed by major comments addressing substantive scientific issues and minor comments related to presentation or clarity. A clear recommendation (accept, minor revision, major revision, or reject) should be provided and supported by appropriate justification.',
  },
  {
    title: 'Use of Artificial Intelligence Tools',
    body: 'The use of AI or automated tools in the peer-review process must not compromise confidentiality. Reviewers must not upload manuscript content to external platforms that store or reuse data. The reviewer retains full responsibility for the accuracy and integrity of the review.',
  },
  {
    title: 'Post-Review Responsibilities',
    body: 'Reviewers must not disclose or discuss the manuscript after completing the review. Any additional concerns identified post-submission should be communicated directly to the editor.',
  },
  {
    title: 'Professional Conduct',
    body: 'Reviewers should accept assignments only within their area of expertise and decline invitations where appropriate. All interactions with the editorial office should be conducted in a professional and respectful manner.',
  },
  {
    title: 'Reviewer Recognition',
    body: 'The journal acknowledges the contribution of reviewers in maintaining publication standards. Recognition may include formal acknowledgment, certificates, or other professional development opportunities. Reviewers are encouraged to follow best practices outlined by organizations such as the COPE and the ICMJE.',
  },
]

export default function InstructionForReviewerPage() {
  return (
    <>
      <JournalHeader subtitle="Instruction for Reviewer" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>For Reviewers</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-10">Instruction for Reviewer</h1>

        <div className="space-y-5">
          {sections.map((s) => (
            <section key={s.title} className="border border-gray-200 rounded-xl p-5">
              <h2 className="font-bold text-gray-900 text-sm mb-2">{s.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
