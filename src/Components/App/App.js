import React, { useState } from 'react';
import './App.css';
import { Header } from '../Header/Header.js';
import { LanguageContainer } from '../LanguageContainer/LanguageContainer.js';
import { EmojiContainer } from '../EmojiContainer/EmojiContainer.js';
import { Results } from '../Results/Results';
import { Route } from 'react-router-dom';
import { Translation } from '../Translation/Translation';
import { SavedTranslations } from '../SavedTranslations/SavedTranslations';
import useLocalStorage  from '../../hooks'

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [currentCode, setCurrentCode] = useState('');
  const [currentEmoji, setCurrentEmoji] = useState('');
  const [currentPhrases, setCurrentPhrases] = useState('');
  const [showPhrases, setShowPhrases] = useState(false);
  const [saved, setSaved] = useLocalStorage('saved', [])

  const updateCurrentLanguage = (code, language) => {
    setCurrentLanguage(language)
    setCurrentCode(code)
  }

  const updateCurrentEmoji = (id, phrases) => {
    if (currentLanguage) {
      setCurrentEmoji(id)
      setCurrentPhrases(phrases)
    }
  }

  const removeFavorite =(id) => {
    let newSaved = saved.filter(trans => trans.id !== id)
    setSaved(newSaved)
  }

  const addFavorite = (language, phrase, translation, code) => {
    const favObj = {
      'language': language,
      'phrase': phrase,
      'translation': translation,
      'code': code,
      'id': language + phrase + translation + code
    }
    setSaved([...saved, favObj])
  }

  const renderPhrases = () => {
    setShowPhrases(true)
  }

  const resetData = () => {
    setShowPhrases(false);
    setCurrentLanguage('');
    setCurrentCode('');
    setCurrentEmoji('');
    setCurrentPhrases('');
  }

  return (
    <>
      <Header resetData={resetData}/>
      <Route exact path='/'>
        {!showPhrases && (
          <>
            <LanguageContainer updateCurrentLanguageInfo={updateCurrentLanguage} />
            <EmojiContainer updateCurrentEmojiInfo={updateCurrentEmoji}/>
          </>
        )}
      {currentLanguage && (
      <Results code={currentCode} 
              language={currentLanguage} 
              emoji={currentEmoji} 
              phrases={currentPhrases}
              renderPhrases={renderPhrases}
              resetData={resetData}
              />)}
      </Route>
      <Route exact path='/:translation/:phrase/:language/:code' render={({ match }) => {
        return (
          <Translation resetData={resetData} 
                       translation={match.params.translation} 
                       phrase={match.params.phrase} 
                       language={match.params.language} 
                       code={match.params.code} 
                       addFavorite={addFavorite}
                       removeFavorite={removeFavorite }

          />)
      }}/>
      <Route exact path='/saved'>
        <SavedTranslations saved={saved} 
                           removeFavorite={removeFavorite} />
      </Route>
    </>
   
  )
}

export default App;
