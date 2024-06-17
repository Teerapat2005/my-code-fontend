import React from 'react'
import Date from './Date'

function C_Textbox () {
  return (
    <>
       <div className='p-1'>
         <div className='px-2 h-8 w-44 font-bold text-white bg-black'>
            ส่วน
           </div>
         <div className='h-10 px-3 pt-2 text-sm text-center text-bold bg-gray-300 '>
            ส่วน
           </div>
       </div>
       <div className='p-1'>
       <div className='px-2 h-8 w-44 font-bold text-white bg-black'>
            เดือน/ปี
           </div>
         <div className='h-10 px-3 pt-2 text-sm text-center text-bold bg-gray-300'>
            <Date/>
          </div>
        </div>



       
    </>
  )
}

export default C_Textbox 