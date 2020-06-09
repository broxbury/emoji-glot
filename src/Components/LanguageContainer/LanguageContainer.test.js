import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LanguageContainer } from './LanguageContainer';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { languageData } from '../../appData/languageData';


describe('LanguageContainer', () => {
  it('should display all the emojis', () => {
    const { getByLabelText } = render (
      <MemoryRouter>
        <LanguageContainer />
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
    fireEvent.click(getByLabelText('chinese'))
    expect(mockUpdateFn).toHaveBeenCalledWith(languageData[4].code, languageData[4].language)
  })
})