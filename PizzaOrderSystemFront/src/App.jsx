import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import OrderPizza from './components/OrderPizza.jsx';
import OrdersList from './components/OrdersList.jsx';
import NoPage from './components/NoPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Order" element={<OrderPizza/>} />
      <Route path="/OrdersList" element={<OrdersList/>} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}

export default App
