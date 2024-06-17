import React from 'react'
import Navbar from '../Personal/Iconbutter/Navbar'
import HeadlePW from './Component/HeadlePW'
import C_Impoetent from './Component/Cgrapch/C_Impoetent'
import C_Table from './Component/Cgrapch/C_Table'
import Pw_table from './Component/Cgrapch/Pw_table'
import Pw from './Component/Cgrapch/Pw'


function Piecework() {
  return (
    <>
      <Navbar/>
      <HeadlePW/>
      <div className='p-2'>
          <div className='flex flex-row'>
              <div className='w-1/2 border'>
                <Pw_table/>
              </div>
              <div className='w-1/2 border'>
                <C_Impoetent/>
              </div>
          </div>
       </div>
       <div className='p-2'>
          <div className='border'>
            <Pw/>  
          </div>
       </div>
       <div className='p-2'>
       <C_Table/>
       </div>

      
    </>
  )
}

export default Piecework