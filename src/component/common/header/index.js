import React from 'react';
import { Container, Row, Col, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { FaStar, FaSearch, FaShoppingCart } from 'react-icons/fa';

export default  class Header extends React.Component {

	constructor(props) {
		super(props)
    this.state = {
      showContent: false,
    }
    this.clickProduct = this.clickProduct.bind(this);
    this.clickHome = this.clickHome.bind(this);
    this.showContent = this.showContent.bind(this);
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

  showContent(event) {
    event.preventDefault()
    this.setState({
      showContent: !this.state.showContent
    })
  }
	render() {
    const {showContent} = this.state
    return (
      <Container className="custom-navbar">
        <Row>
          <Col lg={12}>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home"><FaStar onClick={this.clickHome} /></Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
              {showContent === true ? <FormControl type="text" placeholder="Search" className="mr-sm-2 seach-bar" onChange={this.props.handleInput}/> : ""}
              <FaSearch color="#ffffff" size="16px" style={{'marginLeft':'20px'}} onClick= {this.showContent}/>
              <FaShoppingCart color="#ffffff" size="16px" style={{'marginLeft':'20px'}} onClick={this.clickCart}/>
              <p style={{color:'red',fontWeight: 900}}>{this.props.cart}</p>
            </Form>
          </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
 }