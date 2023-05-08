import React from 'react'

const ShimmerVideoCard = () => {
  return (
    <div className='flex flex-wrap'>{Array(10).fill("").map((e, index) => (
        <div className='flex flex-col p-2 m-2 shadow-lg h-72 w-64'>
                <div className='flex-1 bg-gray-300'></div>
                <div className='flex-1 flex flex-col justify-around'>
                    <p className='font-bold py-2 bg-gray-300'></p>
                    <div>
                    <p className='bg-gray-300 py-2 mb-2'></p>
                    <p className='bg-gray-300 py-2'></p>
                    </div>
                </div>
            </div>
    ))}</div>
  )
}

export default ShimmerVideoCard