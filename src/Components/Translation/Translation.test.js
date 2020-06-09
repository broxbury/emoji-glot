import React from 'react';
import { render, waitFor, getByText } from '@testing-library/react';
import { Translation } from './Translation';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { getTranslation } from '../../apiCalls';
jest.mock("../../apiCalls");

import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;

describe('Translation', () => {
  let mockData = "This is a mocked return of an API call"
  
  beforeEach(() => {
    getTranslation.mockResolvedValue(mockData);
  
  })

  it('should fetch a translation', async () => {
    const mockAddFavorite = jest.fn();
    const mockReset = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <Translation phrase={"this is an expression"} 
                     language={'spanish'} 
                     code={'es'}
                     resetData={mockReset} 
                     addFavorite={mockAddFavorite}
                       />
      </MemoryRouter> )

    const translation = await waitFor(() => getByText('This is a mocked return of an API call'));
    expect(translation).toBeInTheDocument();
  })

  it('should pass the correct info to apiCalls', async () => {
    const mockAddFavorite = jest.fn();
    const mockReset = jest.fn();

    const { getByLabelText } = render(
      <MemoryRouter>
        <Translation phrase={"this is an expression"} 
                     language={'spanish'} 
                     code={'es'} 
                     resetData={mockReset} 
                     addFavorite={mockAddFavorite}
                       />
      </MemoryRouter> )

    const languageImg = await waitFor(() => getByLabelText('spanish'));
    expect(languageImg).toBeInTheDocument();
    
  })

  it('should handle a bad request and display a message to users', async () => {
    getTranslation.mockResolvedValue(false);
    const mockReset = jest.fn();
    const mockAddFavorite = jest.fn();
    
    const { getByText } = render(
      <MemoryRouter>
        <Translation phrase={"this is an expression"} 
                     language={'spanish'} 
                     code={'es'} 
                     resetData={mockReset} 
                     addFavorite={mockAddFavorite}
                       />
      </MemoryRouter> )

  const errorMessage = await waitFor(() => getByText("Uh oh! Looks like this tranlsation isn't available right now. Please try again later"));
  expect(errorMessage).toBeInTheDocument();
  })  
})