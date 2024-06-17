import React from 'react'

function Pw2() {
  return (
    <>
    <div className='flex bg-gray-300'>
      <div className='w-1/3 p-3 text-5xl text-center font-bold'>
         <div className='text-white bg-black'>
            Process
         </div>
         <div className='border-2 border-black p-8 bg-white'>
            31 M
         </div>
      </div>

      <div className='w-1/3 p-3 text-5xl text-center font-bold'>
         <div className='text-white bg-black'>
            Non Process
         </div>
         <div className='border-2 border-black p-8 bg-white'>
            130 K
         </div>
      </div>

      <div className='w-1/3 p-3 text-5xl text-center font-bold'>
        <div className='text-white bg-black'>
            Total
        </div>
        <div className='border-2 border-black p-8 bg-white'>
            31 M
        </div>
      </div>
    </div>

    </>
  )
}

export default Pw2