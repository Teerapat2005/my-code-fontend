import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { format, subMonths } from 'date-fns';
import { th } from 'date-fns/locale';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const generateChartData = (selectedDate) => {
  const allData = {
    '2024-02': [9, 20, 11, 19],
    '2024-03': [9, 15, 2, 17],
    '2024-04': [3, 1, 8, 19],
    '2024-05': [3, 10, 7, 14],
  };

  let dates = [];
  let colors = ['#336666', '#339999', '#ff6666', '#ffcc66'];

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

  return { data, allData };
};

function Per_P({ selectedDate }) {
  const { data, allData } = generateChartData(selectedDate);
  const selectedMonthData = allData[selectedDate] || [0, 0, 0, 0];
  
  return (
    <div className='p-3'>
      <div className='bg-gray-200'>
        <div className='border-2 border-black text-center font-bold text-lg text-white bg-black'>
          กำลังพล(คน)
        </div>

        <div className='flex flex-row'>
          <div className='text-center p-1 w-1/4'>
            <div className='text-white font-bold bg-gray-800 h-14'>
              คนในสัญญาประจำ
            </div>
            <div className='font-bold bg-white h-12 '>
              {selectedMonthData[0]}
            </div>
          </div>   

          <div className='text-center p-1 w-1/4'>
            <div className='text-white font-bold bg-gray-800 h-14'>
             คนในสัญญาประจำมาปฏิบัติงานจริง
            </div>
            <div className='font-bold bg-white h-12 '>
                {selectedMonthData[1]}
            </div>
          </div>   

          <div className='text-center p-1 w-1/4'>
            <div className='text-white font-bold bg-gray-800 h-14'>
             คนใน Piecework
            </div>
            <div className='font-bold bg-white h-12 '>

              
                {selectedMonthData[2]}
            </div>
          </div>   

          <div className='text-center p-1 w-1/4'>
            <div className='text-white font-bold bg-gray-800 h-14'>
            คนใน Pieceworkมาปฏิบัติงานจริง
            </div>
            <div className='font-bold bg-white h-12 '>
                {selectedMonthData[3]}
            </div>
          </div>   
        </div>

        <div className='border-4 border-gray-300 bg-white'>
          <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} style={{height : '352px'}}/>
        </div>
      </div>
    </div>
  );
}

export default Per_P;
