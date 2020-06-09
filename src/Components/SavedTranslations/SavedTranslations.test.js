import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SavedTranslations } from './SavedTranslations';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';


describe('SavedTranslations', () => {
  let saved = [
    {
      language: 'french',
      phrase: 'something in French',
      translation: 'quelque chose en français',
      code: 'fr',
      id: 'frenchsomething in Frenchquelque chose en françaisfr'
    },
    {
      language: 'portuguese',
      phrase: 'something in Portuguese',
      translation: 'algo em portugues',
      code: 'pt-br',
      id: 'portuguesesomething in portuguesealgo em portuguespt-br'
    }
  ]

it('should display the saved translations', () => {
  
  const { getByText, getByLabelText } = render (
    <MemoryRouter>
      <SavedTranslations saved={saved} />
    </MemoryRouter>
  )

  const portugusePhrase = getByText('algo em portugues')
  const frenchPhrase = getByText('quelque chose en français')
  const portugueseImg = getByLabelText('portuguese')
  const frenchImg = getByLabelText('french')

  expect(portugusePhrase).toBeInTheDocument();
  expect(portugueseImg).toBeInTheDocument();
  expect(frenchPhrase).toBeInTheDocument();
  expect(frenchImg).toBeInTheDocument();
})

it('should remove a saved translation', () => {
  const mockRemoveFavorite = jest.fn();

  const { getByLabelText } = render (
    <MemoryRouter>
      <SavedTranslations saved={saved} removeFavorite={mockRemoveFavorite} />
    </MemoryRouter>
  )
 
  fireEvent.click(getByLabelText('portuguesesomething in portuguesealgo em portuguespt-br'))
  expect(mockRemoveFavorite).toHaveBeenCalledTimes(1)
 
})
  
}) 