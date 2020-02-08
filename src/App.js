import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Container, Col, Row } from 'react-bootstrap';
import { FaAccessibleIcon } from 'react-icons/fa';

import PageHeader from './component/common/header/';
import PageFooter from './component/common/footer/';

import Products from './component/products/';
import Cart from './component/cart/';

import './App.css';

function App() {
  return (
    
    <BrowserRouter>
        <div className="App">
            <PageHeader />
            <Route exact path='/' component={Products} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/cart' component={Cart} />
            <PageFooter />
        </div>
      </BrowserRouter>
  );
}

export default App;
