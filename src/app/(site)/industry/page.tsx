'use client'
import { useState } from 'react'
import Link from 'next/link'

const sections = [
  {
    label: 'Healthcare & Hospitals',
    body: [
      'Healthcare organisations are facing greater difficulties when it comes to offering superior quality care for their patients while increasing efficiency and achieving compliance with regulations. Healthcare & Hospital Research Services offered by us offer scientific solutions to help healthcare institutions make better decisions about the clinical and administrative aspects of healthcare organisations.',
      'Through the application of strong research methods and statistics, our experts can provide valuable and reliable information that will improve healthcare provision, patient outcomes, and organisational performance of the organisations.',
      'We cover such areas as hospital operations research, patient outcome research, health care quality improvement, health services research, patient satisfaction research, health care management research, resource utilisation research, human resource planning, and clinical performance research.',
    ],
  },
  {
    label: 'Public Health & Epidemiology',
    body: [
      'Public health studies are crucial in gaining an insight into disease trends, assessing healthcare initiatives and ensuring good health among populations across the globe. Our Public Health & Epidemiology Research Services are designed to help researchers, government organisations, healthcare organisations, non-profit organisations and universities develop credible scientific information to guide public health decisions and prevent disease spread.',
      'Our interdisciplinary research team performs epidemiology studies, population health research, disease surveillance and investigation, environmental health studies, health risk assessment, infectious diseases research, chronic disease research, health behaviour studies and program evaluation. With sound study design, sophisticated statistical analyses and thorough reporting, our services ensure reliable results for sound health care planning and policy formulation.',
    ],
  },
  {
    label: 'Pharmaceutical & Drug Development',
    body: [
      'The pharma industry relies heavily on scientific research to ensure the safe development of effective and innovative drugs. Our research services in Pharmaceutical & Drug Development aim to offer complete assistance during drug development from preclinical stages till post-marketing phases to support innovation as well as global regulatory needs of pharmaceutical, biotech, CRO, and research organisations.',
      'The areas covered under our research services for pharmaceutical and drug development are drug discovery research, pre-clinical study services, clinical development assistance, pharmacovigilance, bioequivalence testing, regulatory documentation, medical writing, safety analysis, statistical programming, real-world evidence and post-marketing surveillance. With scientific and analytical skills, we offer accurate results in research.',
    ],
  },
  {
    label: 'Biotechnology & Life Sciences',
    body: [
      'Scientific innovation within the realm of biotechnology and life sciences involves scientific research of the highest quality, advanced analysis methods, and multidisciplinary knowledge. Our Biotechnology & Life Sciences Research Services help pharmaceutical companies, biotechnology enterprises, academic institutions, and research organisations perform scientific research that contributes to scientific innovations and the development of products.',
      'We specialise in such areas as molecular biology, genomics, proteomics, bioinformatics, biomarker research, lab data analysis, experimental design, life science statistics, biotechnology product evaluation, and scientific publishing. The research-driven nature of our services allows us to derive useful scientific information from biological data.',
    ],
  },
  {
    label: 'Digital Health & Telemedicine',
    body: [
      'Technologies are bringing about change in the healthcare industry by increasing access, patient engagement, and efficiency. The Digital Health & Telemedicine Research Services assess digital health solutions using evidence-based research to allow healthcare organisations, technology vendors, and researchers to create effective digital health solutions that are centred on patients.',
      'Some of our research services include telemedicine effectiveness evaluation, mHealth research, wearables evaluation, digital therapeutics research, remote patient monitoring evaluation, healthcare technology validation, implementation science, user experience, and artificial intelligence in healthcare analytics.',
    ],
  },
  {
    label: 'Medical Devices & MedTech',
    body: [
      'Medical devices are an integral part of current healthcare systems, which necessitates thorough and systematic research and evaluation. Medical Devices & MedTech Research Services provided by us are intended to assist healthcare organisations, companies producing medical devices and research institutions in creating scientifically valid evidence during the process of developing products.',
      'We specialise in such areas as evaluation of device performance, creation of clinical evidence, usability studies, human factor research, health technology assessment, validation, risk assessment, preparation of regulatory documentation, post-market evaluation and statistical analysis. We assist our clients in inventing new healthcare technologies, meeting quality and regulatory requirements.',
    ],
  },
  {
    label: 'Clinical Research & Clinical Trials',
    body: [
      'Clinical research is the basis of evidence-based medicine and involves assessment of the safety and efficacy of medical procedures, therapies and other healthcare intervention techniques. Clinical Research & Clinical Trial Services offered by us involve comprehensive solutions for sponsors, CROs, hospitals and academic researchers, which help in conducting clinically and scientifically robust trials.',
      'Our expertise lies in developing clinical trial protocols, designing clinical trials, biostatistics, statistical analysis plan, clinical data management, patient recruitment assistance, safety monitoring, medical writing, regulatory document preparation, interim analysis and clinical study report generation.',
    ],
  },
  {
    label: 'Medical Imaging & Diagnostics',
    body: [
      'Technological advances in the areas of medical imaging and diagnostics keep on transforming the field of disease identification and decision-making in clinical practice. The Medical Imaging & Diagnostics Research Services we offer deliver a full scope of research assistance aimed at testing imaging technologies, diagnostic devices, and artificial intelligence-based diagnostics solutions employing scientific methods of analysis.',
      'The types of services we provide include diagnostic accuracy research, radiology research, medical imaging analysis, imaging biomarker validation, artificial intelligence model evaluation, diagnostics device evaluation, comparative effectiveness studies, and statistical validation.',
    ],
  },
  {
    label: 'Health Informatics & Data Science',
    body: [
      'Data is produced in abundance within the healthcare industry and could lead to improved patient health if analysed effectively. The Health Informatics & Data Science Research Services offered by us integrate the skills of the healthcare field along with analytics to make data-driven decisions for the organisation.',
      'Our range of research services includes electronic health records analytics, healthcare data management, predictive analytics, machine learning, artificial intelligence, clinical decision support systems, healthcare dashboards, real world evidence research, big data analytics, and data visualisation. Our services allow healthcare organisations to enhance their clinical operations.',
    ],
  },
  {
    label: 'Healthcare Policy & Regulation',
    body: [
      'Healthcare policies and regulations play a crucial role in ensuring the provision of secure, just and sustainable healthcare systems. Through our Healthcare Policy & Regulation Research Services, we enable policymakers, healthcare providers, government agencies and research institutions access to evidence-based analysis of health policies and regulations to help make informed decisions.',
      'We can undertake research in areas including health policy analysis, health economics and outcomes research (HEOR), regulation research, reimbursement research, healthcare governance research, policy impact analysis, compliance analysis, comparative health policy research, systematic evidence reviews and stakeholder analysis.',
    ],
  },
]

