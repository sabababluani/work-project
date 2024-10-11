'use client';

import { Table } from 'antd';
import styles from './page.module.scss';

const Ant = () => {
  return (
    <div className={styles.wrapper}>
      <Table
        className={styles.container}
        columns={[
          {
            title: 'Col1',
            dataIndex: 'col1',
            render: (text) => <span style={{ color: 'blue' }}>{text}</span>,
          },
          {
            title: 'Col2',
            dataIndex: 'col2',
            render: (text) => <span>{text.toUpperCase()}</span>,
          },
          {
            title: 'Col3',
            dataIndex: 'col3',
            render: (text) => (
              <span>
                {text} <strong>custom render</strong>
              </span>
            ),
          },
        ]}
        dataSource={[
          {
            key: '1',
            col1: 'Row1-Col1',
            col2: 'Row1-Col2',
            col3: 'Row1-Col3',
          },
          {
            key: '2',
            col1: 'Row2-Col1',
            col2: 'Row2-Col2',
            col3: 'Row2-Col3',
          },
          {
            key: '3',
            col1: 'Row3-Col1',
            col2: 'Row3-Col2',
            col3: 'Row3-Col3',
          },
        ]}
      />
    </div>
  );
};

export default Ant;
