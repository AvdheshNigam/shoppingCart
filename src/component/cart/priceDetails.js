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
      let dHtml = [...pHtml]
      
      console.log(dHtml)
      {this.props.priceArray.map((item,index)=>{
        total = total+(item.price * item.quantity)
        totalDiscount = totalDiscount + item.discount - item.discount
          pHtml.push(<div key={index}>
                    <p key={index}>Price ({item.quantity +' '+ item.name}) <span>: <FaRupeeSign /> {(item.price + item.discount) * item.quantity} </span></p>
                    <p>Discount ({item.discount + ' X ' + item.quantity})<span>: <FaRupeeSign /> {(item.price+item.discount - item.price) * item.quantity}</span></p>
                    
                  </div>
                  )
                  
          })}
    return (
        <div className="price-details">
          <h2>Price Details</h2>
          {pHtml}
          {/* <p>Discount ({totalDiscount + ' X ' + item.quantity})<span>: <FaRupeeSign /> {item.quantity*(item.discount+item.discount)}</span></p> */}
          {/* <p>Discount <span>: <FaRupeeSign /> {totalDiscount}</span></p>*/}
          <h3>Total Payable <span>:<FaRupeeSign /> {total - totalDiscount}</span></h3>
        </div>
    );
  }
 }

 export default ItemsCart;









