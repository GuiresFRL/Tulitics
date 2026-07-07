'use client'
import Link from 'next/link'
import { useState } from 'react'
import JournalHeader from '@/components/JournalHeader'

const tabs = ['Latest Published', 'Article in Press', 'Top Cited', 'Most Downloaded']

const articles: Record<string, { type: string; title: string; authors: string; date: string; views: number; downloads: number }[]> = {
  'Latest Published': [
    { type: 'Research Article', title: "Deep Learning Models for Early Detection of Alzheimer's Disease Using MRI Biomarkers", authors: 'Ramesh K, Sharma P, Patel A, Gupta M', date: 'May 2026', views: 1284, downloads: 342 },
    { type: 'Review Article', title: 'AI-Powered Risk Stratification for COVID-19 Patients in Critical Care Settings', authors: 'Chen L, Nguyen T, Williams R, Das S', date: 'May 2026', views: 986, downloads: 217 },
    { type: 'Short Communication', title: 'Predictive Analytics for Hospital Readmission Rates Using Electronic Health Records', authors: 'Gupta M, Singh H, Verma S', date: 'April 2026', views: 743, downloads: 189 },
  ],
  'Article in Press': [
    { type: 'Research Article', title: 'Natural Language Processing for Automated Clinical Note Summarisation in ICU Settings', authors: 'Park J, Kim Y, Lee H, Choi B', date: 'June 2026', views: 412, downloads: 98 },
    { type: 'Review Article', title: 'Machine Learning Approaches for Drug-Drug Interaction Prediction: A Systematic Review', authors: 'Patel N, Krishnamurthy V, Mehta R', date: 'June 2026', views: 321, downloads: 76 },
  ],
  'Top Cited': [
    { type: 'Research Article', title: 'Convolutional Neural Networks for Diabetic Retinopathy Grading: A Multi-Centre Study', authors: 'Ramesh K, Iyer S, Subramaniam R', date: 'May 2026', views: 2341, downloads: 891 },
    { type: 'Review Article', title: 'AI in Radiology: Current Applications and Future Directions in Diagnostic Imaging', authors: 'Chen L, Williams R, Anderson M', date: 'May 2026', views: 1987, downloads: 634 },
  ],
  'Most Downloaded': [
    { type: 'Research Article', title: 'Federated Learning for Privacy-Preserving Medical Image Analysis Across Hospitals', authors: 'Liu X, Zhang Y, Wang H, Li M', date: 'April 2026', views: 1654, downloads: 1023 },
    { type: 'Short Communication', title: 'Wearable AI for Continuous Cardiac Monitoring in Post-Surgical Patients', authors: 'Sharma P, Gupta M, Singh R', date: 'April 2026', views: 1432, downloads: 876 },
  ],
}

const benefits = [
  { icon: '/images/icon-review.jpg', title: 'Fast & Transparent Review Process', desc: '1–2 weeks to first decision with full transparency at every stage.' },
  { icon: '/images/icon-openaccess.png', title: 'Open Access Visibility', desc: 'All articles freely accessible worldwide with no paywalls.' },
  { icon: '/images/icon-editorial.png', title: 'Experienced Editorial Board', desc: 'International experts across AI, medicine, and public health.' },
  { icon: '/images/icon-editorial.png', title: 'Ethical Publishing Standards', desc: 'COPE guidelines adhered to for all submissions and publications.' },
]

const boardMembers = [
  { name: 'Prof. Amanda Lee', role: 'Editor-in-Chief', affiliation: 'Harvard Medical School, USA', initials: 'AL' },
  { name: 'Dr. Adam Cheise', role: 'Associate Editor', affiliation: 'University of Oxford, UK', initials: 'AC' },
  { name: 'Prof. Ravi Sharma', role: 'Advisory Board Member', affiliation: 'AIIMS New Delhi, India', initials: 'RS' },
  { name: 'Dr. Li Wei', role: 'Advisory Board Member', affiliation: 'Peking University, China', initials: 'LW' },
]

const typeColor: Record<string, string> = {
  'Research Article': 'bg-blue-50 text-blue-700',
  'Review Article': 'bg-purple-50 text-purple-700',
  'Short Communication': 'bg-orange-50 text-orange-700',
  'Case Report': 'bg-teal-50 text-teal-700',
}

