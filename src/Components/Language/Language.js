import React from 'react';
import './Language.css';
import PropTypes from 'prop-types';

export const Language  = ({updateCurrentLanguage, code, language}) => {
  
  return(
       <>
         <img aria-label={language} alt={language} id={code} src={`/images/${language}.png`} className='flag-img' onClick={() => updateCurrentLanguage(code, language)}></img>
       </>
  )
}

Language.propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  updateCurrentLanguage: PropTypes.func.isRequired
};
 