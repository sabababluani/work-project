'use client';

import Image from 'next/image';
import styles from './Navigation.module.scss';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import NavigationLine from "@/app/wpside/components/NavigationLine/NavigationLine";

const sitesData = [
    {name: 'Twitter', iconSrc: '/twiter.svg'},
    {name: 'Spotify', iconSrc: '/spotify.svg'},
    {name: 'RRRR', iconSrc: '/r.svg'},
    {name: 'Slack', iconSrc: '/slack.svg'},
];

const Navigation = () => {
    const pathname = usePathname();
    const [activeSite, setActiveSite] = useState<string | null>(null);

    const onSiteClick = (siteName: string) => {
        setActiveSite((prevActiveSite) => (prevActiveSite === siteName ? null : siteName));
    };

    return (
        <div className={styles.wrapper}>
            <h2>Hosting</h2>
            <div className={styles.containerWrapper}>
                <Link href='#'
                      className={`${styles.container} ${pathname.includes('wpside') ? styles.containerActive : ''}`}>
                    <Image src={pathname.includes('wpside') ? '/Dashboardwhite.svg' : '/Dashboard.svg'}
                           alt='Dashboard icon' width={24} height={24}/>
                    <span>Dashboard</span>
                </Link>
                <Link href='/wordpress'
                      className={`${styles.container} ${pathname.includes('zd') ? styles.containerActive : ''}`}>
                    <Image src='/wordpress-circle.svg' alt='WordPress sites icon' width={24} height={24}/>
                    <span>WordPress sites</span>
                </Link>
                {/*<Link href='/user-settings'*/}
                {/*      className={`${styles.container} ${pathname.includes('ss') ? styles.containerActive : ''}`}>*/}
                {/*    <Image src={pathname.includes('ss') ? '/singleuserwhite.svg' : '/single-user.svg'}*/}
                {/*           alt='User settings icon' width={24} height={24}/>*/}
                {/*    <span>User settings</span>*/}
                {/*</Link>*/}
                {/*<Link href='/company-settings'*/}
                {/*      className={`${styles.container} ${pathname.includes('aa') ? styles.containerActive : ''}`}>*/}
                {/*    <Image src='/classic-bag.svg' alt='Company settings icon' width={24} height={24}/>*/}
                {/*    <span>Company settings</span>*/}
                {/*</Link>*/}
            </div>
            <div className={styles.sitesContainer}>
                <span>Sites</span>
                <div className={styles.sitesWrapper}>
                    {sitesData.map((site) => (
                        <div key={site.name}>
                            <div
                                className={`${styles.sites} ${activeSite === site.name ? styles.sitesActive : ''}`}
                                onClick={() => onSiteClick(site.name)}>
                                <Image src={site.iconSrc} alt={`${site.name} icon`} width={24} height={24}/>
                                <span>{site.name}.com</span>
                            </div>
                            {activeSite === site.name && <NavigationLine/>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
