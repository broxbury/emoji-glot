import React, { useEffect, useState } from 'react';
import './Translation.css';
import { getTranslation } from '../../apiCalls';

export const Translation = ( { translation }) => {

  return(
    <>
      {!translation && <h2>Loading...</h2>}
      {translation && <h2>{translation}</h2> }
    </>
  )
}