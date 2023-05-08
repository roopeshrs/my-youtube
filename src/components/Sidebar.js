import React from 'react'
import { useSelector } from 'react-redux'
import SidebarRow from './SidebarRow'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined'
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined'
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined'
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  
  return (
    <div className='p-4 shadow-lg'>
      <SidebarRow Icon={HomeOutlinedIcon} title="Home" url="/" />
      <SidebarRow Icon={PlayCircleOutlineOutlinedIcon} title="Shorts" />
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={LibraryAddOutlinedIcon} title="Library" />
      <SidebarRow Icon={RestoreOutlinedIcon} title="History" />
      <SidebarRow Icon={OndemandVideoOutlinedIcon} title="Your videos" />
      <SidebarRow Icon={AccessTimeOutlinedIcon} title="Watch later" />
      <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked videos" />
      <hr />
      <h2 className='font-bold pt-5'>Subscriptions</h2>
      <SidebarRow Icon={AccountCircleOutlinedIcon} title="youtube channel 1" />
      <SidebarRow Icon={AccountCircleOutlinedIcon} title="youtube channel 2" />
      <hr />
      <h2 className='font-bold pt-5'>Explore</h2>
      <SidebarRow Icon={LocalFireDepartmentOutlinedIcon} title="Trending" />
      <SidebarRow Icon={LocalMallOutlinedIcon} title="Shopping" />
      <SidebarRow Icon={MusicNoteOutlinedIcon} title="Music" />
      <SidebarRow Icon={LocalMoviesOutlinedIcon} title="Movies & shows" />
      <SidebarRow Icon={StreamOutlinedIcon} title="Live" />
      <SidebarRow Icon={SportsEsportsOutlinedIcon} title="Gaming" />
      <SidebarRow Icon={NewspaperOutlinedIcon} title="News" />
      <SidebarRow Icon={EmojiEventsOutlinedIcon} title="Sport" />
      <SidebarRow Icon={SchoolOutlinedIcon} title="Learning" />
      <SidebarRow Icon={PeopleAltOutlinedIcon} title="Fashion & beauty" />
    </div>
  )
}

export default Sidebar