import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Instruction for Authors – JAIMPH' }

const toc = [
  { label: 'Manuscript Submission Guidelines', id: 'manuscript-submission-guidelines' },
  { label: 'Types of Manuscripts', id: 'types-of-manuscripts' },
  { label: 'Research Article', id: 'research-article' },
  { label: 'Review Articles', id: 'review-articles' },
  { label: 'Short Communication', id: 'short-communication' },
  { label: 'Case Reports', id: 'case-reports' },
  { label: 'Submission Requirements', id: 'submission-requirements' },
  { label: 'Manuscript Formatting', id: 'manuscript-formatting' },
  { label: 'Reporting Guidelines', id: 'reporting-guidelines' },
  { label: 'Data Availability', id: 'data-availability' },
  { label: 'Supplementary Materials', id: 'supplementary-materials' },
  { label: 'Ethical Statements for AI / Secondary Data', id: 'ethical-statements' },
  { label: 'Blinded Manuscript File', id: 'blinded-manuscript' },
  { label: 'Tables and Figures', id: 'tables-and-figures' },
  { label: 'References', id: 'references' },
  { label: 'Formatting Examples', id: 'formatting-examples' },
  { label: 'Ethical Clearance Certificate', id: 'ethical-clearance' },
  { label: 'Copyright and Author Forms', id: 'copyright-forms' },
]

