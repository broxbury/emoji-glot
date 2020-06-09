import React from 'react';
import './PhraseList.css';
import PropTypes from 'prop-types';

export const PhraseList = ({ language, code, emoji, currentPhrases}) => {
  
  return (
    <>
    <div className='phrase-header'>
      <h2>select a phrase to translate!</h2>
      <img alt={language} id={code} src={`/images/${language}.png`} className='flag-img-small' ></img>
      <img alt={emoji} id={emoji} src={`/images/${emoji}.png`} className='emoji-img-small'></img>
    </div>
    <div className='list-display'>
      <ul className='table'>
       {currentPhrases}
      </ul>
    </div>
 </>
  )
}

PhraseList.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  currentPhrases: PropTypes.array.isRequired
};
