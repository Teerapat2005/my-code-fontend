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

const Partner_input = () => {
    const data = {
        labels: ['แผนกในOpr', 'แผนกในOpr', 'แผนกในOpr', 'แผนกในOpr', 'แผนกในOpr'],
        datasets: [
            {
                label: 'A',
                data: [50,150,35, 50, 100],
                backgroundColor: '#FF9999'
            },
            {
                label: 'B',
                data: [75, 80, 85, 50, 60],
                backgroundColor: '#2F4F4F'
            },
            {
                label: 'C',
                data: [50, 60, 70, 40, 50],
                backgroundColor: '#339999'
            },
            {
                label: 'D',
                data: [50, 120, 140, 90, 110],
                backgroundColor: '#003333'
            },
            {
                label: 'E',
                data: [60, 80, 100, 60, 80],
                backgroundColor: '#FFD700'
            },
            {
                label: 'NO',
                data: [40, 50, 60, 30, 40],
                backgroundColor: '#ff0000'
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
                max: 700 // Adjust this value to set the maximum y-axis value to 1,000
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

                    // Sum values for the current index from all datasets
                    let sum = 0;
                    for (let i = 0; i < datasets.length; i++) {
                        sum += datasets[i].data[dataIndex];
                    }

                    // Display the sum only for the last dataset to avoid duplicate labels
                    return datasetIndex === datasets.length - 1 ? sum : null;
                }
            }
        }
    };

    return (
        <div className='p-3'>
            <div className='bg-black text-white text-center font-bold text-2xl'>
                จำนวนคู่ธุรกิจสัญญาแยกตามเกรด
            </div>
            <div className='bg-white border-4 border-gray-300' style={{ width: '725px', height: '367px' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Partner_input;