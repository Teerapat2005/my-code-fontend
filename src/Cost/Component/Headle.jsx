import React from 'react'
import Iconmenu from './Buttonicon/Iconmenu'
import Text_l from './Buttonicon/Text_l'
import Textbox from './Buttonicon/Textbox'

function Headle() {
  return (
    <>
    <div className='navbar bg-slate-200 p-4 w-full p-'>
      <div className='p-1'>  
         <Iconmenu/>
         <Text_l/>
      </div>
      <div className='flex ml-auto '>
         <Textbox/>
      </div>
    </div>



    </>
  )
}

export default Headle