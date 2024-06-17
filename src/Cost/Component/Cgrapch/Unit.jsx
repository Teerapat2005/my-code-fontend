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

const Unit = () => {
    const data = {
        labels: ['Operation', 'Quarry', 'MRO', 'BSE', 'Total'],
        datasets: [
            {
                label: 'Annual contract',
                data: [50,150,35, 50, 100],
                backgroundColor: '#ff6384'
            },
            {
                label: 'Piece work',
                data: [75, 80, 85, 50, 60],
                backgroundColor: '#36a2eb'
            },
            {
                label: 'Overtime',
                data: [50, 60, 70, 40, 50],
                backgroundColor: '#4bc0c0'
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                beginAtZero: true,
                stacked: true,
                max: 350 
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
                formatter: (value, context) => {
                    const datasetIndex = context.datasetIndex;
                    const datasets = context.chart.data.datasets;
                    const dataIndex = context.dataIndex;

                    let sum = 0;
                    for (let i = 0; i < datasets.length; i++) {
                        sum += datasets[i].data[dataIndex];
                    }

                    return datasetIndex === datasets.length - 1 ? sum : null;
                }
            }
        }
    };

    return (
        <div className='p-3'>
            <div className='border-2 border-black text-center font-bold text-lg text-white bg-black'>
                แยกตามหน่วย
            </div>
            <div className='border-4 border-gray-300 ' style={{ width: '725px', height: '367px' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Unit;
