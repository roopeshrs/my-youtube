import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { setShowSuggestion } from '../utils/appSlice'

const Body = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <Header />
        <div className='flex' onClick={() => dispatch(setShowSuggestion(false))}>
          <Sidebar />
          <Outlet />
        </div>
    </div>
  )
}

export default Body