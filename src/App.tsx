import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {InitPermission} from './permission-init';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitPermission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
