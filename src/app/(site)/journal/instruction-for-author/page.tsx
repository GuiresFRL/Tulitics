'use client'
import { useState, useEffect } from 'react'
import JournalHeader from '@/components/JournalHeader'
import type { Metadata } from 'next'

const nav = [
  { id: 'submission-guidelines', label: 'Manuscript Submission Guidelines' },
  {
    id: 'types', label: 'Type of Manuscript', children: [
      { id: 'research-article', label: 'Research Article' },
      { id: 'review-articles', label: 'Review Articles' },
      { id: 'short-communications', label: 'Short Communications' },
      { id: 'case-reports', label: 'Case Reports' },
    ],
  },
  { id: 'submission-requirements', label: 'Submission Requirements' },
  { id: 'first-page', label: 'First Page & Cover Page' },
  { id: 'manuscript-formatting', label: 'Manuscript Formatting' },
  { id: 'reporting-guidelines', label: 'Reporting Guidelines' },
  { id: 'data-availability', label: 'Data Availability' },
  { id: 'supplementary', label: 'Supplementary Materials' },
  { id: 'ai-ethics', label: 'Ethical Statements for AI / Secondary Data' },
  { id: 'blinded-manuscript', label: 'Blinded Manuscript File' },
  { id: 'tables-figures', label: 'Tables and Figures' },
  { id: 'references', label: 'References' },
  { id: 'formatting-examples', label: 'Formatting Examples' },
  { id: 'ethical-clearance', label: 'Ethical Clearance Certificate' },
  { id: 'copyright', label: 'Copyright and Author Forms' },
]

const titlePageFields = [
  'Article Title: Concise and informative; the study type may be included after a colon.',
  'Running Title: Maximum 40 characters.',
  'Author Information: Full names, highest academic degrees, and designations at the time of the study. Include mobile numbers, email addresses, and ORCID iDs, if available.',
  'Affiliations: Department(s) and institution(s) where the work was conducted (use the affiliation at the time of the study).',
  'Corresponding Author Details: Name, email, and phone number.',
  'Authors\' Contributions: Specify the role of each author in the study.',
  'Conflict of Interest Statement: Disclose any financial or personal relationships that may influence the work.',
  'Funding Statement: List sources of support, including grants, equipment, or drugs.',
  'Ethical Approval: Provide the name of the Ethics Committee/IRB, approval date, and clearance number; ensure the committee is registered with the regulatory authority.',
  'Clinical Trial Registration Number: If applicable.',
  'Data availability Statement: Required for all original research manuscripts.',
  'Declaration of Artificial Intelligence (AI) Use: Indicate if AI tools were used in drafting or analysis.',
  'Word Count: Excluding abstract, tables, figures, acknowledgments, key messages, and references.',
  'Number of Tables and Figures: Specify totals.',
  'Disclaimers: If any.',
]

const reportingGuidelines = [
  { name: 'CONSORT', full: 'Consolidated Standards of Reporting Trials', when: 'For randomized controlled trials (RCTs). Authors should include a completed CONSORT checklist and flow diagram.' },
  { name: 'STROBE', full: 'Strengthening the Reporting of Observational Studies in Epidemiology', when: 'For observational studies, including cohort, case-control, and cross-sectional studies.' },
  { name: 'PRISMA', full: 'Preferred Reporting Items for Systematic Reviews and Meta-Analyses', when: 'For systematic reviews and meta-analyses. Authors should provide a PRISMA flow diagram and checklist.' },
  { name: 'CARE', full: 'Case Report Guidelines', when: 'For individual case reports, ensuring complete and transparent clinical information.' },
]

const checklist = [
  'First Page File / Cover Letter – includes Title Page, Authors\' Contributions, Ethical Approval, Funding, Conflict of Interest, Trial Registration (if applicable).',
  'Blinded Manuscript File – full text (Abstract to References), no author names/affiliations, pages numbered consecutively.',
  'Tables – Submitted separately, numbered, titled, cited in text.',
  'Figures – High-resolution JPEGs, ≤4 MB, numbered, legends included, cited in text.',
  'Ethical Clearance Certificate – Scanned copy included.',
  'Copyright Transfer & Author Forms – Signed and submitted.',
]

