import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Open Access Policy – JAIMPH' }

export default function OpenAccessPolicyPage() {
  return (
    <>
      <JournalHeader subtitle="Open Access Policy" />
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Open Access Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            JAIMPH is a fully open-access journal. All articles are published under a Creative Commons Attribution (CC BY 4.0)
            license, allowing unrestricted use, distribution, and reproduction in any medium, provided the original work is
            properly cited.
          </p>
          <p className="text-gray-700 leading-relaxed">
            There are no article processing charges (APC). Authors pay nothing to submit or publish. Readers pay nothing to access.
          </p>
        </section>
        <div className="grid sm:grid-cols-3 gap-4">
          {[['100%', 'Open Access'], ['₹0 / $0', 'No APC'], ['CC BY 4.0', 'License']].map(([val, lbl]) => (
            <div key={lbl} className="border border-gray-200 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold mb-1" style={{ color: '#0a2e2e' }}>{val}</p>
              <p className="text-sm text-gray-500">{lbl}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
