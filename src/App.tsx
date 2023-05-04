import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {InitPermission} from '@/permission-init';
import {CheckPermission} from '@/permission-init/check-permission';
import {PhemexAdmin} from '@/permission-init/phemex-admin';
import {TechScience} from '@/permission-init/tech-science';
import {Tools} from '@/permission-init/tools';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitPermission />}>
          <Route path="/admin" element={<PhemexAdmin />} />
          <Route path="/tech-science" element={<TechScience />} />
          <Route path="/check-permission" element={<CheckPermission />} />
          <Route path="/tools" element={<Tools />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
