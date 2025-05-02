import React from 'react';
import './LightColour.css';

function LightColour() {
  const colours = [

       '#c77fd9', '#727de4', '#8ff58a', '#f18a8a', '#778899',
      '#f9ff94', '#ffa6b6', '#93e9ff', '#ab6b7f', '#999fa9',
      '#b5b5b5', '#ffb347', '#5d6c82', '#c391c9', '#d07993',
      '#a5b5e0', '#778899', '#9da67e', '#ffed91', '#7faed1',
      '#84c7b2', '#a3adf8', '#e4c1d7', '#829488', '#7ba5cc',
      '#b07ba6', '#bca5b2', '#7fd4d9', '#a285bc', '#f8d59e'
    ];
    
 
  return (
    <div className='light-colour'>
      <h1>Lighter Colours</h1>
      <div className="colour-container">
        {colours.map((color, index) => (
          <div
            key={index}
            className='colour-box'
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default LightColour;
