import React, {useState} from 'react';
import {Table} from 'antd';
import type {TableColumnsType, TableProps} from 'antd';
import styles from './Table.module.scss';
import Image from 'next/image';

interface DataType {
    key: React.Key;
    plugin: string;
    status: number;
    address: number;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'plugin', // updated to match the `plugin` key in `data`
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (status: number) => (
            <div
                className={
                    status === 1
                        ? styles.activeStatus
                        : status === 0
                            ? styles.inactiveStatus
                            : ''
                }
            >
                <span
                    className={
                        status === 1 ? styles.greenDot : status === 0 ? styles.redDot : ''
                    }
                ></span>
                <span className={styles.status}>
                    {status === 1 ? 'Active' : 'Disconnected'}
                </span>
            </div>
        ),
    },
    {
        title: 'Action',
        dataIndex: 'address',
        render: () => (
            <div className={styles.dotsWrapper}>
                <Image src={'/3dots.svg'} alt={'3dots'} width={14} height={16}/>
            </div>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        plugin: 'Novatori.ge',
        status: 1,
        address: 2,
    },
    {
        key: '2',
        plugin: 'Novatori.ge.com',
        status: 0,
        address: 2,
    },
    {
        key: '3',
        plugin: 'Aid.Novatori.ge',
        status: 0,
        address: 2,
    },
    {
        key: '4',
        plugin: 'Novagame.ge',
        status: 1,
        address: 2,
    },
];

const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
        name: record.plugin,
    }),
};

const ThemeTable: React.FC = () => {
    const [selectionType] = useState<'checkbox'>('checkbox');

    return (
        <div className={styles.tableWrapper}>
            <Table<DataType>
                rowSelection={{type: selectionType, ...rowSelection}}
                columns={columns}
                dataSource={data}
                pagination={false}
                style={{marginLeft: '12px'}}
            />
        </div>
    );
};

export default ThemeTable;
