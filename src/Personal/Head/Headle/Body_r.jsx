import React from 'react'
import My_Date from '../../../Cost/Component/Buttonicon/My_Date'

function Body_r({ setSelectedDate }) {
  return (
    <>
         <div className='flex'>
          <div className='px-2 '>
            <div className='h-8 w-44 px-2 text-left border  border-black font-bold text-white bg-black'>รับทั้งหมด</div>
            <div className='h-14 px-3 pt-1 text-4xl border border-black text-center text-bold text-white bg-green-400 '>45</div>
          </div>
         </div>
         <div className='flex'>
          <div className='px-2 pb-4'>
            <div className='h-8 w-44 px-2 text-left border-gray-300 font-bold text-white bg-black'>ส่วน</div>
            <div className='h-10 px-3 pt-2 text-sm text-center text-bold text-black bg-gray-300 '>PM-People Mangent</div>
          </div>
         </div>
         <div className='flex pb-4'>
          <div className='px-2'>
            <div className='h-8 w-44 px-2 text-left border-gray-300 font-bold text-white bg-black'>เวลา</div>
            <div className='h-10 px-3 pt-2 text-sm text-center text-bold text-black bg-gray-300 '><My_Date setSelectedDate={setSelectedDate} /></div>
          </div>
          <ul className="menu menu-horizontal place-items-center">
           <div className='py-5 px-7 w-32 text-s text-white bg-black'>
               <li><a>Reset</a></li>
           </div>
         </ul>
         </div>
         

    </>
  )
}

export default Body_r