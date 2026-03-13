'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Shield, Award, Activity } from 'lucide-react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.layout}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={styles.content}
                    >
                        <div className={styles.trustPill}>
                            <span className={styles.pulse}></span>
                            Trusted by 50+ Global Pharma Leaders
                        </div>
                        <h1 className={styles.title}>
                            Engineering <span className="gradient-text">Regulatory</span> Excellence for Global Scale
                        </h1>
                        <p className={styles.description}>
                            Quest provides elite pharmaceutical compliance, leadership strategies, and global market access solutions. We transform complex regulations into competitive advantages.
                        </p>
                        <div className={styles.actions}>
                            <Link href="/services" className={styles.btnPrimary}>
                                Explore Solutions <ChevronRight size={18} />
                            </Link>
                            <Link href="/contact" className={styles.btnSecondary}>
                                Speak with an Expert
                            </Link>
                        </div>

                        <div className={styles.metrics}>
                            <div className={styles.metric}>
                                <span className={styles.metricVal}>99%</span>
                                <span className={styles.metricLabel}>Audit Success</span>
                            </div>
                            <div className={styles.metric}>
                                <span className={styles.metricVal}>15+</span>
                                <span className={styles.metricLabel}>Global Markets</span>
                            </div>
                            <div className={styles.metric}>
                                <span className={styles.metricVal}>24/7</span>
                                <span className={styles.metricLabel}>Compliance Hub</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className={styles.visual}
                    >
                        <div className={`${styles.card} glass`}>
                            <div className={styles.cardHeader}>
                                <Shield className={styles.icon} aria-hidden="true" />
                                <h3>Compliance Engine</h3>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.feature}>
                                    <Award size={16} className={styles.fIcon} />
                                    <span>FDA & EMA Ready Pathways</span>
                                </div>
                                <div className={styles.feature}>
                                    <Activity size={16} className={styles.fIcon} />
                                    <span>Real-time Risk Assessment</span>
                                </div>
                                <div className={styles.feature}>
                                    <Shield size={16} className={styles.fIcon} aria-hidden="true" />
                                    <span>End-to-end Data Integrity</span>
                                </div>
                            </div>
                            <div className={styles.cardFooter}>
                                <div className={styles.status}>
                                    <span className={styles.dot}></span>
                                    System Active
                                </div>
                                <div className={styles.indicator}>
                                    <div className={styles.bar}></div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.glow1}></div>
                        <div className={styles.glow2}></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
