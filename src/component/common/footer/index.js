import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

export default  class Footer extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <footer>
        <p>&copy;copyRight</p>
	  </footer>
    );
  }
 }