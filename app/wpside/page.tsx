'use client';

import Navigation from "@/app/components/Navigation/Navigation";
import styles from './page.module.scss';
import Table from "@/app/ant/components/Table";

const WpSide = () => {
    return (
        <div className={styles.wrapper}>
            <Navigation/>
            <Table/>
        </div>
    );
};

export default WpSide;
