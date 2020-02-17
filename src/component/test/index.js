import React, { Component } from 'react';
import { } from 'react-bootstrap';
import axios from 'axios';

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
          items: [],
          searchItems : ''
        }
    }
    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos/')
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
      const { items } = this.state

      let filteredItems = this.state.items.filter((item) => {
        return item.title.toLowerCase().includes(this.state.searchItems.toLowerCase())
      })

      console.log('ddddd', filteredItems)

    return (
      <div className="wrapper">
          <div className="control">
            <input type="text" className="input" onChange={this.onSelectItem} />
          </div>
          {
          items.length ?
          filteredItems.map(item => <div key={item.id} className="list is-hoverable">
            <a href={item.name} className="list-item">{item.title}</a>
          </div>) :
          null
          }
        </div>
    );
  }
 }

 export default Test;









