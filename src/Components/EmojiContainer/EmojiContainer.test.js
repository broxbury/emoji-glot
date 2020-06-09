import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import { EmojiContainer } from './EmojiContainer';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { emojiData } from '../../appData/emojiData';


describe('EmojiContainer', () => {
  it('should display all the emojis', () => {
    const { getByLabelText } = render (
      <MemoryRouter>
        <EmojiContainer />
      </MemoryRouter>
    )
    const smileEmoji = getByLabelText('smile')
    expect(smileEmoji).toBeInTheDocument();
  })

  it('should update the current emoji info', () => {
    const mockUpdateFn = jest.fn();
    const { getByLabelText } = render (
      <MemoryRouter>
        <EmojiContainer updateCurrentEmojiInfo={mockUpdateFn} />
      </MemoryRouter>
    )
    fireEvent.click(getByLabelText('smile'))
    expect(mockUpdateFn).toHaveBeenCalledWith(emojiData[3].emotion, emojiData[3].phrases)
  })
})