export default function InstructionForAuthorPage() {
  return (
    <>
      <JournalHeader subtitle="Instruction for Authors" />
      <div className="max-w-6xl mx-auto px-6 py-12 flex gap-10">

        {/* Sidebar TOC */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky" style={{ top: '155px' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-2">Contents</p>
            <nav className="space-y-0.5">
              {toc.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-gray-600 hover:text-green-800 py-1.5 pl-3 border-l-2 border-transparent hover:border-green-600 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-12">

          {/* Intro */}
          <p className="text-gray-700 leading-relaxed">
            The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH), the official
            journal of Tulitics, is a multidisciplinary, peer-reviewed quarterly journal advancing research
            at the intersection of medicine and artificial intelligence (AI). It publishes Original
            Research, Reviews, Short Communications, and Case Reports, providing a platform for AI-driven
            innovations and evidence-based insights that enhance healthcare and inform global health policy.
            The journal is fully open access, with no fees for submission, review, or publication, ensuring
            free and equitable dissemination of research worldwide. Contributions are welcomed across
            medicine, clinical research, public health, digital health, emerging technologies, and ethics.
          </p>

          {/* 1. Manuscript Submission Guidelines */}
          <section id="manuscript-submission-guidelines" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Manuscript Submission Guidelines</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Authors are requested to carefully review the journal's manuscript types and prepare their
                submissions in accordance with the journal's formatting and ethical guidelines. All
                manuscripts must be submitted through the online submission system.
              </p>
              <p>
                First-time users must register on the platform, free of charge. Once registered, authors
                can log in to their Author Centre to submit manuscripts, track the progress of their
                submissions, and manage revisions. Returning authors can simply log in using their existing
                credentials. For any technical issues, authors may contact the Technical Assistance team or
                the Editorial Office.
              </p>
            </div>
          </section>

          {/* 2. Types of Manuscripts */}
          <section id="types-of-manuscripts" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Types of Manuscripts</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) considers
              manuscripts reporting original research based on quantitative, qualitative, or mixed-method
              study designs. Submissions are accepted in the following categories:
            </p>

            {/* Research Article */}
            <div id="research-article" style={{ scrollMarginTop: '155px' }} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                Research Article
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The preferred length for original research articles is up to 3,000 words, excluding the
                abstract, tables, figures, and references. Each manuscript must include a structured
                abstract of no more than 250 words, organized under the following four subheadings:
                Background &amp; Objectives, Methods, Results, and Conclusions, followed by 5–8 keywords
                listed alphabetically. The main text should be arranged in the following order:
                Introduction, Materials &amp; Methods, Results, Discussion, Conclusion,
                Acknowledgments (if any), References, Tables, and Figures. Authors are encouraged to
                include up to five tables and/or figures, and manuscripts may cite up to 50 references.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Ethical approval from the relevant Ethics Committee or Institutional Review Board (IRB) is
                mandatory for all studies involving human participants or animals, and this must be clearly
                indicated in the Methods section. For clinical trials, registration is required, and the
                registration number or CTR number should be included in the manuscript. Original research
                articles may have up to six authors.
              </p>
            </div>

            {/* Review Articles */}
            <div id="review-articles" style={{ scrollMarginTop: '155px' }} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                Review Articles
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Review articles provide a comprehensive synthesis of current knowledge and may include
                narrative reviews, systematic reviews, or meta-analyses. Each submission should be
                accompanied by a summary of the contributor(s)' expertise and prior work in the relevant
                field. The preferred length for review articles is up to 4,000 words, excluding the
                abstract, tables, figures, and references, and manuscripts may include up to 100
                references. An unstructured abstract of up to 250 words must be provided, accurately
                summarizing the article. Authors should also provide 5–8 keywords arranged alphabetically
                for indexing purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Ethical approval should be mentioned if patient-level or unpublished data are included.
                Systematic reviews and meta-analyses should adhere to PRISMA guidelines, while narrative
                reviews should demonstrate critical appraisal of the literature. Manuscripts may include
                up to 5 tables and/or figures, and any supplementary material, such as additional datasets
                or appendices, should be properly labeled and referenced. Review articles may have up to
                six authors.
              </p>
            </div>

            {/* Short Communications */}
            <div id="short-communication" style={{ scrollMarginTop: '155px' }} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                Short Communications
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Short Communications are intended to rapidly disseminate preliminary findings, innovative
                methods, or emerging data that are timely and of high relevance to the field. These
                manuscripts should present concise, focused, and original work that does not warrant a
                full-length research article but is of scientific or clinical significance. The preferred
                length for Short Communications is up to 1,500 words, excluding the abstract, tables,
                figures, and references. Manuscripts may include up to 20 references. An unstructured
                abstract of up to 150 words must be provided, summarizing the key objectives, methods,
                results, and conclusions. Authors should also provide 3–6 keywords arranged alphabetically.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                The main text should be organized in the following order: Introduction, Materials &amp;
                Methods, Results, Discussion, Conclusion (if applicable), References, Tables, and Figures.
                Authors may include up to 3 tables and/or figures, and any supplementary material, such as
                additional datasets, should be properly labelled and referenced. Ethical approval from the
                relevant Ethics Committee or Institutional Review Board (IRB) is required for studies
                involving human participants or animals and must be clearly stated in the Methods section.
                Short Communications may have up to six authors.
              </p>
            </div>

            {/* Case Reports */}
            <div id="case-reports" style={{ scrollMarginTop: '155px' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                Case Reports
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Case Reports are intended to describe clinically significant, rare, or educational cases
                that provide important insights into disease mechanisms, diagnosis, management, or outcomes.
                They should offer a clear and concise presentation of the case, highlighting its relevance
                to clinical practice or public health.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                The preferred length for Case Reports is up to 1,500 words, excluding the abstract,
                tables, figures, and references. Manuscripts may include up to 20 references. An
                unstructured abstract of up to 150 words must be provided, summarizing the key features,
                diagnosis, management, and outcomes of the case. Authors should also provide 3–6 keywords
                arranged alphabetically.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                The main text should be organized in the following order: Introduction, Case Description,
                Discussion, Conclusion, References, Tables, and Figures. Authors may include up to 5
                tables and/or figures, and any supplementary material, such as additional images or data,
                should be properly labelled and referenced. Ethical approval or informed consent from the
                patient or legal guardian is mandatory, and this should be clearly stated in the Case
                Description section. All patient identifiers must be removed to ensure confidentiality.
                Case Reports may have up to six authors.
              </p>
            </div>
          </section>

          {/* 3. Submission Requirements */}
          <section id="submission-requirements" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Submission Requirements</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              All manuscripts must include: First Page File, Blinded Manuscript, Tables &amp; Figures,
              Scanned Ethical Clearance Certificate, and Authors' Form &amp; Copyright Transfer Agreement.
              Detailed instructions for each component are provided below.
            </p>

            <h3 className="text-base font-bold text-gray-900 mb-2">First Page &amp; Cover Page</h3>
            <p className="text-gray-700 leading-relaxed mb-5">
              The First Page File should be submitted as a single document and include the Covering Letter,
              and Title Page. This file is separate from the main manuscript to ensure blinded peer review.
            </p>

            <h3 className="text-base font-bold text-gray-900 mb-2">Covering Letter</h3>
            <p className="text-gray-700 leading-relaxed mb-5">
              The covering letter should briefly explain the novelty and relevance of the manuscript and
              justify why it is suitable for publication in Journal of Artificial Intelligence in Medicine
              and Public Health (JAIMPH) rather than a specialty journal. One author should be designated
              as the corresponding author, responsible for all communication with the Editorial Office.
              Authors must confirm that the manuscript is original, not previously published, and not under
              consideration elsewhere, in whole or in part.
            </p>

            <h3 className="text-base font-bold text-gray-900 mb-3">Title Page</h3>
            <p className="text-gray-700 leading-relaxed mb-3">The Title Page must include the following details:</p>
            <ul className="space-y-3">
              {[
                { term: 'Article Title', def: 'Concise and informative; the study type may be included after a colon.' },
                { term: 'Running Title', def: 'Maximum 40 characters.' },
                { term: 'Author Information', def: 'Full names, highest academic degrees, and designations at the time of the study. Include mobile numbers, email addresses, and ORCID iDs, if available.' },
                { term: 'Affiliations', def: 'Department(s) and institution(s) where the work was conducted (use the affiliation at the time of the study).' },
                { term: 'Corresponding Author Details', def: 'Name, email, and phone number.' },
                { term: 'Authors\' Contributions', def: 'Specify the role of each author in the study.' },
                { term: 'Conflict of Interest Statement', def: 'Disclose any financial or personal relationships that may influence the work.' },
                { term: 'Funding Statement', def: 'List sources of support, including grants, equipment, or drugs.' },
                { term: 'Ethical Approval', def: 'Provide the name of the Ethics Committee/IRB, approval date, and clearance number; ensure the committee is registered with the regulatory authority.' },
                { term: 'Clinical Trial Registration Number', def: 'If applicable.' },
                { term: 'Data Availability Statement', def: 'Required for all original research manuscripts.' },
                { term: 'Declaration of Artificial Intelligence (AI) Use', def: 'Indicate if AI tools were used in drafting or analysis.' },
                { term: 'Word Count', def: 'Excluding abstract, tables, figures, acknowledgments, key messages, and references.' },
                { term: 'Number of Tables and Figures', def: 'Specify totals.' },
                { term: 'Disclaimers', def: 'If any.' },
              ].map(item => (
                <li key={item.term} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  <span><strong className="text-gray-900">{item.term}:</strong> {item.def}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Manuscript Formatting */}
          <section id="manuscript-formatting" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Manuscript Formatting</h2>
            <p className="text-gray-700 leading-relaxed">
              Manuscripts must be typed in English, using 12-point Times New Roman font, double-spaced,
              on A4-sized paper with 1-inch margins on all sides. To ensure a blinded peer review,
              manuscripts must not include the authors' names or institutional affiliations within the
              main text.
            </p>
          </section>

          {/* 5. Reporting Guidelines */}
          <section id="reporting-guidelines" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Reporting Guidelines</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Authors must ensure that their manuscripts comply with internationally recognized reporting
              standards relevant to the study design. Adherence to these guidelines improves transparency,
              reproducibility, and quality of reporting. The following standards should be followed:
            </p>
            <ul className="space-y-4">
              {[
                { name: 'CONSORT', desc: 'Consolidated Standards of Reporting Trials — For randomized controlled trials (RCTs). Authors should include a completed CONSORT checklist and flow diagram.' },
                { name: 'STROBE', desc: 'Strengthening the Reporting of Observational Studies in Epidemiology — For observational studies, including cohort, case-control, and cross-sectional studies.' },
                { name: 'PRISMA', desc: 'Preferred Reporting Items for Systematic Reviews and Meta-Analyses — For systematic reviews and meta-analyses. Authors should provide a PRISMA flow diagram and checklist.' },
                { name: 'CARE', desc: 'Case Report Guidelines — For individual case reports, ensuring complete and transparent clinical information.' },
              ].map(g => (
                <li key={g.name} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 font-bold text-xs px-2 py-0.5 rounded flex-shrink-0" style={{ background: '#d1fae5', color: '#0a5c3c' }}>{g.name}</span>
                  <span>{g.desc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Data Availability */}
          <section id="data-availability" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Data Availability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Authors are required to include a Data Availability Statement in their manuscript, clearly
              indicating the accessibility of the data underlying their study. The statement should specify
              whether the data are:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Publicly available in a recognized repository (provide the repository name and DOI or URL).',
                'Available upon reasonable request from the corresponding author.',
                'Restricted due to privacy, ethical, or legal considerations.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed text-sm">
              For restricted or request-based data, authors must provide appropriate contact information
              for data access. Clear and transparent data availability promotes reproducibility and
              enhances the integrity of published research.
            </p>
          </section>

          {/* 7. Supplementary Materials */}
          <section id="supplementary-materials" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Supplementary Materials</h2>
            <p className="text-gray-700 leading-relaxed">
              Authors may submit supplementary materials to provide additional context or support for
              their manuscript, including datasets, videos, appendices, or other relevant files. Each file
              must be clearly labeled, numbered, and appropriately cited in the main text. Acceptable
              formats include DOC/DOCX, XLS/XLSX, PDF, and JPEG, with a maximum file size of 10 MB per
              file. Supplementary materials should be concise, directly relevant to the manuscript, and
              designed to enhance the reader's understanding without replacing essential content in the
              main text.
            </p>
          </section>

          {/* 8. Ethical Statements for AI */}
          <section id="ethical-statements" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Ethical Statements for AI / Secondary Data</h2>
            <p className="text-gray-700 leading-relaxed">
              Manuscripts using artificial intelligence (AI) tools or secondary datasets must include a
              clear ethical statement. Authors should specify whether ethical approval was obtained for
              the use of AI-processed or secondary datasets, including the name of the approving committee
              and reference number, if applicable. The role of AI in the study should be clearly described,
              including its use in data analysis, drafting, or interpretation, and any automated processes
              that influenced results or conclusions must be disclosed. Additionally, authors must confirm
              that all AI analyses and the use of secondary data comply with relevant privacy, ethical, and
              legal regulations.
            </p>
          </section>

          {/* 9. Blinded Manuscript File */}
          <section id="blinded-manuscript" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Blinded Manuscript File</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The blinded manuscript file must not contain any author names, initials, or institutional
              affiliations, nor should it include acknowledgments. Page headers or the running title may
              include the manuscript title but must not mention the authors' names. Manuscripts that do
              not comply with the journal's blinding policy will be returned to the corresponding author.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The file should include the full text of the article, from Abstract through References,
              including tables. Figures should be submitted separately and not embedded in the manuscript
              file. Use DOC/DOCX formats; do not zip the files. File size should not exceed 1 MB
              (1024 KB). Pages should be numbered consecutively, beginning with the first page of the
              blinded manuscript.
            </p>
          </section>

          {/* 10. Tables and Figures */}
          <section id="tables-and-figures" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Tables and Figures</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Tables should be submitted as separate DOC/DOCX files and must not be embedded in the
              manuscript. Each table should be numbered consecutively and include a clear title and
              footnotes as necessary. All tables must be cited in numerical order within the main text,
              and titles should be descriptive enough to be understood independently of the manuscript.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Figures should be submitted as separate high-resolution color images (≤ 4 MB) with
              recommended dimensions of up to 1800 × 1600 pixels or 5–6 inches. The preferred format is
              JPEG. Figures must not be embedded in the manuscript, and files should not be zipped. Figure
              legends should be included at the end of the manuscript and numbered sequentially to
              correspond with the figure files. All figures must be cited in numerical order within the
              main text, and legends should be descriptive enough to be understood independently of the
              manuscript.
            </p>
          </section>

          {/* 11. References */}
          <section id="references" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">References</h2>
            <p className="text-gray-700 leading-relaxed">
              This journal follows the Vancouver style (as used by Index Medicus/NLM and recommended by
              the ICMJE). References should be numbered in the order they are first cited, with in-text
              citations indicated by superscript Arabic numerals after punctuation marks. References cited
              only in tables or figure legends should follow the numbering sequence of their first mention
              in the text. Authors should cite original research articles wherever possible and avoid
              abstracts, predatory journals, or AI-generated content. Manuscripts not yet accepted should
              be cited as "unpublished observations" with written permission, and personal communications
              should be included only if essential, with the name and date in parentheses and confirmation
              of accuracy. Journal titles should be abbreviated according to Index Medicus/NLM style,
              while non-indexed journals should be cited in full. All references must be accurate,
              complete, and verifiable.
            </p>
          </section>

          {/* 12. Formatting Examples */}
          <section id="formatting-examples" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Formatting Examples (Vancouver Style)</h2>
            <p className="text-sm text-gray-500 mb-4">Journal article: List the first six authors followed by et al.</p>
            <div className="space-y-4">
              {[
                {
                  type: 'Journal Article',
                  example: 'Stanczuk GA, Currie H, Forson W, Baxter G, Lawrence J, Wilson A, et al. Self-sampling as the principal modality for population based cervical screening: Five-year follow-up of the PaVDaG study. Int J Cancer. 2022;150(8):1350-1356.',
                },
                {
                  type: 'Book',
                  example: 'Gupta P, Joshi P, Dewan P. Essential Pediatric Nursing, 5th ed. Jaypee Brothers Medical Publishers; 2022.',
                },
                {
                  type: 'Chapter in a Book',
                  example: 'Meltzer PS, Kallioniemi A, Trent JM. Chromosome alterations in human solid tumors. In: Vogelstein B, Kinzler KW, editors. The Genetic Basis of Human Cancer. McGraw-Hill; 2002. p. 93–113.',
                },
                {
                  type: 'Online Source',
                  example: 'MedlinePlus: trusted health information for you [Internet]. Bethesda (MD): National Library of Medicine (US); 2014 May 1. [Video]. Bilateral myringotomy tube placement; 2013 Jun 15 [cited 2014 May 2]. Available from: http://orlive.com/broward-health/videos/bilateral-myringotomy-tube-placement, accessed March 13, 2024.',
                },
              ].map(ex => (
                <div key={ex.type} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{ex.type}</p>
                  <p className="text-sm text-gray-700 italic leading-relaxed">{ex.example}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 13. Ethical Clearance Certificate */}
          <section id="ethical-clearance" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Ethical Clearance Certificate</h2>
            <p className="text-gray-700 leading-relaxed">
              All studies involving patients, volunteers, human biological material, or animals must
              submit a scanned copy of the Ethical Clearance Certificate issued by the appropriate
              institutional ethics committee or review board. Manuscripts without documented ethical
              approval will not be considered for review or publication.
            </p>
          </section>

          {/* 14. Copyright and Author Forms */}
          <section id="copyright-forms" style={{ scrollMarginTop: '155px' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Copyright and Author Forms</h2>
            <ul className="space-y-3 mb-8">
              {[
                { term: 'Copyright Transfer Form', def: 'All accepted manuscripts must include a signed form transferring copyright to the journal.' },
                { term: 'Author Form', def: 'Authors must confirm originality, authorship, ethical compliance, and disclosure of conflicts/funding.' },
              ].map(item => (
                <li key={item.term} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0fb68c' }} />
                  <span><strong className="text-gray-900">{item.term}:</strong> {item.def}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-bold text-gray-900 mb-4">Submission Checklist</h3>
            <ul className="space-y-3">
              {[
                'First Page File / Cover Letter – includes Title Page, Authors\' Contributions, Ethical Approval, Funding, Conflict of Interest, Trial Registration (if applicable).',
                'Blinded Manuscript File – full text (Abstract to References), no author names/affiliations, pages numbered consecutively.',
                'Tables – Submitted separately, numbered, titled, cited in text.',
                'Figures – High-resolution JPEGs, ≤4 MB, numbered, legends included, cited in text.',
                'Ethical Clearance Certificate – Scanned copy included.',
                'Copyright Transfer & Author Forms – Signed and submitted.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </>
  )
}
