import React from 'react';
import { Flex, Progress } from 'antd';

const RoundAnt: React.FC = () => (
    <Flex gap="small" wrap>
        <Progress type="dashboard" percent={75} />
    </Flex>
);

export default RoundAnt;