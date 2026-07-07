import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Instruction for Reviewer – JAIMPH' }

const sections = [
  { title: 'Role of the Reviewer', body: 'Peer reviewers play a critical role in ensuring the quality, accuracy, and integrity of published research. Reviewers provide expert evaluation of manuscripts and offer constructive feedback to help authors improve their work.' },
  { title: 'Objectivity & Professionalism', body: 'Reviews must be objective and professional. Personal criticism of the authors is not appropriate. Reviewers should express their views clearly, with supporting arguments.' },
  { title: 'Confidentiality', body: 'Manuscripts under review are confidential documents. Reviewers must not share, discuss, or use the content of manuscripts without the explicit permission of the editor.' },
  { title: 'Timeliness', body: 'Reviewers should respond promptly to invitations and complete reviews within the agreed timeframe (typically 2–3 weeks). If unable to complete a review on time, reviewers should inform the editorial office immediately.' },
  { title: 'Conflicts of Interest', body: 'Reviewers must declare any conflicts of interest that could influence their review, including personal, financial, or professional relationships with the authors or their institutions.' },
  { title: 'Use of AI Tools', body: 'The use of AI-assisted tools in the review process must be disclosed to the editor. Reviewers remain fully responsible for the content and accuracy of their review.' },
  { title: 'Ethical Concerns', body: 'If reviewers identify potential ethical issues — such as plagiarism, data fabrication, or undisclosed conflicts — they should alert the editor immediately, even if the manuscript is otherwise acceptable.' },
]

export default function InstructionForReviewerPage() {
  return (
    <>
      <JournalHeader subtitle="Instruction for Reviewer" />
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-5">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Instruction for Reviewers</h2>
        {sections.map(s => (
          <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}
