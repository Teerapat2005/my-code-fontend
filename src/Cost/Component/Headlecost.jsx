import React from 'react'
import Iconmenu from './Buttonicon/Iconmenu'
import C_Textl from './Buttonicon/C_Textl'
import C_Textbox from './Buttonicon/C_Textbox'

function Headlecost() {
  return (
    <>
    <div className='navbar bg-slate-200 p-4 w-full p-'>
      <div className='p-1'>  
         <Iconmenu/>
         <C_Textl/>
      </div>
      <div className='flex ml-auto '>
         <C_Textbox/>
      </div>
    </div>



    </>
  )
}

export default Headlecost