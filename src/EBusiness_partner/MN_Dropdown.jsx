import React from 'react'

function Dropdown() {
  return (
    <>
      <details className="dropdown">
      <summary className="w-32 bg-gray-300">ทั้งหมด</summary>
      <ul className="p-2 menu dropdown-content z-[1] w-52 bg-gray-200">
        <li><a>ทั้งหมด</a></li>
        <li><a>CP</a></li>
        <li><a>MRO</a></li>
        <li><a>Mining</a></li>
        <li><a>SD</a></li>
        <li><a>MD</a></li>
        <li><a>HR</a></li>
      </ul>
      </details>

    </>
  )
}

export default Dropdown