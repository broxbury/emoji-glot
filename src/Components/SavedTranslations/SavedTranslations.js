import React from 'react';
import './SavedTranslations.css';

export const SavedTranslations = ({ saved, removeFavorite }) => {
  console.log(saved)
    const result = saved.map(trans => {
      return (
        <div key={Math.floor(Math.random() * 1000)} className='saved'>
          <li>
          <div className='result-div'>
            <h3 className='colored'>"{trans.phrase}"</h3>
            <h3>{'in ' + trans.language + ' is:'}</h3>
            <h3 className='colored'>{trans.translation}</h3>
          </div>
          <div className='flex-right'>
            <img className='flag-img-small' src={`/images/${trans.language}.png`} />
            <img className='trash-can' src='/images/delete.png' onClick={() => removeFavorite(trans.id)}></img>
          </div>
          </li> 
        </div>
      )
    })
 

  return(
    <>
      <h2 className='centered-title'>Saved Translations:</h2>
      <ul className='table-translations'>
      {saved && result}
        {!saved && (
          <h2>Hello</h2>
        )}
      </ul>
    </>
  )
}