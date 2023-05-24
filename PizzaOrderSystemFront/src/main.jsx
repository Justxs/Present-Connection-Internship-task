import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import { Box, Container } from '@mui/material';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Box>
        <Container align="center" sx={{my:10}}>
          <App />
        </Container>
      </Box>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
