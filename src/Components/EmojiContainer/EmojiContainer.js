import React from 'react';
import './EmojiContainer.css';

export const EmojiContainer = () => {
  return (
    <div className='emoji-container'>
      <div className='emoji-title'>
        <h3>Now select an Emoji!</h3>
      </div>
      <div className='emoji-display'>
        <img id='laughing' src='/images/laughing.png' className='emoji-img'/>
        <img id='cold' src='/images/cold.png' className='emoji-img'/>
        <img id='crying' src='/images/crying.png' className='emoji-img'/>
        <img id='sad' src='/images/sad.png' className='emoji-img'/>
        <img id='in-love' src='/images/in-love.png' className='emoji-img'/>
        <img id='sleep' src='/images/sleep.png' className='emoji-img'/>
        <img id='smile' src='/images/smile.png' className='emoji-img'/>  
      </div>
    </div>
  )
}