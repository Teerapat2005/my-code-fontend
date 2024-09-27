import React from 'react'
import { MdMenu, MdSupervisedUserCircle} from "react-icons/md";

function Icon_menu() {
  return (
    <div>
        {/* ปุ่มกด menu */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {/* ส่วนของ drawer */}
      <div className="drawer-content m-2">
        <label htmlFor="my-drawer" className="btn drawer-button"><MdMenu/></label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
          <div htmlFor="my-drawer" className="btn bg-white drawer-button ">
            <p><MdSupervisedUserCircle className='text-2xl'/></p>กำลังพลคู่ธุรกิจ
          </div>

          <li>
            <details>
              <summary className='btn bg-white'>
                ข้อมูล Turn Over
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none ">
                <li>รับเข้า</li>
                <li>พ้นสภาพการทำงาน</li>
              </ul>
            </details>
          </li>
        </ul>

      </div>



    </div>
  )
}

export default Icon_menu