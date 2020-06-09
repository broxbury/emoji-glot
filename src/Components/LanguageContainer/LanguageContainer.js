import React from 'react';
import './LanguageContainer.css';
import { languageData } from '../../appData/languageData.js'
import { Language } from '../Language/Language.js'

export const LanguageContainer  = ({ updateCurrentLanguageInfo }) => {
  

  const updateCurrentLanguage = (code, language) => {
    updateCurrentLanguageInfo(code, language)
  }

  const flags = languageData.map(flag => {
    return (
      <Language key={flag.code} updateCurrentLanguage={updateCurrentLanguage} code={flag.code} language={flag.language}/>
    )
  })
  return(
    <div className='language-container'>
      <div className='language-title'>
        <h3>Please select a language:</h3>
      </div>
      <div className='language-display'>
        {flags}
      </div>
    </div>
  )
}