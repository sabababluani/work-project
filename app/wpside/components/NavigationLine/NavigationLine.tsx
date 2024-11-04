'use client';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import styles from './NavigationLine.module.scss';

const NavigationLine = () => {
    const pathname = usePathname();

    return (
        <div className={styles.sitesInfo}>
            <div>
                <Image src={'/line.svg'} alt={'line'} width={16} height={462}/>
            </div>
            <div className={styles.infoWrapper}>
                <Link href={'/css'}
                      className={`${styles.infoButton} ${pathname.includes('wpside') ? styles.infoButtonClicked : ''}`}
                >
                    <div className={styles.placeholder}></div>
                    <span>Info</span>
                </Link>
                <Link href={'/domains'}
                      className={styles.infoButton}
                >
                    <div className={styles.placeholder}></div>
                    <span>Domains</span>
                </Link>
                <Link href={'/backup'}
                      className={styles.infoButton}
                >
                    <div className={styles.placeholder}></div>
                    <span>Backup</span>
                </Link>
                <Link href={'/tools'}
                      className={styles.infoButton}
                >
                    <div className={styles.placeholder}></div>
                    <span>Tools</span>
                </Link>
                <Link href={'/redirects'}
                      className={styles.infoButton}
                >
                    <div className={styles.placeholder}></div>
                    <span>Redirects</span>
                </Link>
                <Link href={'/themes-and-plugins'}
                      className={styles.infoButton}
                >
                    <div className={styles.placeholder}></div>
                    <span>Themes and plugins</span>
                </Link>
                <Link href={'/add-ons'}
                      className={styles.infoButton}
                >
                    <div className={styles.placeholder}></div>
                    <span>Add-ons</span>
                </Link>
                <Link href={'/ip-deny'}
                      className={styles.infoButton}
                >
                    <div className={styles.placeholder}></div>
                    <span>IP Deny</span>
                </Link>
                <Link href={'/analytics'}
                      className={styles.infoButton}
                >
                    <div className={styles.placeholder}></div>
                    <span>Analytics</span>
                </Link>
                <Link href={'/caching'}
                      className={styles.infoButton}
                >
                    <div className={styles.placeholder}></div>
                    <span>Caching</span>
                </Link>
                <Link href={'/users-management'}
                      className={styles.infoButton}
                >
                    <div className={styles.placeholder}></div>
                    <span>Users management</span>
                </Link>
                <Link href={'/logs'}
                      className={styles.infoButton}
                >
                    <div className={styles.placeholder}></div>
                    <span>Logs</span>
                </Link>
            </div>
        </div>
    );
};

export default NavigationLine;
