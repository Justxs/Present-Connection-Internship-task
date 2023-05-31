import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import { Container } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Container align="center" sx={{my:2, minHeight:'100vh'}}>
      <App />
    </Container>
    
    <Footer />

    </BrowserRouter>
  </React.StrictMode>,
)
