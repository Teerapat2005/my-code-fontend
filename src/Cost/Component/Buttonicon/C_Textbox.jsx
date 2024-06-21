import React from 'react';
import My_Date from './My_Date';
import Dropdown_MN_DP from '../../../EBusiness_partner/Dropdown_MN_DP';


function C_Textbox({ setSelectedDate }) {
  return (
    <>
      <div className='p-1'>
        <div className='px-2 h-8 w-44 font-bold text-white bg-black'>
          ส่วน
        </div>
        <div className='h-10 px-3 pt-2 text-sm text-center text-bold bg-gray-300'>
          <Dropdown_MN_DP/>
        </div>
      </div>
      <div className='p-1'>
        <div className='px-2 h-8 w-44 font-bold text-white bg-black'>
          เดือน/ปี
        </div>
        <div className='h-10 px-3 pt-2 text-sm text-center text-bold bg-gray-300'>
          <My_Date setSelectedDate={setSelectedDate} />
        </div>
      </div>
    </>
  );
}

export default C_Textbox;
