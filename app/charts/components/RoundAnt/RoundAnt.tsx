'use client';

import React from 'react';
import styles from './RoundAnt.module.scss';
import {Progress} from 'antd';

const RoundAnt: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerWrapper}>
                <Progress
                    type="dashboard"
                    percent={70}
                    format={() => <span style={{fontSize: '48px', color: '#fff'}}>{`${70} MB`}</span>}
                    strokeColor="#A200FF"
                    trailColor="white"
                    size={300}
                />
            </div>
        </div>
    );
};

export default RoundAnt;
