import './App.css'
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import People from './Ecomponent/People';

import {
    Chart as Chartjs,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // นำเข้าปลั๊กอิน
import { fetchDataFromBackend } from "./API_fontend/api_backend"; 

Chartjs.register(
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ChartDataLabels // ลงทะเบียนปลั๊กอิน
);

function Personnel() {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'ม.ค.67',
                data: [],
                backgroundColor: ['#FF00CC', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FF00CC', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FF00CC', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB']
            }
        ]
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'ข้อมูลรับเข้าคู่ธุรกิจ'
            },
            datalabels: {
                anchor: 'end', // กำหนดตำแหน่งของข้อความ
                align: 'end',  // กำหนดการจัดแนวของข้อความ
                formatter: (value) => value, // ใช้ค่าเดียวกับที่แสดงในกราฟ
                color: 'black', // กำหนดสีของข้อความ
                font: {
                    weight: 'bold'
                }
            }
        },
        layout: {
            padding: 10
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchDataFromBackend();
                console.log(data);
                const labels = data.map(item => item.DEPARTMENT_SHORT);
                const values = data.map(item => item.TOTAL_CONTRACTNO);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'จำนวนคน', 
                            data: values,
                            backgroundColor: labels.map(() => '#' + Math.floor(Math.random()*16777215).toString(16))
                        }
                    ]
                });
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='p-3'>
            <div className='border-4 border-black text-center font-bold text-lg bg-black text-white'>
                กำลังพล(คน)</div>
            <div className='border-4 border-gray-300'><People/></div>
            <div className='border-4 border-gray-300 w-full h-full' style={{ height: "410px" }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
}

export default Personnel;
