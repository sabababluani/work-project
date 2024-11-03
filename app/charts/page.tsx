import LineChart from "@/app/charts/components/Line/Line";
import RoundChart from "@/app/charts/components/Round/Round";
import styles from './page.module.scss';
import BarChart from "@/app/charts/components/Bar/Bar";
import Circle from "@/app/charts/components/Circle/Circle";
import Bandwidth from "@/app/charts/components/Bandwidth/Bandwidth";
import ProgressLine from "@/app/components/ProgressLine/ProgressLine";

const Charts = () => {
    return (
        <div className={styles.wrapper}>

            <LineChart />
            <BarChart />
            <Circle />
            <Bandwidth />
             <RoundChart/>
        </div>
    )
}

export default Charts;