import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { emojiData } from '../../appData/emojiData';
import { languageData } from '../../appData/languageData';
// import MutationObserver from "@sheerun/mutationobserver-shim";
// window.MutationObserver = MutationObserver;


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

})


