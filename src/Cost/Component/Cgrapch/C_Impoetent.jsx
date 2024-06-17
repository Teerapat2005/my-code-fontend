import React from 'react'
import Iconupload from '../Buttonicon/Iconupload'

function C_Impoetent() {
  return (
    <>

       <div className='p-3'>
          <div className='h-8 text-white font-bold text-center text-lg bg-black'>
            ประเด็นสำคัญ
          </div>
          <div className='p-3 text-3xl font-bold'>
           - มูลค่า P/W  30,000 บาท <br/>
           - มูลค่า P/W  30,000 บาท
          </div>
          <div className='p-2'>
             <img src='/src/img/xcel.png' className='pt-5 p-2'/>
            <div className='p-2'>
             <div className='btn border-2 border-black text-lg w-40 h-14 float-right'> <Iconupload/> </div>

              

            </div>
          </div>
          </div>
    </>
  )
}

export default C_Impoetent