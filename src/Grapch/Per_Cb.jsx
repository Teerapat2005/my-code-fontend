import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import DB_Ts from '../Database_Test/DB_Ts';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

const Per_Cb = ({ selectedPart, selectedDepartment, selectedOwner, onBarClick }) => {
  const initialData = {
    labels: ['ส่วน ก', 'ส่วน ข', 'ส่วน ค', 'ส่วน ง'],
    datasets: [
      {
        label: 'Process',
        data: [0, 0, 0, 0],
        backgroundColor: '#b84301'
      },
      {
        label: 'Non Process',
        data: [0, 0, 0, 0],
        backgroundColor: '#f3c910'
      }
    ]
  };

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const updateData = () => {
      const processCounts = { 'ส่วน ก': 0, 'ส่วน ข': 0, 'ส่วน ค': 0, 'ส่วน ง': 0 };
      const nonProcessCounts = { 'ส่วน ก': 0, 'ส่วน ข': 0, 'ส่วน ค': 0, 'ส่วน ง': 0 };
      const departmentCounts = {
        'แผนก 1': { process: 0, nonProcess: 0 },
        'แผนก 2': { process: 0, nonProcess: 0 },
        'แผนก 3': { process: 0, nonProcess: 0 },
        'แผนก 4': { process: 0, nonProcess: 0 },
        'แผนก 5': { process: 0, nonProcess: 0 },
        'แผนก 6': { process: 0, nonProcess: 0 },
        'แผนก 7': { process: 0, nonProcess: 0 },
        'แผนก 8': { process: 0, nonProcess: 0 }
      };

      DB_Ts.forEach(employee => {
        if (employee.Process_NonProcess === 'Process') {
          processCounts[employee.ส่วน]++;
          departmentCounts[employee.แผนก].process++;
        } else if (employee.Process_NonProcess === 'Non Process') {
          nonProcessCounts[employee.ส่วน]++;
          departmentCounts[employee.แผนก].nonProcess++;
        }
      });

      if (selectedPart) {
        const departmentMapping = {
          'ส่วน ก': ['แผนก 1', 'แผนก 2'],
          'ส่วน ข': ['แผนก 3', 'แผนก 4'],
          'ส่วน ค': ['แผนก 5', 'แผนก 6'],
          'ส่วน ง': ['แผนก 7', 'แผนก 8']
        };
        const selectedDepartments = departmentMapping[selectedPart];

        if (selectedDepartment) {
          const updatedData = {
            labels: [`นาย ก ${selectedDepartment[selectedDepartment.length - 1]}`],
            datasets: [
              {
                label: 'Process',
                data: [departmentCounts[selectedDepartment].process],
                backgroundColor: '#b84301'
              },
              {
                label: 'Non Process',
                data: [departmentCounts[selectedDepartment].nonProcess],
                backgroundColor: '#f3c910'
              }
            ]
          };
          setData(updatedData);
        } else {
          const updatedData = {
            labels: selectedDepartments,
            datasets: [
              {
                label: 'Process',
                data: selectedDepartments.map(department => departmentCounts[department].process),
                backgroundColor: '#b84301'
              },
              {
                label: 'Non Process',
                data: selectedDepartments.map(department => departmentCounts[department].nonProcess),
                backgroundColor: '#f3c910'
              }
            ]
          };
          setData(updatedData);
        }
      } else {
        const updatedData = {
          labels: ['ส่วน ก', 'ส่วน ข', 'ส่วน ค', 'ส่วน ง'],
          datasets: [
            {
              label: 'Process',
              data: [
                processCounts['ส่วน ก'],
                processCounts['ส่วน ข'],
                processCounts['ส่วน ค'],
                processCounts['ส่วน ง']
              ],
              backgroundColor: '#b84301'
            },
            {
              label: 'Non Process',
              data: [
                nonProcessCounts['ส่วน ก'],
                nonProcessCounts['ส่วน ข'],
                nonProcessCounts['ส่วน ค'],
                nonProcessCounts['ส่วน ง']
              ],
              backgroundColor: '#f3c910'
            }
          ]
        };
        setData(updatedData);
      }
    };

    updateData();
  }, [selectedPart, selectedDepartment]);

  const totals = data.labels.map((_, i) => {
    return data.datasets.reduce((sum, dataset) => sum + dataset.data[i], 0);
  });

  const percentageData = {
    labels: data.labels,
    datasets: data.datasets.map(dataset => ({
      ...dataset,
      data: dataset.data.map((value, i) => (value / totals[i]) * 100)
    }))
  };

  const handleBarClick = (elements) => {
    if (elements.length === 0) return;

    const element = elements[0];
    const datasetLabel = data.datasets[element.datasetIndex].label;
    const label = data.labels[element.index];

    onBarClick({ part: selectedPart, department: selectedDepartment, type: datasetLabel, label });
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
        max: 100
      },
      y: {
        stacked: true,
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
        }
      },
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: true,
        callbacks: {
          label: function (tooltipItem) {
            const dataset = data.datasets[tooltipItem.datasetIndex];
            const value = dataset.data[tooltipItem.dataIndex];
            const total = totals[tooltipItem.dataIndex];
            const percentage = (value / total * 100).toFixed(2);
            return `${dataset.label}: ${value} (${percentage}%)`;
          }
        }
      },
      datalabels: {
        formatter: function (value, context) {
          const dataset = data.datasets[context.datasetIndex];
          const originalValue = dataset.data[context.dataIndex];
          const percentage = (originalValue / totals[context.dataIndex]) * 100;
          return `${originalValue} (${percentage.toFixed(2)}%)`;
        },
        anchor: 'center',
        align: 'center',
        color: 'black',
        font: {
          weight: 'bold'
        }
      }
    },
    onClick: (event, elements) => handleBarClick(elements),
  };

  return (
    <div className='p-1'>
      <div className='bg-gray-200'>
        <div className='bg-black text-white text-center font-bold text-2xl h-9'>
          จำนวน แผนกใน Opr สัญญาแยกตามเกรด
        </div>
        <div className='flex'>
          <div className='w-1/2 p-1'>
            <div className='bg-gray-800 text-white font-bold text-center h-14'>
              Process
            </div>
            <div className='text-center font-bold bg-white h-12 pt-3'>
              {data.datasets[0].data.reduce((acc, curr) => acc + curr, 0)}
            </div>
          </div>
          <div className='w-1/2 p-1'>
            <div className='bg-gray-800 text-white font-bold text-center h-14'>
              Non Process
            </div>
            <div className='text-center font-bold bg-white h-12 pt-3'>
              {data.datasets[1].data.reduce((acc, curr) => acc + curr, 0)}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white border-4 border-gray-300 p-2' style={{ width: '734px', height: '370px' }}>
        <Bar data={percentageData} options={options} />
      </div>
    </div>
  );
};

export default Per_Cb;
