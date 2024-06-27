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
import ChartDataLabels from 'chartjs-plugin-datalabels';
import DB_Ts from '../Database_Test/DB_Ts';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

const BP_Grade = ({ onGradeClick }) => {
  const departments = ['แผนก 1', 'แผนก 2', 'แผนก 3', 'แผนก 4', 'แผนก 5', 'แผนก 6', 'แผนก 7', 'แผนก 8'];
  const grades = ['A', 'B', 'C', 'D', 'E', 'NO'];

  const getGradeCountByDepartment = (department, grade) => {
    return DB_Ts.filter(person => person.แผนก === department && person.เกรด === grade).length;
  };

  const data = {
    labels: departments,
    datasets: grades.map((grade, index) => ({
      label: grade,
      data: departments.map(department => getGradeCountByDepartment(department, grade)),
      backgroundColor: ['#fd625e', '#f3c910', '#0d3c45', '#01b8aa', '#676d6e', '#b84301'][index]
    }))
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
        max: 20
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        }
      },
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: false,
        callbacks: {
          label: (context) => {
            const datasetLabel = context.dataset.label || '';
            const value = context.raw || 0;
            return `${datasetLabel}: ${value}`;
          }
        }
      },
      datalabels: {
        display: (context) => {
          return context.datasetIndex === grades.length - 1;
        },
        anchor: 'end',
        align: 'end',
        color: 'black',
        formatter: (value, context) => {
          const total = context.chart.data.datasets.reduce((sum, dataset) => {
            return sum + dataset.data[context.dataIndex];
          }, 0);
          return total;
        }
      }
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const chartElement = elements[0];
        const grade = data.datasets[chartElement.datasetIndex].label;
        const department = data.labels[chartElement.index];
        onGradeClick(grade, department);
      }
    }
  };

  return (
    <div className='p-1'>
      <div className='border-2 border-black text-center font-bold text-lg text-white bg-black'>
        จำนวนคู่ธุรกิจสัญญาแยกตามเกรด
      </div>
      <div className='border-4 border-gray-300 ' style={{ height: '414px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BP_Grade;
