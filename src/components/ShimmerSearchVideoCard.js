import React from 'react'

const ShimmerSearchVideoCard = () => {
  return (
    <div className='flex flex-col'>{Array(10).fill("").map((e, index) => (
        <div className='flex p-2 m-2 shadow-lg w-full gap-2'>
            <div className='w-[500px] h-[280px] bg-gray-300'></div>
            <div className='flex flex-col w-[500px]'>
                <p className='py-2 bg-gray-300'></p>
                <div className='my-2 py-2 bg-gray-300 w-20'></div>
            </div>
        </div>
    ))}</div>
  )
}

export default ShimmerSearchVideoCard