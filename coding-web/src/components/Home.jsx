import React from 'react';
import { homeVideos } from './data/videoData';
import './Home.css';

function Home() {
  return (
    <div className="home">   
      <h1 className="heading">Welcome For Learning</h1>
 
       <div>
        {homeVideos.map((video, index) => (
          <video
            key={index}
            src={video}
            controls
            width="300"
            style={{ margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
