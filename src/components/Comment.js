import React from 'react'

const Comment = ({data}) => {
    const {name, text, replies} = data;
  return (
    <div className='flex my-4 bg-gray-100 p-2 w-full shadow-lg rounded-lg'>
        <div className='mr-2'>
            <img className='h-12' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
        </div>
        <div>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment