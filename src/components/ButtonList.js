import React from 'react'
import Button from './Button'

const list = ['All', 'Gaming', 'Awards', 'Music', 'Live', 'Cricket', 'Soccer', 'News', 'Cooking']

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item, index) => <Button name={item} key={index} />)}
    </div>
  )
}

export default ButtonList