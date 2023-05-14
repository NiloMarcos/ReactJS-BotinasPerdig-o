import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/routes';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes></Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
