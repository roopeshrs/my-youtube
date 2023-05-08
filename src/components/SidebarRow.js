import React from 'react'
import { Link } from 'react-router-dom'

const SidebarRow = ({title, Icon, url}) => {
  return (
    <Link to={url} className='flex m-2 p-2 cursor-pointer rounded-lg hover:bg-gray-200'>
        <Icon />
        <h2 className='ml-2'>{title}</h2>
    </Link>
  )
}

export default SidebarRow