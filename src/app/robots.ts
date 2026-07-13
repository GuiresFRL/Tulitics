import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/publish'],
      },
    ],
    sitemap: 'https://guires.info/sitemap.xml',
    host: 'https://guires.info',
  }
}
