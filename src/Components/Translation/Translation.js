import React, { useEffect, useState } from 'react';
import './Translation.css';
import { getTranslation } from '../../apiCalls';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Translation = ({ phrase, language, code, resetData, addFavorite }) => {
  const [translation, setTranslation] = useState('');
 
  useEffect(() => {
    fetchTranslation(phrase)
  }, [])

  const fetchTranslation = async (phrase) => {
    const translationData = await getTranslation(phrase, code);
    translationData && setTranslation(translationData);
  } 

  return(
    <div className='translation-page'>
    {/* <h1 >Your Translation:</h1> */}
      {!translation && <h1 className='loading'>Loading...</h1>}
      {translation && (
        <>
          <ul className='table-translations'>
            <li className='translation-list-item'>
              <div className='result-div'>
                <h3 className='colored'>"{phrase}"</h3>
                <h3>{'in ' + language + ' is:'}</h3>
                <h3 className='colored'>{translation}</h3>
              </div>
              <div className='centered-flag'> 
                <img aria-label={language} alt={language} className='flag-img-small' src={`/images/${language}.png`} />
              </div>
            </li> 
          </ul>
          <div className='translation-btns'>
          <Link to='/saved'>
            <button className='favorite' onClick={() => addFavorite(language, phrase, translation, code)}>Save Translation</button>
            </Link>
            <Link to='/' onClick={resetData}>
              <button className='favorite'>Translate Again</button>
            </Link>
          </div>
          </>)}
    </div>
  )
}

Translation.propTypes = {
  phrase: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  resetData: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired
};

