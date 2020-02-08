import React, { Component } from 'react';
import axios from 'axios';

import {Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaRupeeSign } from 'react-icons/fa';

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
          <Col lg={3}>
            <FilterItems />
          </Col>
          <Col lg={9}>
            <SortItems />
            <Data />
          </Col>
        </Row>
      </Container>
    );
  }
 }

 export default Products;









