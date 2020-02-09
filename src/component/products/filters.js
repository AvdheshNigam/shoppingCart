import React, { Component } from 'react';

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
                  <input type="range" list="tickmarks" />
                    <datalist id="tickmarks">
                    <option value="0" label="0%"></option>
                    <option value="10"></option>
                    <option value="20"></option>
                    <option value="30"></option>
                    <option value="40"></option>
                    <option value="50" label="50%"></option>
                    <option value="60"></option>
                    <option value="70"></option>
                    <option value="80"></option>
                    <option value="90"></option>
                    <option value="100" label="100%"></option>
                    </datalist>
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









