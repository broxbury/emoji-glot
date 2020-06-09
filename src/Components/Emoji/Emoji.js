import React from 'react';
import './Emoji.css';
import PropTypes from 'prop-types';

export const Emoji = ({updateCurrentEmoji, id, phrases }) => {

  return(
    <>
      <img aria-label={id} alt={id} id={id} src={`/images/${id}.png`} className='emoji-img' onClick={() => updateCurrentEmoji(id, phrases)}></img>
    </>
  )
}

Emoji.propTypes = {
  id: PropTypes.string.isRequired,
  phrases: PropTypes.array.isRequired,
  updateCurrentEmoji: PropTypes.func.isRequired
};
