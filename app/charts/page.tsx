import React, {Suspense} from 'react';
import LineChart from "@/app/charts/components/Line/Line";
import RoundChart from "@/app/charts/components/Round/Round";
import styles from './page.module.scss';
import BarChart from "@/app/charts/components/Bar/Bar";
import Circle from "@/app/charts/components/Circle/Circle";
import Bandwidth from "@/app/charts/components/Bandwidth/Bandwidth";
import ProgressLine from "@/app/components/ProgressLine/ProgressLine";
import CurlyBandwidth from "@/app/charts/components/CurlyBandWidth/CurlyBandWidth";
import RoundAnt from "@/app/charts/components/RoundAnt/RoundAnt";
import Loading from '@/app/loading';

const Charts = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <Suspense fallback={<Loading/>}>
            <div className={styles.wrapper}>
                <LineChart/>
                <BarChart/>
                <Circle/>
                <Bandwidth/>
                <RoundChart/>
                <ProgressLine/>
                <CurlyBandwidth/>
                <RoundAnt/>
            </div>
        </Suspense>
    )
}

export default Charts;
