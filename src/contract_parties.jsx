import React from 'react';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

function Contract_parties() {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'No'],
    datasets: [
      {
        label: 'เกรด',
        data: [3, 4, 2, 10, 7, 10, 4],
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
            const total = tooltipItem.dataset.data.reduce((sum, value) => sum + value, 0);
            const value = tooltipItem.raw;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          }
        }
      },
      datalabels: {
        color: 'black',
        font: {
          weight: 'bold',
          size: 16,
        },
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((sum, value) => sum + value, 0);
          const percentage = ((value / total) * 100).toFixed(2);
          return `${value} (${percentage}%)`;
        },
        anchor: 'end',
        align: 'end',
        offset: 10,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
    radius: '80%',
    cutout: '0%',
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
