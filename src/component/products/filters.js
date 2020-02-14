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
            <li style={{'listStyle':'none'}}>
              <h4><FaFilter /> Filters</h4>
                <ul>
                  <li className="filter-option">
                    <h6>Filter Option</h6>
                  </li>
                  <li>
                  <div className="slidecontainer">
                    <p><i className="left"><FaRupeeSign />{this.props.min}</i> <span id="demo"></span><i className="right"><FaRupeeSign />{this.props.max}</i></p>
                    <input type="range" min={this.props.min} max={this.props.max} className="slider" value={this.state.startLow} onClick={this.props.filterRange}/>
                  </div>
                  </li>
                  <li className="filter-button">
                    <a href="#">Cancel</a>
                    <a href="#" >Apply</a>
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









