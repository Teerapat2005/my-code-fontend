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

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Informationinput() {
  const data = {
    labels: ['ม.ค', 'ก.พ', 'มี.ค', 'เม.ย', 'พ.ค'],
    datasets: [
      {
        label:'Model', 
        data: [33, 66, 99, 12, 50],
        backgroundColor: ['#B0C4DE', '#B0C4DE', '#B0C4DE', '#B0C4DE', '#336666']
      }
    ]
  };

  const options = {
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: (value, context) => {
          return value;
        }
      }
    },
    scales: {
            x: {
                beginAtZero: true,
                stacked: true,
                max: 100 // Adjust this value to set the maximum x-axis value to 100
            },
            y: {
                stacked: true,
            }
    }
  };

  return (
    <div className='p-3'>
      <div>
        <div className='border-2 border-black text-center font-bold text-lg text-white bg-black'>
        ข้อมูลการรับเข้าคู่ธุรกิจ
        </div>
        <div className= 'border-4 border-gray-300' style={{ height: '542px'}}>
          <Bar data={data} options={options}></Bar>
        </div>
      </div>
      
    </div>
  );
}

export default Informationinput;
