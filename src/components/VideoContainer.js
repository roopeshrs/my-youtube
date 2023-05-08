import React, {useEffect, useState} from 'react'
import { YOUTUBE_POPULAR_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ShimmerVideoCard from './ShimmerVideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getPopularVideos();
  }, [])

  const getPopularVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  }

  if(videos.length === 0){
    return <ShimmerVideoCard />
  }
  return (
    <div className='flex flex-wrap'>
      {videos?.map(video => <Link to={"/watch?v="+video.id} key={video.id}><VideoCard info={video} /></Link>)}
    </div>
  )
}

export default VideoContainer