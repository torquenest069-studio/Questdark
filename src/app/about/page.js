import styles from './About.module.css';

export const metadata = {
    title: 'About Our Mission',
    description: 'Quest is dedicated to redefining pharmaceutical regulatory excellence through innovation and deep industry expertise.',
};

export default function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>Redefining <span className="gradient-text">Excellence</span></h1>
                        <p className={styles.subtitle}>
                            Our mission is to empower pharmaceutical companies with the tools and strategies needed to navigate the world's most complex regulatory landscapes.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={`${styles.card} glass`}>
                            <h2>Our Vision</h2>
                            <p>To be the global benchmark for pharmaceutical regulatory intelligence, driving safer and faster access to life-saving medications.</p>
                        </div>
                        <div className={`${styles.card} glass`}>
                            <h2>Our Values</h2>
                            <ul>
                                <li><strong>Integrity:</strong> Unwavering commitment to data accuracy and ethical standards.</li>
                                <li><strong>Innovation:</strong> Leveraging technology to streamline compliance.</li>
                                <li><strong>Partnership:</strong> Building long-term strategic alliances with our clients.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
