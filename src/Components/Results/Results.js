import React, { useState } from "react";
import './Results.css';
import { Translation } from '../Translation/Translation.js';
import { getTranslation } from '../../apiCalls';
import { Link } from 'react-router-dom';

export const Results = ({ code, language, emoji, phrases, renderPhrases }) => {
  const [showPhrases, setShowPhrases] = useState(false);
  const [currentPhrases, setCurrentPhrases] = useState([]);
  const [translation, setTranslation] = useState('');
  const [favorites, setFavorites] = useState([]);
 
  const updateFavorite = (phrase) => {
    const favPhrase = phrases.indexOf(phrase);
		!phrases[favPhrase].favorite ? phrases[favPhrase].favorite = true : phrases[favPhrase].favorite = false;
    setFavorites([...phrases]);
    console.log(favorites)
  }

  const fetchTranslation = async (phrase) => {
    const translationData = await getTranslation(phrase, code);
    translationData && setTranslation(translationData);
  } 
  
  const phraseList = () => {
    if (language && emoji) {
      setShowPhrases(true)
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
    } else {
      console.log('not yet')
    }
  }

  return(
    <div className='results-container'>
      {!showPhrases && (
        <div className='results-img-display'>
          {!language && (
            <div className='placeholder-flag'>
            </div>)}
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
      {showPhrases && (
        <>
          <div className='phrase-header'>
            <h2>select a phrase to translate!</h2>
            <img id={code} src={`/images/${language}.png`} className='flag-img-small' ></img>
            <img id={emoji} src={`/images/${emoji}.png`} className='emoji-img-small'></img>
          </div>
          <div className='list-display'>
            <ul className='table'>
             {phrases ? currentPhrases : ''}
            </ul>
        </div>
       </>
      )}
    </div>
  )
}