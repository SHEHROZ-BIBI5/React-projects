import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import StartPage from './components/StartPage';  
function App() {
  const [started, setStarted] = useState(false);  

  return (
    <>
      {started ? (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ) : (
        <StartPage onStart={() => setStarted(true)} />
      )}
    </>
  );
}

export default App;
