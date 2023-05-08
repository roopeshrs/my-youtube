import React, {useState, useEffect} from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { YOUTUBE_KEYWORD_SEARCH } from '../utils/constants';
import SearchVideoCard from './SearchVideoCard';
import ShimmerSearchVideoCard from './ShimmerSearchVideoCard';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  }, [searchParams.get("search_query")])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_KEYWORD_SEARCH + searchParams.get("search_query"));
    const json = await data.json();
    setVideos(json.items);
  }

  if(videos.length === 0){
    return <ShimmerSearchVideoCard />
  }

  return (
    <div className='flex flex-col'>
      {videos?.map(video => <Link to={"/watch?v="+video.id.videoId} key={video.id.videoId}><SearchVideoCard info={video} /></Link>)}
    </div>
  )
}

export default SearchResult