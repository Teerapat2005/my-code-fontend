import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartDataLabels
);

const Contract_grade = () => {
    const rawData = {
        labels: ['Opr', 'Qr', 'MRO', 'BSE', 'DDV'],
        datasets: [
            {
                label: 'Process',
                data: [90, 0, 35, 50, 100],
                backgroundColor: '#FF0033'
            },
            {
                label: 'Non Process',
                data: [50, 80, 58, 50, 20],
                backgroundColor: '#CCFF33'
            }
        ]
    };

    // Calculate total for each data point
    const totals = rawData.labels.map((_, i) => {
        return rawData.datasets.reduce((sum, dataset) => sum + dataset.data[i], 0);
    });

    // Convert data values to percentages
    const data = {
        labels: rawData.labels,
        datasets: rawData.datasets.map(dataset => ({
            ...dataset,
            data: dataset.data.map((value, i) => (value / totals[i]) * 100)
        }))
    };

    const options = {
        indexAxis: 'y', // This makes the bars horizontal
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                stacked: true,
                max: 100 // Adjust this value to set the maximum x-axis value to 100
            },
            y: {
                stacked: true,
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                }
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false
            },
            datalabels: {
                anchor: 'end',
                align: 'end',
                color: 'black',
                formatter: (value) => {
                    return value.toFixed(2) + '%'; // Display percentage values with 2 decimal places
                }
            }
        }
    };

    return (
        <div className='p-3'>
            <div className='bg-black text-white text-center font-bold text-2xl'>
                จำนวน แผนกในOprสัญญาแยกตามเกรด
            </div>
            <div className='bg-white border-4 border-gray-300' style={{ width: '726px', height: '367px'}}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Contract_grade;
