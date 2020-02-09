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
          <Row key={index}>
            <Col lg="3">
              <Image src={ele.img_url} />
            </Col>
            <Col lg="9">
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
                  <FaMinusCircle className="round-btn" />
                  <input type="text" className="item-count"/>
                  <FaPlusCircle className="round-btn" />
                </li>
                <li>
                <Button className="remove-btn">REMOVE</Button>
                </li>
              </ul>
            </Col>
          </Row>
          )
      })}

    return (
        <div className="addItem">
        {cartHtml}
        </div>
    );
  }
 }

 export default ItemsCart;









