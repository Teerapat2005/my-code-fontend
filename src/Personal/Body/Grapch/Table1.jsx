import React from 'react'
import Table from './Table'

function Table1() {
  return (
    <>
    <div className=' p-3'>
       <div className=' text-white font-bold  bg-black h-8 px-2 pt-1'>
        ตารางเพิ่มแยกตามส่วน
       </div>
       <div className='border-4 border-gray-300'>
        <Table/>
       </div>
    </div>




    </>
  )
}

export default Table1