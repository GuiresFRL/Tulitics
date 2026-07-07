import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-16">
      <Link href="/" className="mb-10">
        <img src="/images/logo.png" alt="Tulitics" className="h-12" />
      </Link>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 max-w-xl w-full p-10 text-center relative overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center text-gray-100 font-black" style={{ fontSize: '180px', userSelect: 'none' }}>404</p>
        <div className="relative z-10">
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">AI Couldn't Find This Page</h1>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Our AI ran a comprehensive diagnostic and concluded this page does not exist. Confidence: 99.9%.
          </p>
          <div className="bg-gray-50 rounded-xl p-5 text-left mb-8">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">AI Diagnosis</p>
            <p className="text-sm text-gray-600 italic">
              "The requested URL returned no valid nodes in the knowledge graph. Recommend redirecting to homepage or browsing available journals."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: 'Home', href: '/' },
              { label: 'Browse JAIMPH', href: '/journal/ai-medicine' },
              { label: 'Current Issue', href: '/journal/current-issue' },
              { label: 'Submit Research', href: '/publish' },
            ].map(item => (
              <Link key={item.label} href={item.href} className="px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-green-600 hover:text-green-800 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-400">contact@tulitics.com · +91-98745 61230</p>
        </div>
      </div>
    </div>
  )
}
