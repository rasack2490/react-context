import React, {useContext} from 'react';
import './BtnToggle.css';
import {ThemeContext} from '../../Context/ThemeContext';



function BtnToggle() {

  const {toggleTheme, theme} = useContext(ThemeContext);


  return (
    <button 
    onClick={toggleTheme} 
    className={theme ? "btn-toggle" : "btn-toggle dark-btn"}>
      {theme ? "Light" : "Dark"}
    </button>
  )
}

export default BtnToggle