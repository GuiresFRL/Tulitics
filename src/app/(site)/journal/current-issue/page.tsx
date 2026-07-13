import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Current Issue | JAIMPH – Tulitics',
  description: 'Read the latest issue of the Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH). Browse open-access articles on AI-driven healthcare, clinical research, and public health innovation.',
  keywords: ['JAIMPH current issue', 'latest articles', 'current journal issue', 'AI medicine articles', 'open access articles', 'new research JAIMPH'],
  alternates: { canonical: 'https://guires.info/journal/current-issue' },
  openGraph: {
    title: 'Current Issue | JAIMPH – Tulitics',
    description: 'Latest open-access articles from JAIMPH on AI, medicine, and public health.',
    url: 'https://guires.info/journal/current-issue',
    type: 'website',
  },
  twitter: { card: 'summary', title: 'Current Issue | JAIMPH', description: 'Latest research articles from JAIMPH on AI, healthcare, and public health.' },
}

const articles = [
  { type: 'Research Article', title: 'Deep Learning Models for Early Detection of Diabetic Retinopathy in Low-Resource Settings', authors: 'Ramesh K, Sharma P, Patel A', keywords: ['Deep Learning', 'Diabetic Retinopathy', 'AI Diagnostics'], doi: '10.1016/jaimph.2026.05.001', date: 'May 2026' },
  { type: 'Review Article', title: 'AI-Assisted Clinical Decision Support in Emergency Medicine: A Systematic Review', authors: 'Chen L, Nguyen T, Williams R', keywords: ['Clinical Decision Support', 'Emergency Medicine', 'AI'], doi: '10.1016/jaimph.2026.05.002', date: 'May 2026' },
  { type: 'Short Communication', title: 'Predictive Analytics for Hospital Readmission Rates Using Electronic Health Records', authors: 'Gupta M, Singh H, Verma S', keywords: ['Predictive Analytics', 'Hospital Readmission', 'EHR'], doi: '10.1016/jaimph.2026.04.007', date: 'April 2026' },
  { type: 'Case Report', title: 'Machine Learning-Guided Diagnosis of Rare Autoimmune Disorders: A Clinical Case Series', authors: 'Patel N, Krishnamurthy V, Das R', keywords: ['Machine Learning', 'Autoimmune', 'Rare Disease'], doi: '10.1016/jaimph.2026.04.012', date: 'April 2026' },
]

const typeColor: Record<string, string> = {
  'Research Article': 'bg-blue-50 text-blue-700',
  'Review Article': 'bg-purple-50 text-purple-700',
  'Short Communication': 'bg-orange-50 text-orange-700',
  'Case Report': 'bg-teal-50 text-teal-700',
}

export default function CurrentIssuePage() {
  return (
    <>
      <JournalHeader subtitle="Current Issue" />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Volume 1 · Issue 1 · May 2026</h2>
          <p className="text-gray-500 text-sm">{articles.length} articles in this issue · All Open Access</p>
        </div>
        <div className="space-y-4">
          {articles.map((article, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${typeColor[article.type] || 'bg-gray-100 text-gray-600'}`}>{article.type}</span>
                <span className="text-xs text-green-700 font-medium px-2 py-0.5 rounded bg-green-50">Open Access</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 leading-snug hover:text-green-800 cursor-pointer">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{article.authors}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {article.keywords.map(k => (
                  <span key={k} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{k}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>DOI: {article.doi}</span>
                <span>· Published: {article.date}</span>
                <div className="ml-auto flex gap-2">
                  <button className="px-3 py-1 border border-gray-200 rounded text-xs font-medium hover:border-green-600 hover:text-green-700 transition-colors">PDF</button>
                  <button className="px-3 py-1 border border-gray-200 rounded text-xs font-medium hover:border-green-600 hover:text-green-700 transition-colors">Abstract</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/journal/all-issues" className="text-sm font-semibold hover:underline" style={{ color: '#0a2e2e' }}>View all issues →</Link>
        </div>
      </div>
    </>
  )
}