export default function IndustryPage() {
  const [active, setActive] = useState(0)
  const section = sections[active]

  return (
    <>
      {/* ── HERO BANNER ─────────────────────────────────── */}
      <section
        className="relative text-white flex items-center"
        style={{
          minHeight: '260px',
          backgroundImage: 'url(/images/hero-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(5,30,25,0.70)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          <p className="text-white text-2xl font-bold mb-3">Industries</p>
          <p className="text-gray-200 text-sm max-w-2xl leading-relaxed">
            Scientific research solutions to help healthcare institutions make better decisions about clinical and administrative aspects.
          </p>
        </div>
      </section>

      {/* ── MAIN SELECT YOUR NEED SECTION ───────────────── */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto border border-gray-200 rounded-lg overflow-hidden">

          {/* Header row */}
          <div className="flex">
            <div
              className="w-56 flex-shrink-0 px-5 py-4 font-bold text-white text-base border-b border-white/20"
              style={{ background: '#0a5c3c' }}
            >
              Select Your Need
            </div>
            <div className="flex-1 px-6 py-4 font-medium text-gray-700 border-b border-gray-200 text-sm">
              Choose Our Services to meet your Publication Goals
            </div>
          </div>

          {/* Body row */}
          <div className="flex min-h-96">

            {/* Left sidebar tabs */}
            <div className="w-56 flex-shrink-0 border-r border-gray-200" style={{ background: '#0a5c3c' }}>
              {sections.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-5 py-3 text-sm border-b border-white/10 transition-colors leading-snug ${
                    i === active
                      ? 'font-bold text-white' + ' border-l-4 border-l-white bg-black/20'
                      : 'text-green-100 hover:bg-black/10'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Right content */}
            <div className="flex-1 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5">{section.label}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {section.body.map((para, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-lg p-5 flex flex-col"
                  >
                    <p className="text-xs text-gray-400 mb-1">Healthcare service</p>
                    <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">{para}</p>
                    <button className="self-start text-sm font-semibold text-gray-800 border-b-2 border-gray-800 pb-0.5 hover:text-green-800 hover:border-green-800 transition-colors">
                      Enquire Now
                    </button>
                  </div>
                ))}
              </div>

              {section.body.length > 2 && (
                <div className="mt-5">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <p className="text-xs text-gray-400 mb-1">Healthcare service</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-5">{section.body[2]}</p>
                    <button className="self-start text-sm font-semibold text-gray-800 border-b-2 border-gray-800 pb-0.5 hover:text-green-800 hover:border-green-800 transition-colors">
                      Enquire Now
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM BANNER ───────────────────────────────── */}
      <section
        className="relative text-white py-16 px-6"
        style={{
          backgroundImage: 'url(/images/ai-healthcare.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(5,20,15,0.78)' }} />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Advancing Research in Healthcare &amp; AI</h2>
          <p className="text-gray-300 text-sm mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with us to publish your research and contribute to evidence-based innovations in healthcare and medicine.
          </p>
          <Link
            href="https://journal-management-system-omega.vercel.app/"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white font-semibold text-sm hover:bg-white hover:text-gray-900 transition-colors"
          >
            Submit Your Research →
          </Link>
        </div>
      </section>
    </>
  )
}
