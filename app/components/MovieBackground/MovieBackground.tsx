import styles from './MovieBackground.module.scss';
import Image from "next/image";
import {useState} from "react";

const MovieBackground = () => {
    const [pricesVisible, setPricesVisible] = useState(false);
    const [priceColaVisible, setPriceColaVisible] = useState(false);
    const [priceTicketVisible, setPriceTicketVisible] = useState(false);

    const onHandleColaClick = () => {
        setPriceColaVisible(prevState => !prevState);
    }

    const onHandleTicketClick = () => {
        setPriceTicketVisible(prevState => !prevState);
    }

    const onHandleClickPrice = () => {
        setPricesVisible(prevState => !prevState);
    }

    return (
        <div className={styles.wrapper}>
            <video src={'/films.mp4'} loop={true} autoPlay={true} muted={true} className={styles.video}/>
            <div className={styles.app}>
                <h2>Everything you need to watch a movie comfortably</h2>
                <div className={styles.containerWrapper}>
                    <div className={styles.container} onClick={onHandleClickPrice}>
                        <span>Pop corn</span>
                        <Image src={pricesVisible ? '/arrowup.png' : '/arrow.png'} alt={'arrow'} width={12} height={12}
                               onClick={onHandleClickPrice}/>
                    </div>
                    <div className={`${styles.containerPrice} ${pricesVisible ? styles.visible : styles.hidden}`}>
                        <span>Large: 11 GEL</span>
                        <span>Medium: 8 GEL</span>
                        <span>Small: 6 GEL</span>
                    </div>
                </div>
                <div className={styles.containerWrapper}>
                    <div className={styles.container} onClick={onHandleColaClick}>
                        <span>Coca Cola</span>
                        <Image src={priceColaVisible ? '/arrowup.png' : '/arrow.png'} alt={'arrow'} width={12}
                               height={12} onClick={onHandleColaClick}/>
                    </div>
                    <div className={`${styles.containerPrice} ${priceColaVisible ? styles.visible : styles.hidden}`}>
                        <span>Large: 9 GEL</span>
                        <span>Medium: 7 GEL</span>
                        <span>Small: 5 GEL</span>
                    </div>
                </div>
                <div className={styles.containerWrapper}>
                    <div className={styles.container} onClick={onHandleTicketClick}>
                        <span>Tickets</span>
                        <Image src={priceTicketVisible ? '/arrowup.png' : '/arrow.png'} alt={'arrow'} width={12}
                               height={12}/>
                    </div>
                    <div className={`${styles.containerPrice} ${priceTicketVisible ? styles.visible : styles.hidden}`}>
                        <span>Vip: 20 GEL</span>
                        <span>Middle: 16 GEL</span>
                        <span>Down: 12 GEL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieBackground;
