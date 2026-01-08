import React from 'react';
import styles from '../styles/Links.module.css';

const CosmicBackground = () => {
    return (
        <div className={styles.cosmicContainer}>
            {/* Gradient overlay */}
            <div className={styles.gradientOverlay} />

            {/* Organic cosmic lines - SVG */}
            <svg
                className={styles.cosmicSvg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Left side organic lines */}
                <path
                    d="M-50 200 Q100 300, 50 500 Q0 700, -100 900"
                    className={styles.cosmicLine}
                />
                <path
                    d="M-30 180 Q120 280, 70 480 Q20 680, -80 880"
                    className={styles.cosmicLine}
                />
                <path
                    d="M-10 160 Q140 260, 90 460 Q40 660, -60 860"
                    className={styles.cosmicLine}
                />

                {/* Right side organic lines */}
                <path
                    d="M1970 100 Q1800 200, 1850 400 Q1900 600, 1970 800"
                    className={styles.cosmicLine}
                />
                <path
                    d="M1950 120 Q1780 220, 1830 420 Q1880 620, 1950 820"
                    className={styles.cosmicLine}
                />
                <path
                    d="M1930 140 Q1760 240, 1810 440 Q1860 640, 1930 840"
                    className={styles.cosmicLine}
                />
                <path
                    d="M1910 160 Q1740 260, 1790 460 Q1840 660, 1910 860"
                    className={styles.cosmicLine}
                />
            </svg>

            {/* Subtle glow in center */}
            <div className={styles.glowCenter} />
        </div>
    );
};

export default CosmicBackground;
