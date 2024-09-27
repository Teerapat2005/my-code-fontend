import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown_MN_DP from './Dropdown_MN_DP';
import Dropdown_MN_SS from './Dropdown_MN_SS';
import Dropdown_MN_CO from './Dropdown_MN_CO';
import Date_month from '../Cost/Component/Buttonicon/Date_month';
import My_Date from '../Cost/Component/Buttonicon/My_Date';
import Button_Reset from '../Cost/Component/Buttonicon/Button_Reset';

const Head_tital = ({ selectedMonth, setSelectedMonth, handlePartChange, handleDepartmentChange, handleOwnerChange, selectedPart, selectedDepartment }) => {
  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="btn drawer-button">
                <img src='https://cdn-icons-png.freepik.com/512/561/561184.png' className='h-9' />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                <label htmlFor="my-drawer" className="btn bg-white drawer-button pr-32">
                  <img src='https://cdn-icons-png.flaticon.com/128/1077/1077114.png' className='h-9' />
                  กำลังพลคู่ธุรกิจ
                </label>
                <li>
                  <details>
                    <summary className='btn bg-white pr-24'>
                      <img src='https://cdn-icons-png.flaticon.com/128/2886/2886665.png' className='h-9' />
                      ข้อมูล Turn Over
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                      <li><Link to='/Input'><img src='https://cdn-icons-png.flaticon.com/128/3462/3462172.png' className='h-6' />รับเข้า</Link></li>
                      <li><Link to='/Quit'><img src='https://cdn-icons-png.flaticon.com/128/10288/10288823.png' className='h-6' />พ้นสภาพการทำงาน</Link></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-4 text-2xl font-bold">
            <div style={{ width: '500px' }}>
              <a className="">กำลังพลคู่ธุรกิจ</a> <br />
            </div>
            <a className=""><Date_month selectedDate={selectedMonth} /></a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className='flex'>
            <div className='px-2'>
              <div className='h-8 w-44 px-2 text-left border-gray-300 font-bold text-white bg-gray-800'>ส่วน</div>
              <div className='bg-white h-12 text-left text-bold text-lg'><Dropdown_MN_DP onSelectionChange={handlePartChange} /></div>
            </div>
            <div className='px-2'>
              <div className='h-8 w-44 px-2 text-left border-gray-300 font-bold text-white bg-gray-800'>แผนก</div>
              <div className='h-12 text-left text-bold bg-white text-lg'><Dropdown_MN_SS selectedPart={selectedPart} onSelectionChange={handleDepartmentChange} /></div>
            </div>
            <div className='px-2'>
              <div className='h-8 w-44 px-2 text-left border-gray-300 font-bold text-white bg-gray-800'>เจ้าของสัญญา</div>
              <div className='h-12 text-left text-bold bg-white text-lg'><Dropdown_MN_CO selectedDepartment={selectedDepartment} onSelectionChange={handleOwnerChange} /></div>
            </div>
            <div className='px-2'>
              <div className='h-8 w-44 px-2 text-left border-gray-300 font-bold text-white bg-gray-800'>เดือน / ปี</div>
              <div className='h-12 text-center text-bold bg-white shadow text-lg'><My_Date setSelectedDate={setSelectedMonth} /></div>
            </div>
          </div>
          <Button_Reset />
        </div>
      </div>
    </div>
  );
};

export default Head_tital;
