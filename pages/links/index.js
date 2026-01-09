import Head from 'next/head';
import Image from 'next/image';
import { Instagram, Youtube, Mail, Globe, Bookmark } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

import CosmicBackground from '../../components/CosmicBackground';
import LinkButton from '../../components/LinkButton';
import styles from '../../styles/Links.module.css';

const Links = () => {
    const links = [
        { href: "https://omnic.online", icon: Globe, label: "Página Principal" },
        { href: "https://substack.com/@omnic", icon: Bookmark, label: "Newsletter OMNIC (Grátis)" },
        { href: "https://www.instagram.com/omnic.online", icon: Instagram, label: "Instagram" },
        { href: "https://youtube.com/@omnic.online", icon: Youtube, label: "YouTube" },
        { href: "https://tiktok.com/@omnic.online", icon: SiTiktok, label: "TikTok" },
        { href: "mailto:info.omnicbrazil@gmail.com", icon: Mail, label: "Contato" },
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>OMNIC | Links</title>
                <meta name="description" content="Onde o infinito faz sentido" />
            </Head>

            <CosmicBackground />

            <main className={styles.main}>
                {/* Logo */}
                <div className={`${styles.logoContainer} ${styles.fadeIn}`}>
                    <div className={styles.float}>
                        <Image
                            src="/omnic-logo.png"
                            alt="OMNIC Logo"
                            width={96}
                            height={96}
                            className={styles.logo}
                            priority
                        />
                    </div>
                </div>

                {/* Brand Name */}
                <h1 className={`${styles.title} ${styles.fadeInDelay1}`}>OMNIC</h1>

                {/* Tagline */}
                <p className={`${styles.tagline} ${styles.fadeInDelay2}`}>
                    Onde o infinito faz sentido
                </p>

                {/* Links */}
                <div className={styles.linksContainer}>
                    {links.map((link, index) => (
                        <div
                            key={link.label}
                            className={styles.linkItem}
                            style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                        >
                            <LinkButton href={link.href} icon={link.icon} label={link.label} />
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <footer className={`${styles.footer} ${styles.fadeInDelay5}`} style={{ animationDelay: "0.8s" }}>
                    <p className={styles.footerText}>Física • Astronomia • Inovação</p>
                </footer>
            </main>
        </div>
    );
};

export default Links;
