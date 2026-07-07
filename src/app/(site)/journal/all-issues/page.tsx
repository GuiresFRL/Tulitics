import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'
import Link from 'next/link'

export const metadata: Metadata = { title: 'All Issues – JAIMPH' }

export default function AllIssuesPage() {
  return (
    <>
      <JournalHeader subtitle="All Issues" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Volume Archive</h2>
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Volume 1 · 2026</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/journal/current-issue" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 transition-colors group">
                <img src="/images/journal-cover.jpg" alt="" className="w-10 rounded" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-green-800">Issue 1 · May 2026</p>
                  <p className="text-xs text-gray-500">4 articles</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-400">
            <p className="text-sm">Future issues will appear here</p>
          </div>
        </div>
      </div>
    </>
  )
}
