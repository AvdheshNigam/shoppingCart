import React, { Component } from 'react';

import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaRupeeSign, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';




class ItemsCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
          cartArray:[]
        }
    }

    removeItem = (data) => {
      let Values = [];
      Values = JSON.parse(window.localStorage.getItem('cartValue')) || []
      for( var i = Values.length-1; i--;){
      if ( Values[i].id === data) {
        Values.splice(i,1);
      }
    }
    window.localStorage.setItem('cartValue', JSON.stringify(Values))
  }

    addQuantity = (data) => {
      let Values = [];
      Values = JSON.parse(window.localStorage.getItem('cartValue')) || []
      for( var i = Values.length-1; i--;){
      if ( Values[i].id === data) {
          Values[i].quantity += 1
      }
    }
    window.localStorage.setItem('cartValue', JSON.stringify(Values))
  }

    removeQuantity = (data) => {
      let Values = [];
      Values = JSON.parse(window.localStorage.getItem('cartValue')) || []
      for( var i = Values.length-1; i--;){
      if(Values[i].id === data && Values[i].quantity > 1) {
        Values[i].quantity -= 1
      }
    }
    window.localStorage.setItem('cartValue', JSON.stringify(Values))
  }
    
    componentDidMount(){
      let Values = [];
      Values = JSON.parse(window.localStorage.getItem('cartValue')) || []
      let data = [] 
      Values.map((item)=>{
        data.push(item)
      })
      this.setState({
        cartArray:data
      })
    }


    render() {
      let cartHtml = []
      {this.state.cartArray.map((ele,index)=>{
        cartHtml.push(
        <div className="addItem" key={index}>
          <Row key={index}>
            <Col lg={3} md={3} sm={3} xs={5}>
              <Image src={ele.img_url} />
            </Col>
            <Col lg="9" md={9} sm={9} xs={7}>
              <ul className="addItem-content">
                <li>
                <h6>{ele.name}</h6>
                <h3>
                  <FaRupeeSign /> 
                  <span className="price">{ele.price}</span>
                  <strike>{ele.price+ele.discount}</strike>
                  <span className="off">off {ele.discount}%</span>
                </h3>
                </li>
                <li>
                  <FaMinusCircle className="round-btn" onClick={()=>this.removeQuantity(ele.id)}/>
                  <input type="number" className="item-count" value={ele.quantity}/>
                  <FaPlusCircle className="round-btn" onClick={()=>this.addQuantity(ele.id)}/>
                </li>
                <li>
                <Button className="remove-btn" onClick={()=>this.removeItem(ele.id)} >REMOVE</Button>
                </li>
              </ul>
            </Col>
          </Row>
          </div>
          )
      })}

    return (
        <div>
        {cartHtml}
        </div>
    );
  }
 }

 export default ItemsCart;









