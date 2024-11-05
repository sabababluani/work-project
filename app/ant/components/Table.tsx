    import React, {useState} from 'react';
    import {Table} from 'antd';
    import type {TableColumnsType, TableProps} from 'antd';
    import styles from './Table.module.scss';

    interface DataType {
        key: React.Key;
        name: string;
        status: string;
        visit: string;
        bandwidth: string;
        diskUsage: string;
        php: string;
        Wpversion: string;
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name ',
            dataIndex: 'name',
            className: 'no-left-border',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (status: string) => (
                <div
                    className={
                        status === 'Active'
                            ? styles.activeStatus
                            : status === 'Inactive'
                                ? styles.inactiveStatus
                                : ''
                    }
                >
                    <span
                        className={
                            status === 'Active' ? styles.greenDot : status === 'Inactive' ? styles.redDot : ''
                        }
                    ></span>
                    <span className={styles.status}>{status}</span>
                </div>
            ),
        },
        {
            title: 'Visit',
            dataIndex: 'visit',
        },
        {
            title: 'Bandwidth',
            dataIndex: 'bandwidth',
        },
        {
            title: 'Disk Usage',
            dataIndex: 'diskUsage',
        },
        {
            title: 'PHP',
            dataIndex: 'php',
        },
        {
            title: 'WP version',
            dataIndex: 'Wpversion',
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'Novatori.ge',
            status: 'Active',
            visit: '1000',
            bandwidth: '500MB',
            diskUsage: '1GB',
            php: '8.0',
            Wpversion: '6.3.1',
        },
        {
            key: '2',
            name: 'Example.com',
            status: 'Inactive',
            visit: '500',
            bandwidth: '300MB',
            diskUsage: '500MB',
            php: '7.4',
            Wpversion: '6.2.2',
        },
        {
            key: '3',
            name: 'MyWebsite.net',
            status: 'Active',
            visit: '1500',
            bandwidth: '1GB',
            diskUsage: '2GB',
            php: '8.1',
            Wpversion: '6.3.1',
        },
        {
            key: '4',
            name: 'SampleSite.org',
            status: 'Inactive',
            visit: '250',
            bandwidth: '100MB',
            diskUsage: '300MB',
            php: '7.3',
            Wpversion: '6.1.0',
        },
        {
            key: '5',
            name: 'DemoPage.co',
            status: 'Active',
            visit: '750',
            bandwidth: '600MB',
            diskUsage: '800MB',
            php: '8.0',
            Wpversion: '6.3.0',
        },
        {
            key: '6',
            name: 'SitePro.dev',
            status: 'Inactive',
            visit: '100',
            bandwidth: '200MB',
            diskUsage: '400MB',
            php: '7.2',
            Wpversion: '5.9.3',
        },
        {
            key: '7',
            name: 'TechBlog.info',
            status: 'Active',
            visit: '2000',
            bandwidth: '1.5GB',
            diskUsage: '2.5GB',
            php: '8.1',
            Wpversion: '6.3.1',
        },
        {
            key: '8',
            name: 'ExampleSite.net',
            status: 'Inactive',
            visit: '300',
            bandwidth: '250MB',
            diskUsage: '600MB',
            php: '7.4',
            Wpversion: '6.2.3',
        }
    ];


    const rowSelection: TableProps<DataType>['rowSelection'] = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },

    };

    const App: React.FC = () => {
        const [selectionType] = useState<'checkbox'>('checkbox');

        return (
            <div className={styles.tableWrapper}>
                <Table<DataType>
                    rowSelection={{type: selectionType, ...rowSelection}}
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    scroll={{x: 'max-content'}}
                />
            </div>
        );
    };

    export default App;
