import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './partials/Footer.jsx'
import Header from './partials/Header.jsx'
import PortfolioCursor from './components/PortfolioCursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioCursor />
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
