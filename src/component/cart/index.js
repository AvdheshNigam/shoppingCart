import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import Data from './data';
import PriceDetails from './priceDetails';

import PageHeader from '../common/header/';
import PageFooter from '../common/footer/';

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
        }
    }


    render() {
    return (
      <div>
        <PageHeader />
        <Container className="wrapper">
          <Row className="wrapper-body">
            <Col lg={9} md={8} sm={6} xs={12}>
              <Data />
            </Col>
            
            <Col lg={3} md={4} sm={6} xs={12}>
              <PriceDetails />
            </Col>
          </Row>
        </Container>
        <PageFooter />
      </div>
    );
  }
 }

 export default Cart;









