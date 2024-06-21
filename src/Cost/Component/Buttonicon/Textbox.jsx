import React from 'react'
import My_Date from './My_Date'

function Textbox ({ setSelectedDate }) {
  return (
    <>
       <div>

         <div className='px-2 h-8 w-44 font-bold text-white bg-black'>
            เดือน/ปี
         </div>
         <div className='h-10 px-3 pt-2 text-sm text-center text-bold bg-gray-300'>
            <My_Date setSelectedDate={setSelectedDate} />
        </div>

       </div>
        




       
    </>
  )
}

export default Textbox 