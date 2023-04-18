import React from 'react'
// import './App.css';
import Crud from './CrudApi/Crud';
import { Route, Routes } from 'react-router-dom';
import Read from './CrudApi/Read';
import Edit from './CrudApi/Edit';
 
function App() {
  return (
    <div className="container">
     <Routes>
      <Route exact path='/' element={<Read />}></Route>
      <Route exact path='crud' element={<Crud />}></Route>
      <Route exact path='edit' element={<Edit />}></Route>
     </Routes>
    </div>
  );
}

export default App;
