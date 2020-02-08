import React, { Component } from 'react';
import axios from 'axios';

import {Container, Row, Col } from 'react-bootstrap';
import { FaRupeeSign } from 'react-icons/fa';



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
          <Col lg={9}>
            left
          </Col>
          
          <Col lg={3}>
            right
          </Col>
        </Row>
      </Container>
    );
  }
 }

 export default Cart;









