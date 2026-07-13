import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Tulitics',
  description: 'Read the Tulitics Terms and Conditions — governing the use of our websites, journal platforms, and publishing services. Covers author responsibilities, publication ethics, user conduct, and intellectual property.',
  keywords: ['Tulitics terms and conditions', 'publisher terms', 'website terms of use', 'author agreement', 'publication terms', 'user conduct policy'],
  alternates: { canonical: 'https://guires.info/terms' },
  openGraph: { title: 'Terms & Conditions | Tulitics', url: 'https://guires.info/terms', type: 'website' },
  robots: { index: true, follow: false },
}

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing or using the Tulitics Publisher website or any journal operated under Tulitics Publisher, users acknowledge that they have read, understood, and agreed to these Terms and Conditions. If you do not agree with any part of these Terms, you should discontinue use of the website and related services.',
  },
  {
    title: 'Scope of Services',
    body: 'Tulitics Publisher provides scholarly publishing and academic communication services including journal publication, manuscript submission systems, peer review management, editorial and production services, online hosting, dissemination of scholarly content, and related publishing support. These services may be modified, updated, suspended, or discontinued at any time without prior notice.',
  },
  {
    title: 'Use of Website Content',
    body: 'All content available on this website, including journal articles, text, graphics, logos, website design elements, editorial materials, images, and downloadable files, is protected by applicable copyright, intellectual property, and publishing laws. The content is intended solely for academic, educational, research, and non-commercial scholarly use. Users may not reproduce, redistribute, modify, transmit, republish, commercially exploit, or otherwise misuse any content without prior written permission from Tulitics Publisher or the respective copyright holder.',
  },
  {
    title: 'Author Responsibilities',
    body: 'Authors submitting manuscripts to Tulitics Publisher confirm that the submitted work is original, has not been previously published, and is not under consideration elsewhere. Authors further confirm that all listed authors have approved the submission and that all necessary ethical approvals, permissions, and informed consents have been obtained where applicable. Authors are solely responsible for the accuracy, integrity, originality, and authenticity of all submitted content, including data, figures, tables, images, and supplementary materials. Any form of plagiarism, duplicate publication, falsification, fabrication, or unethical research conduct is strictly prohibited.',
  },
  {
    title: 'Publication Ethics and Research Integrity',
    body: 'Tulitics Publisher supports internationally recognized publication ethics and responsible scholarly publishing practices. The publisher reserves the right to reject manuscripts, request corrections, retract published articles, remove content, or report ethical misconduct in cases involving plagiarism, duplicate publication, data manipulation, image falsification, unethical research practices, authorship disputes, or undisclosed conflicts of interest. Editorial decisions are made independently based on scholarly merit, scientific integrity, originality, and relevance to the journal scope.',
  },
  {
    title: 'Peer Review and Confidentiality',
    body: 'All manuscripts submitted to Tulitics journals are treated as confidential documents during the editorial and peer review process. Editors, reviewers, editorial board members, and publishing staff are expected to maintain strict confidentiality regarding submitted materials and editorial communications. Unpublished manuscripts or reviewer comments must not be shared, disclosed, or used for personal or professional advantage without proper authorization.',
  },
  {
    title: 'Privacy Policy',
    body: 'The Privacy Policy is available at Tulitics Privacy Policy and provides detailed information on how personal data is collected, used, and protected, including information on confidentiality, ethical publishing practices, and informed consent requirements.',
  },
  {
    title: 'User Conduct',
    body: 'Users agree to use the website lawfully, responsibly, and in a manner that does not compromise website security or interfere with website operations. Users must not attempt unauthorized access to systems, upload malicious software, disrupt services, misuse journal content, impersonate individuals or organizations, or engage in fraudulent, harmful, or unlawful activities. Tulitics Publisher reserves the right to restrict, suspend, or terminate access for users who violate these Terms and Conditions.',
  },
  {
    title: 'Third-Party Links and External Services',
    body: 'This website may contain links to third-party websites, databases, indexing platforms, or external resources for informational and scholarly purposes. Tulitics Publisher does not control and is not responsible for the content, availability, security, or accuracy of external websites or services. Accessing third-party resources is at the user\'s own discretion and risk. For information regarding the collection and processing of personal information, users are encouraged to review our separate Privacy Policy available on the website.',
  },
  {
    title: 'Disclaimer of Warranties',
    body: 'The website, journals, and all related services are provided on an "as available" and "as is" basis. While Tulitics Publisher makes reasonable efforts to maintain the accuracy, reliability, and availability of its services, the publisher does not guarantee uninterrupted website access, error-free operation, completeness of information, or the accuracy of published research findings. The opinions, conclusions, and statements expressed in published articles belong solely to the respective authors and do not necessarily reflect the views of Tulitics Publisher or its editorial teams.',
  },
  {
    title: 'Limitation of Liability',
    body: 'Tulitics Publisher, its editors, reviewers, employees, affiliates, partners, and service providers shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of the website, journal content, publication services, technical interruptions, data loss, inaccuracies, or reliance on published materials. Users access and use website content at their own discretion and responsibility.',
  },
  {
    title: 'Intellectual Property Rights',
    body: 'All trademarks, journal titles, logos, publisher branding, website content, design elements, and published materials remain the intellectual property of Tulitics Publisher or their respective copyright holders. Unauthorized use, reproduction, imitation, or distribution of intellectual property is strictly prohibited.',
  },
  {
    title: 'Modifications to Terms',
    body: 'Tulitics Publisher reserves the right to revise, modify, or update these Terms and Conditions at any time without prior notice. Updated versions will be published on this page and become effective immediately upon publication. Continued use of the website following any modifications constitutes acceptance of the revised Terms and Conditions.',
  },
  {
    title: 'Governing Law',
    body: 'These Terms and Conditions shall be governed and interpreted in accordance with the applicable laws and regulations governing academic publishing, digital communications, and online services.',
  },
]

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Legal</p>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Terms &amp; Conditions</h1>
      <div className="flex gap-6 text-xs text-gray-400 mb-10">
        <span>Effective Date: [Insert Date]</span>
        <span>Last Updated: [Insert Date]</span>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-8">
        Welcome to the official websites and journals published by Tulitics Publisher ("Tulitics," "we," "our," or "us"). By accessing, browsing, submitting manuscripts, or using any services available through our publisher platform and journal websites, you agree to comply with and be bound by the following Terms and Conditions. These Terms apply to all users including authors, reviewers, editors, readers, researchers, librarians, institutions, and website visitors.
      </p>

      <div className="space-y-7">
        {sections.map((s) => (
          <section key={s.title} className="border-l-2 pl-5" style={{ borderColor: '#0fb68c' }}>
            <h2 className="font-bold text-gray-900 text-sm mb-2">{s.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-xl p-6" style={{ background: '#f0fdf4' }}>
        <p className="text-sm font-semibold mb-2" style={{ color: '#0a5c3c' }}>Contact Information</p>
        <p className="text-sm mb-1" style={{ color: '#065f46' }}>For questions regarding these Terms and Conditions, please contact: Tulitics</p>
        <a href="mailto:editorial@tulitics.com" className="text-sm font-semibold" style={{ color: '#0fb68c' }}>editorial@tulitics.com</a>
      </div>
    </div>
  )
}
