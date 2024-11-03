import React from 'react';
import {Flex, Progress, Tooltip} from 'antd';
import styles from './ProgressLine.module.scss';

const ProgressLine: React.FC = () => (
    <div className={styles.wrapper}>
        <Flex gap="small" vertical>
            <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress success={{percent: 90}}/>
            </Tooltip>
        </Flex>
    </div>
);

export default ProgressLine;