import React from 'react';

function C_Table() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-400">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border border-gray-400 p-2">หน่วยงาน</th>
            <th className="border border-gray-400 p-2">MO1</th>
            <th className="border border-gray-400 p-2">MO2</th>
            <th className="border border-gray-400 p-2">MO3</th>
            <th className="border border-gray-400 p-2">MO4</th>
            <th className="border border-gray-400 p-2">MO5</th>
            <th className="border border-gray-400 p-2 bg-red-500">Grand Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <td className="border border-gray-400 p-2">BSE</td>
            <td className="border border-gray-400 p-2">521,999</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
          </tr>
          <tr className="bg-yellow-300">
            <td className="border border-gray-400 p-2">Purchasing Document</td>
            <td className="border border-gray-400 p-2">Purchase Order Text</td>
            <td className="border border-gray-400 p-2">Cost Element</td>
            <td className="border border-gray-400 p-2">Total quantity</td>
            <td className="border border-gray-400 p-2">Posted unit of meas</td>
            <td className="border border-gray-400 p-2">Val.in rep.cur.</td>
            <td className="border border-gray-400 p-2">Cost Center</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">8030273910</td>
            <td className="border border-gray-400 p-2">จ้างบำรุงรักษา PM/ Test Load Crane Winch</td>
            <td className="border border-gray-400 p-2">521,999</td>
            <td className="border border-gray-400 p-2">70</td>
            <td className="border border-gray-400 p-2">EA</td>
            <td className="border border-gray-400 p-2">6,000</td>
            <td className="border border-gray-400 p-2">0153-70020</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">MRO</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Operation</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Quarry</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">VBCC</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
            <td className="border border-gray-400 p-2">123,400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default C_Table;
