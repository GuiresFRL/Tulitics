import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About Tulitics – Scholarly Publishing Platform' }

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Integrity',
    desc: 'We uphold rigorous ethical standards across every submission, review, and publication decision.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Open Access',
    desc: 'Knowledge should be free. We publish openly — no fees for authors, no paywalls for readers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovation',
    desc: 'We embrace AI and technology to make scholarly publishing faster, smarter, and more impactful.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Collaboration',
    desc: 'We foster global networks of researchers, clinicians, and institutions united by a common mission.',
  },
]

const team = [
  { initials: 'EIC', name: 'Editor-in-Chief', role: 'Journal of AI in Medicine & Public Health', bg: '#0a5c3c' },
  { initials: 'ME', name: 'Managing Editor', role: 'Editorial Operations & Author Relations', bg: '#0a3d2e' },
  { initials: 'HE', name: 'Head of Editorial', role: 'Peer Review & Quality Assurance', bg: '#0a2e2e' },
  { initials: 'TD', name: 'Technology Director', role: 'Platform & Digital Infrastructure', bg: '#062a20' },
]

const milestones = [
  { year: '2024', event: 'Tulitics founded with a mission to democratise academic publishing.' },
  { year: '2025', event: 'Launched the digital publishing platform and editorial management system.' },
  { year: 'Q1 2026', event: 'Onboarded international editorial board and peer reviewer network.' },
  { year: 'Q2 2026', event: 'Official launch of the Journal of AI in Medicine & Public Health (JAIMPH).' },
  { year: '2026+', event: 'Expanding to Management, Engineering, and Social Sciences journals.' },
]

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white py-28 px-8"
        style={{ background: 'linear-gradient(120deg,#041610 60%,#0a3d2e 100%)' }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#2dd4a0' }}>About Tulitics</p>
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Advancing Open<br />
              <span style={{ color: '#2dd4a0' }}>Scholarly Publishing</span><br />
              Worldwide
            </h1>
            <p className="text-gray-300 leading-relaxed text-lg max-w-lg">
              Tulitics is a Chennai-based scholarly publishing organisation dedicated to making
              cutting-edge research accessible to everyone — freely, transparently, and rapidly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '2024', l: 'Founded' },
              { n: '1', l: 'Active Journal' },
              { n: '20+', l: 'Countries Reached' },
              { n: '100%', l: 'Open Access' },
            ].map(s => (
              <div key={s.l} className="rounded-xl p-6 border border-white/10 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div className="text-3xl font-extrabold mb-1" style={{ color: '#2dd4a0' }}>{s.n}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0fb68c' }}>Who We Are</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Built for Researchers, by Researchers</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Tulitics was founded on a single conviction: that the barriers between great research and the
                people who need it — clinicians, policymakers, patients, and fellow scientists — should not exist.
              </p>
              <p>
                We are a multidisciplinary publishing organisation operating at the intersection of medicine,
                artificial intelligence, public health, management, and engineering. Our flagship journal,
                the <strong className="text-gray-900">Journal of Artificial Intelligence in Medicine and
                Public Health (JAIMPH)</strong>, launched in 2026 as a fully open-access, peer-reviewed
                quarterly publication with zero fees for authors or readers.
              </p>
              <p>
                Our editorial infrastructure is built on transparency: every manuscript undergoes double-blind
                peer review, every decision is documented, and every accepted article is published with full
                open access under a Creative Commons licence.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To accelerate the translation of research into real-world impact by providing a rigorous,
                inclusive, and free publishing platform for scholars worldwide.
              </p>
            </div>
            <div className="rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A world where every researcher — regardless of geography, institution, or funding — can
                publish freely and reach a global audience without paywalls or prohibitive costs.
              </p>
            </div>
            <div className="rounded-2xl p-6" style={{ background: '#ecfdf5' }}>
              <h3 className="font-bold mb-2 text-lg" style={{ color: '#0a5c3c' }}>Headquarters</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#065f46' }}>
                123 Research Road, Chennai, 600034, Tamil Nadu, India<br />
                contact@tulitics.com · +91-98745 61230
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-8" style={{ background: '#f7faf9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0fb68c' }}>What We Stand For</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#ecfdf5', color: '#059669' }}>
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0fb68c' }}>Our Journey</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Milestones</h2>
          </div>
          <div className="relative">
            {/* Vertical line — sits at center of the dot column */}
            <div className="absolute top-0 bottom-0 w-0.5 rounded-full" style={{ left: '50%', transform: 'translateX(-50%)', background: '#d1fae5' }} />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="grid grid-cols-[1fr_32px_1fr] items-start gap-0">
                  {/* Year — right-aligned */}
                  <div className="text-right pr-6 pt-3">
                    <span className="text-sm font-extrabold" style={{ color: '#0a5c3c' }}>{m.year}</span>
                  </div>
                  {/* Dot — centered on line */}
                  <div className="flex justify-center pt-3">
                    <div className="w-4 h-4 rounded-full border-2 bg-white flex-shrink-0 z-10 relative" style={{ borderColor: '#0fb68c' }} />
                  </div>
                  {/* Content — left side */}
                  <div className="pl-6">
                    <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-8" style={{ background: '#f7faf9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0fb68c' }}>The Team</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Leadership & Editorial Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(t => (
              <div key={t.initials} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: t.bg }}
                >
                  {t.initials}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{t.name}</h3>
                <p className="text-xs text-gray-500 leading-snug">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 text-white text-center" style={{ background: '#041610' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Ready to publish your research?</h2>
          <p className="text-green-300/70 mb-8">Join a growing community of researchers advancing medicine and public health through open science.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/publish" className="px-8 py-3.5 font-semibold text-sm rounded-sm text-gray-900 transition-colors" style={{ background: '#2dd4a0' }}>
              Submit an Article
            </Link>
            <Link href="/about/career" className="px-8 py-3.5 font-semibold text-sm rounded-sm border border-white/20 hover:border-white/50 transition-colors">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
