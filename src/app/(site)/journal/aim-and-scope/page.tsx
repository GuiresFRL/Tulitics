import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Aim and Scope – JAIMPH' }

const topics = [
  {
    title: 'Medical & Life Sciences',
    desc: 'Research on diseases, molecular and cellular mechanisms, immunology, neuroscience, microbiology, translational research, regenerative and precision medicine.',
  },
  {
    title: 'Clinical Research & Therapeutics',
    desc: 'AI-assisted diagnostics, drug and vaccine development, novel therapies, and clinical trials including real-world evidence.',
  },
  {
    title: 'Public Health & Epidemiology',
    desc: 'Population health, disease surveillance, outbreak prediction, environmental and social determinants, and health policy strategies.',
  },
  {
    title: 'Digital Health & AI Applications',
    desc: 'Telemedicine, wearable devices, predictive analytics, clinical decision support, and AI in medical imaging and healthcare innovation.',
  },
  {
    title: 'Emerging Trends & Innovation',
    desc: 'Medtech, biotechnology, bioinformatics, synthetic biology, and interdisciplinary life sciences research.',
  },
  {
    title: 'Ethics, Policy & Regulation',
    desc: 'Ethical, legal, and social implications of AI and digital health, regulatory frameworks, and healthcare governance.',
  },
]

export default function AimAndScopePage() {
  return (
    <>
      <JournalHeader subtitle="Aim and Scope" />
      <div className="max-w-5xl mx-auto px-6 py-14">

        {/* Overview */}
        <div className="mb-12">
          <p className="text-gray-700 leading-relaxed text-base">
            Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH), the official journal
            of Tulitics, is a multidisciplinary, peer-reviewed quarterly journal advancing research at the
            intersection of medicine and artificial intelligence (AI). It publishes Original Research,
            Reviews, Short Communications, and Case Reports, providing a platform for AI-driven medical
            research, innovations, and evidence-based insights that improve healthcare and inform global
            health policy. The journal is fully open access, with no fees for submission, review,
            processing, or publication, ensuring free and equitable dissemination of research worldwide.
          </p>
        </div>

        {/* Scope topics */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2 pb-2 border-b border-gray-200">Scope</h2>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            The journal welcomes contributions across a broad spectrum of areas, including but not limited to:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {topics.map(t => (
              <div key={t.title} className="rounded-xl border border-gray-100 p-6 hover:border-green-200 hover:shadow-sm transition-all">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{t.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Vision</h2>
          <div className="rounded-xl p-6" style={{ background: '#f7faf9' }}>
            <p className="text-gray-700 leading-relaxed">
              Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) aims to be the
              premier platform for AI-driven medical research, advancing knowledge that transforms
              healthcare and benefits society. We strive to shape the future of medicine and public health
              through innovative, evidence-based solutions that improve lives globally.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Mission</h2>
          <div className="rounded-xl p-6" style={{ background: '#f7faf9' }}>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to publish rigorous, high-quality research integrating AI, medicine, and
              public health, maximizing both scientific and societal impact. We are committed to fostering
              innovation, informing policy, and delivering accessible knowledge that empowers researchers,
              clinicians, and communities worldwide.
            </p>
          </div>
        </section>

        {/* Quick facts */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Journal Type', value: 'Peer-Reviewed, Multidisciplinary' },
            { label: 'Frequency', value: 'Quarterly' },
            { label: 'Access', value: 'Fully Open Access — No Fees' },
          ].map(f => (
            <div key={f.label} className="rounded-xl p-5 border border-gray-100 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{f.label}</div>
              <div className="font-bold text-gray-900 text-sm">{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
