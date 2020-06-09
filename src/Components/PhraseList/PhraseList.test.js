import React from 'react';
import { render } from '@testing-library/react';
import { PhraseList } from './PhraseList';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { emojiData } from '../../appData/emojiData';
import { languageData } from '../../appData/languageData';

describe('PhraseList', () => {
  it('should display the phrases passed down from Results', () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <PhraseList language={languageData[1].language} 
                    code={languageData[1].code} 
                    emoji={emojiData[2].emmotion} 
                    currentPhrases={languageData[1].phrases} />
      </MemoryRouter>
    )
    
  })
})
