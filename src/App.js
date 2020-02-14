import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Products from './component/products/';
import Cart from './component/cart/';

import './App.css';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
          
          <Route exact path='/' component={Products} />
          <Route exact path='/avproductssh' component={Products} />
          <Route exact path='/avcartsh' component={Cart} />
      </div>
    </BrowserRouter>
  );
}

export default App;
