'use client';

import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Award, BookOpen, Shield, FileText, ExternalLink } from 'lucide-react';
import styles from './Compliance.module.css';

const regulators = [
    {
        icon: <Globe size={24} />,
        region: 'UNITED STATES',
        title: 'US FDA',
        list: ['21 CFR Part 211', '21 CFR Part 210', 'ICH Q7 (API)', 'Process Validation Guidance'],
    },
    {
        icon: <ShieldCheck size={24} />,
        region: 'EUROPEAN UNION',
        title: 'EMA / EU Commission',
        list: ['EU GMP Annex 1', 'EU GMP Part I & II', 'GDP Guidelines', 'Annex 11 (Systems)'],
    },
    {
        icon: <Award size={24} />,
        region: 'WORLD HEALTH ORGANIZATION',
        title: 'WHO Prequalification',
        list: ['WHO TRS Series', 'WHO GMP Guidelines', 'API Manufacturing', 'Quality Control'],
    },
    {
        icon: <BookOpen size={24} />,
        region: 'INTERNATIONAL COUNCIL',
        title: 'ICH Harmonization',
        list: ['ICH Q7 (API GMP)', 'ICH Q9 (Quality Risk)', 'ICH Q10 (Quality System)', 'ICH Q8 (Dev)'],
    },
];

const strategies = [
    {
        icon: <Shield size={20} />,
        title: 'Inspection Readiness',
        description: 'Prepare for regulatory inspections with confidence through mock audits and gap assessments.',
    },
    {
        icon: <FileText size={20} />,
        title: 'Documentation Excellence',
        description: 'Ensure quality systems meet the highest standards of regulatory compliance and traceability.',
    },
    {
        icon: <ExternalLink size={20} />,
        title: 'Global Market Access',
        description: 'Navigate international requirements to enable compliant market entry and expansion.',
    },
];

export default function ComplianceClient() {
    return (
        <div className={styles.compliancePage}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.tag}>Global Standards</span>
                        <h1 className={styles.title}>Regulatory <span className="gradient-text">Alignment</span></h1>
                        <p className={styles.subtitle}>
                            Our audits and assessments are rigorously aligned with the world's most stringent pharmaceutical quality and GMP regulatory frameworks.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.gridSection}>
                <div className="container">
                    <div className={styles.regGrid}>
                        {regulators.map((reg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`${styles.regCard} glass`}
                            >
                                <div className={styles.iconBox}>{reg.icon}</div>
                                <span className={styles.region}>{reg.region}</span>
                                <h3>{reg.title}</h3>
                                <ul>
                                    {reg.list.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.strategySection}>
                <div className="container">
                    <div className={styles.strategyGrid}>
                        {strategies.map((strat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className={styles.stratCard}
                            >
                                <div className={styles.stratIcon}>{strat.icon}</div>
                                <h4>{strat.title}</h4>
                                <p>{strat.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
