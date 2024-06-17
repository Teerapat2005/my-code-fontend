import React from 'react'
import Navbarcost from './Component/Navbarcost'
import Headle from './Component/Headle'
import Mounth from './Component/Cgrapch/Mounth'
import Unit from './Component/Cgrapch/Unit'
import Type from './Component/Cgrapch/Type'

function Contractor_cost() {
  return (
    <>
       <Navbarcost/>
       <Headle/>
       <div className='p-2'>
          <div className='flex flex-row'>
              <div className='w-1/2 border'>
                <Mounth/>
              </div>
              <div className='w-1/2 border'>
                <Unit/>
              </div>
          </div>
       </div>
       <div className='p-2'>
          <div className='border'>
              <Type/>
          </div>
       </div>












    </>
  )
}

export default Contractor_cost