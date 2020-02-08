import React, { Component } from 'react';
import axios from 'axios';

import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaRupeeSign } from 'react-icons/fa';


class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
          items: [],
          errorMsg : ''
        }
    }

    componentDidMount() {
      axios.get('https://api.myjson.com/bins/qzuzi')
      .then(response => {
        console.log(response)
        this.setState({items:response.data})
      })
      .catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retreving data' })
      })
    
    }

    render() {
      const {items, errorMsg} = this.state
    return (
      <Row className="left-border">
        {
          items.length ?
          items.map(item => <Col lg={3} md={3} sm={6} xs={6}>
            <div className="item" key={item.id}>
              <Image src={item.img_url} alt="Loading..." />
              <div className="item-decription">
                <h1>{ item.name }</h1>
                <h3>
                  <span className="price"><FaRupeeSign /> {item.price}</span>
                  <strike className="mrp">{item.price + item.discount}</strike>
                  <span className="off">{ item.discount }% Off</span>
                </h3>
                <Button>Add to Cart</Button>
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









