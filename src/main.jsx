import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router1 from './router/Router1.jsx'
import Carousel from './page/Carousel.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router1/>
  </StrictMode>,
)
