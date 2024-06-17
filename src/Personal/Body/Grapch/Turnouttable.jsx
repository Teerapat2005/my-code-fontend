import React from 'react'

const Turnouttable = () => {
    const data = [
        { part: 'ได้งานใหม่', count: 1 },
        { part: 'โอนย้ายไป PW', count: 5 },
        { part: 'เกษียณอายุ', count: 10 },
        { part: 'Black List', count: 2 },
        { part: 'เสียชีวิต', count: 7 },
        { part: 'อื่นๆ', count: 4 },
        
      ];
  return (
    <div className="m-4">
      <table className="min-w-full bg-white rounded-b-md shadow-md">
        <thead>
          <tr>
            <th className="py-3 px-4 bg-gray-200 pr-9">สาเหตุ</th>
            <th className="py-3 px-4 bg-gray-200 pl-24">จำนวน</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-4 px-4 pl-10">{item.part}</td>
              <td className="py-4 px-4 flex justify-end pr-10">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Turnouttable