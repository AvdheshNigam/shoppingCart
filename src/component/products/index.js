import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import SortItems from './sort';
import FilterItems from './filters';
import Data from './data';

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
        }
    }

    render() {
    return (
      <Container className="wrapper">
        <Row>
          <Col lg={3} md={6} sm={6} xs={6}>
            <FilterItems />
          </Col>
          <Col lg={9} md={6} sm={6} xs={6}>
            <SortItems />
          </Col>
        </Row>

        <Row>
          <Col md={12} sm={12} xs={12} lg={{ span: 9, offset: 3}}>
            <Data />
          </Col>
          
        </Row>
      </Container>
    );
  }
 }

 export default Products;









