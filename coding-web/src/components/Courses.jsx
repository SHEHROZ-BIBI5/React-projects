import React from 'react';
import './Courses.css';  // یہاں `Courses.css` فائل کو import کریں
import { courseVideos } from './data/videoData';

function Courses() {
  return (
    <div>
      <div className='courses-container'>
        <h1 className='heading'>Courses</h1>
        <p>Explore our courses to help you learn more.</p>
        
        <div className="video-list">
          {courseVideos.map((video, index) => (
            <div key={index} className="video-item">
              <h3>{video.title}</h3>
              <video width="320" height="240" controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
