import React from 'react'
import Navbar from '../Personal/Iconbutter/Navbar'
import Headlecost from './Component/Headlecost'
import C_Mounth from './Component/Cgrapch/C_Mounth'
import C_Impoetent from './Component/Cgrapch/C_Impoetent'
import Type from './Component/Cgrapch/Type'
import C_Table from './Component/Cgrapch/C_Table'

function Operation() {
  return (
    <>
       <Navbar/>
       <Headlecost/>
       <div className='p-2'>
          <div className='flex flex-row'>
              <div className='w-1/2 border'>
                <C_Mounth/>
              </div>
              <div className='w-1/2 border'>
                <C_Impoetent/>
              </div>
          </div>
       </div>
       <div className='p-2'>
          <div className='border'>
              <Type/>
          </div>
       </div>
       <div className='p-2'>
       <C_Table/>
       </div>
    </>
  )
}

export default Operation;