import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://anepali.com/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        },
        {
            url: 'https://anepali.com/unicode-to-preeti/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://anepali.com/preeti-to-unicode/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        }
    ]
}