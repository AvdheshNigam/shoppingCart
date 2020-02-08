import React, { Component } from 'react';
import axios from 'axios';

import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaSort } from 'react-icons/fa';


class SortItems extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {

    return (
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <ul className="items-sort">
            <li>
              <h4><FaSort /> Sort By</h4>
                <ul>
                  <li className="sort-option">
                    <h6>Sort Option</h6 >
                  </li>
                  <li>
                    <label><input type="radio" /> Price-- High Low </label>
                  </li>
                  <li>
                    <label><input type="radio" /> Price-- Low High</label>
                  </li>
                  <li>
                    <label><input type="radio" /> Discount </label>
                  </li>
                  <li className="sort-button">
                    <a>Cancel</a>
                    <a>Apply</a>
                  </li>
                </ul>
            </li>
          </ul>
        </Col>
      </Row>
      
    );
  }
 }

 export default SortItems;









