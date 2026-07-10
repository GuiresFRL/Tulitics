import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Partnerships & Collaborations – JAIMPH' }

export default function PartnershipsPage() {
  return (
    <>
      <JournalHeader subtitle="Partnerships & Collaborations" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Collaborate With Us</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Partnerships & Collaborations</h1>
        <div className="border border-gray-200 rounded-xl p-8">
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) invites academic institutions, research bodies, and industry partners to collaborate with us in advancing AI-driven healthcare innovation.
          </p>
          <a
            href="mailto:partnerships@jaimph.com"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: '#0fb68c' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            partnerships@jaimph.com
          </a>
        </div>
      </div>
    </>
  )
}
