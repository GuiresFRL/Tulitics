import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Conflict of Interest Policy – JAIMPH' }

export default function ConflictOfInterestPage() {
  return (
    <>
      <JournalHeader subtitle="Conflict of Interest Policy" />
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Editorial Policies & Guidelines</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Conflict of Interest Policy</h1>
          <p className="text-gray-700 leading-relaxed">
            The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) requires that all authors, reviewers, and editors disclose any financial, personal, or professional relationships that could be perceived to influence the objectivity, integrity, or interpretation of the work. Transparency in declaring conflicts of interest is fundamental to maintaining trust in the scientific record.
          </p>
        </div>

        {[
          {
            title: 'Definition of Conflict of Interest',
            body: 'A conflict of interest exists when a person\'s private interests — whether financial, personal, or professional — could improperly influence (or be perceived to influence) their judgement, actions, or decisions in relation to a manuscript. Conflicts may be actual, potential, or perceived.',
          },
          {
            title: 'Author Disclosure Requirements',
            body: 'All authors must disclose all financial and non-financial interests that could be perceived to influence the content of the manuscript. This includes but is not limited to: employment, consultancies, stock ownership or options, honoraria, paid expert testimony, patent applications, travel grants, speaker fees, and personal or professional relationships with organizations that have an interest in the work.',
          },
          {
            title: 'Funding Statement',
            body: 'A complete Funding Statement must be included in the manuscript, listing all sources of financial support for the research, including grants, funding bodies, and commercial sponsors. The role of the funder in the study design, data collection, analysis, interpretation, or the decision to publish must be stated. If no funding was received, authors must state: "This research received no specific grant from any funding agency in the public, commercial, or not-for-profit sectors."',
          },
          {
            title: 'No Conflict Declaration',
            body: 'If no conflicts of interest exist, authors must explicitly state: "The authors declare no conflict of interest." This statement must appear in the Title Page and is published alongside the article upon acceptance.',
          },
          {
            title: 'Reviewer Conflicts',
            body: 'Reviewers must promptly disclose any potential conflicts of interest that may compromise their ability to provide an objective review. Reviewers should decline the review invitation if they have a personal, financial, or professional relationship with any of the authors, are in direct competition with the research, or have any other interest that could bias their assessment.',
          },
          {
            title: 'Editor Conflicts',
            body: 'Editors who have a conflict of interest with a submitted manuscript must recuse themselves from all editorial decisions related to that manuscript. An alternative editor will be assigned to handle the submission. Editors must not make decisions on manuscripts authored or co-authored by themselves or by close colleagues.',
          },
          {
            title: 'Post-Publication Updates',
            body: 'If a conflict of interest is identified or changes after publication, authors are expected to notify the Editorial Office immediately. A correction or addendum may be published to update the conflict of interest statement in the interests of transparency.',
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
          <p className="text-sm font-semibold mb-1" style={{ color: '#0a5c3c' }}>Questions about conflicts of interest?</p>
          <p className="text-sm text-gray-600 mb-3">Contact the Editorial Office for guidance on disclosure requirements.</p>
          <a href="mailto:editor@jaimph.com" className="text-sm font-semibold" style={{ color: '#0fb68c' }}>editor@jaimph.com →</a>
        </div>
      </div>
    </>
  )
}
