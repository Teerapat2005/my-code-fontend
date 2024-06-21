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
    labels: ['มี.ค', 'เม.ย', 'พ.ค', 'Avg'],
    datasets: [
      {
        label: 'คนในสัญญา',
        data: [21, 10, 9, 20],
        backgroundColor: '#336666'
      },
      {
        label: 'คนในสัญญามาปฎิบัติงานจริง',
        data: [3, 12, 9, 15],
        backgroundColor: '#339999'
      },
      {
        label: 'คนใน Piece work',
        data: [5, 14, 3, 1],
        backgroundColor: '#FF6666'
      },
      {
        label: 'คนใน Piece work มาปฎิบัติงานจริง',
        data: [5, 1, 3, 10],
        backgroundColor: '#FFCC66'
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

export default Informationinput;
