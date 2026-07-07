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

const stats = [
  { value: '100%', label: 'Open Access' },
  { value: '0', label: 'Article Processing Charges' },
  { value: '2–3 wks', label: 'Avg. Review Time' },
  { value: '20+', label: 'Countries Represented' },
]

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast & Transparent Review',
    desc: 'Initial decision within 2–3 weeks through our structured double-blind peer review process.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Global Open Access',
    desc: 'Free to read, free to publish. Maximum visibility for your research worldwide.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Expert Editorial Board',
    desc: 'Reviewed by internationally recognised clinicians, AI researchers, and public health experts.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Ethical Publishing Standards',
    desc: 'Committed to COPE guidelines, transparent authorship, and responsible AI disclosure.',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative text-white flex items-center"
        style={{
          minHeight: '92vh',
          backgroundImage: 'url(/images/hero-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg,rgba(4,22,18,0.88) 50%,rgba(4,22,18,0.55) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-28 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full border border-emerald-400/40 text-emerald-300">
              Scholarly Publishing Platform
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.08] mb-6 tracking-tight">
              Advancing Medical<br />
              <span style={{ color: '#2dd4a0' }}>Research</span> with<br />
              AI &amp; ML
            </h1>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl">
              Tulitics is a scholarly publishing organisation committed to advancing
              high-quality research, strong editorial standards, and global academic collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-sm text-sm transition-all"
                style={{ background: '#0fb68c', color: '#fff' }}
              >
                Explore Journals
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/publish"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-sm text-sm border border-white/30 hover:border-white/60 transition-all"
              >
                Submit Article
              </Link>
            </div>
          </div>
        </div>
        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <div className="w-px h-10 bg-white/50" />
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────────── */}
      <section style={{ background: '#041610' }}>
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold mb-1" style={{ color: '#2dd4a0' }}>{s.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR JOURNALS ─────────────────────────────────────────── */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Publications</p>
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">Our Journals</h2>
            </div>
            <Link href="/journal" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold" style={{ color: '#0fb68c' }}>
              View all <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Active journal */}
            <div className="md:col-span-1 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg,#0fb68c,#0a5c3c)' }} />
              <div className="p-6 flex gap-5">
                <img src="/images/journal-cover.jpg" alt="JAIMPH" className="w-24 h-32 rounded-lg object-cover shadow flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: '#d1faf0', color: '#0a8c6a' }}>Active</span>
                  <h3 className="font-bold text-sm leading-snug mt-2 mb-3 text-gray-900 group-hover:text-emerald-800 transition-colors">
                    Journal of Artificial Intelligence in Medicine &amp; Public Health
                  </h3>
                  <div className="space-y-1 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />Quarterly</div>
                    <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />Fully Open Access</div>
                    <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />No Fees</div>
                  </div>
                  <Link href="/journal/ai-medicine" className="inline-flex items-center gap-1 text-xs font-semibold mt-4" style={{ color: '#0fb68c' }}>
                    View Journal →
                  </Link>
                </div>
              </div>
            </div>
            {/* Coming soon */}
            {[
              { title: 'Journal of Management', desc: 'Business strategy, organisational behaviour & leadership research.' },
              { title: 'Journal of Engineering', desc: 'Applied sciences, systems design & emerging engineering disciplines.' },
            ].map(j => (
              <div
                key={j.title}
                className="rounded-2xl overflow-hidden relative flex flex-col justify-end p-8 min-h-[220px]"
                style={{ background: 'linear-gradient(145deg,#0a3d2e,#041610)' }}
              >
                <div className="absolute top-6 right-6 text-xs font-bold px-3 py-1 rounded-full border border-white/20 text-white/50 uppercase tracking-wider">Coming Soon</div>
                <h3 className="text-xl font-bold text-white mb-2">{j.title}</h3>
                <p className="text-green-300/60 text-sm leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST ARTICLES ──────────────────────────────────────── */}
      <section className="py-24 px-8" style={{ background: '#f7faf9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Research</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Latest Articles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                badge: 'Call for Papers',
                date: 'March 10, 2026',
                title: 'Special Issue: AI in Cancer Diagnosis',
                excerpt: 'Submit your research on AI applications in oncology. We welcome original research, reviews, and case reports.',
                href: '/journal/current-issue',
              },
              {
                badge: 'Research Article',
                date: 'February 28, 2026',
                title: 'Deep Learning for Diabetic Retinopathy Detection',
                excerpt: 'A novel convolutional architecture achieving 94.7% accuracy on multi-centre retinal fundus datasets.',
                href: '/journal/current-issue',
              },
              {
                badge: 'Review',
                date: 'February 14, 2026',
                title: 'AI-Assisted Triage in Emergency Departments',
                excerpt: 'Systematic review of 28 studies examining LLM-based and ML-based triage tools across tertiary hospitals.',
                href: '/journal/current-issue',
              },
            ].map((article, i) => (
              <Link key={i} href={article.href} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg,#0fb68c,#0a5c3c)' }} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: '#d1faf0', color: '#0a8c6a' }}>{article.badge}</span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 leading-snug group-hover:text-emerald-800 transition-colors">{article.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{article.excerpt}</p>
                  <span className="text-sm font-semibold flex items-center gap-1 transition-all" style={{ color: '#0fb68c' }}>
                    Read more
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PUBLISH WITH US ──────────────────────────────────── */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0fb68c' }}>Why Choose Us</p>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Publishing made<br />simple, fast &amp; free
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Tulitics removes every barrier between your research and the world.
                No fees, no paywalls — just rigorous peer review and a global readership.
              </p>
              <Link
                href="/publish"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-sm transition-all"
                style={{ background: '#0fb68c', color: '#fff' }}
              >
                Submit Your Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map(b => (
                <div
                  key={b.title}
                  className="rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:text-white"
                    style={{ background: '#ecfdf5', color: '#059669' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0fb68c'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#ecfdf5'; (e.currentTarget as HTMLElement).style.color = '#059669' }}
                  >
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5">{b.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ──────────────────────────────────────────── */}
      <section className="py-24 px-8" style={{ background: '#f7faf9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Updates</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Latest News &amp; Announcements</h2>
          </div>
          <div className="flex flex-col lg:flex-row border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            {/* Tab list */}
            <div className="lg:w-72 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-gray-100">
              {newsTabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left px-6 py-4 text-sm border-b border-gray-50 transition-all ${
                    i === activeTab
                      ? 'font-bold text-gray-900 bg-gray-50'
                      : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50/60'
                  }`}
                  style={i === activeTab ? { borderLeft: '3px solid #0fb68c' } : { borderLeft: '3px solid transparent' }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Tab content */}
            <div className="flex-1 p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{newsTabs[activeTab].title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{newsTabs[activeTab].body}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Key Highlights</p>
              <ul className="space-y-3">
                {newsTabs[activeTab].highlights.map(h => (
                  <li key={h} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK CTA BANNER ──────────────────────────────────────── */}
      <section
        className="relative text-white py-28 px-8 overflow-hidden"
        style={{ backgroundImage: 'url(/images/ai-healthcare.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg,rgba(4,16,12,0.92) 55%,rgba(4,16,12,0.70) 100%)' }} />
        {/* decorative circle */}
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full border border-white/5" />
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full border border-white/5" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#2dd4a0' }}>Open Access Publishing</p>
            <h2 className="text-4xl font-extrabold leading-tight mb-6">
              Advancing Research in<br />Medicine, Public Health<br /><span style={{ color: '#2dd4a0' }}>&amp; Artificial Intelligence</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
              Tulitics is building the infrastructure for the next generation of open academic
              publishing — fast, transparent, and free for authors and readers alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/publish"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm rounded-sm transition-all"
                style={{ background: '#0fb68c', color: '#fff' }}
              >
                Submit Your Article
              </Link>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm rounded-sm border border-white/30 hover:border-white/60 transition-all"
              >
                Browse Journals
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '50K+', l: 'Researchers Reached' },
              { n: 'Free', l: 'Publication & Access' },
              { n: '4 wks', l: 'Publication Timeline' },
              { n: 'Global', l: 'Editorial Network' },
            ].map(item => (
              <div key={item.l} className="rounded-xl p-5 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="text-2xl font-extrabold mb-1" style={{ color: '#2dd4a0' }}>{item.n}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{item.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCOVER BAND ────────────────────────────────────────── */}
      <section className="py-16 px-8 text-white text-center" style={{ background: '#041610' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-3">Discover 50,000+ books, e-journals &amp; articles</h2>
          <p className="text-green-300/70 mb-8 text-sm">Amplify science, exchange perspectives and share experiences with the global research community.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/insights"
              className="px-8 py-3.5 font-semibold text-sm rounded-sm text-gray-900 transition-colors"
              style={{ background: '#2dd4a0' }}
            >
              Explore Researcher Voices
            </Link>
            <Link
              href="/journal"
              className="px-8 py-3.5 font-semibold text-sm rounded-sm border border-white/20 hover:border-white/50 transition-colors"
            >
              Visit Tulitics Shop
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
