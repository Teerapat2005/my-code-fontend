import React from 'react'

function MN_CO_Dropdown() {
  return (
    <div>
      <details className="dropdown">
      <summary className="w-32 bg-gray-300">ทั้งหมด</summary>
      <ul className="p-2 menu dropdown-content z-[1] w-52 bg-gray-200">
        <li><a>ทั้งหมด</a></li>
        <li><a>นาย 1</a></li>
        <li><a>นาย 2</a></li>
        <li><a>นาย 3</a></li>
        <li><a>นาย 4</a></li>
        <li><a>นาย 5</a></li>
        <li><a>นาย 6</a></li>
      </ul>
      </details>

    </div>
  )
}

export default MN_CO_Dropdown