import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscomp from './components/Newscomp';


import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        < Navbar/>
        
        <Routes>
          

          <Route exact path="/" element={<Newscomp key="general" pageSize={8}  country="in" category="general"/>} />
          <Route exact path="business" element={<Newscomp key="business" pageSize={8}  country="in" category="business"/>} />
          <Route exact path="entertainment" element={<Newscomp key="entertainment" pageSize={8}  country="in" category="entertainment"/>} />
          <Route exact path="health" element={<Newscomp key="health" pageSize={8}  country="in" category="health"/>} />
          <Route exact path="science" element={<Newscomp key="science" pageSize={8}  country="in" category="science"/>} />
          <Route exact path="sports" element={<Newscomp key="sports" pageSize={8}  country="in" category="sports"/>} />
          <Route exact path="technology" element={<Newscomp key="technology" pageSize={8}  country="in" category="technology"/>} />
          
          

        </Routes>
        </Router>
      </div>

    )
  }
}

