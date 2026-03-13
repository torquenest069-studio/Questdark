import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, Instagram } from 'lucide-react';
import styles from './Footer.module.css';
import logo from './BrandLogo.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            <Image src={logo} alt="Quest Logo" width={150} height={40} className={styles.logoImg} />
                        </Link>
                        <p className={styles.description}>
                            Leading the way in pharmaceutical regulatory excellence and leadership consultation globally.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="https://www.instagram.com/luminexis_technologies" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="Global"><Globe size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.linksCol}>
                        <h3>Solutions</h3>
                        <ul>
                            <li><Link href="/services">Regulatory Strategy</Link></li>
                            <li><Link href="/compliance">Global Compliance</Link></li>
                            <li><Link href="/leadership">Leadership Training</Link></li>
                            <li><Link href="/services">Auditing Services</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h3>Company</h3>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className={styles.contactCol}>
                        <h3>Contact</h3>
                        <ul className={styles.contactInfo}>
                            <li>
                                <MapPin size={18} className={styles.icon} />
                                <span>123 Elite Plaza, Pharma City, GLOBAL 45678</span>
                            </li>
                            <li>
                                <Phone size={18} className={styles.icon} />
                                <span>+1 (234) 567-8900</span>
                            </li>
                            <li>
                                <Mail size={18} className={styles.icon} />
                                <span>connect@quest-pharma.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.copyright}>
                        <p>&copy; {currentYear} Quest Pharma Solutions. All Rights Reserved.</p>
                        <p className={styles.developer}>
                            Developed by <a href="https://www.instagram.com/luminexis_technologies" target="_blank" rel="noopener noreferrer">Luminexis Technologies</a>
                        </p>
                    </div>
                    <div className={styles.legalLinks}>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/cookies">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
