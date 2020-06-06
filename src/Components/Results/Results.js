import React, { useState, useEffect } from "react";
import './Results.css';
import { getTranslation } from "../../apiCalls"

export const Results = ({ code, language, emoji, phrases }) => {
  
  
  useEffect(() => {
    // const fetchTranslation = async () => {
    //   const translation = await getTranslation();
    // }
    getTranslation('hello beautiful', 'es')
  }, [])

  return(
    <div className='results-container'>
      <div className='results-img-display'>
        <h2>{code}</h2>
        <h2>{language}</h2>
      </div>
      <div className='list-display'>
    <h2>{emoji}</h2>
    <h2>{phrases}</h2>

      </div>
    </div>
  )
}