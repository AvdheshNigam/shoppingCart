import React, { Component } from 'react';
import {Row, Col, Image, Button } from 'react-bootstrap';
import { FaRupeeSign } from 'react-icons/fa';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    

    render() {
      const {items, errorMsg } = this.props
    return (
        <Row className="left-border">
        {
          items.length ?
          items.map(item => <Col lg={3} md={3} sm={6} xs={6} key={item.id}>
            <div className="item">
              <Image src={item.img_url} alt="Loading..." />
              <div className="item-decription">
                <h1>{ item.name }</h1>
                <h3>
                  <span className="price"><FaRupeeSign /> {item.price}</span>
                  <strike className="mrp">{item.price + item.discount}</strike>
                  <span className="off">{ item.discount }% Off</span>
                </h3>
                <Button onClick={()=>this.props.addToCart(item)}>Add to Cart</Button>
              </div>
            </div>
          </Col> ) : null 
          }
          { errorMsg ? <Col lg={12}><p className="data-not-fetch">{ errorMsg }</p></Col> : null }
      </Row>
    );
  }
 }

 export default Products;









