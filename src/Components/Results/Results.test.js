import React from 'react';
import { render } from '@testing-library/react';
import { Results } from './Results';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { emojiData } from '../../appData/emojiData';
import { languageData } from '../../appData/languageData';

describe('Results', () => {
  it('should render correct emoji and flag when selected', () => {
    const mockRenderPhrases = jest.fn();
    
    const { getByLabelText} = render(
      <MemoryRouter>
        <Results code={languageData[0].code} 
                 language={languageData[0].language}
                 emoji={emojiData[0].emotion}
                 phrases={emojiData[0].phrases}
                 renderPhrases={mockRenderPhrases}
        />
      </MemoryRouter>
    );
    const emoji = getByLabelText('selected-laughing');
    const language = getByLabelText('selected-french');

    expect(emoji).toBeInTheDocument();
    expect(language).toBeInTheDocument();
  })
})