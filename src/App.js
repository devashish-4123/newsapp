import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscomp from './components/Newscomp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Newscomp pageSize={8}  country="in" category="general"/>
      </div>
    )
  }
}

