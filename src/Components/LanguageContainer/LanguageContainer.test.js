import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LanguageContainer } from './LanguageContainer';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { languageData } from '../../appData/languageData';


describe('LanguageContainer', () => {
  const mockUpdateFn = jest.fn();
  it('should display all the emojis', () => {
    const { getByLabelText } = render (
      <MemoryRouter>
        <LanguageContainer updateCurrentLanguageInfo={mockUpdateFn} />
      </MemoryRouter>
    )
    const japanFlag = getByLabelText('japanese')
    expect(japanFlag).toBeInTheDocument();
  })

  it('should update the current emoji info', () => {
    const mockUpdateFn = jest.fn();
    const { getByLabelText } = render (
      <MemoryRouter>
        <LanguageContainer updateCurrentLanguageInfo={mockUpdateFn} />
      </MemoryRouter>
    )
    fireEvent.click(getByLabelText('chinese'));
    expect(mockUpdateFn).toHaveBeenCalledWith(languageData[5].code, languageData[5].language);
  })
})