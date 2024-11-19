import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

// Register required Chart.js components
ChartJS.register(...registerables);

const Linechart = () => {
    const chartRef = useRef(null);  // Reference to the chart canvas

    const data = {
        labels: ['Base', 'Mid Tier', 'Premium', 'Corporate'],
        datasets: [
            {
                label: 'Base',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
            {
                label: 'Mid Tier',
                data: [45, 49, 70, 61, 46, 45, 30],
                fill: false,
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.1,
            },
            {
                label: 'Premium',
                data: [25, 39, 60, 51, 36, 35, 20],
                fill: false,
                borderColor: 'rgba(255, 159, 64, 1)',
                tension: 0.1,
            },
            {
                label: 'Corporate',
                data: [25, 39, 60, 51, 36, 35, 20],
                fill: false,
                borderColor: 'rgba(255, 159, 64, 1)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    // Create chart when the component is mounted
    useEffect(() => {
        const chartInstance = new ChartJS(chartRef.current, {
            type: 'line',
            data: data,
            options: options,
        });

        // Cleanup function to destroy chart on component unmount or before re-render
        return () => {
            chartInstance.destroy();
        };
    }, [data, options]);

    return <canvas className='h-[200px]' ref={chartRef}></canvas>;
};

export default Linechart;