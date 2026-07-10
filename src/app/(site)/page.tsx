'use client'
import Link from 'next/link'
import { useState } from 'react'

const newsTabs = [
  {
    label: "Launch of Tulitics' First Journal",
    body: `Tulitics is proud to announce the upcoming launch of its first journal, Journal of Artificial Intelligence in Medicine & Public Health, in June 2026. This peer-reviewed, open-access journal will feature cutting-edge research at the intersection of medicine, public health, and AI-driven healthcare solutions.`,
  },
  {
    label: 'Call for Papers / Special Issues',
    body: 'Journal of Artificial Intelligence in Medicine & Public Health is now accepting submissions. Researchers worldwide are invited to submit original research, reviews, case studies, and short communications. All submissions undergo a thorough peer-review process to ensure the highest standards of scientific rigor and integrity.',
  },
  {
    label: 'Editorial Board Announcements',
    body: 'We are assembling a distinguished editorial board for Journal of Artificial Intelligence in Medicine & Public Health, featuring leading experts in medicine, public health, AI, and healthcare innovation. Their expertise ensures rigorous peer review, academic integrity, and the publication of high-quality research. Stay tuned for official appointments and profiles of our editors.',
  },
  {
    label: 'Events & Conferences',
    body: 'Tulitics is planning a series of webinars, workshops, and conferences to engage the global research community. These upcoming events will focus on innovations in medicine, public health, AI, and multidisciplinary research. They aim to provide opportunities for knowledge sharing, networking, and fostering collaboration among researchers, practitioners, and thought leaders worldwide. Details on dates, topics, and registration will be announced soon.',
  },
  {
    label: 'Join as Reviewer',
    body: 'We invite qualified researchers and experts to join our reviewer panel. By contributing to the peer-review process, you help uphold the highest standards of scientific rigor and integrity while gaining recognition as a valued member of the academic community. Interested candidates can apply online to become a reviewer.',
  },
  {
    label: 'Research Highlights',
    body: 'Journal of Artificial Intelligence in Medicine & Public Health will showcase innovative research across all areas of medicine, public health, and healthcare technology. The journal highlights studies that combine clinical insights, data-driven approaches, and multidisciplinary collaboration to improve healthcare outcomes, inform policy, and drive global impact. This section will feature cutting-edge findings, emerging trends, and notable contributions that shape the future of medical research.',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative text-white text-center flex items-center justify-center"
        style={{
          minHeight: '65vh',
          backgroundImage: 'url(/images/hero-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(5,30,25,0.62)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Advancing Medical Research<br />with AI &amp; ML
          </h1>
          <p className="text-gray-200 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Tulitics is a scholarly publishing organisation committed to advancing high quality research
            maintaining strong editorial standards, and promoting global academic collaboration.
          </p>
          <Link
            href="/journal"
            className="inline-block px-10 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            Our Journals
          </Link>
        </div>
      </section>

      {/* ── OUR JOURNALS ─────────────────────────────────────────── */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-1 text-gray-900">Our journals</h2>
          <p className="text-gray-500 text-sm mb-6">Tulitics is a global scholarly publisher advancing high-quality, peer-reviewed open-access research that promotes academic integrity and knowledge sharing worldwide.</p>
          <div className="grid md:grid-cols-4 gap-5">
            <div className="md:col-span-2 rounded-2xl border border-gray-200 shadow-sm p-5 flex gap-4 bg-white">
              <div className="flex-shrink-0">
                <img src="/images/journal-cover.jpg" alt="JAIMPH" className="w-28 rounded shadow" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: '#0a5c3c' }}>
                  Journal of Artificial Intelligence in Medicine &amp; Public Health
                </h3>
                <p className="text-sm text-gray-500 mb-2 leading-relaxed">
                  Journal of Artificial Intelligence in Medicine &amp; Public Health is a peer-reviewed, open-access journal publishing high-quality research and innovations that advance healthcare, artificial intelligence, and public health.
                </p>
                <p className="text-sm text-gray-700"><strong>Frequency</strong>: Quarterly</p>
                <p className="text-sm text-gray-700"><strong>Access</strong>: Open Access</p>
                <p className="text-sm text-gray-700"><strong>APC</strong>: No Fees</p>
              </div>
            </div>
            {[{ title: 'Journal of Management' }, { title: 'Journal of Engineering' }].map(j => (
              <div
                key={j.title}
                className="rounded-2xl flex flex-col items-center justify-center py-12 text-white text-center"
                style={{ background: '#0a5c3c' }}
              >
                <h3 className="text-xl font-bold mb-3">{j.title}</h3>
                <p className="text-green-200 text-sm">Launching Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ──────────────────────────────────────────── */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-1 text-gray-900">Latest News &amp; Announcements</h2>
          <div className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden mt-4">
            <div className="md:w-60 flex-shrink-0 border-r border-gray-200 bg-white">
              <div className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">
                News and Announcements
              </div>
              {newsTabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 transition-colors ${
                    i === activeTab
                      ? 'font-bold text-gray-900 bg-gray-50 border-l-4 border-l-gray-900'
                      : 'text-green-700 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">{newsTabs[activeTab].label}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{newsTabs[activeTab].body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK AI SECTION ──────────────────────────────────────── */}
      <section
        className="text-white py-14 px-6"
        style={{ background: 'linear-gradient(to right, #0d0d0d 45%, #1a1a2e 100%)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              Advancing Research in<br />Medicine,<br />Public Health &amp; AI
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md">
              Supporting innovative research in medicine, public health, and AI to improve global healthcare.
            </p>
            <Link
              href="https://journal-management-system-omega.vercel.app/"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold text-gray-900 transition-colors text-sm"
              style={{ background: '#e8e8e8' }}
            >
              Submit Your Research <span>→</span>
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <img
              src="/images/ai-healthcare.jpg"
              alt="AI in Healthcare"
              className="rounded-xl object-cover w-full max-w-md shadow-2xl"
              style={{ maxHeight: '380px' }}
            />
          </div>
        </div>
      </section>

      {/* ── LATEST ARTICLE ───────────────────────────────────────── */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-1 text-gray-900">Latest Article</h2>
          <p className="text-gray-500 text-sm mb-6">Latest breakthroughs in AI-powered healthcare and medicine</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { badge: 'Call for Papers', date: 'March 10, 2026', title: 'Special Issue: AI in Cancer Diagnosis', excerpt: 'Submit your research on AI applications in oncology. Deadline: April 30, 2026', href: '/journal/current-issue' },
              { badge: 'Call for Papers', date: 'March 10, 2026', title: 'Special Issue: AI in Cancer Diagnosis', excerpt: 'Submit your research on AI applications in oncology. Deadline: April 30, 2026', href: '/journal/current-issue' },
              { badge: 'Call for Papers', date: 'March 10, 2026', title: 'Special Issue: AI in Cancer Diagnosis', excerpt: 'Submit your research on AI applications in oncology. Deadline: April 30, 2026', href: '/journal/current-issue' },
            ].map((article, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl" style={{ background: '#0fb68c' }} />
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: '#d1faf0', color: '#0a8c6a' }}>{article.badge}</span>
                  <span className="text-xs text-gray-500">📅 {article.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{article.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{article.excerpt}</p>
                <Link href={article.href} className="text-sm font-semibold" style={{ color: '#0fb68c' }}>Read more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
