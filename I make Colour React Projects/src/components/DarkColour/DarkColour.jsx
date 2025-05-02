import React from 'react'
import './DarkColour.css';

   function DarkColour() {
    const colours = [
      '#550c77',             
      '#101d7c',
      '#1ace0e',             
      '#b01919',
      '#232D3F',               
      '#ceff1a',
      '#f53b57',                
      '#0fbcf9',
      '#3A0519',               
      '#393E46',
      '#1E201E',               
      '#FF6500',
      '#021526',                
      '#522258',
      '#872341',                 
      '#435585',                 
      '#232D3F',
      '#18230F',
      '#FFD63A',
      '#102E50',
      '#328E6E',
      '#0118D8',
      '#C599B6',
      '#2C3930',
      '#123458',
      '#522546',
      '#604652',
      '#006A71',
      '#210F37',
      '#DDA853',
      ];

  return (
    <div className='dark-colour'>
      <h1> Dark Colours</h1>
      <div className='colour-container'>
        {colours.map((color, index) => (
          <div
            key={index}
            className='colour-box'
            style={{backgroundColor: color }}
          ></div>
        ))}

      </div>
    </div>
  )
}

export default DarkColour
