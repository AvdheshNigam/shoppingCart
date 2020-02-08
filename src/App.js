import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FaAccessibleIcon } from 'react-icons/fa';

import PageHeader from './component/common/header/';
import PageFooter from './component/common/footer/';

import Products from './component/products/';
import SortItems from './component/products/sort';
import FilterItems from './component/products/filters';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col lg={12}>
            <PageHeader />
          </Col>
          <Col lg={3}>
          <FilterItems />
          </Col>
          
          <Col lg={9}>
            <SortItems />
            <Products />
          </Col>
          <Col lg={12}>
            <PageFooter />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
