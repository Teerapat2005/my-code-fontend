import React from 'react'
import { Link } from 'react-router-dom';
import Date from '../Cost/Component/Buttonicon/Date';
import MN_Dropdown from './MN_Dropdown';
import MN_SS_Dropdown from './MN_SS_Dropdown';
import MN_CO_Dropdown from './MN_CO_Dropdown';

function Head_tital() {
  return (
    <div>
    <div className="navbar bg-white"> 
    <div className='px-2'>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn drawer-button">
            <img src='https://cdn-icons-png.freepik.com/512/561/561184.png' className='h-9'/>
          </label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-white text-base-content ">
          <label htmlFor="my-drawer" className="btn bg-white drawer-button pr-32">
          <img src='https://cdn-icons-png.flaticon.com/128/1077/1077114.png' className='h-9'/>
            กำลังพลคู่ธุรกิจ
          </label>
          
          <li>
          <details>
            <summary className='btn bg-white pr-24'>
            <img src='https://cdn-icons-png.flaticon.com/128/2886/2886665.png' className='h-9'/>
            ข้อมูล Turn Over
            </summary>
           <ul className="p-2 bg-base-100 rounded-t-none">
            <li><Link to='/Input'> <img src='https://cdn-icons-png.flaticon.com/128/3462/3462172.png' className='h-6'/>รับเข้า</Link></li>
            <li><Link to='/Quit'> <img src ='https://cdn-icons-png.flaticon.com/128/10288/10288823.png' className='h-6'/> พ้นสภาพการทำงาน</Link></li>
           </ul>
          </details>
        </li>

          </ul>
        </div>
      </div>
    </div>
    <div className="flex-1 text-2xl">
      <p className='font-bold'>
        <a className="">กำลังพลคู่ธุรกิจ</a> <br/>
        <a className=" ">เมษายน พ.ศ.2567</a>
      </p>
    </div>
    <div className="flex flex-row">
      <div className='flex'>
      <div className='px-2'>
      <div className='h-8 w-44 px-2 text-left border-gray-300 font-bold text-white bg-gray-600'>ส่วน</div>
        <div className='bg-gray-300 pl-6 h-12 px-3 py-2 text-left text-bold text-lg'><MN_Dropdown/></div>
      </div>
      <div className='px-2'>
      <div className='h-8 w-44 px-2 text-left border-gray-300 font-bold text-white bg-gray-600'>แผนก</div>
            <div className='h-12 px-3 py-2 text-left text-bold bg-gray-300 text-lg'><MN_SS_Dropdown/></div>
      </div>
      <div className='px-2'>
      <div className='h-8 w-44 px-2 text-left border-gray-300 font-bold text-white bg-gray-600'>เจ้าของสัญญา</div>
            <div className='h-12 px-3 py-2 text-left text-bold bg-gray-300 text-lg'><MN_CO_Dropdown/></div>
      </div>
      <div className='px-2'>
      <div className='h-8 w-44 px-2 text-left border-gray-300 font-bold text-white bg-gray-600'>เวลา</div>
            <div className='h-12 py-2 text-center text-bold bg-gray-300 text-lg'><Date/></div>
      </div>
      </div>

      <ul className="menu menu-horizontal place-items-center">
        <div className='p-6 text-s text-white bg-black'>
          <li><a>Reset</a></li>
        </div>
      </ul>
    </div>
  </div>
  </div>
  )
}

export default Head_tital