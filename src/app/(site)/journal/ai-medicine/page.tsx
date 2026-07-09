'use client'
import Link from 'next/link'
import { useState } from 'react'
import JournalHeader from '@/components/JournalHeader'

const boardMembers = [
  { name: 'Amanda Lee', role: 'Founder', initials: 'AL', color: '#c084fc' },
  { name: 'Adam Cheise', role: 'Designer', initials: 'AC', color: '#60a5fa' },
  { name: 'Amanda Lee', role: 'Founder', initials: 'AL', color: '#f472b6' },
  { name: 'Adam Cheise', role: 'Designer', initials: 'AC', color: '#34d399' },
]

const benefits = [
  { icon: '/images/icon-review.jpg',     title: 'Fast and transparent review process' },
  { icon: '/images/icon-openaccess.png', title: 'Open access visibility' },
  { icon: '/images/icon-editorial.png',  title: 'Experienced editorial board' },
  { icon: '/images/icon-editorial.png',  title: 'Ethical publishing standards' },
]

const joinTabs = ['Join as Editorial Board Member', 'Partnerships & Collaborations', 'Join as Reviewer']

const tabContent: Record<string, { text: string; email: string }> = {
  'Join as Editorial Board Member': {
    text: 'We welcome distinguished researchers to become part of the editorial leadership team of Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH). To apply or request details, please contact',
    email: 'editor@jaimph.com',
  },
  'Partnerships & Collaborations': {
    text: 'We are open to institutional partnerships, collaborative research publishing, and conference proceedings. To discuss collaboration opportunities, please contact',
    email: 'partnerships@jaimph.com',
  },
  'Join as Reviewer': {
    text: 'Contribute to advancing medical research by joining our peer reviewer network. We welcome experts from AI, medicine, and public health. To apply, please contact',
    email: 'reviewers@jaimph.com',
  },
}

