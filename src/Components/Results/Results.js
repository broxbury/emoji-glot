import React, { useState, useEffect } from "react";
import './Results.css';
import { Translation } from '../Translation/Translation.js';
import { getTranslation } from '../../apiCalls';

export const Results = ({ code, language, emoji, phrases, renderPhrases }) => {
  const [showPhrases, setShowPhrases] = useState(false);
  const [currentPhrases, setCurrentPhrases] = useState([]);
  const [translation, setTranslation] = useState('');

  const fetchTranslation = async (phrase) => {
    const translationData = await getTranslation(phrase, code);
    translationData && setTranslation(translationData);
  }
  
  const phraseList = () => {
    setShowPhrases(true)
    renderPhrases();
    const phraseItems = phrases.map(phrase => {
      return (
      <li key={phrase} className='phrase-list' onClick={() => fetchTranslation(phrase)}>
        <h2>{phrase}</h2>
       </li>)
    })
    setCurrentPhrases(phraseItems)
  }

  return(
    <div className='results-container'>
      {!showPhrases && (
        <div className='results-img-display'>
          {language && <img id={code} src={`/images/${language}.png`} className='flag-img' ></img>}
          <h2 className='plus-btn'>+</h2>
          {emoji && <img id={emoji} src={`/images/${emoji}.png`} className='emoji-img'></img>}
          <button className='advance-btn' onClick={phraseList}>NEXT:</button>
      </div>
      )}
      {showPhrases && (
          <div className='list-display'>
            <div className='phrase-header'>
              <h2>select a phrase to translate!</h2>
              <img id={code} src={`/images/${language}.png`} className='flag-img-small' ></img>
              <img id={emoji} src={`/images/${emoji}.png`} className='emoji-img-small'></img>
            </div>
            <ul className='table'>
             {phrases ? currentPhrases : ''}
            </ul>
        </div>
      )}
      {translation && (
        <Translation translation={translation}/>
      )}
    </div>
  )
}