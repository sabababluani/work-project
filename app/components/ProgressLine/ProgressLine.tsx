import React from 'react';
import {Flex, Progress} from 'antd';
import styles from './ProgressLine.module.scss';

const ProgressLine: React.FC = () => (
    <div className={styles.wrapper}>
        <Flex gap="small" >
            <Progress
                percent={10}
                strokeColor={{from: '#A200FF', to: '#A200FF'}} // Single color gradient
            />
        </Flex>
    </div>
);

export default ProgressLine;
