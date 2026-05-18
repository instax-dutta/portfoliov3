import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/private', '/tmp', '/cache'],
        },
        sitemap: 'https://v3.sdad.pro/sitemap.xml',
        host: 'https://v3.sdad.pro',
    }
}
