import React, { Component } from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';

import Data from './data';
import PriceDetails from './priceDetails';

import PageHeader from '../common/header/';
import PageFooter from '../common/footer/';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
          priceArray:[]
        }
    }


      removeItem = (data) => {
        let Values = [];
        Values = JSON.parse(window.localStorage.getItem('cartValue')) || []
        for( var i = Values.length-0; i--;){
        if ( Values[i].id === data) {
          Values.splice(i,1);
        }
      }
      window.localStorage.setItem('cartValue', JSON.stringify(Values))
      this.setState({
        priceArray:Values
      })
    }

      addQuantity = (data) => {
        let Values = [];
        Values = JSON.parse(window.localStorage.getItem('cartValue')) || []
        for( var i = Values.length-0; i--;){
        if ( Values[i].id === data) {
            Values[i].quantity += 1
        }
      }
      window.localStorage.setItem('cartValue', JSON.stringify(Values))
      this.setState({
        priceArray:Values
      })
    }

      removeQuantity = (data) => {
        let Values = [];
        Values = JSON.parse(window.localStorage.getItem('cartValue')) || []
        for( var i = Values.length-0; i--;){
        if(Values[i].id === data && Values[i].quantity > 1) {
          Values[i].quantity -= 1
        }
      }
      window.localStorage.setItem('cartValue', JSON.stringify(Values))
      this.setState({
        priceArray:Values
      })
    }
      
      componentDidMount(){
        let Values = [];
        Values = JSON.parse(window.localStorage.getItem('cartValue')) || []
        let data = [] 
        Values.map((item)=>{
          data.push(item)
        })
        this.setState({
          priceArray:data
        })
      }


    render() {
    return (
      <div>
        <PageHeader cart={this.state.priceArray.length} />
        <Container className="wrapper">
          <Row className="wrapper-body">
            <Col lg={9} md={8} sm={6} xs={12}>
              <Data cartArray={this.state.priceArray} removeQuantity={this.removeQuantity} addQuantity={this.addQuantity} removeItem={this.removeItem}/>
            </Col>
            
            {this.state.priceArray.length === 0 ? 
            
            <Col lg={12} md={12} sm={12} xs={12}>
              <p className="empty-data">Your Shopping Cart is empty.</p>
              <p className="empty-data-home">Continue shopping on tthe website <span onClick={()=>{window.location.href="/"}}>homepage</span>.</p>
            </Col>: 

            <Col lg={3} md={4} sm={6} xs={12}>
            <PriceDetails priceArray={this.state.priceArray} />
            </Col>}
            
          </Row> 
        </Container>
        <PageFooter />
      </div>
    );
  }
 }

 export default Cart;









