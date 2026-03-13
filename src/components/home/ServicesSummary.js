'use client';

import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Globe, Users, BarChart3, Search } from 'lucide-react';
import Link from 'next/link';
import styles from './ServicesSummary.module.css';

const services = [
    {
        icon: <Settings size={24} />,
        title: 'Regulatory Strategy',
        description: 'Custom compliance pathways for fast-tracking global market entry.',
    },
    {
        icon: <Globe size={24} />,
        title: 'Global Compliance',
        description: 'Ensuring your operations meet international standards (FDA, EMA, MHRA).',
    },
    {
        icon: <ShieldCheck size={24} />,
        title: 'Quality Systems',
        description: 'Implementation and optimization of robust QMS architectures.',
    },
    {
        icon: <Search size={24} />,
        title: 'Auditing Services',
        description: 'Rigorous third-party audits to identify and mitigate operational risks.',
    }
];

export default function ServicesSummary() {
    return (
        <section className={styles.services}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Strategic <span className="gradient-text">Solutions</span></h2>
                    <p className={styles.subtitle}>Comprehensive pharmaceutical regulatory and operational support</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${styles.card} glass glass-card`}
                        >
                            <div className={styles.iconBox} aria-hidden="true">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link href="/services" className={styles.learnMore} aria-label={`Learn more about ${service.title}`}>
                                Learn Details <BarChart3 size={14} />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <Link href="/services" className={styles.btnAll}>
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
