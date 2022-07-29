import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Business from './views/business'
import About from './views/about'
import Student from './views/student'
import Home from './views/home'
import FAQ from './views/f-a-q'
import Institution from './views/institution'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Business} path="/business" />
        <Route exact component={About} path="/about" />
        <Route exact component={Student} path="/student" />
        <Route exact component={Home} path="/" />
        <Route exact component={FAQ} path="/f-a-q" />
        <Route exact component={Institution} path="/institution" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
