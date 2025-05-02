import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/secondPage/Home.jsx'
import LightColour from './components/LightColour/LightColour.jsx'
import DarkColour from './components/DarkColour/DarkColour.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'


const router = createBrowserRouter (
    createRoutesFromElements(

      <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="light" element={<LightColour />} />
      <Route path="dark" element={<DarkColour />} />
      <Route path="contact" element={<Contact />} />

 
    </Route>

     )
)
   
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
   </StrictMode>,
)


   