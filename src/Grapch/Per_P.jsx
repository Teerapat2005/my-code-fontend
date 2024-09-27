import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { format, subMonths } from 'date-fns';
import { th } from 'date-fns/locale';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

const generateChartData = (selectedDate, maxY) => {
  const allData = {
    '2024-02': [9, 20, 11, 19],
    '2024-03': [9, 15, 2, 17],
    '2024-04': [3, 1, 8, 19],
    '2024-05': [3, 10, 7, 14],
  };

  let dates = [];
  let colors = ['#0d3c45', '#01b8aa', '#fd625e', '#f3c910'];

  if (selectedDate) {
    const selected = new Date(selectedDate);
    for (let i = 3; i >= 0; i--) {
      const date = subMonths(selected, i);
      dates.push(format(date, 'yyyy-MM', { locale: th }));
    }
  } else {
    const now = new Date();
    for (let i = 3; i >= 0; i--) {
      const date = subMonths(now, i);
      dates.push(format(date, 'yyyy-MM', { locale: th }));
    }
  }

  const data = {
    labels: dates.map(date => format(new Date(date), 'MMM yy', { locale: th })),
    datasets: [
      {
        label: 'คนในสัญญา',
        data: dates.map(date => allData[date]?.[0] || 0),
        backgroundColor: colors[0]
      },
      {
        label: 'คนในสัญญามาปฎิบัติงานจริง',
        data: dates.map(date => allData[date]?.[1] || 0),
        backgroundColor: colors[1]
      },
      {
        label: 'คนใน Piece work',
        data: dates.map(date => allData[date]?.[2] || 0),
        backgroundColor: colors[2]
      },
      {
        label: 'คนใน Piece work มาปฎิบัติงานจริง',
        data: dates.map(date => allData[date]?.[3] || 0),
        backgroundColor: colors[3]
      },
    ]
  };

  const options = {
    scales: {
      x: {
        stacked: false,
      },
      y: {
        beginAtZero: true,
        stacked: false,
        max: maxY
      }
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: (context) => {
          const index = context.dataIndex;
          const datasetIndex = context.datasetIndex;
          const dataDate = dates[index];
          return dataDate === selectedDate ? 'red' : 'black';
        },
        font: (context) => {
          const index = context.dataIndex;
          const dataDate = dates[index];
          return {
            weight: 'bold',
            size: dataDate === selectedDate ? 14 : 10 // ขนาดฟอนต์ 14 สำหรับเดือนที่เลือก และ 10 สำหรับเดือนที่ไม่ได้เลือก
          };
        }
      }
    }
  };

  return { data, allData, options };
};

function Per_P({ selectedDate, maxY = 25 }) {
  const { data, allData, options } = generateChartData(selectedDate, maxY);
  const selectedMonthData = allData[selectedDate] || [0, 0, 0, 0];

  return (
    <div className='p-1'>
      <div className='bg-gray-200'>
        <div className='border-2 border-black text-center font-bold text-2xl text-white bg-black'>
          กำลังพล(คน)
        </div>

        <div className='flex flex-row'>
          <div className='text-center p-1 w-1/4'>
            <div className='text-white font-bold bg-gray-800 h-14'>
              คนในสัญญาประจำ
            </div>
            <div className='font-bold bg-white h-12 pt-3' style={{ color: selectedDate ? '' : 'black' }}>
              {selectedMonthData[0]}
            </div>
          </div>

          <div className='text-center p-1 w-1/4'>
            <div className='text-white font-bold bg-gray-800 h-14'>
             คนในสัญญาประจำมาปฏิบัติงานจริง
            </div>
            <div className='font-bold bg-white h-12 pt-3' style={{ color: selectedDate ? '' : 'black' }}>
                {selectedMonthData[1]}
            </div>
          </div>

          <div className='text-center p-1 w-1/4'>
            <div className='text-white font-bold bg-gray-800 h-14'>
             คนใน Piecework
            </div>
            <div className='font-bold bg-white h-12 pt-3' style={{ color: selectedDate ? '' : 'black' }}>
                {selectedMonthData[2]}
            </div>
          </div>

          <div className='text-center p-1 w-1/4'>
            <div className='text-white font-bold bg-gray-800 h-14'>
            คนใน Pieceworkมาปฏิบัติงานจริง
            </div>
            <div className='font-bold bg-white h-12 pt-3' style={{ color: selectedDate ? '' : 'black' }}>
                {selectedMonthData[3]}
            </div>
          </div>
        </div>

        <div className='border-4 border-gray-300 bg-white'>
          <Bar
            data={data}
            options={options}
            style={{ height: '352px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Per_P;
