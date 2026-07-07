import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Aim and Scope – JAIMPH' }

export default function AimAndScopePage() {
  return (
    <>
      <JournalHeader subtitle="Aim and Scope" />
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Aim &amp; Scope</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) is dedicated to advancing knowledge
            at the intersection of artificial intelligence, medicine, and public health. It publishes original research,
            review articles, short communications, and case reports that contribute to the understanding and application
            of AI in healthcare.
          </p>
        </section>
        <section>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Scope Areas</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ['🧠', 'AI & Machine Learning', 'Deep learning, NLP, computer vision in clinical contexts'],
              ['🏥', 'Clinical Research', 'Diagnostics, therapeutics, clinical trials, real-world evidence'],
              ['🌍', 'Public Health', 'Epidemiology, disease surveillance, health policy'],
              ['📱', 'Digital Health', 'Telemedicine, wearables, mHealth, clinical decision support'],
              ['🧬', 'Biomedical Informatics', 'Genomics, proteomics, precision medicine, bioinformatics'],
              ['⚖️', 'Ethics & Governance', 'AI ethics, regulatory frameworks, data privacy in healthcare'],
            ].map(([icon, title, desc]) => (
              <div key={String(title)} className="flex gap-3 p-4 rounded-xl bg-gray-50">
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
