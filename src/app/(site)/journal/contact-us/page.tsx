import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Contact Us – JAIMPH' }

export default function ContactUsPage() {
  return (
    <>
      <JournalHeader subtitle="Contact us" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '✉️', title: 'Editor', value: 'editor@jaimph.com' },
            { icon: '✉️', title: 'Partnerships', value: 'partnerships@jaimph.com' },
            { icon: '📞', title: 'Phone', value: '+91-98745 61230' },
          ].map(c => (
            <div key={c.title} className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <p className="text-3xl mb-3">{c.icon}</p>
              <p className="font-semibold text-gray-900 mb-1">{c.title}</p>
              <p className="text-sm text-gray-600">{c.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-6">Send us a Message</h3>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="border border-gray-300 px-4 py-2.5 rounded text-sm focus:outline-none focus:border-green-600 w-full" />
              <input type="email" placeholder="Email Address" className="border border-gray-300 px-4 py-2.5 rounded text-sm focus:outline-none focus:border-green-600 w-full" />
            </div>
            <input type="text" placeholder="Subject" className="border border-gray-300 px-4 py-2.5 rounded text-sm focus:outline-none focus:border-green-600 w-full" />
            <textarea placeholder="Your message..." rows={5} className="border border-gray-300 px-4 py-2.5 rounded text-sm focus:outline-none focus:border-green-600 w-full resize-none" />
            <button className="px-6 py-2.5 text-sm font-semibold text-white rounded hover:opacity-90 transition-opacity" style={{ background: '#0a2e2e' }}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
