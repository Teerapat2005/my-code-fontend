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

function Mounth() {
  const data = {
    labels: ['มี.ค', 'เม.ย', 'พ.ค', 'Avg'],
    datasets: [
      {
        label: 'Piece',
        data: [25, 10, 39, 10],
        backgroundColor: '#36A2EB'
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
          แยกรายเดือน
        </div>
        <div className='border-4 border-gray-300'>
          <Bar data={data} options={options}></Bar>
        </div>
      </div>
    </div>
  );
}

export default Mounth;
