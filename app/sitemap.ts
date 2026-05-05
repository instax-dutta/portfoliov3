import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sdad.pro'
    const now = new Date()

    const routes = [
        { url: '', lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
        { url: '/about', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/projects', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: '/experience', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/skills', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: '/credentials', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: '/contact', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))
}
