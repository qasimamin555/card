import React from 'react'
import Main from '../pages/main'
import About from '../pages/about'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


 const  Rasta =()=>{
      return(
          <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          
          </Router>
      )
  }
  export default Rasta