import React from 'react'
import Date_month from '../../../Cost/Component/Buttonicon/Date_month'

function Body_l({ selectedDate }) {
  return (
    <> 
    <div className="flex p-2">
      <p className='font-bold'>
        <a className="text-2xl">ข้อมูลรับเข้า</a> <br/>
        <a className="text-2xl"><Date_month selectedDate={selectedDate} /></a>
      </p>
    </div>
  
  </>
  )
}

export default Body_l