import React, { useState }from 'react';
import './App.css';
import { Header } from '../Header/Header.js';
import { LanguageContainer } from '../LanguageContainer/LanguageContainer.js';
import { EmojiContainer } from '../EmojiContainer/EmojiContainer.js';
import { Results } from '../Results/Results'

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
    <div>
      <Header />
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
    </div>
  )
}

export default App;
