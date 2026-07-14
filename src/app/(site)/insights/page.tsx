import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights – Research Blogs & Healthcare AI Articles | Tulitics',
  description: 'Explore expert articles, research insights, and thought leadership on AI in healthcare, chronic disease management, and open-access publishing from Tulitics.',
  alternates: { canonical: 'https://guires.info/insights' },
}

const posts = [
  {
    slug: 'artificial-intelligence-public-health-systems',
    badge: 'Blog',
    date: 'July 10, 2026',
    readTime: '10 min read',
    title: 'The Role of Artificial Intelligence in Modern Public Health Systems',
    excerpt: 'Artificial Intelligence in public health improves disease detection, healthcare planning, surveillance, and decision-making through machine learning and predictive analytics.',
    image: '/images/blog-ai-public-health-feature.jpg',
    keywords: ['AI Public Health', 'Epidemiology AI', 'Disease Surveillance', 'Predictive Analytics'],
  },
  {
    slug: 'machine-learning-disease-prediction-prevention',
    badge: 'Blog',
    date: 'July 10, 2026',
    readTime: '10 min read',
    title: 'Machine Learning Applications in Disease Prediction and Prevention',
    excerpt: 'Machine learning disease prediction is transforming healthcare through AI risk models, predictive analytics, and personalized diagnosis for early disease prevention.',
    image: '/images/blog-ml-disease-feature.jpg',
    keywords: ['ML Disease Prediction', 'Predictive Analytics', 'AI Risk Models', 'Deep Learning'],
  },
  {
    slug: 'ai-precision-medicine-healthcare-delivery',
    badge: 'Blog',
    date: 'July 10, 2026',
    readTime: '10 min read',
    title: 'AI-Driven Innovations in Precision Medicine and Healthcare Delivery',
    excerpt: 'Discover how AI-driven precision medicine improves diagnostics, treatment decisions, and healthcare delivery systems. Explore real-world applications, implementation strategies, challenges, and future trends.',
    image: '/images/blog-ai-precision-feature.svg',
    keywords: ['Precision Medicine', 'AI Healthcare', 'Genomics', 'Personalised Therapy'],
  },
  {
    slug: 'ai-clinical-decision-making-patient-care',
    badge: 'Blog',
    date: 'July 13, 2026',
    readTime: '11 min read',
    title: 'Artificial Intelligence in Clinical Decision-Making and Patient Care',
    excerpt: 'Discover how AI transforms clinical decision-making with CDSS, predictive analytics, and personalized care to improve diagnosis and patient outcomes in modern healthcare.',
    image: '/images/blog-ai-clinical-feature.svg',
    keywords: ['CDSS', 'AI Healthcare', 'Clinical Decisions', 'Patient Care'],
  },
  {
    slug: 'ai-powered-early-detection-strategies-chronic-diseases',
    badge: 'Blog',
    date: 'July 13, 2026',
    readTime: '12 min read',
    title: 'AI-Powered Early Detection Strategies for Chronic Diseases',
    excerpt: 'AI for early disease detection is transforming chronic disease management by analyzing medical records, imaging, wearable data, and lab results to identify health risks before symptoms appear.',
    image: '/images/blog-ai-detection-feature.svg',
    keywords: ['AI', 'Chronic Disease', 'Predictive Analytics', 'Healthcare'],
  },
]

export default function InsightsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-12 sm:py-16 px-4 sm:px-6" style={{ background: 'linear-gradient(135deg, #0a2e2e 0%, #0d4a3a 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0fb68c' }}>Tulitics</p>
          <h1 className="text-2xl sm:text-4xl font-extrabold mb-3">Insights</h1>
          <p className="text-green-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Expert articles, research commentary, and thought leadership on AI in healthcare, scholarly publishing, and chronic disease management.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/insights/blog/${post.slug}`} className="group block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: '#d1faf0', color: '#0a8c6a' }}>{post.badge}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-xs text-gray-400">· {post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-green-800 transition-colors">{post.title}</h2>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.keywords.map((kw) => (
                      <span key={kw} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{kw}</span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold" style={{ color: '#0fb68c' }}>Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
