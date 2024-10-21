'use client';

import {useState} from 'react';
import styles from './css.module.scss';
import CardSection from "@/app/components/CardSection/CardSection";

const Css = () => {
    const [wrapperBackground, setWrapperBackground] = useState<string>("black.jpg");

    const handleCardClick = (backgroundImage: string) => {
        setWrapperBackground(backgroundImage);
    };

    return (
        <div className={styles.mainWrapper}>
            <div
                className={styles.wrapper}
                style={{
                    backgroundImage: wrapperBackground ? `url(${wrapperBackground})` : 'none',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className={styles.container}>
                    <div
                        className={`${styles.card1} ${styles.card}`}
                        onClick={() => handleCardClick('/monster.jpg')}
                    ></div>
                    <div
                        className={`${styles.card2} ${styles.card}`}
                        onClick={() => handleCardClick('/movie2.jpg')} 
                    ></div>
                    <div
                        className={`${styles.card3} ${styles.card}`}
                        onClick={() => handleCardClick('/avangers.jpg')}
                    ></div>
                    <div
                        className={`${styles.card4} ${styles.card}`}
                        onClick={() => handleCardClick('/movie1.jpg')}
                    ></div>
                </div>
            </div>
            <CardSection/>
        </div>
    );
};

export default Css;
