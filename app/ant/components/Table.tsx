import React, {useState} from 'react';
import {Divider, Table} from 'antd';
import type {TableColumnsType, TableProps} from 'antd';
import styles from './Table.module.scss';
import BreadCrumbAnt from "@/app/ant/components/BreadCrumb";

interface DataType {
    key: React.Key;
    redirectFrom: string;
    redirectTo: string;
    httpStatusCode: number;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Redirect from',
        dataIndex: 'redirectFrom',
        render: (text: string) => <a>{text}</a>,
        className: 'no-left-border',
    },
    {
        title: 'Redirect to',
        dataIndex: 'redirectTo',
    },
    {
        title: 'HTTP status code',
        dataIndex: 'httpStatusCode',
    },
];

const data: DataType[] = [
    {
        key: '1',
        redirectFrom: 'https://www.novatori.com',
        redirectTo: 'https://www.novatori.com',
        httpStatusCode: 301,
    },
    {
        key: '2',
        redirectFrom: 'https://www.novatori.com',
        redirectTo: 'https://www.novatori.com',
        httpStatusCode: 302,
    },
    {
        key: '3',
        redirectFrom: 'https://www.novatori.com',
        redirectTo: 'https://www.novatori.com',
        httpStatusCode: 301,
    },
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
            <BreadCrumbAnt/>
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
