export default function manifest() {
    return {
        name: 'Quest Pharma Solutions',
        short_name: 'Quest',
        description: 'Expert pharmaceutical regulatory compliance and leadership solutions.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0c',
        theme_color: '#00f5ff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
