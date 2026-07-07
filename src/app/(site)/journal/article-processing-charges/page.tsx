import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Article Processing Charges (APC) Policy – JAIMPH' }

export default function ArticleProcessingChargesPage() {
  return (
    <>
      <JournalHeader subtitle="Article Processing Charges (APC) Policy" />
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Editorial Policies & Guidelines</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Article Processing Charges (APC) Policy</h1>
          <p className="text-gray-700 leading-relaxed">
            The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) is fully committed to open access and equitable dissemination of knowledge. In line with this commitment, the journal operates a no-fee publishing model — there are no charges for authors at any stage of the publication process.
          </p>
        </div>

        {/* Key fact banner */}
        <div className="rounded-2xl p-8 text-center border-2" style={{ background: '#ecfdf5', borderColor: '#6ee7b7' }}>
          <div className="text-5xl font-extrabold mb-2" style={{ color: '#0a5c3c' }}>₹0 / $0</div>
          <p className="text-lg font-bold mb-1" style={{ color: '#0a5c3c' }}>No Article Processing Charges</p>
          <p className="text-sm text-gray-600">Free to submit. Free to publish. Free to read.</p>
        </div>

        {[
          {
            title: 'No Submission Fees',
            body: 'There is no charge to submit a manuscript to JAIMPH. Authors can register and submit their work through the online submission system at no cost.',
          },
          {
            title: 'No Peer Review Fees',
            body: 'The peer review process is entirely free of charge. Authors are not required to pay for manuscript evaluation, reviewer compensation, or editorial handling.',
          },
          {
            title: 'No Publication Fees',
            body: 'There are no article processing charges (APCs) for accepted manuscripts. Authors whose papers are accepted for publication are not required to pay any fees for the preparation, processing, or publication of their work.',
          },
          {
            title: 'No Access Fees for Readers',
            body: 'All published content in JAIMPH is freely and immediately accessible to readers worldwide without subscription, paywall, or registration barriers. The journal is fully open access under a Creative Commons Attribution (CC BY) licence.',
          },
          {
            title: 'How the Journal is Funded',
            body: 'JAIMPH is supported by Tulitics, the publisher, which funds the journal\'s operations through institutional support. This model allows the journal to waive all fees for authors and maintain full open access for readers without compromise to editorial quality or peer review standards.',
          },
          {
            title: 'Waiver Policy',
            body: 'As there are no article processing charges, no waiver application process is required. All authors — regardless of geographic location, institutional affiliation, or funding status — benefit equally from the journal\'s fee-free model.',
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
            { label: 'Submission Fee', value: 'None' },
            { label: 'Processing Fee', value: 'None' },
            { label: 'Publication Fee', value: 'None' },
          ].map(f => (
            <div key={f.label} className="rounded-xl p-5 border-2 text-center" style={{ borderColor: '#6ee7b7' }}>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{f.label}</div>
              <div className="font-extrabold text-xl" style={{ color: '#0a5c3c' }}>{f.value}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Ready to submit your research — for free?</p>
          <Link href="/publish" className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm rounded-sm text-white" style={{ background: '#0fb68c' }}>
            Submit Your Manuscript →
          </Link>
        </div>
      </div>
    </>
  )
}
