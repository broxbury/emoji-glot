import React, { useState } from "react";
import './Results.css';
import { PhraseList } from '../PhraseList/PhraseList.js';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Results = ({ code, language, emoji, phrases, renderPhrases }) => {
  const [showPhrases, setShowPhrases] = useState(false);
  const [currentPhrases, setCurrentPhrases] = useState([]);
 

  const phraseList = () => {
    if (language && emoji) {
      renderPhrases();
      const phraseItems = phrases.map(phrase => {
        return (
        <Link key={phrase} to={`translation/${phrase}/${language}/${code}`}>
          <li key={phrase} className='phrase-list'>
            <h2>{phrase}</h2>
          </li>
        </Link>)
      })
    setCurrentPhrases(phraseItems)
    setShowPhrases(true)
    }
  }

  return(
    <div className='results-container'>
      {!showPhrases && (
        <div className='results-img-display'>
            <div className='placeholder-flag'>
            </div>
            <div className='flag-display'>
              <img aria-label={`selected-${language}`} alt={language} id={code} src={`/images/${language}.png`} className='flag-img'></img>
              <p>{language}</p>
            </div>
          <h2 className='plus-btn'>+</h2>
          {!emoji && <div className='emoji-img-placeholder'></div>}
          {emoji && (
            <div className='emoji-display-placeholder'>
              <img aria-label={`selected-${emoji}`} alt={emoji} id={emoji} src={`/images/${emoji}.png`} className='emoji-img'></img>
              <p className='emoji-img'>{emoji}</p>
            </div>)}
          <button className='advance-btn' onClick={phraseList}>NEXT:</button>
        </div>
      )}
      {showPhrases &&  (
        <PhraseList language={language} code={code} emoji={emoji} currentPhrases={currentPhrases} />
      )}
    </div>
  )
}

Results.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string,
  emoji: PropTypes.string,
  renderPhrases: PropTypes.func.isRequired
};
