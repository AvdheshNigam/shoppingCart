import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { FaStar, FaSearch, FaShoppingCart } from 'react-icons/fa';

export default  class Header extends React.Component {

	constructor(props) {
		super(props)
    this.state = {
      active: false,
    }
    this.clickProduct = this.clickProduct.bind(this);
    this.clickHome = this.clickHome.bind(this);
    
  }

  clickProduct() {
    window.location.href = "/products"
  }

  clickHome() {
    window.location.href = "/"
  }

  clickCart() {
    window.location.href = "/cart"
  }

	render() {
    var Values = [];
    Values = JSON.parse(window.localStorage.getItem('cartValue')) || []
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home"><FaStar onClick={this.clickHome} /></Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className={this.setState.active  ? "mr-sm-2 seach-bar-show" : "mr-sm-2 seach-bar-hide"} />
            <FaSearch color="#ffffff" size="16px" style={{'marginLeft':'20px'}} onClick={ ()=> this.setState({active : !this.state.active}) }/>
            <FaShoppingCart color="#ffffff" size="16px" style={{'marginLeft':'20px'}} onClick={this.clickCart}/><p style={{color:'red',fontWeight: 900}}>{Values.length}</p> 
          </Form>
        </Navbar>
	  </div>
    );
  }
 }