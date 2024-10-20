'use client';

import {useEffect, useState} from "react";
import styles from './Header.module.scss';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlHeader = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader);
            return () => {
                window.removeEventListener('scroll', controlHeader);
            };
        }
    }, [lastScrollY]);

    return (
        <div className={`${styles.mainWrapper} ${isVisible ? '' : styles.hidden}`}>
            <header className={styles.wrapper}>
                <Image src={'/meorelogo.png'} alt={'logo'} width={60} height={70}/>
                <div className={styles.container}>
                    <Link href={'#'}>Films</Link>
                    <Link href={'#'}>Top Movies</Link>
                    <Link href={'#'}>Top Movies</Link>
                    <Link href={'#'}>Top Movies</Link>
                    <Link href={'#'}>Top Movies</Link>
                </div>
                <div className={styles.containerWrapper}>
                    <Image src={'/search.webp'} alt={'search'} width={24} height={24}/>
                    <button>Log in</button>
                </div>
            </header>
        </div>
    );
};

export default Header;
