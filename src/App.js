import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Products from './component/products/';
import Cart from './component/cart/';
import Test from './component/test/';

import './App.css';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
          
          <Route exact path='/' component={Products} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/test' component={Test} />
      </div>
    </BrowserRouter>
  );
}

export default App;