export default function InstructionForAuthorPage() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <JournalHeader subtitle="Instruction for Authors" />

      {/* Mobile TOC dropdown */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3">
        <select
          className="w-full text-sm border border-gray-300 rounded px-3 py-2 text-gray-700"
          onChange={(e) => scrollTo(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>Jump to section…</option>
          {nav.map((item) => (
            <>
              <option key={item.id} value={item.id}>{item.label}</option>
              {item.children?.map((child) => (
                <option key={child.id} value={child.id}>{'  ↳ ' + child.label}</option>
              ))}
            </>
          ))}
        </select>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-0">

        {/* ── LEFT SIDEBAR ─────────────────────────────── */}
        <aside className="hidden lg:block w-60 flex-shrink-0">
          <div className="sticky top-36 border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-4 py-3 font-bold text-xs text-white" style={{ background: '#0a2e2e' }}>
              Instruction for Authors
            </div>
            <nav className="py-2 max-h-[75vh] overflow-y-auto">
              {nav.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-4 py-2 text-xs leading-snug transition-colors flex items-start gap-1.5 ${
                      active === item.id ? 'font-semibold' : 'text-gray-600 hover:text-gray-900'
                    }`}
                    style={active === item.id ? { color: '#0a5c3c' } : {}}
                  >
                    <svg className="w-2.5 h-2.5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    {item.label}
                  </button>
                  {item.children?.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => scrollTo(child.id)}
                      className={`w-full text-left pl-8 pr-4 py-1.5 text-xs leading-snug transition-colors flex items-start gap-1.5 ${
                        active === child.id ? 'font-semibold' : 'text-gray-500 hover:text-gray-800'
                      }`}
                      style={active === child.id ? { color: '#0fb68c' } : {}}
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-gray-300" />
                      {child.label}
                    </button>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* ── MAIN CONTENT ─────────────────────────────── */}
        <main className="flex-1 min-w-0 lg:pl-8 space-y-10">

          {/* Intro */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#0fb68c' }}>For Authors</p>
            <h1 className="text-2xl font-extrabold text-gray-900 mb-4">Instruction for Authors</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH), the official journal of Tulitics, is a multidisciplinary, peer-reviewed quarterly journal advancing research at the intersection of medicine and artificial intelligence (AI). It publishes Original Research, Reviews, Short Communications, and Case Reports, providing a platform for AI-driven innovations and evidence-based insights that enhance healthcare and inform global health policy. The journal is fully open access, with no fees for submission, review, or publication, ensuring free and equitable dissemination of research worldwide. Contributions are welcomed across medicine, clinical research, public health, digital health, emerging technologies, and ethics.
            </p>
          </div>

          {/* Submission Guidelines */}
          <section id="submission-guidelines" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Manuscript Submission Guidelines</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Authors are requested to carefully review the journal's manuscript types and prepare their submissions in accordance with the journal's formatting and ethical guidelines. All manuscripts must be submitted through the online submission system.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              First-time users must register on the platform, free of charge. Once registered, authors can log in to their Author Centre to submit manuscripts, track the progress of their submissions, and manage revisions. Returning authors can simply log in using their existing credentials. For any technical issues, authors may contact the Technical Assistance team or the Editorial Office.
            </p>
          </section>

          {/* Types of Manuscripts */}
          <section id="types" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Types of Manuscripts</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) considers manuscripts reporting original research based on quantitative, qualitative, or mixed-method study designs. Submissions are accepted in the following categories:
            </p>

            <section id="research-article" style={{ scrollMarginTop: '160px' }} className="mb-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3">Research Article:</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                The preferred length for original research articles is up to 3,000 words, excluding the abstract, tables, figures, and references. Each manuscript must include a structured abstract of no more than 250 words, organized under the following four subheadings: Background & Objectives, Methods, Results, and Conclusions, followed by 5–8 keywords listed alphabetically. The main text should be arranged in the following order: Introduction, Materials & Methods, Results, Discussion, Conclusion, Acknowledgments (if any), References, Tables, and Figures. Authors are encouraged to include up to five tables and/or figures, and manuscripts may cite up to 50 references.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ethical approval from the relevant Ethics Committee or Institutional Review Board (IRB) is mandatory for all studies involving human participants or animals, and this must be clearly indicated in the Methods section. For clinical trials, registration is required, and the registration number or CTR number should be included in the manuscript. Original research articles may have up to six authors.
              </p>
            </section>

            <section id="review-articles" style={{ scrollMarginTop: '160px' }} className="mb-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3">Review Articles</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Review articles provide a comprehensive synthesis of current knowledge and may include narrative reviews, systematic reviews, or meta-analyses. Each submission should be accompanied by a summary of the contributor(s)' expertise and prior work in the relevant field. The preferred length for review articles is up to 4,000 words, excluding the abstract, tables, figures, and references, and manuscripts may include up to 100 references. An unstructured abstract of up to 250 words must be provided, accurately summarizing the article. Authors should also provide 5–8 keywords arranged alphabetically for indexing purposes.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ethical approval should be mentioned if patient-level or unpublished data are included. Systematic reviews and meta-analyses should adhere to PRISMA guidelines, while narrative reviews should demonstrate critical appraisal of the literature. Manuscripts may include up to 5 tables and/or figures, and any supplementary material, such as additional datasets or appendices, should be properly labeled and referenced. Review articles may have up to six authors.
              </p>
            </section>

            <section id="short-communications" style={{ scrollMarginTop: '160px' }} className="mb-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3">Short Communications</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Short Communications are intended to rapidly disseminate preliminary findings, innovative methods, or emerging data that are timely and of high relevance to the field. These manuscripts should present concise, focused, and original work that does not warrant a full-length research article but is of scientific or clinical significance. The preferred length for Short Communications is up to 1,500 words, excluding the abstract, tables, figures, and references. Manuscripts may include up to 20 references. An unstructured abstract of up to 150 words must be provided, summarizing the key objectives, methods, results, and conclusions. Authors should also provide 3–6 keywords arranged alphabetically.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The main text should be organized in the following order: Introduction, Materials & Methods, Results, Discussion, Conclusion (if applicable), References, Tables, and Figures. Authors may include up to 3 tables and/or figures, and any supplementary material, such as additional datasets, should be properly labelled and referenced. Ethical approval from the relevant Ethics Committee or Institutional Review Board (IRB) is required for studies involving human participants or animals and must be clearly stated in the Methods section. Short Communications may have up to six authors.
              </p>
            </section>

            <section id="case-reports" style={{ scrollMarginTop: '160px' }}>
              <h3 className="font-bold text-gray-900 text-sm mb-3">Case Reports</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Case Reports are intended to describe clinically significant, rare, or educational cases that provide important insights into disease mechanisms, diagnosis, management, or outcomes. They should offer a clear and concise presentation of the case, highlighting its relevance to clinical practice or public health.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The preferred length for Case Reports is up to 1,500 words, excluding the abstract, tables, figures, and references. Manuscripts may include up to 20 references. An unstructured abstract of up to 150 words must be provided, summarizing the key features, diagnosis, management, and outcomes of the case. Authors should also provide 3–6 keywords arranged alphabetically. The main text should be organized in the following order: Introduction, Case Description, Discussion, Conclusion, References, Tables, and Figures. Authors may include up to 5 tables and/or figures, and any supplementary material, such as additional images or data, should be properly labelled and referenced. Ethical approval or informed consent from the patient or legal guardian is mandatory, and this should be clearly stated in the Case Description section. All patient identifiers must be removed to ensure confidentiality. Case Reports may have up to six authors.
              </p>
            </section>
          </section>

          {/* Submission Requirements */}
          <section id="submission-requirements" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Submission Requirements</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              All manuscripts must include: First Page File, Blinded Manuscript, Tables & Figures, Scanned Ethical Clearance Certificate, and Authors' Form & Copyright Transfer Agreement. Detailed instructions for each component are provided below.
            </p>
          </section>

          {/* First Page & Cover Page */}
          <section id="first-page" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">First Page & Cover Page</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The First Page File should be submitted as a single document and include the Covering Letter, and Title Page. This file is separate from the main manuscript to ensure blinded peer review.
            </p>
            <h3 className="font-semibold text-gray-800 text-sm mb-2">Covering Letter</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              The covering letter should briefly explain the novelty and relevance of the manuscript and justify why it is suitable for publication in Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) rather than a specialty journal. One author should be designated as the corresponding author, responsible for all communication with the Editorial Office. Authors must confirm that the manuscript is original, not previously published, and not under consideration elsewhere, in whole or in part.
            </p>
            <h3 className="font-semibold text-gray-800 text-sm mb-2">Title page</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">The Title Page must include the following details:</p>
            <ul className="space-y-2">
              {titlePageFields.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* Manuscript Formatting */}
          <section id="manuscript-formatting" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Manuscript Formatting</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Manuscripts must be typed in English, using 12-point Times New Roman font, double-spaced, on A4-sized paper with 1-inch margins on all sides. To ensure a blinded peer review, manuscripts must not include the authors' names or institutional affiliations within the main text.
            </p>
          </section>

          {/* Reporting Guidelines */}
          <section id="reporting-guidelines" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Reporting Guidelines</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Authors must ensure that their manuscripts comply with internationally recognized reporting standards relevant to the study design. Adherence to these guidelines improves transparency, reproducibility, and quality of reporting. The following standards should be followed:
            </p>
            <div className="space-y-3">
              {reportingGuidelines.map((g) => (
                <div key={g.name} className="rounded-lg p-4 border border-gray-100 bg-gray-50">
                  <p className="font-bold text-sm text-gray-900 mb-1">{g.name} <span className="font-normal text-gray-500 text-xs">({g.full})</span></p>
                  <p className="text-gray-600 text-sm leading-relaxed">{g.when}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Data Availability */}
          <section id="data-availability" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Data Availability</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Authors are required to include a Data Availability Statement in their manuscript, clearly indicating the accessibility of the data underlying their study. The statement should specify whether the data are:
            </p>
            <ul className="space-y-2 mb-3">
              {[
                'Publicly available in a recognized repository (provide the repository name and DOI or URL).',
                'Available upon reasonable request from the corresponding author.',
                'Restricted due to privacy, ethical, or legal considerations.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed">
              For restricted or request-based data, authors must provide appropriate contact information for data access. Clear and transparent data availability promotes reproducibility and enhances the integrity of published research.
            </p>
          </section>

          {/* Supplementary Materials */}
          <section id="supplementary" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Supplementary Materials</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Authors may submit supplementary materials to provide additional context or support for their manuscript, including datasets, videos, appendices, or other relevant files. Each file must be clearly labeled, numbered, and appropriately cited in the main text. Acceptable formats include DOC/DOCX, XLS/XLSX, PDF, and JPEG, with a maximum file size of 10 MB per file. Supplementary materials should be concise, directly relevant to the manuscript, and designed to enhance the reader's understanding without replacing essential content in the main text.
            </p>
          </section>

          {/* AI Ethics */}
          <section id="ai-ethics" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Ethical Statements for AI / Secondary Data</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Manuscripts using artificial intelligence (AI) tools or secondary datasets must include a clear ethical statement. Authors should specify whether ethical approval was obtained for the use of AI-processed or secondary datasets, including the name of the approving committee and reference number, if applicable. The role of AI in the study should be clearly described, including its use in data analysis, drafting, or interpretation, and any automated processes that influenced results or conclusions must be disclosed. Additionally, authors must confirm that all AI analyses and the use of secondary data comply with relevant privacy, ethical, and legal regulations.
            </p>
          </section>

          {/* Blinded Manuscript */}
          <section id="blinded-manuscript" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Blinded Manuscript File</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              The blinded manuscript file must not contain any author names, initials, or institutional affiliations, nor should it include acknowledgments. Page headers or the running title may include the manuscript title but must not mention the authors' names. Manuscripts that do not comply with the journal's blinding policy will be returned to the corresponding author.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The file should include the full text of the article, from Abstract through References, including tables. Figures should be submitted separately and not embedded in the manuscript file. Use DOC/DOCX formats; do not zip the files. File size should not exceed 1 MB (1024 KB). Pages should be numbered consecutively, beginning with the first page of the blinded manuscript.
            </p>
          </section>

          {/* Tables and Figures */}
          <section id="tables-figures" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Tables and Figures</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Tables should be submitted as separate DOC/DOCX files and must not be embedded in the manuscript. Each table should be numbered consecutively and include a clear title and footnotes as necessary. All tables must be cited in numerical order within the main text, and titles should be descriptive enough to be understood independently of the manuscript.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Figures should be submitted as separate high-resolution color images (≤ 4 MB) with recommended dimensions of up to 1800 × 1600 pixels or 5–6 inches. The preferred format is JPEG. Figures must not be embedded in the manuscript, and files should not be zipped. Figure legends should be included at the end of the manuscript and numbered sequentially to correspond with the figure files. All figures must be cited in numerical order within the main text, and legends should be descriptive enough to be understood independently of the manuscript.
            </p>
          </section>

          {/* References */}
          <section id="references" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">References</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              This journal follows the Vancouver style (as used by Index Medicus/NLM and recommended by the ICMJE). References should be numbered in the order they are first cited, with in-text citations indicated by superscript Arabic numerals after punctuation marks. References cited only in tables or figure legends should follow the numbering sequence of their first mention in the text. Authors should cite original research articles wherever possible and avoid abstracts, predatory journals, or AI-generated content. Manuscripts not yet accepted should be cited as "unpublished observations" with written permission, and personal communications should be included only if essential, with the name and date in parentheses and confirmation of accuracy. Journal titles should be abbreviated according to Index Medicus/NLM style, while non-indexed journals should be cited in full. All references must be accurate, complete, and verifiable.
            </p>
          </section>

          {/* Formatting Examples */}
          <section id="formatting-examples" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Formatting Examples (Vancouver Style)</h2>
            <div className="space-y-3">
              {[
                { label: 'Journal article', text: 'List the first six authors followed by et al.\nExample: Stanczuk GA, Currie H, Forson W, Baxter G, Lawrence J, Wilson A, et al. Self-sampling as the principal modality for population based cervical screening: Five-year follow-up of the PaVDaG study. Int J Cancer. 2022;150(8):1350-1356.' },
                { label: 'Book', text: 'Gupta P, Joshi P, Dewan P. Essential Pediatric Nursing, 5th ed. Jaypee Brothers Medical Publishers; 2022.' },
                { label: 'Chapter in a book', text: 'Meltzer PS, Kallioniemi A, Trent JM. Chromosome alterations in human solid tumors. In: Vogelstein B, Kinzler KW, editors. The Genetic Basis of Human Cancer. McGraw-Hill; 2002. p. 93–113.' },
                { label: 'Online source', text: 'MedlinePlus: trusted health information for you [Internet]. Bethesda (MD): National Library of Medicine (US); 2014 May 1. [Video]. Bilateral myringotomy tube placement; 2013 Jun 15 [cited 2014 May 2]. Available from: http://orlive.com/broward-health/videos/bilateral-myringotomy-tube-placement, accessed March 13, 2024.' },
              ].map((ex) => (
                <div key={ex.label} className="rounded-lg p-4 border border-gray-100 bg-gray-50 text-sm">
                  <p className="font-semibold text-gray-800 mb-1">{ex.label}:</p>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{ex.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ethical Clearance */}
          <section id="ethical-clearance" style={{ scrollMarginTop: '160px' }}>
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Ethical Clearance Certificate</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              All studies involving patients, volunteers, human biological material, or animals must submit a scanned copy of the Ethical Clearance Certificate issued by the appropriate institutional ethics committee or review board. Manuscripts without documented ethical approval will not be considered for review or publication.
            </p>
          </section>

          {/* Copyright and Author Forms */}
          <section id="copyright" style={{ scrollMarginTop: '160px' }} className="pb-16">
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Copyright and Author Forms</h2>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                Copyright Transfer Form: All accepted manuscripts must include a signed form transferring copyright to the journal.
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                Author Form: Authors must confirm originality, authorship, ethical compliance, and disclosure of conflicts/funding.
              </li>
            </ul>
            <p className="text-xs text-gray-500 mb-3">Templates for download:</p>
            <div className="flex gap-4 flex-wrap mb-8">
              <span className="text-xs font-semibold cursor-pointer hover:underline" style={{ color: '#0a5c3c' }}>Copyright Transfer Form (Template)</span>
              <span className="text-xs font-semibold cursor-pointer hover:underline" style={{ color: '#0a5c3c' }}>Author Form (Template)</span>
            </div>

            {/* Submission Checklist */}
            <div className="rounded-xl p-5" style={{ background: '#f0fdf4' }}>
              <h3 className="font-bold text-sm mb-4" style={{ color: '#0a5c3c' }}>Submission Checklist</h3>
              <ul className="space-y-2.5">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: '#065f46' }}>
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#0fb68c' }}>
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </main>
      </div>
    </>
  )
}
