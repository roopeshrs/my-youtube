import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");
    useEffect(()=>{
        const interval = setInterval(()=>{
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMessage(20),
                id: Date.now(),
            }));
        }, 1500);

        return () => clearInterval(interval);
    }, [])
  return (
    <>
        <div className='p-2 border border-gray-300 w-96 h-[430px] bg-white overflow-y-scroll flex flex-col-reverse'>
            {chatMessages.map(chat => <ChatMessage key={chat.id} name={chat.name} message={chat.message} />)}
        </div>
        <form className='flex relative' onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name: 'roopesh',
                message: liveMessage,
                id: Date.now(),
            }))
            setLiveMessage("");
        }}>
            <input type='text' className='border border-gray-300 p-3 pr-10 flex-1 focus:outline-violet-300' value={liveMessage} onChange={e => setLiveMessage(e.target.value)}/>
            <button className='absolute right-2 top-1/2 -translate-y-1/2'><SendRoundedIcon className='text-red-700'/></button>
        </form>
    </>
  )
}

export default LiveChat