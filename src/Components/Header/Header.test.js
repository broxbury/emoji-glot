import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('should display number of saved translations', () => {
    const mockResetData = jest.fn();

    const { getByText } = render (
      <MemoryRouter>
        <Header resetData={mockResetData} numSaved={3} />
      </MemoryRouter>
    )

    const saved = getByText('Saved-3')
    expect(saved).toBeInTheDocument();
  })
})