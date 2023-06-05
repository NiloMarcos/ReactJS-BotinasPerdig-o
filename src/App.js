import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import {ToastContainer} from 'react-toastify';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes></Routes>
        <ToastContainer autoClose={3000}/>
      </>
    </BrowserRouter>
  );
}

export default App;
