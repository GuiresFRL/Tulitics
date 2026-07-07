import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Guide for Authors – JAIMPH' }

export default function GuideForAuthorsPage() {
  return (
    <>
      <JournalHeader subtitle="Guide for Authors" />
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Guide for Authors</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Thank you for choosing to submit your research to JAIMPH. This guide provides essential information on how to
            prepare your manuscript, our submission requirements, and our review process.
          </p>
        </section>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Instruction for Authors', href: '/journal/instruction-for-author', desc: 'Full manuscript preparation guidelines, formatting, and submission requirements.' },
            { title: 'Instruction for Reviewers', href: '/journal/instruction-for-reviewer', desc: 'Guidelines for peer reviewers on the review process and expectations.' },
            { title: 'Editorial Policies', href: '/journal/editorial-policies', desc: 'Our policies on peer review, authorship, conflicts of interest, and ethics.' },
            { title: 'Open Access Policy', href: '/journal/open-access-policy', desc: 'Information about our fully open-access model and CC BY license.' },
          ].map(item => (
            <Link key={item.title} href={item.href} className="block p-5 bg-white border border-gray-200 rounded-xl hover:border-green-600 hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
