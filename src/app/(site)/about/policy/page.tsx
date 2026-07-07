import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Policy – Tulitics' }

const policies = [
  {
    id: 'peer-review',
    title: 'Peer Review Policy',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Double-Blind Review',
        body: 'All manuscripts submitted to Tulitics journals undergo double-blind peer review. The identities of both authors and reviewers remain confidential throughout the review process to ensure impartial evaluation.',
      },
      {
        subtitle: 'Review Timeline',
        body: 'We aim to provide an initial editorial decision within 2–3 weeks of submission. Manuscripts requiring major or minor revisions are returned to authors with detailed reviewer comments. Final decisions are communicated within 4–6 weeks of resubmission.',
      },
      {
        subtitle: 'Reviewer Selection',
        body: 'Reviewers are selected based on subject expertise, publication record, and absence of conflicts of interest. We maintain a global reviewer database spanning AI, medicine, public health, and related disciplines.',
      },
    ],
  },
  {
    id: 'authorship',
    title: 'Authorship & Contributions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'ICMJE Criteria',
        body: 'Authorship must meet all four ICMJE criteria: (1) Substantial contribution to conception, design, acquisition, analysis, or interpretation; (2) Drafting or critically revising the work; (3) Final approval of the version to be published; (4) Accountability for all aspects of the work.',
      },
      {
        subtitle: 'Author Contributions Statement',
        body: 'All submissions must include a detailed Author Contributions Statement specifying each author\'s role using CRediT taxonomy (e.g., conceptualisation, methodology, writing, supervision). This statement is published alongside the article.',
      },
      {
        subtitle: 'Corresponding Author',
        body: 'The corresponding author is responsible for all communication with the journal, ensuring all co-authors have reviewed and approved the final submission, and managing post-publication correspondence.',
      },
    ],
  },
  {
    id: 'ethics',
    title: 'Research Ethics',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Ethical Approval',
        body: 'All human subject research must include documentation of ethical approval from an Institutional Review Board (IRB) or Ethics Committee. The approval number, issuing body, and date must be stated in the manuscript.',
      },
      {
        subtitle: 'Informed Consent',
        body: 'Manuscripts involving human participants must confirm that informed consent was obtained. For case reports, written consent from the patient or legal guardian is mandatory.',
      },
      {
        subtitle: 'Animal Studies',
        body: 'Research involving animals must comply with the ARRIVE guidelines and include a statement confirming ethical approval and humane treatment of animals.',
      },
    ],
  },
  {
    id: 'plagiarism',
    title: 'Plagiarism & Misconduct',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Plagiarism Screening',
        body: 'All manuscripts are screened for plagiarism using industry-standard software prior to peer review. A similarity index above 15% (excluding references) will result in manuscript rejection or a request for substantial revision.',
      },
      {
        subtitle: 'Duplicate Submission',
        body: 'Simultaneous submission of the same manuscript to multiple journals is strictly prohibited. Authors must confirm that the manuscript is not under consideration elsewhere at the time of submission.',
      },
      {
        subtitle: 'Data Fabrication',
        body: 'Any evidence of data fabrication, falsification, or manipulation will result in immediate rejection and may be reported to the author\'s institution. We follow COPE guidelines for handling all suspected misconduct.',
      },
    ],
  },
  {
    id: 'conflict',
    title: 'Conflicts of Interest',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Disclosure Requirement',
        body: 'Authors must disclose all financial and personal relationships that could influence (or be perceived to influence) the work. This includes employment, consultancies, stock ownership, honoraria, grants, patents, and personal relationships.',
      },
      {
        subtitle: 'Funding Statement',
        body: 'A complete funding statement listing all sources of financial support for the research must be included. If no funding was received, authors must state: "This research received no specific grant from any funding agency."',
      },
    ],
  },
  {
    id: 'ai-policy',
    title: 'AI Use in Research & Writing',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Disclosure of AI Tools',
        body: 'Authors must disclose the use of any AI or AI-assisted tools (e.g., large language models, image generation tools) in the preparation of manuscripts. This includes use in writing, editing, data analysis, or figure generation.',
      },
      {
        subtitle: 'AI Cannot Be an Author',
        body: 'AI tools cannot be listed as authors. Authorship requires accountability and the ability to give informed consent — responsibilities that AI cannot fulfil. Authors remain fully responsible for the accuracy of AI-assisted content.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Data We Collect',
        body: 'We collect personal data (name, email, affiliation, country) necessary for manuscript submission, peer review, and author correspondence. We do not sell or share personal data with third parties for marketing purposes.',
      },
      {
        subtitle: 'Data Retention',
        body: 'Submission records are retained for a minimum of 5 years to support audit trails and respond to post-publication queries. Users may request deletion of non-essential personal data by contacting contact@tulitics.com.',
      },
      {
        subtitle: 'Cookies',
        body: 'Our website uses essential cookies for platform functionality and optional analytics cookies (with user consent) to improve user experience. Users can manage cookie preferences at any time.',
      },
    ],
  },
]

export default function PolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-8 text-white" style={{ background: 'linear-gradient(120deg,#041610 60%,#0a3d2e 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#2dd4a0' }}>Tulitics</p>
          <h1 className="text-5xl font-extrabold mb-5">Policies &amp; Guidelines</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Our publishing policies define the standards we uphold to ensure integrity, transparency,
            and ethical conduct across every journal and article we publish.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <nav className="sticky z-40 border-b border-gray-200 bg-white" style={{ top: '95px' }}>
        <div className="max-w-7xl mx-auto px-8 overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {policies.map(p => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="px-4 py-3.5 text-xs font-semibold text-gray-500 hover:text-gray-900 whitespace-nowrap border-b-2 border-transparent hover:border-green-600 transition-all"
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Policy sections */}
      <div className="max-w-4xl mx-auto px-8 py-16 space-y-16">
        {policies.map(p => (
          <section key={p.id} id={p.id} style={{ scrollMarginTop: '145px' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#ecfdf5', color: '#059669' }}>
                {p.icon}
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900">{p.title}</h2>
            </div>
            <div className="space-y-6 pl-14">
              {p.content.map(c => (
                <div key={c.subtitle} className="border-l-2 pl-6" style={{ borderColor: '#d1fae5' }}>
                  <h3 className="font-bold text-gray-900 mb-2">{c.subtitle}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="rounded-2xl p-8 text-center" style={{ background: '#ecfdf5' }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: '#0a5c3c' }}>Questions about our policies?</h3>
          <p className="text-sm mb-4" style={{ color: '#065f46' }}>Our editorial team is available to assist with any policy-related queries.</p>
          <a href="mailto:contact@tulitics.com" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-sm text-white" style={{ background: '#0fb68c' }}>
            Contact Editorial Office
          </a>
        </div>
      </div>
    </>
  )
}
