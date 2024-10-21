'use client';

import {Radar} from 'react-chartjs-2';
<<<<<<< HEAD
import {TooltipItem} from "chart.js";

=======
>>>>>>> 229b8c220907a29de90191c1965c7812957a8ca9
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    RadialLinearScale,
    Filler,
} from 'chart.js';
import Image from 'next/image';
import styles from './page.module.css';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    RadialLinearScale,
    Filler
);

export default function Home() {
    const data = {
        labels: ['', '', '', ''],
        datasets: [
            {
                label: '',
                data: [91, 71, 61, 18],
                backgroundColor: 'rgba(0, 42, 102, 0.47)',
                borderColor: 'rgba(0, 42, 102, 0.47)',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                pointLabels: {
                    display: true,
                },
                ticks: {
                    display: false,
                },
                grid: {
                    circular: true,
                    color: 'blue',
                },
                angleLines: {
                    color: 'blue',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
<<<<<<< HEAD
            tooltip: {
                callbacks: {
                    label: function (tooltip: TooltipItem<'radar'>) {
                        const dataValue = tooltip.raw;
                        return `${dataValue} ${dataValue === 1 ? "Kill" : "Kills"}`;
                    },
                },
                usePointStyle: false,
                displayColors: false,
            },
=======
>>>>>>> 229b8c220907a29de90191c1965c7812957a8ca9
        },
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Image
                    src="/ak47.png"
                    alt="sad"
                    width={40}
                    height={40}
                    className={styles.img1}
                />
                <Image
                    src="/pistol.png"
                    alt="sad"
                    width={50}
                    height={30}
                    className={styles.img2}
                />
                <Radar data={data} options={options} className={styles.radar}/>
                <Image
                    src="/sniper.png"
                    alt="lion"
                    width={40}
                    height={40}
                    className={styles.img3}
                />
                <Image
                    src="/smg.svg"
                    alt="sad"
                    width={40}
                    height={40}
                    className={styles.img4}
                />
            </div>
        </div>
    );
}
