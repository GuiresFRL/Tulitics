import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Editorial Policies – JAIMPH' }

const policies = [
  { title: 'Peer Review Policy', body: 'All manuscripts submitted to JAIMPH undergo a rigorous double-blind peer review process. Authors and reviewers remain anonymous throughout the review. Manuscripts are evaluated by at least two independent experts in the relevant field.' },
  { title: 'Open Access Policy', body: 'JAIMPH is a fully open-access journal. All published articles are freely available online immediately upon publication under a Creative Commons Attribution (CC BY 4.0) license. There are no article processing charges (APC) for authors.' },
  { title: 'Authorship Policy', body: 'All authors must meet the ICMJE criteria for authorship. Each author must have made substantial contributions to conception, design, data acquisition/analysis, and/or interpretation, and must approve the final version of the manuscript.' },
  { title: 'Conflict of Interest Policy', body: 'All authors must disclose any financial or non-financial conflicts of interest that could be perceived as influencing their research. This includes employment, consultancies, honoraria, stock ownership, and patents.' },
  { title: 'Data Sharing Policy', body: 'JAIMPH encourages authors to make their research data openly available. Authors must include a Data Availability Statement indicating where data can be accessed or explaining any restrictions.' },
  { title: 'Research Ethics Policy', body: 'All research involving human participants or animals must have received appropriate ethical approval. Authors must include the name of the ethics committee and approval number in their manuscript.' },
]

export default function EditorialPoliciesPage() {
  return (
    <>
      <JournalHeader subtitle="Editorial Policies" />
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Editorial Policies &amp; Guidelines</h2>
        {policies.map(policy => (
          <div key={policy.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">{policy.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{policy.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}
