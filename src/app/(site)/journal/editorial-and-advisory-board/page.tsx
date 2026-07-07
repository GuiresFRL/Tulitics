import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Editorial Board – JAIMPH' }

const board = [
  { name: 'Prof. Amanda Lee', role: 'Editor-in-Chief', affiliation: 'Harvard Medical School, USA', initials: 'AL' },
  { name: 'Dr. Adam Cheise', role: 'Associate Editor', affiliation: 'University of Oxford, UK', initials: 'AC' },
  { name: 'Prof. Ravi Sharma', role: 'Advisory Board Member', affiliation: 'AIIMS New Delhi, India', initials: 'RS' },
  { name: 'Dr. Li Wei', role: 'Advisory Board Member', affiliation: 'Peking University, China', initials: 'LW' },
]

export default function EditorialBoardPage() {
  return (
    <>
      <JournalHeader subtitle="Editorial and Advisory Board" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Editorial &amp; Advisory Board</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {board.map(member => (
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
      </div>
    </>
  )
}
