import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import SortItems from './sort';
import FilterItems from './filters';
import Data from './data';

import PageHeader from '../common/header/';
import PageFooter from '../common/footer/';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
          items: [],
          errorMsg : '',
          cartItem:[],
          searchItems : ''
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

    addToCart = (item)=>{
      var newObj = {...item}
      var Values = [];
      Values = JSON.parse(window.localStorage.getItem('cartValue')) || [];
      let addFlag = false;
      for(let i in Values){
        if(Values[i].id == item.id){
          Values[i].quantity +=1;
          addFlag = true;
        }
      }
      if(!addFlag){
        newObj['quantity'] = 1 ;
        Values.push(newObj);
      }
      window.localStorage.setItem('cartValue', JSON.stringify(Values))
      this.setState({
        cartItem:Values
      })
    }

    sortItems = (data)=>{
      console.log("ahdkjshdkjhasdkjshkjd",data)
      if(data === 'low'){
        let low = this.state.items.sort((a,b)=>{
           return a.price - b.price
        })
        this.setState({
          items:low
        })
      }
      if(data === 'high'){
        let high = this.state.items.sort((a,b)=>{
           return  b.price - a.price
        })
        this.setState({
          items:high
        })
      }
      if(data === 'discount'){
        let discount = this.state.items.sort((a,b)=>{
           return  b.discount - a.discount
        })
        this.setState({
          items:discount
        })
      }
    }

    handleSearchBar = (item) => {
      console.log(item.target.value)
      this.setState({searchItems : item.target.value})
    }

    filterRange = (item) => {
      console.log(item.target.value)
    }

    render() {
      var Values = [];
       Values = JSON.parse(window.localStorage.getItem('cartValue')) || [];

      let filteredItems = this.state.items.filter((item) => {
        return item.name.toLowerCase().includes(this.state.searchItems.toLowerCase())
      })
      
    return (
      <div>
      <PageHeader cart={Values.length > 0 ? Values.length:this.state.cartItem.length} handleSearchBar={this.handleSearchBar} />
      <Container className="wrapper">
        <Row>
          <Col lg={3} md={6} sm={6} xs={6}>
            <FilterItems filterRange={this.filterRange}/>
          </Col>
          <Col lg={9} md={6} sm={6} xs={6}>
            <SortItems sortItems={this.sortItems} />
          </Col>
        </Row> 

        <Row>
          <Col md={12} sm={12} xs={12} lg={{ span: 9, offset: 3}}>
            <Data items={this.state.items} addToCart={this.addToCart} errorMsg={this.state.errorMsg} filteredItems={filteredItems}/>
          </Col>
        </Row>
      </Container>
      <PageFooter />
      </div>
    );
  }
 }

 export default Products;









