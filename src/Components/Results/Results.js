import React, { useState } from "react";
import './Results.css';
import { PhraseList } from '../PhraseList/PhraseList.js';
import { getTranslation } from '../../apiCalls';
import { Link } from 'react-router-dom';

export const Results = ({ code, language, emoji, phrases, renderPhrases }) => {
  const [showPhrases, setShowPhrases] = useState(false);
  const [currentPhrases, setCurrentPhrases] = useState([]);
  const [favorites, setFavorites] = useState([]);
 
  const updateFavorite = (phrase) => {
    const favPhrase = phrases.indexOf(phrase);
		!phrases[favPhrase].favorite ? phrases[favPhrase].favorite = true : phrases[favPhrase].favorite = false;
    setFavorites([...phrases]);
  }

  const phraseList = () => {
    if (language && emoji) {
      renderPhrases();
      const phraseItems = phrases.map(phrase => {
        return (
        <Link to={`translation/${phrase}/${language}/${code}`}>
          <li key={phrase} className='phrase-list'>
            <h2>{phrase}</h2>
          </li>
        </Link>)
      })
    setCurrentPhrases(phraseItems)
    setShowPhrases(true)
    } else {
      console.log('not yet')
    }
  }

  return(
    <div className='results-container'>
      {!showPhrases && (
        <div className='results-img-display'>
            <div className='placeholder-flag'>
            </div>
          {language && (
            <div className='flag-display'>
              <img id={code} src={`/images/${language}.png`} className='flag-img'></img>
              <p>{language}</p>
            </div>)}
          <h2 className='plus-btn'>+</h2>
          {!emoji && <div className='emoji-img-placeholder'></div>}
          {emoji && (
            <div className='emoji-display-placeholder'>
              <img id={emoji} src={`/images/${emoji}.png`} className='emoji-img'></img>
              <p>{emoji}</p>
            </div>)}
          <button className='advance-btn' onClick={phraseList}>NEXT:</button>
        </div>
      )}
      {showPhrases &&  (
        <PhraseList language={language} code={code} emoji={emoji} currentPhrases={currentPhrases}/>
      )}
    </div>
  )
}