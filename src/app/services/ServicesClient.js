'use client';

import { motion } from 'framer-motion';
import { CheckSquare, Users, Clipboard, Shield, Activity, TrendingUp, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import styles from './Services.module.css';

const serviceData = [
    {
        icon: <CheckSquare />,
        title: "GMP Compliance Audits",
        desc: "Comprehensive on-site audits for API manufacturing, finished dosage forms, and quality control laboratories.",
        keyAreas: ["Site facility assessment", "Process validation review", "Documentation systems", "Personnel qualification"]
    },
    {
        icon: <Users />,
        title: "CMO Qualification & Due Diligence",
        desc: "Independent assessment of contract manufacturing organizations to ensure quality and regulatory compliance.",
        keyAreas: ["Technical capability evaluation", "Quality system maturity", "Supply chain integrity", "Risk profiling"]
    },
    {
        icon: <Clipboard />,
        title: "Regulatory Inspection Readiness",
        desc: "Preparation and mock inspections aligned with US FDA, EU GMP, WHO, and other regulatory expectations.",
        keyAreas: ["Pre-inspection gap analysis", "Mock inspection exercises", "Observation remediation", "Inspector interview prep"]
    },
    {
        icon: <Shield />,
        title: "Quality System Assessment",
        desc: "In-depth evaluation of pharmaceutical quality systems against ICH Q7, Q9, and Q10 guidelines.",
        keyAreas: ["QMS architecture review", "Change control effectiveness", "Deviation management", "Quality metrics"]
    },
    {
        icon: <Activity />,
        title: "CAPA Effectiveness & Risk Management",
        desc: "Assessment of corrective and preventive action systems and quality risk management frameworks.",
        keyAreas: ["Root cause analysis review", "CAPA closure effectiveness", "Risk assessment protocols", "Trend analysis"]
    },
    {
        icon: <TrendingUp />,
        title: "Continuous Improvement Programs",
        desc: "Strategic guidance for building sustainable quality culture and operational excellence frameworks.",
        keyAreas: ["Quality culture development", "Performance KPI design", "Training program optimization", "Best practice adoption"]
    }
];

export default function ServicesClient() {
    return (
        <div className={styles.servicesPage}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.tag}>Expert Solutions</span>
                        <h1 className={styles.title}>Comprehensive <span className="gradient-text">Quality</span> Services</h1>
                        <p className={styles.subtitle}>
                            Specialized pharmaceutical quality services designed for regulated manufacturing environments and global regulatory requirements.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.gridSection}>
                <div className="container">
                    <div className={styles.grid}>
                        {serviceData.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`${styles.card} glass`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}>{service.icon}</div>
                                    <h3>{service.title}</h3>
                                </div>
                                <p className={styles.desc}>{service.desc}</p>

                                <div className={styles.keyAreas}>
                                    <span className={styles.kaLabel}>Key Focus Areas:</span>
                                    <ul>
                                        {service.keyAreas.map((area, j) => (
                                            <li key={j}>{area}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.engagement}>
                <div className="container">
                    <div className={`${styles.ctaBox} glass`}>
                        <h2>Customized Engagement Models</h2>
                        <p>
                            We tailor our services to meet specific organizational needs, from single-day focused assessments to comprehensive multi-site audit programs and ongoing quality advisory partnerships.
                        </p>
                        <Link href="/contact" className={styles.ctaBtn}>
                            Discuss Your Requirements <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