export default function AIMedicinePage() {
  const [activeTab, setActiveTab] = useState('Join as Editorial Board Member')

  return (
    <>
      <JournalHeader />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── MAIN CONTENT ─────────────────────────────── */}
          <div className="flex-1 space-y-10">

            {/* About the journal */}
            <section className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-base font-bold text-gray-900 mb-4">About the journal</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Journal of Artificial Intelligence in Medicine and Public Health is a peer-reviewed, fully open-access
                journal advancing research at the intersection of artificial intelligence, medicine, and public health.
                It publishes Original Research Articles, Review Articles, Short Communications, and Case Reports focused
                on innovative and evidence-based healthcare solutions.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                With no submission or publication fees, the journal ensures free and global access to high-quality
                scientific knowledge that supports research, clinical practice, and health policy.
              </p>
              <Link href="/journal/aim-and-scope" className="text-sm font-medium" style={{ color: '#0a8c6a' }}>
                View full aims &amp; scope
              </Link>
            </section>

            {/* Editorial Board */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Editorial Board</h2>
              <p className="text-gray-400 text-sm mb-6">Latest breakthroughs in AI-powered healthcare and medicine</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {boardMembers.map((m, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                        style={{ background: m.color }}
                      >
                        {m.initials}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{m.name}</p>
                        <p className="text-gray-500 text-xs">{m.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Publishing with Us */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Why Publishing with Us</h2>
              <p className="text-gray-400 text-sm mb-6">Latest breakthroughs in AI-powered healthcare and medicine</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
                {benefits.map(b => (
                  <div key={b.title} className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-lg overflow-hidden bg-white shadow-sm">
                      <img src={b.icon} alt={b.title} className="w-8 h-8 object-contain" />
                    </div>
                    <p className="text-xs font-medium text-gray-700 leading-snug">{b.title}</p>
                  </div>
                ))}
              </div>

              {/* Publication Timeline bar */}
              <div className="rounded-xl overflow-hidden flex flex-col sm:flex-row text-white text-sm" style={{ background: '#0a5c3c' }}>
                <div className="px-5 py-4 font-bold text-sm flex-shrink-0 flex items-center border-b sm:border-b-0 sm:border-r border-white/20">
                  Publication Timeline
                </div>
                {[['1-2 Weeks', 'To First Decision'], ['3-4 Weeks', 'Peer Review'], ['1-2 Weeks', 'Acceptance to Publications']].map(([weeks, label]) => (
                  <div key={label} className="flex-1 px-5 py-4 text-center border-b sm:border-b-0 sm:border-r border-white/20 last:border-0">
                    <p className="font-bold">{weeks}</p>
                    <p className="text-green-200 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Join Tabs */}
            <section>
              <div className="flex border-b border-gray-200 overflow-x-auto">
                {joinTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="pt-5 text-sm text-gray-600 leading-relaxed">
                <p>{tabContent[activeTab].text}</p>
                <a
                  href={`mailto:${tabContent[activeTab].email}`}
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium"
                  style={{ color: '#0a8c6a' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {tabContent[activeTab].email}
                </a>
              </div>
            </section>
          </div>

          {/* ── SIDEBAR ──────────────────────────────────── */}
          <div className="lg:w-80 flex-shrink-0 space-y-5">

            {/* Quick Information */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                <span className="text-yellow-400">★</span>
                <h3 className="font-bold text-gray-900 text-sm">Quick Information</h3>
              </div>
              <div className="px-5 py-4 border-b border-gray-100">
                <p className="text-xs text-gray-400 mb-2">Publication Frequency</p>
                <p className="text-sm text-gray-700"><strong>Frequency:</strong> Quarterly</p>
                <p className="text-sm text-gray-700"><strong>First Issue:</strong> Coming soon</p>
              </div>
              <div className="px-5 py-4 border-b border-gray-100">
                <p className="text-xs text-gray-400 mb-2">Inaugural Issue Now Open</p>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  Join us in launching our first issue by submitting your original Research
                </p>
                <Link
                  href="/journal/submit-an-article"
                  className="inline-block px-4 py-2 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Submit a Manuscript
                </Link>
              </div>
              <div className="px-5 py-4">
                <p className="text-xs text-gray-400 mb-3">Article Publishing Option</p>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black" style={{ color: '#f97316' }}>OPEN</span>
                  <div className="w-8 h-8 rounded-full border-4 flex items-center justify-center" style={{ borderColor: '#f97316' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: '#f97316' }} />
                  </div>
                  <span className="text-2xl font-black" style={{ color: '#f97316' }}>ACCESS</span>
                </div>
              </div>
            </div>

            {/* News and Announcements */}
            <div
              className="rounded-xl overflow-hidden relative text-white"
              style={{
                backgroundImage: 'url(/images/ai-healthcare.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '260px',
              }}
            >
              <div className="absolute inset-0" style={{ background: 'rgba(5,20,15,0.80)' }} />
              <div className="relative z-10 p-5">
                <h3 className="font-bold text-base mb-4">News and Announcements</h3>
                <ul className="space-y-2 mb-5">
                  {['Join as an editorial board member', 'Partnerships & Collaborations', 'Join as reviewer', 'Blog', 'Call for Papers'].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-green-100">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white rounded text-xs font-semibold hover:bg-white/10 transition-colors"
                >
                  Read now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MORE OPPORTUNITIES ─────────────────────────── */}
      <section className="py-12 px-6" style={{ background: '#f4f4f4' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl font-bold text-gray-900 max-w-xs">
            More opportunities to publish your research:
          </h2>
          <div className="flex flex-col items-start sm:items-end gap-3">
            <p className="text-gray-600 text-sm">Browse open Calls for Papers</p>
            <Link
              href="/journal/current-issue"
              className="px-6 py-2.5 font-semibold text-sm text-white rounded"
              style={{ background: '#0a2e2e' }}
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
