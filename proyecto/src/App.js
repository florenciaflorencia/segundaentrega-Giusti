import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path= '/' element= {<ItemListContainer/>} />
        <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
        <Route path = '/detail/:productId' element= {<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App

