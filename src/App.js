import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './App.css'
import {
  BrowserRouter as Router,
  
} from "react-router-dom";
import Heading from './Heading';
import Main from './Main';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
      </Router>
      <Heading/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
