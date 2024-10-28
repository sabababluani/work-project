'use client';

import styles from './Bandwidth.module.scss';
import {Line} from 'react-chartjs-2';
import {Chart} from 'chart.js';
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

const Bandwidth = () => {
    const data = {
        labels: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [
            {
                label: 'My First dataset',
                data: [96, 85, 80, 95, 76, 67, 66, 45, 55, 30, 11, 22],
                fill: false,
                backgroundColor: '#1890FF',
                borderColor: '#1890FF',
                tension: 0,
            },
        ],
    };

    const shadowPlugin = {
        id: 'shadowPlugin',
        beforeDraw: (chart: Chart) => {
            const ctx = chart.ctx;
            const dataset = chart.data.datasets[0];

            if (!chart.data.labels || !dataset) return;

            ctx.save();
            const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
            gradient.addColorStop(0, 'rgba(24, 144, 255, 0.4)');
            gradient.addColorStop(1, 'rgba(24, 144, 255, 0.0001)');

            ctx.fillStyle = gradient;
            ctx.beginPath();

            for (let i = 0; i < chart.data.labels.length; i++) {
                const x = chart.scales.x.getPixelForValue(i);
                const value = dataset.data[i];
                if (typeof value === 'number') {
                    const y = chart.scales.y.getPixelForValue(value);
                    if (i === 0) {
                        ctx.moveTo(x, chart.height);
                    }
                    ctx.lineTo(x, y);
                }
            }

            ctx.lineTo(chart.scales.x.right, chart.height);
            ctx.lineTo(chart.scales.x.left, chart.height);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        },
        beforeTooltipDraw: (chart: Chart) => {
            const ctx = chart.ctx;
            const tooltip = chart.tooltip;

            if (tooltip && tooltip.opacity > 0) {
                const tooltipData = tooltip.dataPoints[0];
                const x = tooltipData.element.x;
                const y = tooltipData.element.y;

                ctx.save();
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, chart.scales.y.bottom);
                ctx.strokeStyle = '#1890FF';
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.restore();
            }
        },
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
                    color: '#FFFFFF',
                },
                max: 120,
            },
        },
        backgroundColor: "#020203",
    };

    return (
        <div className={styles.wrapper}>
            <Line data={data} options={options} plugins={[shadowPlugin]}/>
        </div>
    );
};

export default Bandwidth;
