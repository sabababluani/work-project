import React, {useState} from 'react';
import {Table, Button} from 'antd';
import type {TableColumnsType, TableProps} from 'antd';
import styles from './Table.module.scss';

interface DataType {
    key: React.Key;
    plugin: string;
    status: number;
    address: number;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Plugin',
        dataIndex: 'plugin',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (status: number) => (
            <div
                style={{
                    width: '80px',
                    height: '30px',
                    backgroundColor: status === 1 ? 'rgba(246, 255, 237, 1)' : 'rgba(255, 163, 158, 1)',
                    color: status === 1 ? 'rgba(82, 196, 26, 1)' : 'rgba(245, 34, 45, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    border: `1px solid ${status === 1 ? 'rgba(183, 235, 143, 1)' : 'rgb(239,50,39)'}`,
                    cursor: 'pointer',
                }}
            >
                {status === 1 ? 'Active' : 'Inactive'}
            </div>
        ),
    },
    {
        title: '',
        dataIndex: 'address',
        render: (_: number, row: DataType) => (
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button type="primary" style={{width: '80px', backgroundColor: `${row.status && 'red'}`}}>
                    {row.status === 1 ? 'Delete' : 'Active'}
                </Button>
            </div>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        plugin: 'Melancholic',
        status: 1,
        address: 2,
    },
    {
        key: '2',
        plugin: 'Twenty Twenty-Four',
        status: 0,
        address: 2,
    },
    {
        key: '3',
        plugin: 'Twenty Twenty-Two',
        status: 0,
        address: 2,
    },
    {
        key: '4',
        plugin: 'Twenty Twenty-Three',
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

    // const handleUpdate = (key: React.Key) => {
    //     console.log(`Update action for key: ${key}`);
    // };
    // const handleToggleStatus = (key: React.Key) => {
    //     console.log(`Toggle status action for key: ${key}`);
    // };

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
