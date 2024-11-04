'use client';

import styles from './CurlyBandWidth.module.scss';
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
    Filler,
    ScriptableContext,
    ChartDataset
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

const CurlyBandwidth = () => {
    const data = {
        labels: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],

        datasets: [
            {
                label: '',
                data: [31, 35, 20, 25, 29, 17, 26, 15, 15, 10, 11, 22],
                fill: true,
                backgroundColor: (context: ScriptableContext<'line'>) => {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    if (!chartArea) return null;
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, 'rgba(162,0,255,0.4)');
                    gradient.addColorStop(1, 'rgba(162,0,255,0.07)');
                    return gradient;
                },
                borderColor: '#A200FF',
                tension: 0.6,
                pointRadius: 0,
            } as ChartDataset<'line', number[]>,
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#fff',
                titleColor: '#000',
                bodyColor: '#000',
                padding: 15,
                intersect: false,
                mode: 'index' as const,
                callbacks: {
                    label: function (tooltip: TooltipItem<'line'>) {
                        const dataValue = tooltip.raw;
                        return `${dataValue} ${dataValue === 1 ? "MB" : "MBs"}`;
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
                    color: '#FFFFFF',
                },
                max: 40,
            },
        },
    };

    return (
        <div className={styles.wrapper}>
            <Line data={data} options={options}/>
        </div>
    );
};

export default CurlyBandwidth;
