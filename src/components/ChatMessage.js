import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center my-2'>
        <AccountCircleRoundedIcon />
        <span className='px-2 font-bold'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage