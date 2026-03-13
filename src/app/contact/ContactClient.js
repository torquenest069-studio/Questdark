'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from './Contact.module.css';

export default function ContactClient() {
    const [formState, setFormState] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');
        setTimeout(() => setFormState('success'), 1500);
    };

    return (
        <div className={styles.contactPage}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>Let's <span className="gradient-text">Connect</span></h1>
                        <p className={styles.subtitle}>
                            Ready to elevate your regulatory strategy? Our specialists are standing by to assist you.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.main}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Mail /></div>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>connect@quest-pharma.com</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Phone /></div>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+1 (234) 567-8900</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><MapPin /></div>
                                <div>
                                    <h3>Headquarters</h3>
                                    <p>123 Elite Plaza, Pharma City, GLOBAL 45678</p>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.formOverlay} glass`}>
                            {formState === 'success' ? (
                                <div className={styles.successMessage}>
                                    <h2>Message Sent!</h2>
                                    <p>Thank you for reaching out. An expert will contact you shortly.</p>
                                    <button onClick={() => setFormState('idle')} className={styles.btnReset}>Send Another</button>
                                </div>
                            ) : (
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" required placeholder="John Doe" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Work Email</label>
                                        <input type="email" id="email" required placeholder="john@company.com" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject">Subject</label>
                                        <select id="subject">
                                            <option>Regulatory Consulting</option>
                                            <option>Leadership Strategy</option>
                                            <option>Compliance Audit</option>
                                            <option>Other Enquiry</option>
                                        </select>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" rows="4" required placeholder="How can we help?"></textarea>
                                    </div>
                                    <button type="submit" className={styles.submitBtn} disabled={formState === 'submitting'}>
                                        {formState === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
