import React from 'react'

function MN_SS_Dropdown() {
  return (
    <>

      <details className="dropdown">
      <summary className="w-32 bg-gray-300">ทั้งหมด</summary>
      <ul className="p-2 menu dropdown-content z-[1] w-52 bg-gray-200">
        <li><a>ทั้งหมด</a></li>
        <li><a>ส่วน 1</a></li>
        <li><a>ส่วน 2</a></li>
        <li><a>ส่วน 3</a></li>
        <li><a>ส่วน 4</a></li>
        <li><a>ส่วน 5</a></li>
        <li><a>ส่วน 6</a></li>
      </ul>
      </details>

    </>
  )
}

export default MN_SS_Dropdown