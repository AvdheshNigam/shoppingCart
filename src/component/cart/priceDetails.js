import React, { Component } from 'react';
import { FaRupeeSign } from 'react-icons/fa';

class ItemsCart extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
      let total = 0;
      let totalDiscount = 0;
      let pHtml = []
      {this.props.priceArray.map((item,index)=>{
        total = total+item.price
        totalDiscount = totalDiscount + item.discount
      pHtml.push(<p key={index}>Price ({item.name +' X '+ item.quantity}) <span>: <FaRupeeSign /> {item.price * item.quantity} </span></p>)
      })}
    return (
        <div className="price-details">
          <h2>Price Details</h2>
          {pHtml}
          <p>Discount <span>: <FaRupeeSign /> {totalDiscount}</span></p>
          <h3>Total Payable <span>:<FaRupeeSign /> {total - totalDiscount}</span></h3>
        </div>
    );
  }
 }

 export default ItemsCart;









