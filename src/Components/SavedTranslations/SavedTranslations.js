import React from 'react';
import './SavedTranslations.css';
import PropTypes from 'prop-types';

export const SavedTranslations = ({ saved, removeFavorite }) => {
  let result;
    if(saved.length > 0) {
      result = saved.map(trans => {
        return (
          <div key={Math.floor(Math.random() * 1000)} className='saved'>
            <li className='translation-result-item'>
            <div className='result-div'>
              <h3 className='colored'>"{trans.phrase}"</h3>
              <h3>{'in ' + trans.language + ' is:'}</h3>
              <h3 className='colored'>{trans.translation}</h3>
            </div>
            <div className='flex-right'>
              <img aria-label={trans.language} alt={trans.language} className='flag-img-small' src={`/images/${trans.language}.png`} />
              <img aria-label={trans.id} alt='delete saved translation' className='trash-can' src='/images/delete.png' onClick={() => removeFavorite(trans.id)}></img>
            </div>
            </li> 
          </div>
        )
      })
    } else if(saved.length === 0) {
      result = (
        <>
          <h2>You currently have 0 saved Translations!</h2>
          <div className='no-results'>
            <img className='emoji-img' src='./images/crying.png'/>
          </div>
        </>
      )
    }
  
  return(
    <>
      <h2 className='centered-title'>Saved Translations</h2>
      <ul className='table-translations'>
      {result}
      </ul>
    </>
  )
}

SavedTranslations.propTypes = {
  saved: PropTypes.array,
  removeFavorite: PropTypes.func
};
