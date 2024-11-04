'use client';

import styles from './Round.module.scss';
import {Doughnut} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement,
    Title,
    TooltipItem,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const RoundChart = () => {
    const data = {
        labels: ['Progress', 'Remaining'],
        datasets: [
            {
                data: [300, 30],
                backgroundColor: ['#1890FF', '#E9ECF1'],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
                displayColors: false,
                callbacks: {
                    label: (context: TooltipItem<'doughnut'>) => {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: ${value}`;
                    },
                },
            },
        },
        rotation: 225,
        circumference: 270,
        cutout: '90%',
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.containerWrapper}>
                <Doughnut data={data} options={options}/>
                <div className={styles.centerText}><span>{data.datasets[0].data[0]} Mb</span></div>
            </div>
            <div className={styles.containers}>
                <div className={styles.whiteContainer}>
                    <div className={styles.whiteCircle}></div>
                    <p>Whole : {data.datasets[0].data[0] + data.datasets[0].data[1]} MB</p>
                </div>
                <div className={styles.blueContainer}>
                    <div className={styles.blueCircle}></div>
                    <p>Used : {data.datasets[0].data[0]} MB</p>
                </div>
            </div>
        </div>
    );
};

export default RoundChart;
