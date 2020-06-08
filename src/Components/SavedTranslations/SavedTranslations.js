import React from 'react';

export const SavedTranslations = ({ saved }) => {
  
  const translationsToDisplay = saved.map(trans => {
    return (
      <li key={trans.phrase}>
      <div className='result-div'>
        <h3 className='colored'>"{trans.phrase}"</h3>
        <h3>{'in ' + trans.language + ' is:'}</h3>
        <h3 className='colored'>{trans.translation}</h3>
      </div>
    <img className='flag-img-small' src={`/images/${trans.language}.png`} />
    </li> 
    )
  })

  return(
    <ul className='table-translations'>
      {translationsToDisplay}
    </ul>
  )
}