import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { YOUTUBE_VIDEO_DATA_API } from '../utils/constants';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu())
  }, [])

  const [videoInfo, setVideoInfo] = useState({});
  useEffect(()=>{
    getVideoData();
  }, [])

  const getVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_DATA_API + searchParams.get("v"));
    const json = await data.json();
    setVideoInfo(json.items[0]);
  }

  return (
    <div className='flex m-4 gap-2'>
      <div className='flex flex-col flex-1'>
        <div>
          <iframe  
            className='w-full h-[480px]'
            src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
            title="YouTube video player" 
            allowFullScreen />
            <h2 className='font-semibold text-2xl my-4'>{videoInfo?.snippet?.title}</h2>
        </div>
        <CommentsContainer />
      </div>
      <div>
          <LiveChat />
      </div>
    </div>
  )
}

export default WatchPage