import React from 'react'
import { Link } from 'react-router-dom'

function Iconmenu() {
  return (
    <>

    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn drawer-button"><img src='https://cdn-icons-png.freepik.com/512/561/561184.png' className='h-9'/> </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
        <li>
          <details>
            <summary className='btn bg-white pr-28'>
            <img src='https://cdn-icons-png.flaticon.com/128/2886/2886665.png' className='h-9'/>
            Over View
            </summary>
           <ul className="p-2 bg-base-100 rounded-t-none">
            <li><Link to='/Opr'><img src='https://cdn-icons-png.flaticon.com/128/888/888034.png' className='h-6'/>Opr</Link></li>
            <li><a><img src='https://cdn-icons-png.flaticon.com/128/888/888034.png' className='h-6'/>Qr</a></li>
            <li><a><img src='https://cdn-icons-png.flaticon.com/128/888/888034.png' className='h-6'/>MRO</a></li>
            <li><a><img src='https://cdn-icons-png.flaticon.com/128/888/888034.png' className='h-6'/>BSE</a></li>
            <li><a><img src='https://cdn-icons-png.flaticon.com/128/888/888034.png' className='h-6'/>DDV</a></li>
            <li><a><img src='https://cdn-icons-png.flaticon.com/128/888/888034.png' className='h-6'/>ID 4.0</a></li>
            <li><a><img src='https://cdn-icons-png.flaticon.com/128/888/888034.png' className='h-6'/>MD Office</a></li>
            <li><a><img src='https://cdn-icons-png.flaticon.com/128/888/888034.png' className='h-6'/>IT</a></li>
            <li><a><img src='https://cdn-icons-png.flaticon.com/128/888/888034.png' className='h-6'/>CAD</a></li>
            <li><a><img src='https://cdn-icons-png.flaticon.com/128/888/888034.png' className='h-6'/>CS</a></li>
           </ul>
          </details>
        </li>

        <Link to='/Pw' htmlFor="my-drawer" className="btn bg-white drawer-button pr-32">
          <img src='https://cdn-icons-png.flaticon.com/128/1077/1077114.png' className='h-9'/>
            Piece Work</Link>
    </ul>
  </div>
</div>


    

    
    
    </>
  )
}

export default Iconmenu