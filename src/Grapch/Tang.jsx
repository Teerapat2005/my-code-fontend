import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
  Legend,
  ChartDataLabels
);

function Tang() {
  const data = {
    labels: ['แผนกใน OPR', 'แผนกใน OPR', 'แผนกใน OPR', 'แผนกใน OPR', 'แผนกใน OPR', 'แผนกใน OPR', 'แผนกใน OPR', 'แผนกใน OPR', 'แผนกใน OPR', 'แผนกใน OPR', 'แผนกใน OPR', 'แผนกใน OPR'],
    datasets: [
      {
        label: 'Model',
        data: [155, 85, 71, 62, 145, 50, 130, 92, 149, 122, 179, 99],
        backgroundColor: '#0d3c45'
      },
      {
        label: 'Contractor',
        data: [120, 185, 85, 110, 179, 99, 150, 130, 130, 90, 144, 81],
        backgroundColor: '#01b8aa'
      },
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: (value) => value,
        color: 'black',
        font: {
          weight: 'bold'
        }
      },
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 16
          }
        }
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 14
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50,
          font: {
            size: 14
          }
        }
      }
    }
  };

  return (
    <div className='p-1' >
      <div>
        <div className='border-2 border-black h-12 flex items-center justify-center font-bold text-2xl text-white bg-black'>
          Model เทียบจำนวนคนจริงในฐานระบบ
        </div>
        <div className='border-4 border-gray-300' style={{ width: '100%', height: '500px' }}>
          <Bar data={data} options={options} plugins={[ChartDataLabels]}></Bar>
        </div>
      </div>
    </div>
  );
}

export default Tang;
