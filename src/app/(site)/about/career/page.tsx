import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Careers – Tulitics' }

const perks = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Mission-Driven Work',
    desc: 'Every role at Tulitics directly contributes to making scientific knowledge freely accessible to the world.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Flexible & Remote',
    desc: 'Work from anywhere. We are a remote-friendly organisation built for a global team.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Fast Growth',
    desc: 'We are an early-stage organisation — your work shapes the culture, products, and direction directly.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Learning & Development',
    desc: 'Access to conferences, courses, and research resources to grow your expertise continuously.',
  },
]

const openings = [
  {
    title: 'Editorial Assistant',
    type: 'Full-time',
    location: 'Remote / Chennai',
    dept: 'Editorial',
    desc: 'Support manuscript processing, author communications, and peer review coordination for JAIMPH and upcoming journals.',
    requirements: [
      'Bachelor\'s or Master\'s degree in life sciences, medicine, or a related field.',
      'Strong written English communication skills.',
      'Attention to detail and ability to manage multiple submissions simultaneously.',
      'Prior experience in academic publishing is an advantage.',
    ],
  },
  {
    title: 'Peer Review Coordinator',
    type: 'Full-time',
    location: 'Remote',
    dept: 'Editorial',
    desc: 'Manage the end-to-end peer review workflow, from reviewer invitations to final decision communications, ensuring timely turnarounds.',
    requirements: [
      'Experience in academic publishing or scientific editorial work.',
      'Familiarity with manuscript management systems.',
      'Excellent organisational and communication skills.',
      'Understanding of COPE guidelines and publication ethics.',
    ],
  },
  {
    title: 'Full Stack Developer',
    type: 'Full-time',
    location: 'Remote / Chennai',
    dept: 'Technology',
    desc: 'Build and maintain the Tulitics publishing platform, submission portal, and editorial management tools.',
    requirements: [
      'Proficiency in React/Next.js and Node.js.',
      'Experience with databases (PostgreSQL or MongoDB).',
      'Strong UI/UX sensibility.',
      'Bonus: prior experience building SaaS or publishing platforms.',
    ],
  },
  {
    title: 'Content & SEO Specialist',
    type: 'Part-time',
    location: 'Remote',
    dept: 'Marketing',
    desc: 'Drive organic growth through research-led content, SEO optimisation, and academic community engagement.',
    requirements: [
      'Experience in content marketing, SEO, or science communication.',
      'Ability to translate complex research into accessible content.',
      'Familiarity with academic publishing landscape.',
      'Strong analytical skills and comfort with SEO tools.',
    ],
  },
  {
    title: 'Guest Reviewer',
    type: 'Voluntary',
    location: 'Remote',
    dept: 'Peer Review',
    desc: 'Join our expert reviewer network and contribute to advancing rigorous, transparent science in AI, medicine, and public health.',
    requirements: [
      'PhD or equivalent expertise in AI, medicine, public health, or related fields.',
      'At least 3 peer-reviewed publications as first or corresponding author.',
      'Commitment to double-blind, unbiased review.',
      'Availability to complete reviews within 2–3 weeks.',
    ],
  },
]

const deptColors: Record<string, string> = {
  Editorial: '#d1faf0',
  Technology: '#dbeafe',
  Marketing: '#fef3c7',
  'Peer Review': '#f3e8ff',
}
const deptText: Record<string, string> = {
  Editorial: '#0a8c6a',
  Technology: '#1d4ed8',
  Marketing: '#92400e',
  'Peer Review': '#6d28d9',
}

export default function CareerPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 px-8 text-white overflow-hidden"
        style={{ background: 'linear-gradient(120deg,#041610 60%,#0a3d2e 100%)' }}
      >
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full border border-white/5" />
        <div className="absolute -right-8 -top-8 w-64 h-64 rounded-full border border-white/5" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#2dd4a0' }}>We're Hiring</p>
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Build the Future of<br />
              <span style={{ color: '#2dd4a0' }}>Open Science</span><br />
              with Us
            </h1>
            <p className="text-gray-300 leading-relaxed text-lg max-w-lg mb-8">
              Tulitics is a fast-growing scholarly publishing organisation. We are looking for passionate
              people who believe knowledge should be free — and want to do something about it.
            </p>
            <a href="#openings" className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm rounded-sm text-gray-900 transition-colors" style={{ background: '#2dd4a0' }}>
              View Open Roles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '5+', l: 'Open Positions' },
              { n: '100%', l: 'Remote Friendly' },
              { n: 'Early', l: 'Stage — High Impact' },
              { n: 'Global', l: 'Team' },
            ].map(s => (
              <div key={s.l} className="rounded-xl p-6 border border-white/10 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div className="text-2xl font-extrabold mb-1" style={{ color: '#2dd4a0' }}>{s.n}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tulitics */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0fb68c' }}>Why Join Us</p>
            <h2 className="text-4xl font-extrabold text-gray-900">What makes Tulitics different</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map(p => (
              <div key={p.title} className="rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#ecfdf5', color: '#059669' }}>
                  {p.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" style={{ scrollMarginTop: '95px', background: '#f7faf9' }} className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0fb68c' }}>Opportunities</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Open Positions</h2>
          </div>
          <div className="space-y-5">
            {openings.map(job => (
              <details key={job.title} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between px-7 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-gray-900">{job.title}</h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: deptColors[job.dept] || '#ecfdf5', color: deptText[job.dept] || '#0a8c6a' }}>{job.dept}</span>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${job.type === 'Voluntary' ? 'bg-purple-50 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>{job.type}</span>
                      </div>
                      <p className="text-xs text-gray-400">{job.location}</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-7 pb-7 border-t border-gray-50">
                  <p className="text-gray-600 text-sm leading-relaxed mt-5 mb-5">{job.desc}</p>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Requirements</h4>
                  <ul className="space-y-2 mb-6">
                    {job.requirements.map(r => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:careers@tulitics.com?subject=Application: ${job.title}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 font-semibold text-sm rounded-sm text-white transition-opacity hover:opacity-90"
                    style={{ background: '#0fb68c' }}
                  >
                    Apply for this role →
                  </a>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-2xl p-8 text-center border border-dashed border-gray-300">
            <h3 className="font-bold text-gray-900 mb-2">Don't see a role that fits?</h3>
            <p className="text-sm text-gray-500 mb-4">We always welcome expressions of interest from talented people who share our mission.</p>
            <a href="mailto:careers@tulitics.com" className="inline-flex items-center gap-2 px-6 py-2.5 font-semibold text-sm rounded-sm text-white" style={{ background: '#0a5c3c' }}>
              Send us your CV
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 text-white text-center" style={{ background: '#041610' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-3">Questions about working at Tulitics?</h2>
          <p className="text-green-300/70 text-sm mb-6">Reach out to our team — we'd love to hear from you.</p>
          <a href="mailto:careers@tulitics.com" className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-sm rounded-sm text-gray-900" style={{ background: '#2dd4a0' }}>
            careers@tulitics.com
          </a>
        </div>
      </section>
    </>
  )
}
