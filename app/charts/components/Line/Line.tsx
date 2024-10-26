'use client';

import styles from './Line.module.scss';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    TooltipItem,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [
            {
                label: 'My First dataset',
                data: [35, 42, 80, 81, 76, 82, 80, 70, 90, 71, 85, 96],
                fill: false,
                backgroundColor: '#1890FF',
                borderColor: '#1890FF',
                tension: 0.7,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                intersect: false,
                mode: 'index' as const,
                callbacks: {
                    label: function (tooltip: TooltipItem<'line'>) {
                        const dataValue = tooltip.raw;
                        return `${dataValue} ${dataValue === 1 ? "MB" : "MBS"}`;
                    },
                },
                usePointStyle: false,
                displayColors: false,
            },
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255,255,255, 0.15)',
                },
                ticks: {
                    color: '#FFFFFF',
                },
            },
            y: {
                grid: {
                    color: 'rgba(255,255,255, 0.15)',
                },
                ticks: {
                    display: false,
                },
                max: 130,
            },
        },
        backgroundColor: "#020203",
    };

    return (
        <div className={styles.wrapper}>
            <Line data={data} options={options}/>
        </div>
    );
};

export default LineChart;
