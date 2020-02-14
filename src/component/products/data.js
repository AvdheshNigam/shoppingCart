import React, { Component } from 'react';
import {Row, Col, Image, Button } from 'react-bootstrap';
import { FaRupeeSign } from 'react-icons/fa';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    

    render() {
      const {items, errorMsg, filteredItems } = this.props

    return (
        <Row className="left-border">
        {
          items.length ? 
          filteredItems.length ? 
            filteredItems.map(item => <Col lg={3} md={3} sm={6} xs={6} className="colFive" key={item.id} name={item.name} price={item.price}>
            <div className="item">
              <Image src={item.img_url} alt={ item.name } />
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
          </Col> ) : 
          
          <Col lg={9} md={9} sm={9} xs={9}>
            <p className="no-result-found">Not Found</p> 
          </Col> :
          
          <Col lg={9} md={9} sm={9} xs={9}>
            <p className="loading">Loading...</p> 
          </Col>

          }
          { errorMsg ? <Col lg={12}><p className="data-not-fetch">{ errorMsg }</p></Col> : null }
      </Row>
    );
  }
 }

 export default Products;