export default function AIMedicinePage() {
  const [activeTab, setActiveTab] = useState('Latest Published')

  return (
    <>
      <JournalHeader />

      {/* HERO STATS BAR */}
      <div style={{ background: '#0a2e2e' }} className="text-white py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-10">
            {[['Quarterly', 'Publication Frequency'], ['Fully Open Access', 'Access Model'], ['No Fees', 'Article Processing Charge']].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <p className="text-2xl font-bold">{val}</p>
                <p className="text-green-300 text-xs mt-1">{lbl}</p>
              </div>
            ))}
          </div>
          <Link href="/journal/submit-an-article" className="px-7 py-3 font-semibold text-sm bg-white hover:bg-gray-100 transition-colors rounded" style={{ color: '#0a2e2e' }}>
            Submit a Manuscript
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-14">

        {/* ABOUT */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">About the Journal</h2>
          <p className="text-gray-700 leading-relaxed">
            The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) is a multidisciplinary, peer-reviewed,
            fully open-access quarterly journal dedicated to publishing high-quality research at the intersection of medicine and
            artificial intelligence. It publishes Original Research, Reviews, Short Communications, and Case Reports, with no
            submission or publication fees.
          </p>
        </section>

        {/* PUBLICATION TIMELINE */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Publication Timeline</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[['1–2 weeks', 'To First Decision'], ['3–4 weeks', 'Peer Review'], ['1–2 weeks', 'Acceptance to Publication']].map(([val, lbl]) => (
              <div key={lbl} className="border border-gray-200 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold mb-1" style={{ color: '#0a2e2e' }}>{val}</p>
                <p className="text-sm text-gray-500">{lbl}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY PUBLISH */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Why Publish With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(b => (
              <div key={b.title} className="bg-white rounded-xl border border-gray-200 p-5 text-center shadow-sm">
                <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                  <img src={b.icon} alt={b.title} className="w-9 h-9 object-contain" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1 leading-snug">{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ARTICLES TABBED */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5">Articles</h2>
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab ? 'border-green-700 text-green-800' : 'border-transparent text-gray-500 hover:text-gray-800'}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="divide-y divide-gray-100 border border-t-0 border-gray-200 rounded-b-xl">
            {articles[activeTab]?.map((article, i) => (
              <div key={i} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${typeColor[article.type] || 'bg-gray-100 text-gray-600'}`}>{article.type}</span>
                  <span className="text-xs text-green-700 font-medium px-2 py-0.5 rounded bg-green-50">Open Access</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 leading-snug hover:text-green-800 cursor-pointer">{article.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{article.authors} · {article.date}</p>
                <div className="flex items-center gap-5 text-xs text-gray-400">
                  <span>👁 {article.views.toLocaleString()} views</span>
                  <span>⬇ {article.downloads.toLocaleString()} downloads</span>
                  <Link href="/journal/current-issue" className="ml-auto text-green-700 font-medium hover:underline">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/journal/all-issues" className="text-sm font-semibold hover:underline" style={{ color: '#0a2e2e' }}>Browse all articles & issues →</Link>
          </div>
        </section>

        {/* EDITORIAL BOARD */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Editorial Board</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {boardMembers.map(member => (
              <div key={member.name} className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0a2e2e, #1a6b4a)' }}>
                  {member.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: '#0a2e2e' }}>{member.role}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/journal/editorial-and-advisory-board" className="text-sm font-semibold hover:underline" style={{ color: '#0a2e2e' }}>View full editorial board →</Link>
          </div>
        </section>

        {/* CONTACT */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[['✉', 'Editor', 'editor@jaimph.com'], ['✉', 'Partnerships', 'partnerships@jaimph.com'], ['📞', 'Phone', '+91-98745 61230']].map(([icon, label, value]) => (
              <div key={label} className="text-center">
                <p className="text-2xl mb-2">{icon}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">{label}</p>
                <p className="text-sm font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SUBMIT CTA */}
        <section className="rounded-2xl p-10 text-white text-center" style={{ background: 'linear-gradient(135deg, #0a2e2e 0%, #1a6b4a 100%)' }}>
          <h2 className="text-2xl font-bold mb-3">Submit your Article</h2>
          <p className="text-green-200 mb-6 text-sm max-w-lg mx-auto leading-relaxed">
            No submission fees. No publication fees. Reach a global audience of researchers, clinicians and policymakers.
          </p>
          <Link href="/journal/submit-an-article" className="inline-block px-8 py-3 bg-white font-semibold text-sm hover:bg-gray-100 transition-colors rounded" style={{ color: '#0a2e2e' }}>
            Submit Your Article
          </Link>
        </section>
      </div>
    </>
  )
}
