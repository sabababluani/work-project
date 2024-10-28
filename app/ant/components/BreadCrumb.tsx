import React from 'react';
import {HomeOutlined, UserOutlined} from '@ant-design/icons';
import {Breadcrumb} from 'antd';

const BreadCrumbAnt: React.FC = () => (
    <Breadcrumb
        items={[
            {
                href: '/',
                title: <HomeOutlined/>,
            },
            {
                href: '',
                title: (
                    <>
                        <UserOutlined/>
                        <span>WordPress Sites</span>
                    </>
                ),
            },
            {
                title: 'Redirects',
            },
        ]}
    />
);

export default BreadCrumbAnt;