'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';
import styles from './Navbar.module.css';
import logo from './BrandLogo.png';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} glass`}>
            <div className="container">
                <div className={styles.navInner}>
                    <Link href="/" className={styles.logo}>
                        <Image src={logo} alt="Quest Logo" width={180} height={50} className={styles.logoImg} priority />
                    </Link>

                    <div className={styles.desktopNav}>
                        <ul className={styles.navLinks}>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                                    >
                                        {link.name}
                                        {pathname === link.href && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                className={styles.underline}
                                            />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className={styles.cta}>
                            Contact Us <ChevronRight size={16} />
                        </Link>
                    </div>

                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className={styles.mobileNav}
                    >
                        <ul className={styles.mobileLinks}>
                            {navLinks.map((link, i) => (
                                <motion.li key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                                    <Link href={link.href} className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}>
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navLinks.length * 0.1 }}>
                                <Link href="/contact" className={styles.mobileCta}>
                                    Get in Touch
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
