import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/private', '/tmp', '/cache'],
        },
        sitemap: 'https://sdad.pro/sitemap.xml',
        host: 'https://sdad.pro',
    }
}
