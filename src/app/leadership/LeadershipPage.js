'use client';

import { motion } from 'framer-motion';
import { Briefcase, ShieldCheck, Globe, Award } from 'lucide-react';
import styles from './Leadership.module.css';

const expertise = [
    {
        icon: <Briefcase size={24} />,
        title: 'Operational Leadership',
        description: 'Extensive experience managing India operations for global pharmaceutical entities like RelonChem.',
    },
    {
        icon: <ShieldCheck size={24} />,
        title: 'Certified Auditing',
        description: 'NSF and APIC Certified Auditor with specialized expertise in risk-based decision making.',
    },
    {
        icon: <Globe size={24} />,
        title: 'Global Compliance',
        description: 'Conducted 500+ audits across APIs, Finished Dosage Forms, and QC Laboratories worldwide.',
    },
    {
        icon: <Award size={24} />,
        title: 'Philosophy of Intent',
        description: 'Driving compliance with intent, ensuring quality systems are robust and sustainable.',
    },
];

export default function LeadershipPage() {
    return (
        <div className={styles.leadershipPage}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.tag}>Leadership</span>
                        <h1 className={styles.title}>Principal <span className="gradient-text">Consultant</span></h1>
                        <p className={styles.subtitle}>
                            QUEST Pharma Solutions is led by Ravi B, a recognized authority in pharmaceutical quality assurance with over two decades of global regulatory and operational experience.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.main}>
                <div className="container">
                    <div className={styles.layout}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`${styles.profileCard} glass`}
                        >
                            <div className={styles.avatar}>RB</div>
                            <h2>Ravi B</h2>
                            <p className={styles.role}>M. Pharm | Founder & Principal Consultant</p>

                            <div className={styles.stats}>
                                <div className={styles.statLine}>
                                    <span>Experience</span>
                                    <strong>24+ Years</strong>
                                </div>
                                <div className={styles.statLine}>
                                    <span>Audits Led</span>
                                    <strong>500+</strong>
                                </div>
                                <div className={styles.statLine}>
                                    <span>Certification</span>
                                    <strong className={styles.teal}>NSF & APIC</strong>
                                </div>
                            </div>
                        </motion.div>

                        <div className={styles.details}>
                            <div className={`${styles.backgroundBox} glass`}>
                                <h3>Professional Background</h3>
                                <p>
                                    As the Head of India Operations for RelonChem and a certified NSF/APIC auditor, Ravi brings a rare combination of regulatory insight and operational depth. His career is built on leadership roles at industry leaders including Medreich, Glenmark, and Apotex.
                                </p>
                            </div>

                            <div className={styles.expertiseGrid}>
                                {expertise.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`${styles.expertiseCard} glass glass-card`}
                                    >
                                        <div className={styles.iconBox}>{item.icon}</div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.credentials}>
                <div className="container">
                    <div className={styles.credGrid}>
                        <div className={styles.credItem}>
                            <h5>Academic Foundation</h5>
                            <p>M. Pharm<br />Pharmaceutical Sciences</p>
                        </div>
                        <div className={styles.credItem}>
                            <h5>Professional Credentials</h5>
                            <p>NSF Certified Auditor<br />APIC Certified Auditor</p>
                        </div>
                        <div className={styles.credItem}>
                            <h5>Former Associations</h5>
                            <p>Glenmark | Apotex<br />Medreich Pharmaceuticals</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
