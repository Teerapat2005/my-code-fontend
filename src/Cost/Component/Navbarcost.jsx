import React from 'react'
import { Link } from 'react-router-dom'

function Navbarcost() {
  return (
    <>
     
       <div className="navbar bg-black">
          <div className="flex-1 px-2">
             <img src='/src/img/Logo.png' className='h-11'/>
          </div>

        <div className='px-2 py-1'>
      <ul className="menu menu-horizontal place-items-center">
        <div className='flex px-5 text-xl text-bold text-white'>
         <li className='text-red-700'><Link to='/Cost'>CONTRACTOR COST</Link></li>
         <li><Link to='/'>MANPOWER REPORTING</Link></li>
        </div>
      </ul>
         <div className="avatar online">
           <div className="w-14 rounded-full ">
           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
           </div>
         </div>
        </div>
       </div>
     
    </>
  )
}

export default Navbarcost