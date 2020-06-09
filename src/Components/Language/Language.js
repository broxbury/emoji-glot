import React from 'react';
import './Language.css';

export const Language  = ({updateCurrentLanguage, code, language}) => {
  
  return(
       <>
         <img aria-label={language} alt={language} id={code} src={`/images/${language}.png`} className='flag-img' onClick={() => updateCurrentLanguage(code, language)}></img>
       </>
  )
}
 