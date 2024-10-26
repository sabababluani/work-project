import LineChart from "@/app/charts/components/Line/Line";
import RoundChart from "@/app/charts/components/Round/Round";
import  styles from  './page.module.scss';
import BarChart from "@/app/charts/components/Bar/Bar";

const Charts = () => {
    return (
        <div className={styles.wrapper}>
            <RoundChart/>
            <LineChart />
            <BarChart />
        </div>
    )
}

export default Charts;