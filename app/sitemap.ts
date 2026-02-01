import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sdad.pro'
    const lastModified = new Date()

    const routes = [
        '',
        '/about',
        '/projects',
        '/experience',
        '/skills',
        '/credentials',
        '/contact',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: lastModified,
        changeFrequency: route === '' || route === '/projects' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route === '/projects' ? 0.9 : 0.8,
    }))
}
