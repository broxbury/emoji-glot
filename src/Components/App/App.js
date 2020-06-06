import React from 'react';
import './App.css';
import { Header } from '../Header/Header.js';
import { LanguageContainer } from '../LanguageContainer/LanguageContainer.js';
import { EmojiContainer } from '../EmojiContainer/EmojiContainer.js';
import { Results } from '../Results/Results'

const App = () => {
  return (
    <div>
      <Header />
      <LanguageContainer />
      <EmojiContainer />
      <Results/>
    </div>
  )
}

export default App;
