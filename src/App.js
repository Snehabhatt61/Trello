import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Labels from './components/container.js';
import Menu from './components/menu.js';
import Body1 from './components/body1.js';
import Card from './components/maincard.js';
import Mainmodal from './components/mainmodel';
import ModalExample from './components/modal1';
import axios from 'axios';
class App extends Component {

  constructor(props)/* Create method*/ {
    super(props);
    this.state = {
      people: [],
      change: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/mydata')
    .then(sneha => console.log(sneha))
  }
  render() {
    return (
      <div className='classic-body'>
        <div className='main-surface'>
          <Header />
          <Body1 />
          <Labels />
          <Mainmodal />
          <ModalExample />
        </div>
        <div>
          <form method='post' onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Enter name' id='myname' required></input>
            <input type='number' placeholder="Enter mobile no." id='mynum' required></input>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
