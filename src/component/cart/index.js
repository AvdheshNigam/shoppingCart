import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import Data from './data';
import PriceDetails from './priceDetails';

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
        }
    }


    render() {
    return (
      <Container className="wrapper">
        <Row className="wrapper-body">
          <Col lg={9} md={9} sm={8} xs={12}>
            <Data />
          </Col>
          
          <Col lg={3} md={3} sm={4} xs={12}>
            <PriceDetails />
          </Col>
        </Row>
      </Container>
    );
  }
 }

 export default Cart;









