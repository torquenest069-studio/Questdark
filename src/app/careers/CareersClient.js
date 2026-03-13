'use client';

import { motion } from 'framer-motion';
import { Heart, TrendingUp, Briefcase, Mail, Send } from 'lucide-react';
import styles from './Careers.module.css';

const benefits = [
    {
        icon: <Heart />,
        title: "Impactful Work",
        desc: "Ensure global health by upholding the highest pharmaceutical quality standards."
    },
    {
        icon: <TrendingUp />,
        title: "Professional Growth",
        desc: "Continuous learning through exposure to diverse global regulatory landscapes."
    },
    {
        icon: <Briefcase />,
        title: "Expert Environment",
        desc: "Work alongside industry veterans with decades of FDA and EU GMP experience."
    }
];

export default function CareersClient() {
    return (
        <div className={styles.careersPage}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.tag}>Join Our Team</span>
                        <h1 className={styles.title}>Shape the Future of <span className="gradient-text">Quality</span></h1>
                        <p className={styles.subtitle}>
                            We are looking for passionate pharmaceutical experts dedicated to regulatory excellence and manufacturing safety.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.benefits}>
                <div className="container">
                    <div className={styles.benefitGrid}>
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`${styles.benefitCard} glass`}
                            >
                                <div className={styles.iconBox}>{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.openings}>
                <div className="container">
                    <div className={`${styles.noOpenings} glass`}>
                        <div className={styles.noOpeningsIcon}>
                            <Mail size={48} />
                        </div>
                        <h2>No Current Openings</h2>
                        <p>
                            We don't have any active vacancies at the moment, but we are always looking for exceptional talent to join our network.
                        </p>
                        <div className={styles.cvBox}>
                            <p><strong>Share your CV/Resume with us.</strong> We'll reach out when a matching opportunity arises.</p>
                            <a href="mailto:careers@quest-pharma.com" className={styles.cvBtn}>
                                <Send size={18} /> Send Your CV
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
