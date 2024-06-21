import React, { useState, useEffect } from 'react';
import { Pie as PieChart } from 'react-chartjs-2'; // เปลี่ยนชื่อการนำเข้าเพื่อหลีกเลี่ยงความขัดแย้ง
import Md from './Ecomponent/Md';
import Md2 from './Ecomponent/Md2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
    Chart as Chartjs,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { fetchDataFromBackend } from "./API_fontend/api_backend"; // ตรวจสอบเส้นทางนี้ให้ถูกต้อง

Chartjs.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels // ลงทะเบียนปลั๊กอิน
);

function Nonprocess() { // เปลี่ยนชื่อฟังก์ชัน
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'จำนวนคน',
                data: [],
                backgroundColor: ['#FF00CC', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB'] // คุณสามารถเพิ่มสีได้ตามต้องการ
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
            datalabels: {
                display: true,
                color: 'black',
                anchor: 'end',
                align: 'end',
                formatter: (value) => value, // กำหนดฟอร์แมตของข้อมูลที่จะแสดง
                font: {
                    weight: 'bold'
                }
            }
        },
        layout: {
            padding: 10
        },
        elements: {
            arc: {
                borderWidth: 0,
                borderRadius: 0,
            }
        },
        radius: '80%', // ปรับรัศมีของกราฟวงกลม
        cutout: '0%', // ปรับรัศมีภายใน (สำหรับกราฟ Doughnut)
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchDataFromBackend();
                console.log(data);
                // Transform data here
                const labels = data.map(item => item.DEPARTMENT_SHORT);
                const values = data.map(item => item.TOTAL_CONTRACTNO);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'จำนวนคน',
                            data: values,
                            backgroundColor: labels.map(() => '#' + Math.floor(Math.random() * 16777215).toString(16)) // สร้างสีสุ่มสำหรับแต่ละส่วน
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
            <div className=''>
                <div className='border-4 border-black text-center font-bold text-lg bg-black text-white'>
                    กำลังพลคู่ธุรกิจตามสัญญา (Process/Non Process)
                </div>
                <div className="flex flex-row border-4 border-gray-300">
                    <div className="flex-1"> <Md /> </div>
                    <div className="flex-1"> <Md2 /> </div>
                </div>
                <div className='border-4 border-gray-300 w-full' style={{ height: "410px" }}>
                    <PieChart data={chartData} options={options} />
                </div>
            </div>
        </div>
    );
}

export default Nonprocess; // เปลี่ยนชื่อการส่งออก
