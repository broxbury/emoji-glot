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

  const updateCurrentLanguage = (code, language) => {
    setCurrentLanguage(language)
    setCurrentCode(code)
  }

  const updateCurrentEmoji = (id, phrases) => {
    setCurrentEmoji(id)
    setCurrentPhrases(phrases)
  }

  return (
    <div>
      <Header />
      <LanguageContainer updateCurrentLanguageInfo={updateCurrentLanguage} />
      {currentLanguage && <EmojiContainer updateCurrentEmojiInfo={updateCurrentEmoji}/>}
      {currentEmoji && <Results code={currentCode} language={currentLanguage} emoji={currentEmoji} phrases={currentPhrases}/>}
    </div>
  )
}

export default App;
