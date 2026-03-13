import { Outfit, Inter } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata = {
    metadataBase: new URL('https://quest-pharma.com'),
    title: {
        default: 'Quest | Elite Pharma Regulatory Solutions',
        template: '%s | Quest',
    },
    description: 'Quest provides high-end pharmaceutical regulatory compliance and leadership solutions. Elevate your global presence with our expert guidance.',
    keywords: ['pharmaceuticals', 'regulatory compliance', 'leadership', 'global compliance', 'pharma solutions'],
    authors: [{ name: 'Akash KC' }],
    creator: 'Akash KC',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://quest-pharma.com',
        siteName: 'Quest',
        title: 'Quest | Elite Pharma Regulatory Solutions',
        description: 'Expert pharmaceutical regulatory compliance and leadership solutions.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Quest Pharma Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Quest | Elite Pharma Regulatory Solutions',
        description: 'Expert pharmaceutical regulatory compliance and leadership solutions.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://quest-pharma.com',
    },
};

export const viewport = {
    themeColor: '#0a0a0c',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
            <body className="bg-gradient">
                <a href="#main-content" className="sr-only focus:not-sr-only">
                    Skip to main content
                </a>
                <Navbar />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
