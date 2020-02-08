import React, { Component } from 'react';

import { FaRupeeSign } from 'react-icons/fa';




class ItemsCart extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
        }
    }


    render() {
    return (
        <div className="price-details">
          <h2>Price Details</h2>
          <p>Price (1 item ) <span>: <FaRupeeSign /> 900</span></p>
          <p>Price (1 item ) <span>: <FaRupeeSign /> 900</span></p>
          <p>Price (1 item ) <span>: <FaRupeeSign /> 900</span></p>
          <h3>Total Payable <span>:<FaRupeeSign /> 319</span></h3>
        </div>
    );
  }
 }

 export default ItemsCart;









