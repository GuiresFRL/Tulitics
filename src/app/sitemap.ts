import type { MetadataRoute } from 'next'

const BASE = 'https://guires.info'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/journal`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/journal/ai-medicine`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/journal/aim-and-scope`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/journal/editorial-and-advisory-board`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/journal/journal-information`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/journal/article-processing-charges`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/journal/editorial-policies`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/journal/instruction-for-author`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/journal/instruction-for-reviewer`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/journal/submit-an-article`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/journal/current-issue`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/journal/all-issues`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/journal/news-and-announcements`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/journal/call-for-papers`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/journal/contact-us`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/journal/join-editorial-board`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/journal/join-reviewer`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/about/company`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/industry`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/support`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/accessibility`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
