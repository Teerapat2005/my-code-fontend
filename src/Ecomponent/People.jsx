import React from 'react'

function People() {
  return (
    <div className='flex'>
        <div className='w-1/4 border-2 border-gray-300'>
            <div className='h-14 text-center border-gray-300 font-bold text-white bg-gray-600'>
            คนในสัญญาประจำ</div>
            <div className='h-11 text-center text-bold bg-white text-lg font-bold'>1200</div>
        </div>
        <div className='w-1/4 border-2 border-gray-300'>
            <div className='h-14 text-center  font-bold text-white bg-gray-600'>
            คนในสัญญาประจำมาปฎิบัติงานจริง</div>
            <div className='h-11 text-center text-lg bg-white font-bold'>681</div>
        </div>
        <div className='w-1/4 border-2 border-gray-300'>
            <div className='h-14 text-center font-bold text-white bg-gray-600'>
            คนใน Piecework</div>
            <div className='h-11 text-center bg-white text-lg font-bold'>781</div>
        </div>
        <div className='w-1/4 border-2 border-gray-300'>
            <div className='h-14 text-center font-bold text-white bg-gray-600'>
            คนใน Piecework มาปฎิบัติงานจริง</div>
            <div className='h-11 text-center bg-white text-lg font-bold'>212</div>
        </div>

    </div>
  )
}

export default People