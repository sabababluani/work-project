'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { Statistic } from 'antd';

const { Countdown } = Statistic;

const CountDown = () => {
    const [targetTime, setTargetTime] = useState<number | null>(null);

    useEffect(() => {
        const savedTime = localStorage.getItem('countdown-time');
        if (savedTime) {
            setTargetTime(Number(savedTime));
        } else {
            const newTargetTime = new Date().getTime() + 1 * 60 * 1000;
            setTargetTime(newTargetTime);
            localStorage.setItem('countdown-time', newTargetTime.toString());
        }
    }, []);

    if (!targetTime) return null;

    return (
        <div className={styles.wrapper}>
            <Countdown
                title={"Count Down"}
                value={targetTime}
                onFinish={() => localStorage.removeItem('countdown-time')}
            />
        </div>
    );
};

export default CountDown;
