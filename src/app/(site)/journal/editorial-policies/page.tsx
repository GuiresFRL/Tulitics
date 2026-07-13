import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = {
  title: 'Editorial Policies & Guidelines | JAIMPH – Tulitics',
  description: 'JAIMPH editorial policies covering plagiarism, peer review, ethics approval, authorship, conflict of interest, citation manipulation, corrections and retractions, and open access — aligned with international publishing standards.',
  keywords: ['editorial policies', 'plagiarism policy', 'peer review policy', 'ethics approval', 'authorship policy', 'conflict of interest', 'open access policy', 'JAIMPH policies', 'publication ethics'],
  alternates: { canonical: 'https://guires.info/journal/editorial-policies' },
  openGraph: {
    title: 'Editorial Policies & Guidelines | JAIMPH – Tulitics',
    description: 'Comprehensive editorial policies for JAIMPH — plagiarism, peer review, ethics, authorship, and open access guidelines.',
    url: 'https://guires.info/journal/editorial-policies',
    type: 'article',
  },
  twitter: { card: 'summary', title: 'Editorial Policies | JAIMPH', description: 'Full editorial policies for JAIMPH including ethics, plagiarism, and peer review standards.' },
}

const policies = [
  {
    title: 'Editorial Policies',
    body: [
      'The Editor-in-Chief and the Editorial Team of the Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) are committed to upholding the highest standards of integrity, transparency, and ethical practice in scholarly publishing. The journal\'s editorial policies are aligned with its aims and scope and are guided by internationally recognized best practices.',
      'The editorial team adheres to the Best Practice Guidelines for Journal Editors established by Committee on Publication Ethics (COPE). In addition, the journal follows the Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals developed by the International Committee of Medical Journal Editors (ICMJE).',
      'These principles guide our peer review process, promote ethical conduct among editors, reviewers, and authors, and ensure the integrity and credibility of the scholarly record.',
    ],
  },
  {
    title: 'Plagiarism Policy',
    body: [
      'The journal maintains a strict policy against plagiarism. All submitted manuscripts must be original work and properly cite previously published sources. Manuscripts may be screened using plagiarism detection tools. Submissions found to contain plagiarism, data fabrication, or duplicate publication will be rejected or retracted. The journal follows ethical standards recommended by the Committee on Publication Ethics.',
    ],
  },
  {
    title: 'Peer Review Process',
    body: [
      'All submitted manuscripts undergo an initial editorial screening to evaluate their alignment with the journal\'s scope, originality, scholarly contribution, compliance with submission requirements, and adherence to ethical standards. Submissions that do not meet these criteria may be declined without external review to ensure the integrity and quality of published content.',
      'Manuscripts that successfully pass the initial assessment proceed to a double-blind peer review process, in which the identities of both authors and reviewers are concealed to maintain impartiality and objectivity. Authors are required to submit anonymized manuscripts by removing all identifying information and providing author details in a separate file. Care should also be taken to ensure that self-citations do not compromise anonymity.',
      'Each manuscript is evaluated by independent expert reviewers based on its scientific merit, originality, methodological rigor, validity of findings, ethical compliance, and clarity of presentation. Upon completion of the review process, the Editor-in-Chief, in consultation with the editorial team, makes a final decision informed by the reviewers\' recommendations.',
      'Manuscripts may be accepted, invited for minor or major revisions, or rejected. Authors are provided with detailed and constructive feedback to support revision. Revised submissions may be subject to further review to ensure that all concerns have been adequately addressed prior to final acceptance.',
    ],
  },
  {
    title: 'Ethics Approval Policy',
    body: [
      'All research must comply with internationally recognized ethical standards. Studies involving human participants, animals, or sensitive data require prior approval from a recognized Institutional Ethics Committee or Institutional Review Board (IRB), with the approving body, protocol number, and date reported in the manuscript.',
      'Research with human participants must follow established principles, including those of the International Committee of Medical Journal Editors (ICMJE), with informed consent obtained from participants or their legal guardians and confidentiality of personal data maintained. Clinical trials must be registered in a recognized public registry. Animal studies must adhere to institutional and national welfare guidelines.',
      'Research using publicly available data or systematic reviews should state when ethical approval was not required. Submissions involving artificial intelligence or digital health data must address privacy, transparency, and potential bias. Failure to meet these requirements may result in rejection or action in accordance with Committee on Publication Ethics (COPE).',
    ],
  },
  {
    title: 'Authorship Policy',
    body: [
      'Authorship should be limited to individuals who have made substantial intellectual contributions to the research and the preparation of the manuscript. All listed authors must have participated sufficiently to take public responsibility for the content of the article. Contributions may include the conception or design of the study, acquisition, analysis, or interpretation of data, and drafting or critically revising the manuscript for important intellectual content.',
      'All authors are required to review and approve the final version of the manuscript prior to submission. Any changes to the authorship list after submission, including the addition, removal, or reordering of authors, must be approved by all authors and the Editor-in-Chief. This ensures accountability, transparency, and adherence to recognized authorship standards.',
    ],
  },
  {
    title: 'Conflict of Interest',
    body: [
      'All authors, reviewers, and editors are required to disclose any financial, personal, or professional relationships that could be perceived as influencing the research, its interpretation, or the review process. Potential conflicts of interest must be clearly declared within the manuscript to ensure transparency and maintain the integrity of the scholarly record.',
      'If no conflicts exist, authors should include the statement: "The authors declare no conflict of interest." Full disclosure helps maintain trust in the peer review process and supports unbiased evaluation and publication of research findings.',
    ],
  },
  {
    title: 'Citation Manipulation Policy',
    body: [
      'The journal maintains strict standards of integrity and ethics in scholarly publishing. Any practice intended to artificially inflate citation metrics or misrepresent the impact of research is strictly prohibited. Authors must cite their prior work only when directly relevant, and coordinated efforts to cite specific journals, editors, or groups to boost metrics are not allowed. Reviewers and editors must not request or include citations unrelated to the manuscript\'s content, nor misrepresent references to favor publications or authors.',
      'Manuscripts found to engage in citation manipulation may be rejected or retracted. Editors and reviewers are trained to detect and prevent such practices, ensuring that all citations are ethical, relevant, and contribute meaningfully to the scientific record, safeguarding the integrity of scholarly metrics and research evaluation.',
    ],
  },
  {
    title: 'Corrections and Retractions Policy',
    body: [
      'The journal is committed to preserving the integrity, accuracy, and transparency of the scientific record. Authors are expected to ensure that all data, analyses, and interpretations in their submissions are accurate and complete. If any errors, omissions, or ethical concerns are discovered after publication, authors must immediately notify the editorial office.',
      'Corrections and Errata: Minor errors that do not affect the overall conclusions of a paper such as typographical mistakes, errors in author affiliations, minor data inaccuracies, or formatting issues—will be corrected through formal corrections or errata. Corrections are permanently linked to the original article, clearly describe the nature of the changes, and are indexed alongside the article in databases to maintain clarity for readers. Authors are responsible for reporting these errors promptly and providing the corrected information.',
      'Retractions: Retractions are issued for major errors, research misconduct, plagiarism, data fabrication, ethical violations, or other breaches that compromise the reliability of the research. Retractions are clearly labelled, permanently linked to the original article, and provide a transparent explanation of the reason. All co-authors must cooperate fully with the journal\'s investigation. Retractions may also include updates to references, citations, or related datasets to maintain the integrity of the scientific record.',
    ],
    bullets: [
      'Promptly report errors or ethical concerns discovered post-publication.',
      'Cooperate with editors during investigations of suspected misconduct or inaccuracies.',
      'Ensure all co-authors are informed of corrections or retractions and approve submitted corrections.',
      'Provide supporting documentation if requested by the editorial office.',
    ],
    bulletsLabel: 'Author Responsibilities:',
    footer: 'Transparency and Accessibility: All corrections and retractions are publicly accessible, clearly indicated, and permanently linked to the original article. This ensures that readers are fully informed and that the integrity of the scientific record is maintained.',
  },
  {
    title: 'Open Access Policy',
    body: [
      'The journal is fully committed to open access, ensuring that all published research is freely and immediately available to readers worldwide without subscription or paywall barriers. All content may be downloaded, read, copied, distributed, printed, or linked to, provided proper attribution is given. Authors retain copyright under a standard open-access license (e.g., Creative Commons Attribution, CC BY), which allows reuse, redistribution, and adaptation of the work with appropriate credit. Authors are encouraged to provide datasets and supplementary materials to enhance transparency, reproducibility, and reader understanding.',
    ],
  },
]

export default function EditorialPoliciesPage() {
  return (
    <>
      <JournalHeader subtitle="Editorial Policies & Guidelines" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Guidelines</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-10">Editorial Policies & Guidelines</h1>

        <div className="space-y-8">
          {policies.map((policy) => (
            <section key={policy.title} className="border border-gray-200 rounded-xl p-6">
              <h2 className="font-bold text-gray-900 text-base mb-4" style={{ color: '#0a2e2e' }}>{policy.title}</h2>
              <div className="space-y-3">
                {policy.body.map((para, i) => (
                  <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
                ))}
                {policy.bullets && (
                  <div>
                    {policy.bulletsLabel && <p className="text-gray-700 text-sm font-semibold mt-4 mb-2">{policy.bulletsLabel}</p>}
                    <ul className="space-y-2">
                      {policy.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {policy.footer && <p className="text-gray-600 text-sm leading-relaxed mt-3">{policy.footer}</p>}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
