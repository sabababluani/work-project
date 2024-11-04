'use client';

import React, {useEffect, useState} from 'react';
import styles from './Bar.module.scss';
import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TooltipItem,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const BarChart = () => {
    const [barThickness, setBarThickness] = useState(55);

    const updateBarThickness = () => {
        const containerWidth = document.querySelector(`.${styles.wrapper}`)?.clientWidth || 0;
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            setBarThickness(20);
        } else {
            const numBars = 5;
            const newThickness = Math.max(30, containerWidth / numBars - 10);
            setBarThickness(newThickness > 55 ? 55 : newThickness);
        }
    };

    useEffect(() => {
        updateBarThickness();
        window.addEventListener('resize', updateBarThickness);

        return () => {
            window.removeEventListener('resize', updateBarThickness);
        };
    }, []);

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (tooltip: TooltipItem<'bar'>) {
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
                stacked: true,
                grid: {
                    color: 'rgba(255,255,255, 0.15)',
                },
                ticks: {
                    color: '#FFFFFF',
                },
            },
            y: {
                stacked: true,
                grid: {
                    color: 'rgba(255,255,255, 0.15)',
                },
                ticks: {
                    color: '#FFFFFF',
                },
                max: 2500,
            }
        },
        backgroundColor: "#020203",
    };

    const barChartData = {
        labels: ["April", "May", "June", "July", "August"],
        datasets: [
            {
                label: "Usage",
                data: [920, 300, 150, 980, 220],
                backgroundColor: "#A200FF",
                barThickness: barThickness,
            },
            {
                label: "Maximum",
                data: [1000, 1000, 1000, 1000, 1000],
                backgroundColor: "rgba(58,58,62,0.6)",
                barThickness: barThickness,
                borderRadius: 8,
            },
        ],
    };


    return (
        <div className={styles.wrapper}>
            <Bar options={options} data={barChartData}/>
        </div>
    );
}

export default BarChart;
