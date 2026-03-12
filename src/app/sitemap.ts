import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { AREA_DATA } from '@/lib/areas';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date().toISOString();

    /* ── Core pages ────────────────────────────────────────── */
    const corePages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/cctv-drain-surveys-leeds`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/areas-we-cover`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/privacy`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${SITE_URL}/cookies`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.2,
        },
    ];

    /* ── Dynamic area pages ────────────────────────────────── */
    const areaPages: MetadataRoute.Sitemap = AREA_DATA.map((area) => ({
        url: `${SITE_URL}/areas/${area.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...corePages, ...areaPages];
}
