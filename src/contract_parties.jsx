import React from 'react';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import DB_Ts from './Database_Test/DB_Ts';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

function Contract_parties({ onGradeClick }) {
  const gradeCounts = DB_Ts.reduce((counts, item) => {
    counts[item.เกรด] = (counts[item.เกรด] || 0) + 1;
    return counts;
  }, {});

  const data = {
    labels: ['A', 'B', 'C', 'D', 'E', 'NO'],
    datasets: [
      {
        label: 'เกรด',
        data: [
          gradeCounts['A'] || 0,
          gradeCounts['B'] || 0,
          gradeCounts['C'] || 0,
          gradeCounts['D'] || 0,
          gradeCounts['E'] || 0,
          gradeCounts['NO'] || 0,
        ],
        backgroundColor: ['#fd625e', '#f3c910', '#0d3c45', '#01b8aa', '#676d6e', '#b84301']
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
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const elementIndex = elements[0].index;
        const grade = data.labels[elementIndex];
        onGradeClick(grade);
      }
    }
  };

  return (
    <div className='p-1'>
      <div>
        <div className='border-4 border-black text-center font-bold text-lg text-white bg-black'>
          จำนวนคู่สัญญาเเยกตามเกรด
        </div>
        <div className='border-4 border-gray-300 w-full' style={{ height: "414px" }}>
          <Pie data={data} options={options}></Pie>
        </div>
      </div>
    </div>
  );
}

export default Contract_parties;
