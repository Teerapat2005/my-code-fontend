import React from 'react'

function Navbar() {
    return (
        <div>
            <div className='navbar bg-black w-full flex'>
                {/* รูปโลโก้ scg */}
                <img src='/src/img/Logo.png' className='h-10 m-2' />
                {/* หัวข้อเพื่อลิ้งไปหน้า manpower / Contractor */}
                <div className='ml-auto'>
                    <label className='text-white text-xl font-bold p-3'>Contractor Cost</label>
                    <label className='text-white text-xl font-bold p-3'>Manpower reporting</label>
                </div>
            </div>
        </div>
    )
}

export default Navbar;