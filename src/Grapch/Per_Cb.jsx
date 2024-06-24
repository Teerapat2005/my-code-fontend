import React, { useEffect, useState } from 'react';
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

const Per_Cb = ({ selectedPart, selectedDepartment, selectedOwner }) => {
    const initialData = {
        labels: ['ส่วน ก', 'ส่วน ข', 'ส่วน ค', 'ส่วน ง'],
        datasets: [
            {
                label: 'Process',
                data: [90, 20, 35, 50],
                backgroundColor: '#FF0033'
            },
            {
                label: 'Non Process',
                data: [50, 80, 58, 50],
                backgroundColor: '#CCFF33'
            }
        ]
    };

    const [data, setData] = useState(initialData);

    useEffect(() => {
        if (selectedPart) {
            let updatedData;
            if (!selectedDepartment) {
                if (selectedPart === 'ส่วน ก') {
                    updatedData = {
                        labels: ['แผนก 1', 'แผนก 2'],
                        datasets: [
                            { label: 'Process', data: [50, 50], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [50, 50], backgroundColor: '#CCFF33' }
                        ]
                    };
                } else if (selectedPart === 'ส่วน ข') {
                    updatedData = {
                        labels: ['แผนก 3', 'แผนก 4'],
                        datasets: [
                            { label: 'Process', data: [30, 70], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [40, 60], backgroundColor: '#CCFF33' }
                        ]
                    };
                } else if (selectedPart === 'ส่วน ค') {
                    updatedData = {
                        labels: ['แผนก 5', 'แผนก 6'],
                        datasets: [
                            { label: 'Process', data: [90, 10], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [40, 60], backgroundColor: '#CCFF33' }
                        ]
                    };
                } else if (selectedPart === 'ส่วน ง') {
                    updatedData = {
                        labels: ['แผนก 7', 'แผนก 8'],
                        datasets: [
                            { label: 'Process', data: [63, 17], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [45, 55], backgroundColor: '#CCFF33' }
                        ]
                    };
                }
                // Add more conditions for ส่วน ค and ส่วน ง
            } else {
                if (selectedDepartment === 'แผนก 1') {
                    updatedData = {
                        labels: ['นาย ก1'],
                        datasets: [
                            { label: 'Process', data: [70], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [30], backgroundColor: '#CCFF33' }
                        ]
                    };
                } else if (selectedDepartment === 'แผนก 2') {
                    updatedData = {
                        labels: ['นาย ก2'],
                        datasets: [
                            { label: 'Process', data: [30], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [70], backgroundColor: '#CCFF33' }
                        ]
                    };
                } else if (selectedDepartment === 'แผนก 3') {
                    updatedData = {
                        labels: ['นาย ก3'],
                        datasets: [
                            { label: 'Process', data: [18], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [62], backgroundColor: '#CCFF33' }
                        ]
                    };
                } else if (selectedDepartment === 'แผนก 4') {
                    updatedData = {
                        labels: ['นาย ก4'],
                        datasets: [
                            { label: 'Process', data: [52], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [48], backgroundColor: '#CCFF33' }
                        ]
                    };
                } else if (selectedDepartment === 'แผนก 5') {
                    updatedData = {
                        labels: ['นาย ก5'],
                        datasets: [
                            { label: 'Process', data: [89], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [11], backgroundColor: '#CCFF33' }
                        ]
                    };
                } else if (selectedDepartment === 'แผนก 6') {
                    updatedData = {
                        labels: ['นาย ก6'],
                        datasets: [
                            { label: 'Process', data: [43], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [57], backgroundColor: '#CCFF33' }
                        ]
                    };
                } else if (selectedDepartment === 'แผนก 7') {
                    updatedData = {
                        labels: ['นาย ก7'],
                        datasets: [
                            { label: 'Process', data: [33], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [67], backgroundColor: '#CCFF33' }
                        ]
                    };
                } else if (selectedDepartment === 'แผนก 8') {
                    updatedData = {
                        labels: ['นาย ก8'],
                        datasets: [
                            { label: 'Process', data: [14], backgroundColor: '#FF0033' },
                            { label: 'Non Process', data: [66], backgroundColor: '#CCFF33' }
                        ]
                    };
                }

            
                // Add more conditions for other departments and owners
            }
            setData(updatedData);
        } else {
            setData(initialData);
        }
    }, [selectedPart, selectedDepartment, selectedOwner]);

    const totals = data.labels.map((_, i) => {
        return data.datasets.reduce((sum, dataset) => sum + dataset.data[i], 0);
    });

    const percentageData = {
        labels: data.labels,
        datasets: data.datasets.map(dataset => ({
            ...dataset,
            data: dataset.data.map((value, i) => (value / totals[i]) * 100)
        }))
    };

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                stacked: true,
                max: 100
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
                    pointStyle: 'rect',
                }
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: true
            },
            datalabels: {
                formatter: function (value, context) {
                    const dataset = data.datasets[context.datasetIndex];
                    const originalValue = dataset.data[context.dataIndex];
                    const percentage = (originalValue / totals[context.dataIndex]) * 100;
                    return `${originalValue} (${percentage.toFixed(2)}%)`;
                },
                anchor: 'center',
                align: 'center',
                color: 'black',
                font: {
                    weight: 'bold'
                }
            }
        }
    };

    return (
        <div className='p-3'>
            <div className='bg-gray-200'>
                <div className='bg-black text-white text-center font-bold text-2xl'>
                    จำนวน แผนกในOprสัญญาแยกตามเกรด
                </div>
                <div className='flex'>
                    <div className='w-1/2 p-1'>
                        <div className='bg-gray-800 text-white font-bold text-center h-14'>
                            Process
                        </div>
                        <div className='text-center font-bold bg-white h-11'>
                            {data.datasets[0].data.reduce((acc, curr) => acc + curr, 0)}
                        </div>
                    </div>
                    <div className='w-1/2 p-1'>
                        <div className='bg-gray-800 text-white font-bold text-center h-14'>
                            Non Process
                        </div>
                        <div className='text-center font-bold bg-white h-11'>
                            {data.datasets[1].data.reduce((acc, curr) => acc + curr, 0)}
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white border-4 border-gray-300 p-2' style={{ width: '718px', height: '363px' }}>
                <Bar data={percentageData} options={options} />
            </div>
        </div>
    );
};

export default Per_Cb;
