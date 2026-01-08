import React from 'react';
import styles from '../styles/Links.module.css';

const LinkButton = ({ href, icon: Icon, label, className = "" }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkButton} ${className}`}
        >
            <Icon className={styles.linkButtonIcon} />
            <span className={styles.linkLabel}>{label}</span>
        </a>
    );
};

export default LinkButton;
