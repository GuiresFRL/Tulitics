import { redirect } from 'next/navigation'

export default function PublishPage() {
  redirect('https://journal-management-system-omega.vercel.app/')
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT: Dark green info panel */}
      <div className="lg:w-1/2 flex flex-col justify-center px-12 py-16 text-white" style={{ background: '#0a2e2e' }}>
        <Link href="/" className="mb-10 block">
          <img src="/images/logo.png" alt="Tulitics" className="h-10" />
        </Link>
        <h1 className="text-3xl font-bold mb-4 leading-tight">Unlock your growth potential with our insights</h1>
        <p className="text-green-200 leading-relaxed mb-5 text-sm">
          Sign up to get reports, industry news and resources for your business in your inbox—sourced from Tulitics experts and our market research knowledge hub.
        </p>
        <p className="text-green-200 leading-relaxed mb-8 text-sm">
          Each month, you can expect a curated roundup of market, consumer and economic insights. Our goal: to help you navigate challenges and explore new pathways to growth.
        </p>
        <h2 className="text-xl font-bold mb-4">Why Tulitics?</h2>
        <ul className="space-y-3 text-sm text-green-100">
          {[
            'Stay updated on industry trends, consumer preferences and economic shifts',
            'Access free reports and strategic resources from our research experts',
            'Get insights and data to inspire your strategy',
            "Whatever stage you're at in your organisation, we'll help you stay in the know.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT: Login panel */}
      <div className="lg:w-1/2 flex items-center justify-center bg-gray-100 px-8 py-16">
        <div className="bg-white border border-gray-300 w-full max-w-md">
          <div className="bg-gray-200 border-b border-gray-300 px-6 py-3">
            <h2 className="font-bold text-gray-800 text-base">Please Enter the Following</h2>
          </div>
          <div className="px-6 py-6 space-y-4">
            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-700 w-24 flex-shrink-0">Username:</label>
              <input type="text" className="flex-1 border border-gray-400 px-3 py-1.5 text-sm focus:outline-none focus:border-gray-600" />
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-700 w-24 flex-shrink-0">Password:</label>
              <input type="password" className="flex-1 border border-gray-400 px-3 py-1.5 text-sm focus:outline-none focus:border-gray-600" />
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {['Author Login', 'Reviewer Login', 'Editor Login', 'Publisher Login'].map((label) => (
                <button key={label} className="text-xs px-3 py-1.5 border border-gray-400 bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors">
                  {label}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-700">
              Or Login via:{' '}
              <a href="#" className="text-blue-700 hover:underline font-medium">Tulitics SSO</a>
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-blue-700 hover:underline">Send Login Details</a>
              <a href="#" className="text-blue-700 hover:underline">Register Now</a>
              <a href="#" className="text-blue-700 hover:underline">Login Help</a>
            </div>
            <hr className="border-red-600" />
            <div className="space-y-2">
              <p className="text-sm text-gray-800"><strong>New:</strong> Login with your Tulitics account</p>
              <p className="text-sm text-gray-700">Click the Tulitics SSO button to login or create your Tulitics account.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• You must be registered in this journal.</li>
                <li>• The email must match your Tulitics account.</li>
              </ul>
              <a href="#" className="text-blue-700 hover:underline text-sm block">How to add email addresses</a>
            </div>
            <hr className="border-red-600" />
            <div className="text-center text-xs text-gray-600 space-y-1 pt-1">
              <p>Software Copyright © 2026 Tulitics</p>
              <p>
                <a href="#" className="hover:underline text-gray-600">Privacy Policy</a>
                {' | '}
                <a href="#" className="hover:underline text-gray-600">Data Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
