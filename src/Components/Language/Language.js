import React from 'react';
import './Language.css';
import { Link } from 'react-router-dom';

export const Language  = ({updateCurrentLanguage, code, language}) => {
  
  return(
       <>
         <img id={code} src={`/images/${language}.png`} className='flag-img' onClick={() => updateCurrentLanguage(code, language)}></img>
       </>
  )
}
