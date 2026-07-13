import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Submit a Manuscript | JAIMPH – Tulitics',
  description: 'Submit your research manuscript to JAIMPH — the Journal of Artificial Intelligence in Medicine and Public Health. Follow our step-by-step submission guide for a smooth and efficient submission process.',
  keywords: ['submit manuscript', 'submit article JAIMPH', 'manuscript submission guide', 'how to submit research', 'journal submission', 'open access submission', 'JAIMPH submission'],
  alternates: { canonical: 'https://guires.info/journal/submit-an-article' },
  openGraph: {
    title: 'Submit a Manuscript | JAIMPH – Tulitics',
    description: 'Step-by-step guide to submitting your manuscript to JAIMPH — open access, no fees.',
    url: 'https://guires.info/journal/submit-an-article',
    type: 'article',
  },
  twitter: { card: 'summary', title: 'Submit to JAIMPH', description: 'Submit your research to JAIMPH — peer-reviewed, open access, no fees.' },
}

const steps = [
  {
    num: '1',
    title: 'Prepare Your Article',
    body: 'Authors are requested to prepare their manuscript according to the journal guidelines. Ensure that your article is well-structured, original, and follows ethical research standards. Include all required sections such as title, abstract, keywords, introduction, methodology, results, discussion, conclusion, and references.',
  },
  {
    num: '2',
    title: 'Write a Cover Letter',
    body: 'A cover letter should be submitted along with your manuscript. It must briefly highlight the significance of your research, its originality, and why it is suitable for publication in our journal. Mention any relevant declarations such as conflicts of interest or funding sources.',
  },
  {
    num: '3',
    title: 'Submit Your Manuscript',
    body: 'Submit your complete manuscript through the journal\'s online submission system or designated email. Ensure that all required files, including figures, tables, and supplementary materials, are properly attached and formatted.',
  },
  {
    num: '4',
    title: 'Technical Check',
    body: 'Once submitted, the manuscript undergoes an initial technical screening. This includes checking formatting, completeness, plagiarism, figure quality, reference style, and adherence to journal guidelines.',
  },
  {
    num: '5',
    title: 'Editorial Review and Peer Review',
    body: 'After passing the technical check, the manuscript is assigned to an editor for evaluation. It is then sent for a rigorous peer-review process conducted by subject experts. Reviewers assess the quality, originality, methodology, and scientific contribution of the work.',
  },
  {
    num: '6',
    title: 'Final Decision',
    body: 'Based on reviewer feedback and editorial assessment, a final decision is made. The manuscript may be accepted, require revisions (minor or major), or be rejected. Authors will be informed with detailed reviewer comments when applicable.',
  },
  {
    num: '7',
    title: 'Publication',
    body: 'After successful completion of revisions and payment (if applicable), the article is finalized and published online. The published article is assigned a DOI and becomes freely accessible to readers worldwide, depending on the journal\'s access policy.',
  },
]

export default function SubmitArticlePage() {
  return (
    <>
      <JournalHeader subtitle="Submit an Article" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Manuscript Submission</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Step-by-Step Guide to Manuscript Submission and Publication Process</h1>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-5 p-6 border border-gray-200 rounded-xl bg-white">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0 mt-0.5"
                style={{ background: '#0a5c3c' }}
              >
                {step.num}
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-base mb-2">{step.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="https://journal-management-system-omega.vercel.app/"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm text-white rounded"
            style={{ background: '#0fb68c' }}
          >
            Submit Your Manuscript →
          </Link>
        </div>
      </div>
    </>
  )
}
