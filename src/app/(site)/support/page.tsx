import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support | Author & Editorial Assistance – Tulitics',
  description: 'Contact Tulitics support for editorial queries, author and submission assistance, partnership inquiries, and general information. Our team is here to help authors, reviewers, and institutions.',
  keywords: ['Tulitics support', 'author support', 'editorial assistance', 'submission help', 'contact Tulitics', 'publisher support', 'journal help'],
  alternates: { canonical: 'https://guires.info/support' },
  openGraph: {
    title: 'Support | Tulitics',
    description: 'Get help from Tulitics for editorial queries, author support, and partnership inquiries.',
    url: 'https://guires.info/support',
    type: 'website',
  },
  twitter: { card: 'summary', title: 'Support | Tulitics', description: 'Author, editorial, and partnership support from Tulitics.' },
}

const departments = [
  {
    title: 'Editorial Office',
    desc: 'For questions related to journals, editorial policies, and peer review.',
    email: 'editorial@tulitics.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Author & Submission Support',
    desc: 'For manuscript preparation, submission guidelines, and publication-related inquiries.',
    email: 'submissions@tulitics.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Partnerships & Collaborations',
    desc: 'For institutional collaborations and academic partnerships.',
    email: 'partnerships@tulitics.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function SupportPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-8"
        style={{ background: 'linear-gradient(120deg,#041610 60%,#0a3d2e 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2dd4a0' }}>Contact Us</p>
          <h1 className="text-4xl font-extrabold mb-4">Tulitics – Research and Academic Publishing</h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            For general inquiries, manuscript submissions, editorial communication, or partnership opportunities, please contact the appropriate department below.
          </p>
        </div>
      </section>

      {/* Department Cards */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
          {departments.map((d) => (
            <div key={d.title} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#ecfdf5', color: '#059669' }}>
                {d.icon}
              </div>
              <h2 className="font-bold text-gray-900 text-base mb-2">{d.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{d.desc}</p>
              <a
                href={`mailto:${d.email}`}
                className="text-sm font-semibold"
                style={{ color: '#0a5c3c' }}
              >
                {d.email}
              </a>
            </div>
          ))}
        </div>

        {/* General Inquiries */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#ecfdf5', color: '#059669' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-base mb-2">General Inquiries</h2>
              <p className="text-gray-500 text-sm mb-4">For all other questions regarding Tulitics and its journals.</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="text-gray-400">Email: </span>
                  <a href="mailto:info@tulitics.com" className="font-semibold" style={{ color: '#0a5c3c' }}>info@tulitics.com</a>
                </p>
                <p><span className="text-gray-400">Phone: </span><a href="tel:+919884350006" className="font-semibold" style={{ color: '#0a5c3c' }}>+91 9884350006</a></p>
                <p><span className="text-gray-400">Address: </span>10, Kutty Street, Nungambakkam, Chennai – 600 034</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
