import React, { Component } from 'react';
import { FaRupeeSign } from 'react-icons/fa';

import { Row, Col } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';


class FilterItems extends Component {
    constructor(props) {
        super(props)
        this.state = { 
        }
    }

    render() {

    return (
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <ul className="items-filter">
            <li>
              <h4><FaFilter /> Filters</h4>
                <ul>
                  <li className="filter-option">
                    <h6>Filter Option</h6>
                  </li>
                  <li>
                  <div class="slidecontainer">
                    <p><i className="left"><FaRupeeSign />100:</i> <span id="demo"></span><i className="right"><FaRupeeSign />10000</i></p>
                    <input type="range" min="10" max="10000" class="slider" />
                  </div>
                  </li>
                  <li className="filter-button">
                    <a href="#">Cancel</a>
                    <a href="#">Apply</a>
                  </li>
                </ul>
            </li>
          </ul>
        </Col>
      </Row>
      
    );
  }
 }

 export default FilterItems;









