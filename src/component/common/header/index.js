import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { FaStar, FaSearch, FaShoppingCart } from 'react-icons/fa';

export default  class Header extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home"><FaStar /></Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <FaSearch color="#ffffff" size="16px" style={{'marginLeft':'20px'}}/>
            <FaShoppingCart color="#ffffff" size="16px" style={{'marginLeft':'20px'}}/>
          </Form>
        </Navbar>
	  </div>
    );
  }
 }