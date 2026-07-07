import type { Metadata } from 'next'
import JournalHeader from '@/components/JournalHeader'

export const metadata: Metadata = { title: 'Instruction for Author – JAIMPH' }

const toc = [
  'Manuscript Submission Guidelines','Type of Manuscripts','Research Article','Review Articles',
  'Short Communication','Case Reports','Submission Requirements','Manuscript Formatting',
  'Report Guidelines','Data Availability','Supplementary Materials',
  'Ethical Statements for AI / Secondary Data','Blinded Manuscript File',
  'Tables and Figures','Reference','Formatting Example','Copyright and Author Forms',
]

export default function InstructionForAuthorPage() {
  return (
    <>
      <JournalHeader subtitle="Instruction for Authors" />
      <div className="max-w-6xl mx-auto px-6 py-12 flex gap-10">
        <aside className="hidden lg:block w-60 flex-shrink-0">
          <div className="sticky" style={{ top: '155px' }}>
            <nav className="space-y-1">
              {toc.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                  className="block text-sm text-gray-600 hover:text-green-800 py-1 pl-2 border-l-2 border-transparent hover:border-green-700">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        <div className="flex-1 min-w-0 space-y-10">
          <p className="text-gray-700 leading-relaxed">
            The Journal of Artificial Intelligence in Medicine and Public Health (JAIMPH) is a multidisciplinary, peer-reviewed
            quarterly journal. It publishes Original Research, Reviews, Short Communications, and Case Reports. The journal is
            fully open access, with no fees for submission, review, or publication.
          </p>

          <section style={{ scrollMarginTop: '155px' }} id="manuscript-submission-guidelines">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Manuscript Submission Guidelines</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Authors are requested to carefully review the journal's manuscript types and prepare their submissions in accordance with the journal's formatting and ethical guidelines. All manuscripts must be submitted through the online submission system.</p>
            <p className="text-gray-700 leading-relaxed">First-time users must register on the platform, free of charge. Once registered, authors can log in to their Author Centre to submit manuscripts, track progress, and manage revisions.</p>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="type-of-manuscripts">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Types of Manuscripts</h2>
            <p className="text-gray-700 leading-relaxed mb-6">JAIMPH considers manuscripts reporting original research based on quantitative, qualitative, or mixed-method study designs.</p>
            <div className="space-y-8">
              <div style={{ scrollMarginTop: '155px' }} id="research-article">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Article:</h3>
                <p className="text-gray-700 leading-relaxed mb-3">Up to 3,000 words (excluding abstract, tables, figures, references). Structured abstract ≤250 words with subheadings: Background &amp; Objectives, Methods, Results, Conclusions. 5–8 keywords. Up to 50 references.</p>
              </div>
              <div style={{ scrollMarginTop: '155px' }} id="review-articles">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Review Articles</h3>
                <p className="text-gray-700 leading-relaxed">Up to 4,000 words. Unstructured abstract ≤250 words. Up to 100 references. Systematic reviews should follow PRISMA guidelines.</p>
              </div>
              <div style={{ scrollMarginTop: '155px' }} id="short-communication">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Short Communications</h3>
                <p className="text-gray-700 leading-relaxed">Up to 1,500 words. Unstructured abstract ≤150 words. Up to 20 references. 3–6 keywords.</p>
              </div>
              <div style={{ scrollMarginTop: '155px' }} id="case-reports">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Case Reports</h3>
                <p className="text-gray-700 leading-relaxed">Up to 1,500 words. Unstructured abstract ≤150 words. Up to 20 references. Ethical approval or informed consent is mandatory.</p>
              </div>
            </div>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="submission-requirements">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Submission Requirements</h2>
            <p className="text-gray-700 leading-relaxed mb-4">All manuscripts must include: First Page File, Blinded Manuscript, Tables &amp; Figures, Ethical Clearance Certificate, and Authors' Form &amp; Copyright Transfer Agreement.</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Title Page</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Article Title:</strong> Concise and informative.</li>
              <li><strong>Running Title:</strong> Maximum 40 characters.</li>
              <li><strong>Author Information:</strong> Full names, highest academic degrees, ORCID iDs.</li>
              <li><strong>Affiliations:</strong> Department(s) and institution(s).</li>
              <li><strong>Corresponding Author Details:</strong> Name, email, and phone number.</li>
              <li><strong>Conflict of Interest Statement:</strong> Disclose any financial relationships.</li>
              <li><strong>Funding Statement:</strong> List sources of support.</li>
              <li><strong>Ethical Approval:</strong> Ethics committee name, approval date, and clearance number.</li>
              <li><strong>Declaration of AI Use:</strong> Indicate if AI tools were used.</li>
            </ul>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="manuscript-formatting">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Manuscript Formatting</h2>
            <p className="text-gray-700 leading-relaxed">Manuscripts must be typed in English, 12-point Times New Roman, double-spaced, on A4-sized paper with 1-inch margins. Do not include author names or affiliations in the main text.</p>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="report-guidelines">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Reporting Guidelines</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>CONSORT</strong>: For randomized controlled trials (RCTs).</li>
              <li><strong>STROBE</strong>: For observational studies.</li>
              <li><strong>PRISMA</strong>: For systematic reviews and meta-analyses.</li>
              <li><strong>CARE</strong>: For individual case reports.</li>
            </ul>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="data-availability">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Data Availability</h2>
            <p className="text-gray-700 leading-relaxed">Authors must include a Data Availability Statement indicating whether data are: publicly available, available upon reasonable request, or restricted due to privacy/legal considerations.</p>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="supplementary-materials">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Supplementary Materials</h2>
            <p className="text-gray-700 leading-relaxed">Authors may submit supplementary materials (datasets, videos, appendices). Each file must be clearly labeled and cited in the main text. Maximum file size: 10 MB per file.</p>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="ethical-statements-for-ai--secondary-data">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Ethical Statements for AI / Secondary Data</h2>
            <p className="text-gray-700 leading-relaxed">Manuscripts using AI tools or secondary datasets must include a clear ethical statement. Authors should specify whether ethical approval was obtained and describe the role of AI in the study.</p>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="blinded-manuscript-file">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Blinded Manuscript File</h2>
            <p className="text-gray-700 leading-relaxed">The blinded manuscript must not contain any author names, initials, or institutional affiliations. Submit in DOC/DOCX format. File size must not exceed 1 MB.</p>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="tables-and-figures">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Tables and Figures</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Tables: separate DOC/DOCX files, numbered consecutively with titles. Figures: high-resolution JPEG (≤4 MB, up to 1800×1600 px). Do not embed figures in the manuscript.</p>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="reference">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">References</h2>
            <p className="text-gray-700 leading-relaxed">This journal follows the Vancouver style. References should be numbered in the order they are first cited, with in-text citations indicated by superscript Arabic numerals after punctuation marks.</p>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="formatting-example">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Formatting Examples (Vancouver Style)</h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold mb-1">Journal article:</p>
                <p className="text-sm italic">Stanczuk GA, Currie H, et al. Self-sampling as the principal modality for population based cervical screening. Int J Cancer. 2022;150(8):1350-1356.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold mb-1">Book:</p>
                <p className="text-sm italic">Gupta P, Joshi P, Dewan P. Essential Pediatric Nursing, 5th ed. Jaypee Brothers Medical Publishers; 2022.</p>
              </div>
            </div>
          </section>

          <section style={{ scrollMarginTop: '155px' }} id="copyright-and-author-forms">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Copyright and Author Forms</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Copyright Transfer Form:</strong> All accepted manuscripts must include a signed form transferring copyright to the journal.</li>
              <li><strong>Author Form:</strong> Authors must confirm originality, authorship, ethical compliance, and disclosure of conflicts/funding.</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Submission Checklist</h3>
            <ul className="space-y-2">
              {[
                'First Page File / Cover Letter – Title Page, Authors\' Contributions, Ethical Approval, Funding, Conflict of Interest.',
                'Blinded Manuscript File – full text (Abstract to References), no author names/affiliations.',
                'Tables – Submitted separately, numbered, titled, cited in text.',
                'Figures – High-resolution JPEGs, ≤4 MB, numbered, legends included.',
                'Ethical Clearance Certificate – Scanned copy included.',
                'Copyright Transfer & Author Forms – Signed and submitted.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-700 mt-0.5">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}
