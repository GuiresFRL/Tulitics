import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = {
  title: 'Aim and Scope | JAIMPH – Tulitics',
  description: 'Discover the aim and scope of the Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) — a peer-reviewed open-access journal advancing AI-driven healthcare research, clinical innovation, and public health science.',
  keywords: ['JAIMPH aim and scope', 'AI in medicine journal', 'artificial intelligence public health', 'peer reviewed medical journal', 'open access healthcare research', 'health informatics journal scope'],
  alternates: { canonical: 'https://guires.info/journal/aim-and-scope' },
  openGraph: {
    title: 'Aim and Scope | JAIMPH – Tulitics',
    description: 'JAIMPH publishes peer-reviewed research at the intersection of artificial intelligence, medicine, and public health.',
    url: 'https://guires.info/journal/aim-and-scope',
    type: 'article',
  },
  twitter: { card: 'summary', title: 'Aim and Scope | JAIMPH', description: 'Scope of JAIMPH — AI in medicine, public health, and clinical research.' },
}

const areas = [
  {
    title: 'Medical & Life Sciences',
    body: 'Research on diseases, molecular and cellular mechanisms, immunology, neuroscience, microbiology, translational research, regenerative and precision medicine.',
  },
  {
    title: 'Clinical Research & Therapeutics',
    body: 'AI-assisted diagnostics, drug and vaccine development, novel therapies, and clinical trials including real-world evidence.',
  },
  {
    title: 'Public Health & Epidemiology',
    body: 'Population health, disease surveillance, outbreak prediction, environmental and social determinants, and health policy strategies.',
  },
  {
    title: 'Digital Health & AI Applications',
    body: 'Telemedicine, wearable devices, predictive analytics, clinical decision support, and AI in medical imaging and healthcare innovation.',
  },
  {
    title: 'Emerging Trends & Innovation',
    body: 'Medtech, biotechnology, bioinformatics, synthetic biology, and interdisciplinary life sciences research.',
  },
  {
    title: 'Ethics, Policy & Regulation',
    body: 'Ethical, legal, and social implications of AI and digital health, regulatory frameworks, and healthcare governance.',
  },
]

export default function AimAndScopePage() {
  return (
    <>
      <JournalHeader subtitle="Aim and Scope" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>About the Journal</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Aim and Scope</h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH), the official journal of Tulitics, is a multidisciplinary, peer-reviewed quarterly journal advancing research at the intersection of medicine and artificial intelligence (AI). It publishes Original Research, Reviews, Short Communications, and Case Reports, providing a platform for AI-driven medical research, innovations, and evidence-based insights that improve healthcare and inform global health policy. The journal is fully open access, with no fees for submission, review, processing, or publication, ensuring free and equitable dissemination of research worldwide.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            The journal welcomes contributions across a broad spectrum of areas, including but not limited to:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {areas.map((a) => (
            <div key={a.title} className="border border-gray-200 rounded-xl p-5">
              <h2 className="font-bold text-gray-900 text-sm mb-2">{a.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 border border-gray-200 bg-white">
            <h2 className="font-bold text-gray-900 text-base mb-3">Vision</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) aims to be the premier platform for AI-driven medical research, advancing knowledge that transforms healthcare and benefits society. We strive to shape the future of medicine and public health through innovative, evidence-based solutions that improve lives globally.
            </p>
          </div>
          <div className="rounded-xl p-6 border border-gray-200 bg-white">
            <h2 className="font-bold text-gray-900 text-base mb-3">Mission</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our mission is to publish rigorous, high-quality research integrating AI, medicine, and public health, maximizing both scientific and societal impact. We are committed to fostering innovation, informing policy, and delivering accessible knowledge that empowers researchers, clinicians, and communities worldwide.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
