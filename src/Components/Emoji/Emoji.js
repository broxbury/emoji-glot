import React from 'react';
import './Emoji.css';


export const Emoji = ({updateCurrentEmoji, id, phrases }) => {
  console.log(id, phrases)
  return(
    <>
    <img id={id} src={`/images/${id}.png`} className='emoji-img' onClick={() => updateCurrentEmoji(id, phrases)}></img>
    </>
  )
}