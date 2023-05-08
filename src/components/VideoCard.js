import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div className={`flex flex-col p-2 m-2 shadow-lg h-72 ${isMenuOpen ? 'w-64' : 'w-60'}`}>
        <div className='flex-1'>
          <img className='rounded-lg' alt='thumbnail' src={thumbnails?.medium?.url} />
        </div>
        <div className='flex-1 flex flex-col justify-around'>
            <p className='font-bold py-2'>{title?.length > 40 ? title?.substring(0, 40) + " ..." : title}</p>
            <div>
              <p>{channelTitle}</p>
              <p>{statistics?.viewCount} views</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard