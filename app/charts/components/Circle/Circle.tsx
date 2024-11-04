'use client';

import styles from './Circle.module.scss';
import {Doughnut} from "react-chartjs-2";
import {TooltipItem} from "chart.js";

const Circle = () => {
    const dataValues = [300, 300, 400, 230];
    const total = dataValues.reduce((sum, value) => sum + value, 0);
    const percentages = dataValues.map(value => ((value / total) * 100).toFixed(2) + '%');

    const data = {
        labels: [],
        datasets: [
            {
                data: dataValues,
                backgroundColor: [
                    'rgba(22, 119, 255, 1)',
                    '#A200FF',
                    'rgb(4,43,94)',
                    'rgb(232,231,231)'
                ],
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
        cutout: '75%',
        responsive: true,
    };

    return (
        <div className={styles.wrapper}>
            <Doughnut data={data} options={options}/>
            <div className={styles.container}>
                <p>Total</p>
                <span>{total}</span>
                {dataValues.map((value, index) => (
                    <div className={styles.statsContainer} key={index}>
                        <div className={`${styles.cube} ${styles[`cube${index + 1}`]}`}></div>
                        <p>{value}</p>
                        <span>{percentages[index]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Circle;
