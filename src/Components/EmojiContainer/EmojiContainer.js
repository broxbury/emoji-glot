import React from 'react';
import './EmojiContainer.css';
import { emojiData } from '../../appData/emojiData.js';
import { Emoji }from '../Emoji/Emoji.js';

export const EmojiContainer = ({ updateCurrentEmojiInfo }) => {

  const updateCurrentEmoji = (id, phrases) => {
    updateCurrentEmojiInfo(id, phrases)
  }

  const emojis = emojiData.map(emoji => {
    return (
      <Emoji key={emoji.emotion} id={emoji.emotion} phrases={emoji.phrases} updateCurrentEmoji={updateCurrentEmoji} />
    )
  })
  return (
    <div className='emoji-container'>
      <div className='emoji-title'>
        <h3>Now select an Emoji!</h3>
      </div>
      <div className='emoji-display'>
       { emojis }
      </div>
    </div>
  )
}