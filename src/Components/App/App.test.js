import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { emojiData } from '../../appData/emojiData';
import { languageData } from '../../appData/languageData';
import { getTranslation } from '../../apiCalls';
jest.mock("../../apiCalls");

import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;


describe("App", () => {
  it('should display languages and emojis to choose from when page loads', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const language = getByText('Please select a language:');
    const emoji = getByText('Now select an Emoji!');

    expect(language).toBeInTheDocument();
    expect(emoji).toBeInTheDocument();
  })

  it('should navigate to the phrases page when a language and emoji are selected', () => {
    const { getByText, getByLabelText} = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    fireEvent.click(getByLabelText('spanish'))
    
    fireEvent.click(getByLabelText('smile'))

    fireEvent.click(getByText('NEXT:'));

    const happy = getByText("I'm so happy!")

    expect(happy).toBeInTheDocument();
  })

  it('should translate a phrase and save', async () => {
    let mockData = "This is a mocked return of an API call"
    getTranslation.mockResolvedValue(mockData)
    const { getByLabelText, getByText, debug } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    fireEvent.click(getByLabelText('spanish'))
    
    fireEvent.click(getByLabelText('smile'))

    fireEvent.click(getByText('NEXT:'));

    const happy = getByText("I'm so happy!")
    expect(happy).toBeInTheDocument();

    fireEvent.click(getByText("I'm so happy!"))
    const translation = await waitFor(() => getByText("This is a mocked return of an API call"))
    expect(translation).toBeInTheDocument();
      
    fireEvent.click(getByText('Save Translation'))
  
    const happy1 = getByLabelText("spanishI'm so happy!This is a mocked return of an API calles")
    expect(happy1).toBeInTheDocument();
  })

  it('should save and remove selected translations', async () => {
    let mockData2 = "This is a mocked return of an API call number2"
    getTranslation.mockResolvedValue(mockData2)
    const { getByLabelText, getByText, debug } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    fireEvent.click(getByLabelText('spanish'))
    
    fireEvent.click(getByLabelText('smile'))

    fireEvent.click(getByText('NEXT:'));

    const happy = getByText("I'm so happy!")
    expect(happy).toBeInTheDocument();

    fireEvent.click(getByText("I'm so happy!"))
    const translation = await waitFor(() => getByText("This is a mocked return of an API call number2"))
    expect(translation).toBeInTheDocument();
      
    fireEvent.click(getByText('Save Translation'))
    
    const happy1 = getByLabelText("spanishI'm so happy!This is a mocked return of an API call number2es")
    expect(happy1).toBeInTheDocument();

    fireEvent.click(happy1)
    expect(translation).not.toBeInTheDocument();
  })
})


