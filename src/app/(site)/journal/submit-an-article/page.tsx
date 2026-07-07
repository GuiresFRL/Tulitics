import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Submit an Article – JAIMPH' }

export default function SubmitArticlePage() {
  return (
    <>
      <JournalHeader subtitle="Submit an Article" />
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Submit Your Manuscript</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          JAIMPH uses an online submission system. Please login or register to submit your manuscript.
        </p>
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="space-y-4 mb-6">
            <input type="text" placeholder="Username" className="w-full border border-gray-300 px-4 py-2.5 rounded text-sm focus:outline-none focus:border-green-600" />
            <input type="password" placeholder="Password" className="w-full border border-gray-300 px-4 py-2.5 rounded text-sm focus:outline-none focus:border-green-600" />
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {['Author Login', 'Reviewer Login', 'Editor Login', 'Publisher Login'].map(label => (
              <button key={label} className="text-xs px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-gray-700 transition-colors">{label}</button>
            ))}
          </div>
          <div className="flex gap-4 justify-center text-sm mb-4">
            <a href="#" className="text-blue-700 hover:underline">Register Now</a>
            <a href="#" className="text-blue-700 hover:underline">Login Help</a>
          </div>
        </div>
      </div>
    </>
  )
}
