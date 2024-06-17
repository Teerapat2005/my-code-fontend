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

function Informationoutput() {
  const data = {
    labels: ['ม.ค', 'ก.พ', 'มี.ค', 'เม.ย', 'พ.ค'],
    datasets: [
      {
        label:'Model', 
        data: [33, 66, 99, 12, 50],
        backgroundColor: ['#B0C4DE', '#B0C4DE', '#B0C4DE', '#B0C4DE', '#FF0033']
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
      y: {
        ticks: {
          beginAtZero: true,
          callback: function (value, index, values) {
            return value;
          }
        }
      }
    }
  };

  return (
    <div className='p-3'>
      <div>
        <div className='border-2 border-black text-center font-bold text-lg text-white bg-black'>
        ข้อมูลการลาออกคู่ธุรกิจ
        </div>
        <div className= 'border-4 border-gray-300'style={{ width: '1120px', height: '526px' }}>
          <Bar data={data} options={options}></Bar>
        </div>
      </div>
      
    </div>
  );
}

export default Informationoutput;
