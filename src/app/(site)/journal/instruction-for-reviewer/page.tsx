'use client'
import { useState, useEffect } from 'react'
import JournalHeader from '@/components/JournalHeader'

const nav = [
  { id: 'role', label: 'Role and Responsibility' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'objectivity', label: 'Objectivity and Review Quality' },
  { id: 'assessment', label: 'Assessment Criteria' },
  { id: 'ethics', label: 'Ethical Considerations' },
  { id: 'competing', label: 'Competing Interests' },
  { id: 'timeliness', label: 'Timeliness' },
  { id: 'report', label: 'Review Report Structure' },
  { id: 'ai-tools', label: 'Use of AI Tools' },
  { id: 'post-review', label: 'Post-Review Responsibilities' },
  { id: 'conduct', label: 'Professional Conduct' },
  { id: 'recognition', label: 'Reviewer Recognition' },
]

export default function InstructionForReviewerPage() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <JournalHeader subtitle="Instruction for Reviewers" />
      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-0">

        {/* ── LEFT SIDEBAR ─────────────────────────────── */}
        <aside className="hidden lg:block w-60 flex-shrink-0">
          <div className="sticky top-36 border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-4 py-3 font-bold text-xs text-white" style={{ background: '#0a2e2e' }}>
              Instruction for Reviewers
            </div>
            <nav className="py-2 max-h-[75vh] overflow-y-auto">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left px-4 py-2 text-xs leading-snug transition-colors flex items-start gap-1.5 ${
                    active === item.id ? 'font-semibold' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={active === item.id ? { color: '#0a5c3c' } : {}}
                >
                  <svg className="w-2.5 h-2.5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* ── MAIN CONTENT ─────────────────────────────── */}
        <main className="flex-1 min-w-0 lg:pl-8 space-y-10 pb-16">

          {/* Intro */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#0fb68c' }}>For Reviewers</p>
            <h1 className="text-2xl font-extrabold text-gray-900 mb-4">Instruction for Reviewers</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Peer review is essential to maintaining scientific integrity and publication quality. Reviewers play a critical role in evaluating manuscripts for scientific merit, ethical compliance, and relevance to the scope of the Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH). These guidelines outline the expectations for reviewers contributing to this journal.
            </p>
          </div>

          <section id="role" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Role and Responsibility</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reviewers are expected to provide expert, independent, and constructive evaluations of submitted manuscripts. The primary responsibility of a reviewer is to help editors make informed decisions about publication and to assist authors in improving their work. Reviewers should assess manuscripts fairly and objectively, basing their evaluation solely on the scientific and scholarly merit of the work, without regard to the authors' identity, affiliation, nationality, or other personal characteristics. Each reviewer must assess whether the manuscript falls within the journal's aim and scope, and if they find a significant mismatch, they should promptly notify the editor rather than proceeding with a review outside their area of expertise.
            </p>
          </section>

          <section id="confidentiality" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Confidentiality</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              All manuscripts received for peer review are strictly confidential documents. Reviewers must not:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Share the manuscript or its contents with third parties',
                'Use unpublished data or ideas from the manuscript for personal advantage',
                'Discuss the manuscript with colleagues without explicit editor permission',
                'Retain copies of the manuscript after the review is complete',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed">
              Breach of confidentiality may result in exclusion from future reviewing activities and referral to appropriate professional bodies.
            </p>
          </section>

          <section id="objectivity" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Objectivity and Review Quality</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Reviewers are expected to provide clear, specific, and well-reasoned feedback. Reviews should:
            </p>
            <ul className="space-y-2">
              {[
                'Identify the strengths and limitations of the study',
                'Point out methodological concerns or gaps in the evidence',
                'Suggest concrete, actionable revisions',
                'Be respectful, professional, and constructive in tone',
                'Avoid vague or dismissive comments',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="assessment" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Assessment Criteria</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">Reviewers should evaluate manuscripts based on the following criteria:</p>
            <div className="space-y-3">
              {[
                { label: 'Relevance', desc: 'Does the manuscript fall within the aim and scope of the journal?' },
                { label: 'Originality', desc: 'Does the study present new and significant findings?' },
                { label: 'Scientific Rigor', desc: 'Is the study design, methodology, and statistical analysis appropriate and sound?' },
                { label: 'Clarity', desc: 'Is the manuscript clearly written, well-organized, and logically structured?' },
                { label: 'Ethical Compliance', desc: 'Has the study followed ethical guidelines for human and/or animal research?' },
                { label: 'Data Integrity', desc: 'Are the data accurately presented, adequately supported, and appropriately interpreted?' },
                { label: 'References', desc: 'Are the references up-to-date, relevant, and correctly cited?' },
              ].map((c) => (
                <div key={c.label} className="rounded-lg p-4 border border-gray-100 bg-gray-50 text-sm">
                  <span className="font-semibold text-gray-800">{c.label}: </span>
                  <span className="text-gray-600">{c.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="ethics" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Ethical Considerations</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Reviewers must assess whether the manuscript adequately addresses ethical requirements, including:
            </p>
            <ul className="space-y-2 mb-3">
              {[
                'Ethical approval or waiver from the appropriate Ethics Committee or IRB',
                'Informed consent from participants',
                'Compliance with the Declaration of Helsinki or equivalent guidelines',
                'Adequate participant anonymization and data protection',
                'Registration of clinical trials in an approved registry',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed">
              If ethical concerns are identified, reviewers should clearly indicate them in their report and recommend that the editor address these issues before proceeding with publication.
            </p>
          </section>

          <section id="competing" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Competing Interests</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Reviewers must decline to review manuscripts where they have potential competing interests, including:
            </p>
            <ul className="space-y-2 mb-3">
              {[
                'A close professional or personal relationship with any of the authors',
                'A direct competitive relationship with the submitting research group',
                'Financial interests in the outcome of the study',
                'Prior knowledge of the manuscript\'s identity, contents, or authorship',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reviewers who identify a conflict of interest after accepting a review invitation should promptly notify the editor and withdraw from the review process. Any potential competing interests that do not disqualify the reviewer must be disclosed to the editor prior to submitting the review.
            </p>
          </section>

          <section id="timeliness" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Timeliness</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reviewers are expected to respond promptly to review invitations, ideally within 3 business days of receiving the invitation. If a reviewer accepts the invitation, the review should be submitted within the deadline specified in the invitation (typically 3 weeks). If a reviewer is unable to meet the deadline, they should notify the editorial office as early as possible so that alternative arrangements can be made. If the assigned reviewer is unable to complete the review, they may suggest qualified alternative reviewers to the editor, provided there are no conflicts of interest with the suggested reviewers.
            </p>
          </section>

          <section id="report" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Review Report Structure</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">The review report should be structured and include the following components:</p>
            <div className="space-y-3">
              {[
                { label: 'Summary', desc: 'A brief overview of the manuscript\'s main objectives, methods, and findings.' },
                { label: 'Major Comments', desc: 'Significant concerns that must be addressed before publication, such as methodological flaws, insufficient data, ethical issues, or lack of clarity in key findings.' },
                { label: 'Minor Comments', desc: 'Suggestions for improving the manuscript, including editorial corrections, clarity improvements, or additional references that would strengthen the work.' },
                { label: 'Recommendation', desc: 'A clear editorial recommendation: Accept (Accept as is), Minor Revision (Accept with minor corrections), Major Revision (Accept after significant revisions), or Reject (Not suitable for publication in this journal).' },
                { label: 'Confidential Comments to the Editor', desc: 'Optional section for notes to the editor that are not shared with the authors, such as concerns about data integrity, plagiarism, or ethical violations.' },
              ].map((c) => (
                <div key={c.label} className="rounded-lg p-4 border border-gray-100 bg-gray-50 text-sm">
                  <p className="font-semibold text-gray-800 mb-1">{c.label}</p>
                  <p className="text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="ai-tools" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Use of AI Tools</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Reviewers should be aware that the use of AI-assisted tools during the peer review process raises important ethical and confidentiality concerns. Reviewers must not:
            </p>
            <ul className="space-y-2 mb-3">
              {[
                'Upload or share any part of a confidential manuscript to AI language models or tools without editor approval',
                'Submit AI-generated reviews as their own work without appropriate disclosure',
                'Rely solely on AI-generated content to form editorial judgements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed">
              If AI tools are used in any part of the review process, this must be disclosed in the review report. Reviewers remain solely responsible for the accuracy, quality, and integrity of their review, regardless of any tools used.
            </p>
          </section>

          <section id="post-review" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Post-Review Responsibilities</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              After submitting their review, reviewers may be asked to evaluate the revised manuscript to assess whether the authors have adequately addressed the concerns raised. Reviewers should:
            </p>
            <ul className="space-y-2">
              {[
                'Assess whether all major and minor concerns have been adequately addressed',
                'Provide a clear revised recommendation based on the revision',
                'Note any remaining concerns that may still require attention',
                'Respond promptly when asked to review a revised manuscript',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="conduct" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Professional Conduct</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reviewers are expected to uphold the highest standards of professional conduct throughout the review process. Any communication with the editorial office should be professional and respectful. Reviewers should never attempt to contact authors directly unless explicitly authorized by the editor. Violations of peer review ethics, including but not limited to breach of confidentiality, plagiarism of reviewed content, inappropriate reviewer behavior, or misuse of manuscript data, will result in immediate removal from the reviewer database and may be reported to relevant institutional and professional authorities.
            </p>
          </section>

          <section id="recognition" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Reviewer Recognition</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              JAIMPH values the contributions of its reviewers and is committed to recognizing their efforts. Reviewers may receive:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'An official acknowledgment in the journal\'s annual reviewer listing',
                'A certificate of recognition upon request',
                'Access to reviewer recognition programs and platforms such as Publons/Web of Science',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-xl p-5" style={{ background: '#f0fdf4' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: '#0a5c3c' }}>Contact</p>
              <p className="text-sm leading-relaxed" style={{ color: '#065f46' }}>
                For any queries regarding the peer review process or reviewer guidelines, please contact the Editorial Office at{' '}
                <a href="mailto:editor@jaimph.com" className="font-semibold hover:underline" style={{ color: '#0fb68c' }}>editor@jaimph.com</a>.
              </p>
            </div>
          </section>

        </main>
      </div>
    </>
  )
}
