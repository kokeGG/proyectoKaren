import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import { Header, Footer } from './components/common';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
