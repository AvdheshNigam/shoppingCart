import React, { Component } from 'react';

import { FaRupeeSign } from 'react-icons/fa';




class ItemsCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
          priceArray:[]
        }
    }

    componentDidMount(){
      let Values = [];
      Values = JSON.parse(window.localStorage.getItem('cartValue')) || []
      let data = [] 
      Values.map((item)=>{
        data.push({name:item.name,price:item.price})
      })
      this.setState({
        priceArray:data
      })
    }

    render() {
      let total = 0;
      let discount = 0;
      let pHtml = []
      {this.state.priceArray.map((item,index)=>{
        total = total+item.price
        discount = item.price - discount
        pHtml.push(<p key={index}>Price ({item.name}) <span>: <FaRupeeSign /> {item.price}</span></p>)
      })}
    return (
        <div className="price-details">
          <h2>Price Details</h2>
          {pHtml}
          <p>Discount <span>: <FaRupeeSign /> {discount}</span></p>
          <h3>Total Payable <span>:<FaRupeeSign /> {total}</span></h3>
        </div>
    );
  }
 }

 export default ItemsCart;









