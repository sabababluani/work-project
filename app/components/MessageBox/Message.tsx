import {useState, useEffect} from "react";
import Image from "next/image";
import styles from './Message.module.scss';

const MessageBox = () => {
    const [messageBox, setMessageBox] = useState(false);
    const [visible, setVisible] = useState(false);

    const onHandleClick = () => {
        setMessageBox(prevState => !prevState);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {visible && (
                <div className={styles.wrapper} onClick={onHandleClick}>
                    <Image src={messageBox ? '/X.webp' : '/message.png'} alt={'message'} width={30} height={30}/>
                </div>
            )}
            <div className={`${styles.container} ${messageBox ? styles.active : ''}`}>
                <div className={styles.videoWrapper}>
                    <div className={styles.video}>
                        <video src={'/video.mp4'} autoPlay={true} loop={true} muted={true}/>
                    </div>
                    <p>Magari Website</p>
                </div>
                <div className={styles.buttonWrapper}>
                    <button>Reveal White Board</button>
                </div>
            </div>
        </>
    );
}

export default MessageBox;
