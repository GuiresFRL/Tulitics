import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Blog – JAIMPH' }

export default function BlogPage() {
  return (
    <>
      <JournalHeader subtitle="Blog" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Insights & Updates</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Blog</h1>
        <div className="border border-gray-200 rounded-xl p-8 text-center">
          <p className="text-gray-600 text-sm leading-relaxed">
            Blog content will be updated soon with expert insights, research highlights, and developments in AI, medicine, and public health.
          </p>
        </div>
      </div>
    </>
  )
}
