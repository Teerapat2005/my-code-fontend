import React from 'react';
import Date_month from './Date_month';

function C_Textl({ selectedDate }) {
  return (
    <div>
      <div className='text-2xl px-2 font-bold' style={{ width: '500px' }}>
        <div>
          ส่วน Operation
        </div>
        <div>
          <Date_month selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
}

export default C_Textl;
