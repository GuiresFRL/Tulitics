import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Contact Us – JAIMPH' }

const contacts = [
  {
    title: 'Editorial Office',
    email: 'editor@jaimph.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Manuscript Submission Support',
    email: 'submissions@jaimph.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Technical Support',
    email: 'support@jaimph.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function ContactUsPage() {
  return (
    <>
      <JournalHeader subtitle="Contact Us" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Get in Touch</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-10">Contact Us</h1>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {contacts.map((c) => (
            <div key={c.title} className="border border-gray-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: '#ecfdf5', color: '#059669' }}>
                {c.icon}
              </div>
              <h2 className="font-bold text-gray-900 text-sm mb-3">{c.title}</h2>
              <a href={`mailto:${c.email}`} className="text-sm font-semibold" style={{ color: '#0fb68c' }}>{c.email}</a>
            </div>
          ))}
        </div>

        <div className="border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-gray-900 text-base mb-4">Office Address</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Journal of Artificial Intelligence in Medicine and Public Health<br />
            Tulitics<br />
            India
          </p>
        </div>
      </div>
    </>
  )
}
