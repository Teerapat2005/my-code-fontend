import React from 'react';
import { Pie } from 'react-chartjs-2';
import Md from './Ecomponent/Md';
import Md2 from './Ecomponent/Md2';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function Contract_parties() {
  const data = {
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    datasets: [
      {
        label: 'เกรด',
        data: [3, 4, 2, 10, 7 , 10, 4],
        backgroundColor: ['#FF00CC', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#cbd5e1', '#4b5563']
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          }
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

  return (
    <div className='p-3 h-'>
      <div>
        <div className='border-4 border-black text-center font-bold text-lg text-white bg-black'>
          จำนวนคู่สัญญาเเยกตามเกรด
        </div>
        <div className='border-4 border-gray-300 w-full' style={{ height: "410px" }}>
          <Pie data={data} options={options}></Pie>
        </div>
      </div>
    </div>
  );
}

export default Contract_parties;
