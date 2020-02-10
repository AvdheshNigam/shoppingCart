import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
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
                    <h6>Sort Option</h6>
                  </li>
                  <li>
                    <label><input type="radio" name="get-value" onClick={()=>{this.props.sortItems('high')}} /> Price-- High Low </label>
                  </li>
                  <li>
                    <label><input type="radio" name="get-value" onClick={()=>{this.props.sortItems('low')}} /> Price-- Low High</label>
                  </li>
                  <li>
                    <label><input type="radio"  name="get-value" onClick={()=>{this.props.sortItems('discount')}} /> Discount </label>
                  </li>
                  <li className="sort-button"> 
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

 export default SortItems;









