import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
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
})


