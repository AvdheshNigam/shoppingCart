import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default  class Footer extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <Container className="custom-navbar">
        <footer>
          <p>&copy;copyRight</p>
      </footer>
    </Container>
    );
  }
 }