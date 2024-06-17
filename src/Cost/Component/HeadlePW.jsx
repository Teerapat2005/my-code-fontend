import React from 'react'
import Iconmenu from './Buttonicon/Iconmenu'
import Pw_Textl from './Buttonicon/Pw_Textl'
import Textbox from './Buttonicon/Textbox'

function HeadlePW() {
  return (
    <>
    <div className='navbar bg-slate-200 p-4 w-full p-'>
      <div className='p-1'>  
         <Iconmenu/>
         <Pw_Textl/>
      </div>
      <div className='flex ml-auto '>
         <Textbox/>
      </div>
    </div>



    </>
  )
}

export default HeadlePW