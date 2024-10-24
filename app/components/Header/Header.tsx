'use client';

import {useState, useEffect} from "react";
import styles from './Header.module.scss';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

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
            <div className={styles.test}></div>
            <header className={styles.wrapper}>
                <Image src={'/meorelogo.png'} alt={'logo'} width={60} height={70}/>
                <div className={styles.container}>
                    <Link
                        href={'#'}
                        className={styles.linkWrapper}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Films
                    </Link>
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
            <div
                className={`${styles.absoluteWrapper} ${!isHovered ? styles.isVisible : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={styles.innerWrapper}>
                    <Image src={'/gosling.jpg'} alt={'gosling'} width={276} height={114}/>
                    <p>Best sigma actor in the world</p>
                    <Link href={'#'}>Learn More</Link>
                </div>
                <div className={styles.innerWrapper}>
                    <Image src={'/jason.jpg'} alt={'gosling'} width={276} height={114}/>
                    <p>Best sigma actor in the world</p>
                    <Link href={'#'}>Learn More</Link>
                </div>
                <div className={styles.innerWrapper}>
                    <Image src={'/dardevil.jpg'} alt={'gosling'} width={276} height={114}/>
                    <p>Best sigma actor in the world</p>
                    <Link href={'#'}>Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
