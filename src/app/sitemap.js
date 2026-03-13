export default function sitemap() {
    const baseUrl = 'https://quest-pharma.com';

    const routes = [
        '',
        '/services',
        '/leadership',
        '/compliance',
        '/about',
        '/careers',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
