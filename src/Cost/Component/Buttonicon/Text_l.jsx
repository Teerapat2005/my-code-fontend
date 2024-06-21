import React from 'react'
import Date_month from './Date_month'

function Text_l({ selectedDate }) {
  return (
    <div>
     <div className='text-2xl px-2 font-bold'style={{ width: '500px' }}>
      <div>
        Cotractor Cost
      </div>
      <div>
        ค่าใช้จ่ายงานจ้างเหมา <Date_month selectedDate={selectedDate} />
      </div>
     </div>
    </div>
  )
}

export default Text_l