import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Peer Review Policies – JAIMPH' }

export default function PeerReviewPoliciesPage() {
  return (
    <>
      <JournalHeader subtitle="Peer Review Policies" />
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Editorial Policies & Guidelines</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Peer Review Policies</h1>
          <p className="text-gray-700 leading-relaxed">
            All submitted manuscripts undergo an initial editorial screening to evaluate their alignment with the journal's scope, originality, scholarly contribution, compliance with submission requirements, and adherence to ethical standards. Submissions that do not meet these criteria may be declined without external review to ensure the integrity and quality of published content.
          </p>
        </div>

        {[
          {
            title: 'Double-Blind Review',
            body: 'JAIMPH operates a double-blind peer review process, in which the identities of both authors and reviewers are concealed to maintain impartiality and objectivity. Authors are required to submit anonymized manuscripts by removing all identifying information and providing author details in a separate file. Care should also be taken to ensure that self-citations do not compromise anonymity.',
          },
          {
            title: 'Initial Editorial Screening',
            body: 'All manuscripts undergo an initial editorial assessment before being sent for peer review. This screening evaluates alignment with the journal\'s scope, originality, scholarly contribution, compliance with submission requirements, and adherence to ethical standards. Submissions that do not meet these criteria may be declined without external review.',
          },
          {
            title: 'Reviewer Selection',
            body: 'Each manuscript is assigned to a minimum of two independent expert reviewers selected based on subject expertise, publication record, and absence of conflicts of interest. Reviewers are drawn from our global database spanning AI, medicine, public health, and related disciplines. Authors may suggest or exclude specific reviewers at the time of submission, subject to editorial discretion.',
          },
          {
            title: 'Evaluation Criteria',
            body: 'Each manuscript is evaluated by independent expert reviewers based on its scientific merit, originality, methodological rigor, validity of findings, ethical compliance, and clarity of presentation. Reviewers provide structured recommendations: accept, minor revision, major revision, or reject.',
          },
          {
            title: 'Editorial Decision',
            body: 'Upon completion of the review process, the Editor-in-Chief, in consultation with the editorial team, makes a final decision informed by the reviewers\' recommendations. Manuscripts may be accepted, invited for minor or major revisions, or rejected. Authors are provided with detailed and constructive feedback to support revision.',
          },
          {
            title: 'Revised Submissions',
            body: 'Revised submissions may be subject to further review to ensure that all concerns have been adequately addressed prior to final acceptance. Authors must provide a point-by-point response to reviewer comments along with their revised manuscript.',
          },
          {
            title: 'Review Timeline',
            body: 'The journal aims to provide an initial editorial decision within 2–3 weeks of submission. Final decisions following revision are typically communicated within 4–6 weeks of resubmission. Reviewers are expected to submit their reports within 2–3 weeks of accepting the invitation.',
          },
          {
            title: 'Confidentiality',
            body: 'All manuscripts under review are confidential documents. Reviewers must not share, discuss, or use the content of manuscripts without the explicit permission of the editor. Reviewer identities are not disclosed to authors at any stage of the process.',
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

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Review Type', value: 'Double-Blind' },
            { label: 'Initial Decision', value: '2–3 Weeks' },
            { label: 'Min. Reviewers', value: '2 per Manuscript' },
          ].map(f => (
            <div key={f.label} className="rounded-xl p-5 border border-gray-100 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{f.label}</div>
              <div className="font-bold text-gray-900">{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
