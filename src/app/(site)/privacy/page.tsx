import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Tulitics',
  description: 'Read the Tulitics Privacy Policy — how we collect, use, and protect personal data from authors, reviewers, editors, and website visitors in accordance with data protection principles.',
  keywords: ['Tulitics privacy policy', 'data protection', 'personal data', 'publisher privacy', 'data collection policy'],
  alternates: { canonical: 'https://guires.info/privacy' },
  openGraph: { title: 'Privacy Policy | Tulitics', url: 'https://guires.info/privacy', type: 'website' },
  robots: { index: true, follow: false },
}

const sections = [
  {
    body: 'Tulitics Publisher is committed to protecting the privacy and confidentiality of authors, reviewers, editors, readers, and visitors using our websites and journal platforms.',
  },
  {
    body: 'The names, email addresses, affiliations, and other personal information entered on this site will be used exclusively for the stated purposes of the journal and publisher, including manuscript processing, peer review, editorial communication, publication, indexing, and website administration. Such information will not be shared with third parties except where necessary for publishing services, legal obligations, or scholarly communication processes.',
  },
  {
    body: 'All submitted manuscripts, reviewer reports, editorial correspondence, and unpublished materials are treated as confidential documents. Access is restricted to authorized editorial staff, reviewers, and publishing personnel directly involved in the publication process.',
  },
  {
    body: 'Tulitics Publisher supports internationally recognized publication ethics and research integrity standards. Authors are responsible for ensuring that studies involving human participants comply with ethical requirements and informed consent regulations.',
  },
  {
    body: 'Patients and research participants have a right to privacy that should not be infringed without informed consent. Identifying information, including names, initials, hospital numbers, photographs, or clinical details, should not be published unless scientifically necessary and written informed consent has been obtained from the patient or legal guardian. Informed consent statements may be included in the published article where appropriate.',
  },
  {
    body: 'Our websites may use cookies and analytics technologies to improve website functionality, user experience, security, and performance.',
  },
  {
    body: 'By using this website, users agree to the collection and use of information in accordance with this Privacy Policy.',
  },
  {
    body: 'Tulitics Publisher reserves the right to revise or update this policy at any time without prior notice.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Legal</p>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-10">Privacy Policy</h1>

      <div className="space-y-5">
        {sections.map((s, i) => (
          <p key={i} className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
        ))}
      </div>

      <div className="mt-10 rounded-xl p-6" style={{ background: '#f0fdf4' }}>
        <p className="text-sm font-semibold mb-2" style={{ color: '#0a5c3c' }}>For privacy-related inquiries, please contact:</p>
        <p className="text-sm" style={{ color: '#065f46' }}>Tulitics</p>
        <a href="mailto:editorial@tulitics.com" className="text-sm font-semibold" style={{ color: '#0fb68c' }}>editorial@tulitics.com</a>
      </div>
    </div>
  )
}
