import React from 'react';
import './StartPage.css';

function StartPage({ onStart }) {
  return (
    <div className='first-page'>
      {/* 4 colored corner boxes */}
      <div className="corner-box top-left"></div>
      <div className="corner-box top-right"></div>
      <div className="corner-box bottom-left"></div>
      <div className="corner-box bottom-right"></div>

 

      {/* Main Content */}
      <h1 className='heading'>Welcome To My Colour Web</h1>
      <button className='start-button' onClick={onStart}>
        Get Started To See Colour Web
      </button>
    </div>
  );
}

export default StartPage;
