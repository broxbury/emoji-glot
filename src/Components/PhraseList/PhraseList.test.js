import React from 'react';
import { render } from '@testing-library/react';
import { PhraseList } from './PhraseList';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { emojiData } from '../../appData/emojiData';
import { languageData } from '../../appData/languageData';

describe('PhraseList', () => {
  it('should display the phrases passed down from Results', () => {
    const { getByText } = render(
      <MemoryRouter>
        <PhraseList language={languageData[1].language} 
                    code={languageData[1].code} 
                    emoji={emojiData[2].emotion} 
                    currentPhrases={emojiData[2].phrases} />
      </MemoryRouter>
    )
    const phrase = getByText('I am so sad right now', { exact: false })
    expect(phrase).toBeInTheDocument();
  })
})
