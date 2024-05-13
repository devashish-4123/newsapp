import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscomp from './components/Newscomp';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Newscomp pageSize={10}/>
      </div>
    )
  }
}

