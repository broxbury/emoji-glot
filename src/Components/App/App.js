import React, { useState } from 'react';
import './App.css';
import { Header } from '../Header/Header.js';
import { LanguageContainer } from '../LanguageContainer/LanguageContainer.js';
import { EmojiContainer } from '../EmojiContainer/EmojiContainer.js';
import { Results } from '../Results/Results';
import { Route } from 'react-router-dom';
import { Translation } from '../Translation/Translation';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [currentCode, setCurrentCode] = useState('');
  const [currentEmoji, setCurrentEmoji] = useState('');
  const [currentPhrases, setCurrentPhrases] = useState('');
  const [showPhrases, setShowPhrases] = useState(false)


  const updateCurrentLanguage = (code, language) => {
    setCurrentLanguage(language)
    setCurrentCode(code)
  }

  const updateCurrentEmoji = (id, phrases) => {
    setCurrentEmoji(id)
    setCurrentPhrases(phrases)
  }
  const renderPhrases = () => {
    setShowPhrases(true)
  }

  return (
    <>
      <Header />
      <Route exact path='/'>
        {!showPhrases && (
          <>
            <LanguageContainer updateCurrentLanguageInfo={updateCurrentLanguage} />
            <EmojiContainer updateCurrentEmojiInfo={updateCurrentEmoji}/>
          </>
        )}
        
      <Results code={currentCode} 
              language={currentLanguage} 
              emoji={currentEmoji} 
              phrases={currentPhrases}
              renderPhrases={renderPhrases}
              />
       </Route>
      <Route exact path='/:translation/:phrase/:language/:code' render={({ match }) => {
        return (
          <Translation translation={match.params.translation} phrase={match.params.phrase} language={match.params.language} code={match.params.code}/>
        )
  
      }} />
    </>
   
  )
}

export default App;
