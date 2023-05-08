import React from 'react'
import { useSelector } from 'react-redux';

const SearchVideoCard = ({info}) => {
  const {snippet} = info;
  const {channelTitle, title, thumbnails} = snippet;
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  return (
    <div className='flex p-2 m-2 shadow-lg w-full gap-2'>
        <div>
          <img className='rounded-lg max-w-none w-[500px] h-[280px] object-cover' alt='thumbnail' src={thumbnails?.high?.url} />
        </div>
        <div className='flex flex-col w-[500px]'>
            <p className='font-semibold text-2xl'>{title}</p>
            <div className='my-2'>
              <p className='text-gray-500 font-semibold'>{channelTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default SearchVideoCard