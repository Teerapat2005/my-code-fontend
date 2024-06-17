import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

function Type() {
  const barData = {
    labels: ['มี.ค', 'เม.ย', 'พ.ค', 'Avg'],
    datasets: [
      {
        label: 'Model',
        data: [30, 50, 9, 10, 14],
        backgroundColor: ['#36A2EB', '#FFCE56', '#CC0000', '#99CC33', '#FF6633', '#000033']
      }
    ]
  };

  const pieData = {
    labels: ['มี.ค', 'เม.ย', 'พ.ค', 'Avg'],
    datasets: [
      {
        label: 'Model',
        data: [30, 50, 9, 10],
        backgroundColor: ['#36A2EB', '#FFCE56', '#CC0000', '#99CC33']
      }
    ]
  };

  const barOptions = {
    indexAxis: 'y',
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
        ticks: {
          beginAtZero: true,
          callback: function (value, index, values) {
            return value;
          }
        }
      }
    }
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };

  return (
    <div className='p-3'>
      <div className='text-center mb-4'>
        <div className='border-2 border-black text-center font-bold text-lg text-white bg-black'>
          แยกตามประเภท
        </div>
      </div>
    <div className='flex flex-row border-4'>
      <div className='mb-4 w-1/2  h-96'>
        <Bar data={barData} options={barOptions}></Bar>
      </div>
      <div className='w-1/2 h-96 px-48'>
        <Pie data={pieData} options={pieOptions}></Pie>
      </div>
    </div>
   </div>
  );
}

export default Type;
