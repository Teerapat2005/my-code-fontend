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

function Tang() {
  const data = {
    labels: ['CO', 'MRO', 'Mining', 'SD', 'MD', 'HR', 'Opr', 'Qr', 'BSE', 'DDV', 'ID', 'SD'],
    datasets: [
      {
        label:'Model', 
        data: [33, 60, 12, 23, 19, 73, 41, 10, 1, 14, 11, 76],
        backgroundColor: '#006666'
      },
      {
        label:'ส่วน', 
        data: [33, 6, 75, 23, 19, 10, 41, 10, 1, 14, 11, 8],
        backgroundColor: '#339999'
      },
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
        stacked: true,
    },
    y: {
        beginAtZero: true,
        stacked: true,
        max: 100  
    }
    }
  };

  return (
    <div className='p-3'>
      <div>
        <div className='border-2 border-black text-center font-bold text-lg text-white bg-black'>
        Model เทียบจำนวนคนจริงในฐานระบบ
        </div>
        <div className= 'border-4 px-32 border-gray-300'style={{ width: '1480px', height: '600px' }}>
          <Bar data={data} options={options}></Bar>
        </div>
      </div>
      
    </div>
  );
}

export default Tang;
