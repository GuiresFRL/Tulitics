'use client'
import Link from 'next/link'
import { useState } from 'react'

const newsTabs = [
  {
    label: "Launch of Tulitics' First Journal",
    title: "Launch of Tulitics' First Journal",
    body: `The Journal of Artificial Intelligence in Medicine & Public Health by Tulitics is set to officially launch in June 2026, marking a significant step toward advancing interdisciplinary research at the convergence of healthcare and artificial intelligence.`,
    highlights: [
      'A global platform dedicated to AI-driven innovation in healthcare systems.',
      'Focus on bridging theoretical research with real-world clinical and public health applications.',
      'Encourages interdisciplinary collaboration between clinicians, data scientists, epidemiologists, and AI researchers.',
      'Aims to support evidence-based innovation for improving global health outcomes.',
      'Emphasis on ethical, responsible, and transparent AI in healthcare.',
    ],
  },
  {
    label: 'Call for Papers / Special Issues',
    title: 'Call for Papers / Special Issues',
    body: 'We are inviting submissions for our inaugural special issue on AI in Cancer Diagnosis. Submission deadline: April 30, 2026.',
    highlights: [
      'Focus: AI applications in oncology and cancer diagnostics.',
      'Open to original research, reviews, and case reports.',
      'No article processing charges.',
      'Fast peer review — 1–2 week initial decision.',
    ],
  },
  {
    label: 'Editorial Board Announcements',
    title: 'Editorial Board Announcements',
    body: 'We welcome distinguished researchers and clinicians to our growing editorial board. Our board brings together expertise across AI, medicine, and public health.',
    highlights: [
      'Editor-in-Chief appointment announced.',
      'International advisory board members welcomed.',
      'Reviewers from 20+ countries on board.',
    ],
  },
  {
    label: 'Events & Conferences',
    title: 'Events & Conferences',
    body: 'Tulitics will participate in and sponsor major international medical and AI conferences in 2026.',
    highlights: [
      'AI in Medicine Summit — Chennai, July 2026.',
      'Global Public Health Congress — virtual, September 2026.',
      'Digital Health Innovation Forum — London, November 2026.',
    ],
  },
  {
    label: 'Join as Reviewer',
    title: 'Join as Reviewer',
    body: 'Contribute to advancing medical research. Apply to join our reviewer network today. We welcome researchers across all relevant fields.',
    highlights: [
      'Double-blind peer review process.',
      'Recognition and certificates for reviewers.',
      'Flexible, asynchronous reviews.',
      'Email contact@tulitics.com with your CV.',
    ],
  },
  {
    label: 'Research Highlights',
    title: 'Research Highlights',
    body: 'Discover the latest breakthrough research published in our journal, spanning AI diagnostics, public health policy, and digital health.',
    highlights: [
      'Deep learning for early diabetic retinopathy detection.',
      'AI-assisted triage in emergency departments.',
      'Predictive analytics for hospital readmissions.',
    ],
  },
]

const benefits = [
  { icon: '/images/icon-review.jpg',     title: 'Fast & Transparent Review Process' },
  { icon: '/images/icon-openaccess.png', title: 'Open Access Visibility' },
  { icon: '/images/icon-editorial.png',  title: 'Experienced Editorial Board' },
  { icon: '/images/icon-editorial.png',  title: 'Ethical Publishing Standards' },
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
          <p className="text-gray-500 text-sm mb-6">Latest breakthroughs in AI-powered healthcare and medicine</p>
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
                  is a peer-reviewed, open-access journal publishing high-quality research and innovations that advance
                  healthcare, artificial intelligence, and public health.
                </p>
                <p className="text-sm text-gray-700"><strong>Frequency</strong>: Quarterly</p>
                <p className="text-sm text-gray-700"><strong>Access</strong>: Fully Open Access</p>
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
                <p className="text-green-200 text-sm">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PUBLISHING WITH US ───────────────────────────────── */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-1 text-gray-900">Why Publishing with Us</h2>
          <p className="text-gray-500 text-sm mb-6">Latest breakthroughs in AI-powered healthcare and medicine</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(b => (
              <div key={b.title} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
                <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-xl overflow-hidden" style={{ background: '#e6f7f2' }}>
                  <img src={b.icon} alt={b.title} className="w-9 h-9 object-contain" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-snug">{b.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ──────────────────────────────────────────── */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-1 text-gray-900">Latest News &amp; Announcements</h2>
          <p className="text-gray-500 text-sm mb-6">Latest breakthroughs in AI-powered healthcare and medicine</p>
          <div className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden">
            <div className="md:w-60 flex-shrink-0 border-r border-gray-200 bg-white">
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
              <h3 className="text-base font-bold text-gray-900 mb-2">{newsTabs[activeTab].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{newsTabs[activeTab].body}</p>
              <p className="font-bold text-gray-900 text-sm mb-2">Key Highlights:</p>
              <ul className="space-y-1.5">
                {newsTabs[activeTab].highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK AI SECTION ──────────────────────────────────────── */}
      <section
        className="relative text-white py-14 px-6"
        style={{
          backgroundImage: 'url(/images/ai-healthcare.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(5,20,15,0.75)' }} />
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-3 leading-snug">
              Advancing Research in<br />Medicine, Public Health<br />&amp; AI
            </h2>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-md">
              Supporting innovative research in medicine, public health, and AI to improve global healthcare.
            </p>
            <Link
              href="https://journal-management-system-omega.vercel.app/"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors text-sm"
            >
              Submit Your Research →
            </Link>
          </div>
          <div className="hidden md:block" />
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

      {/* ── DISCOVER BANNER ──────────────────────────────────────── */}
      <section className="py-10 px-6 text-white text-center" style={{ background: '#0a2e2e' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-2">Discover +50,000 books, e-journals and journals</h2>
          <p className="text-green-200 text-sm mb-6">Amplify science, exchange perspectives and share experiences with the global research community.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/insights" className="px-7 py-2.5 font-semibold bg-white text-gray-900 hover:bg-gray-100 transition-colors text-sm">Explore Researcher Voices</Link>
            <Link href="/journal" className="px-7 py-2.5 font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors text-sm">Visit Tulitics Shop</Link>
          </div>
        </div>
      </section>
    </>
  )
}
