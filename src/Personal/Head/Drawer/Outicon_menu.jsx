import React from 'react'
import { Link } from 'react-router-dom'
import Outbody_l from '../Headle/Outbody_l'

function Outicon_menu({ selectedDate }) {
  return (
    <>
        <div className="drawer flex">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Page content here */}
      <label htmlFor="my-drawer" className="btn drawer-button"><img src='https://cdn-icons-png.freepik.com/512/561/561184.png' className='h-9'/></label>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
          <Link to='/' htmlFor="my-drawer" className="btn bg-white drawer-button pr-32">
          <img src='https://cdn-icons-png.flaticon.com/128/1077/1077114.png' className='h-9'/>
            กำลังพลคู่ธุรกิจ
          </Link>
          
        <li>
          <details>
            <summary className='btn bg-white pr-24'>
            <img src='https://cdn-icons-png.flaticon.com/128/2886/2886665.png' className='h-9'/>
            ข้อมูล Turn Over
            </summary>
           <ul className="p-2 bg-base-100 rounded-t-none">
           <li><Link to='/Input'> <img src='https://cdn-icons-png.flaticon.com/128/3462/3462172.png' className='h-6'/>รับเข้า</Link></li>
            <li><Link to=''><img src='https://cdn-icons-png.flaticon.com/128/10288/10288823.png' className='h-6'/>พ้นสภาพการทำงาน</Link></li>
           </ul>
          </details>
        </li>

      </ul>
    </div>
    <div className=''>
      <Outbody_l selectedDate={selectedDate} />
    </div>
  </div>
  </>
  )
}

export default Outicon_menu