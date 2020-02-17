import React, { Component } from 'react';
import { } from 'react-bootstrap';
import axios from 'axios';

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
          items: []
        }
    }
    componentDidMount() {
      axios.get('https://api.myjson.com/bins/qzuzi')
      .then(response => {
        
        this.setState({
          items: response.data
        })
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
      
    }

    onSelectItem = (item) => {
      console.log(item.target.value)
      this.setState({searchItems : item.target.value})
    } 
    
    render() {
      const { items, filteredItems } = this.state

      
      
    return (
      <div className="wrapper">
          <div className="control">
            <input type="text" className="input" onChange={this.props.onSelectItem} />
          </div>
          {
          items.length ?
          items.map(item => <div key={item.id} className="list is-hoverable">
            <a className="list-item">{item.name}</a>
          </div>) :
          null
          }
        </div>
    );
  }
 }

 export default Test;









