import React, { useState, useEffect } from "react";
import './Results.css';
import { getTranslation } from "../../apiCalls"

export const Results = () => {
  const [phrase, setPhrase] = useState('')
  
  useEffect(() => {
    // const fetchTranslation = async () => {
    //   const translation = await getTranslation();
    // }
    getTranslation('hello beautiful', 'es')
  }, [])

  return(
    <div className='results-container'>
      <div className='results-img-display'>
        
      </div>
      <div className='list-display'>

      </div>
    </div>
  )
}