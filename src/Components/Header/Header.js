import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = ({ resetData }) => {
  return (
    <div className='header-container'>
      <NavLink to='/saved'>
        <h3 className='header-sub-text'>Saved</h3>
        </NavLink>
          <h1 className='title'>EMOJI-GLOT</h1>
        <NavLink to='/' onClick={resetData}>
          <h3 className='header-sub-text'>Home</h3>
        </NavLink>  
    </div>
  )
}

