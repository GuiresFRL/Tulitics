import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Ethics Approval Policy – JAIMPH' }

export default function EthicsApprovalPolicyPage() {
  return (
    <>
      <JournalHeader subtitle="Ethics Approval Policy" />
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Editorial Policies & Guidelines</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Ethics Approval Policy</h1>
          <p className="text-gray-700 leading-relaxed">
            The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) requires that all research involving human participants, human biological material, animals, or sensitive data be conducted in accordance with established ethical standards. Authors are responsible for ensuring their research complies with applicable national and international regulations and guidelines.
          </p>
        </div>

        {[
          {
            title: 'Human Subjects Research',
            body: 'All studies involving human participants must have received approval from an Institutional Review Board (IRB) or Ethics Committee prior to commencement. The manuscript must state the name of the approving body, the approval date, and the clearance or reference number in the Methods section. Research must comply with the Declaration of Helsinki.',
          },
          {
            title: 'Informed Consent',
            body: 'For all research involving human participants, authors must confirm that written informed consent was obtained from all participants or their legal guardians. For case reports, written consent from the patient or legal guardian is mandatory. Where consent was waived by the ethics committee, this must be stated along with the rationale.',
          },
          {
            title: 'Patient Confidentiality',
            body: 'All patient data must be fully anonymized. Patient names, initials, hospital numbers, dates of birth, photographs, and any other identifying information must be removed or altered. Where identification is unavoidable (e.g., in case reports with distinctive clinical images), explicit written consent from the patient is required and must be stated in the manuscript.',
          },
          {
            title: 'Animal Studies',
            body: 'Studies involving animals must comply with the ARRIVE (Animal Research: Reporting of In Vivo Experiments) guidelines. Authors must state that ethical approval was obtained and that the study was conducted in accordance with institutional and national guidelines for the care and use of laboratory animals. The name of the approving body and approval number must be included.',
          },
          {
            title: 'Secondary Data and AI-Processed Data',
            body: 'Studies using secondary datasets (e.g., national health databases, electronic health records) or AI-processed data must include a clear ethical statement specifying whether ethical approval was obtained and from which body. Authors must confirm compliance with relevant data protection laws and privacy regulations.',
          },
          {
            title: 'Clinical Trials',
            body: 'All clinical trials must be registered in a publicly accessible trial registry (e.g., ClinicalTrials.gov, CTRI) prior to the onset of patient enrolment. The trial registration number must be included in the manuscript. Authors should adhere to CONSORT reporting guidelines and provide a completed CONSORT checklist.',
          },
          {
            title: 'Ethical Clearance Certificate',
            body: 'A scanned copy of the Ethical Clearance Certificate from the relevant ethics committee or review board must be submitted alongside the manuscript. Manuscripts without documented ethical approval will not be considered for peer review or publication.',
          },
        ].map(s => (
          <section key={s.title}>
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
              {s.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm pl-5">{s.body}</p>
          </section>
        ))}

        <div className="rounded-2xl p-6" style={{ background: '#ecfdf5' }}>
          <p className="text-sm font-semibold mb-1" style={{ color: '#0a5c3c' }}>Questions about ethics approval?</p>
          <p className="text-sm text-gray-600 mb-3">Contact the Editorial Office for guidance on ethics requirements before submission.</p>
          <a href="mailto:editor@jaimph.com" className="text-sm font-semibold" style={{ color: '#0fb68c' }}>editor@jaimph.com →</a>
        </div>
      </div>
    </>
  )
}
